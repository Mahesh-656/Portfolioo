import { journey } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-28 border-y border-white/[.06] bg-white/[.015] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">04 / Journey</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Junior in career stage. Serious in engineering mindset.</h2>
              <p className="mt-5 max-w-md leading-7 text-white/50">Professional experience is shown only when it is real. This section is designed to grow with verified projects, internships, certifications and open-source work.</p>
            </div>
            <div className="grid gap-3">
              {journey.map(([title, body], i) => (
                <div key={title} className="glass flex items-center gap-5 rounded-2xl p-5">
                  <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                  <div><h3 className="font-medium">{title}</h3><p className="mt-1 text-sm text-white/45">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}