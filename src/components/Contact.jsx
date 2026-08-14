import { profile } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-28">
      <ScrollReveal>
        <div className="glass overflow-hidden rounded-3xl p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">05 / Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Have a backend problem worth solving?</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/50">For hiring, technical collaboration or project discussions, use the verified contact channels configured in the portfolio data file.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <a className="focus-ring rounded-xl bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-black" href={`mailto:${profile.email}`}>Email me</a>
              <a className="focus-ring rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="focus-ring rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}