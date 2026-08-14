import { useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Journey", "#journey"], ["GitHub", "#github"], ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
        <nav className="glass rounded-2xl px-4 py-3 shadow-2xl shadow-black/20" aria-label="Primary">
          <div className="flex items-center justify-between">
            <a href="#top" onClick={close} className="focus-ring font-semibold tracking-tight">
              <span className="text-[var(--accent)]">MR</span><span className="text-white/30">/</span> backend
            </a>
            <div className="hidden items-center gap-6 md:flex">
              {links.map(([label, href]) => <a key={href} href={href} className="focus-ring text-sm text-white/65 transition hover:text-white">{label}</a>)}
              <a href={profile.resume} className="focus-ring rounded-xl border border-white/10 px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)]/40 hover:bg-white/5">Resume</a>
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(v => !v)}
              className="focus-ring rounded-xl border border-white/10 p-2 md:hidden"
            >
              <span className="block h-px w-5 bg-white/80" />
              <span className="my-1.5 block h-px w-5 bg-white/80" />
              <span className="block h-px w-5 bg-white/80" />
            </button>
          </div>
          {open && (
            <div id="mobile-menu" className="mt-3 grid gap-1 border-t border-white/10 pt-3 md:hidden">
              {links.map(([label, href]) => <a key={href} href={href} onClick={close} className="rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/5">{label}</a>)}
              <a href={profile.resume} onClick={close} className="rounded-xl px-3 py-3 text-sm text-[var(--accent)] hover:bg-white/5">Download Resume</a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}