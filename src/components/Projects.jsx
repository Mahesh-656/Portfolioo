import { useState } from "react";
import { projects } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div className="glass max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">{project.type}</p>
            <h3 id="project-title" className="mt-2 text-2xl font-semibold">{project.name}</h3>
          </div>
          <button onClick={onClose} aria-label="Close project details" className="focus-ring rounded-xl border border-white/10 px-3 py-2 text-white/60 hover:text-white">×</button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase tracking-widest text-white/35">Business problem</p><p className="mt-2 text-sm leading-6 text-white/60">{project.problem}</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-widest text-white/35">Technical solution</p><p className="mt-2 text-sm leading-6 text-white/60">{project.solution}</p></div>
        </div>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/35">Architecture</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.architecture.map((x, i) => <span key={x} className="rounded-xl border border-white/10 px-3 py-2 font-mono text-xs text-white/60">{i ? "→ " : ""}{x}</span>)}
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/35">Engineering highlights</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">{project.highlights.map(x => <li key={x} className="text-sm text-white/60">• {x}</li>)}</ul>
        </div>
        <p className="mt-8 rounded-2xl border border-[var(--accent)]/15 bg-[var(--accent)]/[.04] p-4 text-xs leading-5 text-white/45">{project.note}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(x => <span key={x} className="rounded-full bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/55">{x}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-28">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-[var(--accent)]">03 / Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Where the engineering shows up.</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">Business problem → technical solution → architecture → engineering decisions. Click a project for the deeper case-study view.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.id} className={`glass group flex min-h-[430px] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--accent)]">{project.type}</span>
                <span className="text-white/20">↗</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-4 text-sm leading-6 text-white/50">{project.problem}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.stack.slice(0, 5).map(x => <span key={x} className="rounded-lg border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-white/45">{x}</span>)}</div>
              <div className="mt-auto pt-8">
                <button onClick={() => setSelected(project)} className="focus-ring rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]/35 hover:bg-white/5">Explore case study →</button>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}