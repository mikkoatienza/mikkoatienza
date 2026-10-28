import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikko Atienza | AI Engineer",
  description:
    "Mikko Atienza, AI Engineer. I build the system around coding agents: the harness, the context, the gates and the audit trail.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#fafaf7] text-[#111827]">{children}</body>
    </html>
  );
}
