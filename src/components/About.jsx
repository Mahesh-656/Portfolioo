import ScrollReveal from "./ScrollReveal";

const cards = [
  ["Backend Engineering", "Java + Spring Boot + REST APIs", "01"],
  ["Database", "PostgreSQL + SQL + JPA/Hibernate", "02"],
  ["Security", "Spring Security + JWT + RBAC", "03"],
  ["AI", "Spring AI + RAG + LLM integration", "04"],
  ["DevOps", "Git + GitHub + Docker + Compose", "05"],
  ["Engineering", "Validation + exceptions + clean architecture + testing", "06"]
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-28">
      <ScrollReveal>
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">01 / About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Less decoration. More evidence.</h2>
            <p className="mt-5 max-w-md leading-7 text-[var(--muted)]">
              I focus on the engineering behind the interface: APIs that make sense, data models that stay maintainable, security boundaries that are explicit, and AI integrations that solve a real workflow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(([title, body, no], i) => (
              <article key={title} className={`glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 ${i === 0 ? "sm:row-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{title}</h3><span className="font-mono text-[10px] text-white/25">{no}</span>
                </div>
                <p className="mt-8 max-w-xs text-sm leading-6 text-white/55">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}