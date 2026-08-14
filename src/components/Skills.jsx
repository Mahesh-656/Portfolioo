import { skills } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 border-y border-white/[.06] bg-white/[.015] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">02 / Skills</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Engineering toolkit</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45">No fake percentage bars. Skills are grouped by working depth and engineering domain.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {skills.map(s => (
              <article key={s.group} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{s.group}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{s.tone}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map(item => <span key={item} className="rounded-lg border border-white/10 bg-black/10 px-2.5 py-1.5 font-mono text-[11px] text-white/55">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}