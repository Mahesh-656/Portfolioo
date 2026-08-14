import ArchitectureVisual from "./ArchitectureVisual";
import { profile } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:pb-28">
        <ScrollReveal>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[11px] text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            JAVA BACKEND • SPRING BOOT • GENAI
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="focus-ring rounded-xl bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:brightness-105">View My Work</a>
            <a href={profile.resume} className="focus-ring rounded-xl border border-white/10 bg-white/[.03] px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20">Download Resume</a>
          </div>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
            {[["01", "Backend-first"], ["02", "API-minded"], ["03", "Security-aware"], ["04", "AI-curious"]].map(([n, label]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/[.025] px-3 py-3">
                <div className="font-mono text-[10px] text-[var(--accent)]">{n}</div>
                <div className="mt-1 text-xs font-medium text-white/65">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Spring Security", "Docker", "Spring AI"].map(x => (
              <span key={x} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/50">{x}</span>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal className="lg:pt-8">
          <ArchitectureVisual />
        </ScrollReveal>
      </div>
    </section>
  );
}