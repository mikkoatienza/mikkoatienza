const GITHUB_URL = "https://github.com/mikkoatienza";
const LINKEDIN_URL = "https://www.linkedin.com/in/mikko-atienza-54a9122ba";
const EMAIL = "christdonmikko.atienza@gmail.com";

const focus = [
  "harness-first improvement",
  "quality gates from pull request to installed product",
  "context engineering for agents on legacy codebases",
  "evidence-based audits of agent runs, with fixes contributed upstream",
];

const shipped = [
  {
    name: "Team OS AI",
    description:
      "Product-feedback engine: customer transcripts into living theme boards that rebuild nightly.",
  },
  {
    name: "Ciel",
    description: "My personal agentic chief of staff.",
  },
  {
    name: "Open-source frameworks",
    description:
      "agent-harness-starter, agent-run-auditor and feedback-theme-engine-demo.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[44rem] px-5 md:px-10">
      <header className="py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">
          AI Engineer
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          Mikko Atienza
        </h1>
        <p className="mt-3 text-base text-[#4b5563]">
          Parañaque City, Philippines (remote)
        </p>
        <p className="mt-6 text-lg leading-8 text-[#4b5563]">
          I build the system around coding agents: the harness, the context,
          the gates and the audit trail that turn agent output into merged,
          working code.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#0f766e] px-5 font-medium text-white hover:bg-[#0c5f59]"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#e5e7eb] bg-white px-5 font-medium text-[#111827] hover:border-[#0f766e]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#e5e7eb] bg-white px-5 font-medium text-[#111827] hover:border-[#0f766e]"
          >
            Email
          </a>
        </div>
      </header>

      <section className="border-t border-[#e5e7eb] py-10">
        <h2 className="text-xl font-semibold">What I do now</h2>
        <p className="mt-4 leading-7 text-[#4b5563]">
          I help build and run an agentic software development factory.
          Autonomous coding agents take tickets from intake through specs,
          agent execution, pre-merge testing and human review to release
          handoff.
        </p>
        <p className="mt-4 leading-7 text-[#4b5563]">My focus:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-[#4b5563]">
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[#e5e7eb] py-10">
        <h2 className="text-xl font-semibold">What I&apos;ve shipped</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {shipped.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-[#e5e7eb] bg-white p-5"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-2 leading-7 text-[#4b5563]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e5e7eb] py-10">
        <h2 className="text-xl font-semibold">Why Fredrin</h2>
        <p className="mt-4 leading-7 text-[#4b5563]">
          Making a repo agent-ready, so agents stop guessing, is the work I
          already do every day. Doing it inside customer teams and turning what
          I learn into product is the job I want next.
        </p>
      </section>

      <footer className="border-t border-[#e5e7eb] py-10 text-sm text-[#4b5563]">
        <p>
          Contact:{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-[#0f766e] hover:underline"
          >
            {EMAIL}
          </a>{" "}
          ·{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0f766e] hover:underline"
          >
            github.com/mikkoatienza
          </a>{" "}
          ·{" "}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0f766e] hover:underline"
          >
            linkedin.com/in/mikko-atienza-54a9122ba
          </a>
        </p>
      </footer>
    </main>
  );
}
