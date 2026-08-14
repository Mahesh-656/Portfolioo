import { projects, profile } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

const repositories = [
  {
    name: "Hospital Management System",
    tech: "Java · JDBC · MySQL",
    status: "Featured",
  },
  {
    name: "Jobify",
    tech: "Java · Spring Boot · React · MongoDB · JWT",
    status: "Featured",
  },
  {
    name: "Movie Management System",
    tech: "Java · Spring Boot · MongoDB · JWT",
    status: "Featured",
  },
];

export default function GitHub() {
  return (
    <section
      id="github"
      className="scroll-mt-28 border-y border-white/[.06] bg-white/[.015] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">
                05 / Verification
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Show the work. Let GitHub verify it.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-white/50">
                Repository names and links below are intentionally configured as
                editable data. No fake contribution counts, stars or activity
                graphs are shown.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-7 inline-flex rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]/35 hover:bg-white/5"
              >
                Open GitHub ↗
              </a>
            </div>
            <div className="grid gap-3">
              {repositories.map((repo, index) => (
                <a
                  key={repo.name}
                  href={projects[index]?.github || profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group flex items-center justify-between gap-5 rounded-2xl p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[var(--accent)]">
                        0{index + 1}
                      </span>
                      <h3 className="truncate font-medium">{repo.name}</h3>
                    </div>
                    <p className="mt-2 truncate text-sm text-white/40">
                      {repo.tech}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/40 group-hover:text-white/65">
                    {repo.status} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
