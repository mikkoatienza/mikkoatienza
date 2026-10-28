---
name: verify-app
description: Launch the About Me site, check it is healthy, drive its single page, record evidence, and stop only what was started. Use to confirm a change works in the running app, not just in the build.
---

# verify-app

The site is one Next.js (App Router) page at `/`, built as a static prerender. There is no database, no API and no runtime network call except the three outbound contact links.

## Launch

Start from a clean state: a production build, then the server on port 3000.

1. `npm install` if `node_modules/` is missing.
2. `npm run build` and require exit 0.
3. Start the server in the background, logging to `./.fredrin/tmp/verify-app.log`:
   `./node_modules/.bin/next start -p 3000 > ./.fredrin/tmp/verify-app.log 2>&1 &` and record its PID. Start `next` directly, not through `npm`, so the recorded PID is the server itself.
4. Ready means usable: poll `http://localhost:3000/` until it returns HTTP 200 with the `<h1>` "Mikko Atienza", up to 30 seconds. If it times out, go to Cleanup and report the log tail.

Use `npm run dev` only when a human asks for hot reload. It is not part of this check.

## Doctor

Read-only health check. Run each and record the result:

- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` returns `200`.
- `curl -s http://localhost:3000/ | grep -c '<h1'` returns `1`.
- `grep -i 'error' ./.fredrin/tmp/verify-app.log` is empty.

Doctor never edits files or restarts the server.

## Drive

The real routes and selectors of this repo:

- Route: `/` only. `/_not-found` is the 404 page and is not a feature.
- `header h1`: "Mikko Atienza".
- `header a[href="https://github.com/mikkoatienza"]`: GitHub, `target="_blank"`, `rel="noopener noreferrer"`.
- `header a[href="https://www.linkedin.com/in/mikko-atienza-54a9122ba"]`: LinkedIn, same attributes.
- `header a[href^="mailto:christdonmikko.atienza@gmail.com"]`: Email.
- `section` x3 under `main`: "What I do now", "What I've shipped" (three `article` cards), "Why Fredrin".
- `footer a`: the three contact links.

Check each selector with `curl` and `grep`. If a browser is installed, take screenshots at 390px and 1280px wide and compare them with the approved mockups. Without a browser, mark the layout comparison as not run.

## Evidence

Write one line per check: the command, its real exit or result, and what it showed. Include the Doctor results and the Drive selector hits. Never write a result you did not observe. Save the evidence in the ticket's finish summary or a file under `./.fredrin/tmp/`.

## Cleanup

Stop only the server this run started, using the PID recorded in Launch. Do not stop other processes on port 3000. Confirm the port is free with `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/`, which should print `000`. Leave `.next/` and `node_modules/` in place; both are git-ignored.

## Feature map

- Single screen: `app/page.tsx`. It holds the hero (eyebrow, H1, location, lede, GitHub, LinkedIn and Email buttons), the three sections, and the footer. Change the copy and links here.
- Layout and metadata: `app/layout.tsx`, `app/globals.css`.
- Links: the `GITHUB_URL`, `LINKEDIN_URL` and `EMAIL` constants at the top of `app/page.tsx`.
