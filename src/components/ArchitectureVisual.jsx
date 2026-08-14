const nodes = ["CLIENT", "REST API", "SPRING BOOT", "SECURITY", "SERVICE LAYER", "POSTGRESQL"];

export default function ArchitectureVisual() {
  return (
    <div className="glass float-slow relative overflow-hidden rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[.24em] text-white/40">request pipeline</span>
        <span className="rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-2 py-1 font-mono text-[10px] text-[var(--accent)]">LIVE FLOW</span>
      </div>
      <div className="relative space-y-2">
        {nodes.map((node, i) => (
          <div key={node} className="relative">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center font-mono text-xs tracking-wide text-white/80">
              {node}
            </div>
            {i < nodes.length - 1 && (
              <div className="relative mx-auto h-7 w-px bg-white/10">
                <span className="flow-dot absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(215,181,109,.7)]" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-white/40">
        <span>AUTH</span><span>VALIDATE</span><span>PERSIST</span>
      </div>
    </div>
  );
}