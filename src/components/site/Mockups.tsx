import { cn } from "@/lib/utils";

/** Fictional, illustrative website layout used in device frames. */
export function DemoLayout({ accent = "primary", compact }: { accent?: "primary" | "silver" | "whatsapp"; compact?: boolean }) {
  const a = accent === "primary" ? "bg-primary" : accent === "silver" ? "bg-silver" : "bg-whatsapp";
  return (
    <div className="flex h-full flex-col gap-2 bg-background p-3">
      <div className="flex items-center justify-between">
        <div className={cn("h-2 w-10 rounded-full", a)} />
        {!compact && <div className="flex gap-1.5">{[0, 1, 2].map((i) => <div key={i} className="h-1.5 w-6 rounded-full bg-muted" />)}</div>}
      </div>
      <div className="mt-2 flex flex-1 gap-3">
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          <div className="h-2.5 w-4/5 rounded bg-silver/80" />
          <div className="h-2.5 w-3/5 rounded bg-silver/60" />
          <div className="h-1.5 w-full rounded bg-muted" />
          <div className="h-1.5 w-5/6 rounded bg-muted" />
          <div className={cn("mt-1 h-3 w-14 rounded-full", a)} />
        </div>
        {!compact && <div className="w-2/5 rounded-lg bg-gradient-to-br from-accent to-muted" />}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => <div key={i} className="h-6 rounded bg-card ring-1 ring-border" />)}
      </div>
    </div>
  );
}

export function HeroDevices() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float">
      <div className="absolute -inset-10 rounded-full bg-primary/25 blur-3xl" aria-hidden />
      <div className="relative rounded-2xl border border-silver/20 bg-card p-2 shadow-card">
        <div className="mb-2 flex gap-1.5 px-1">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-silver-dim/60" />)}</div>
        <div className="aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-border"><DemoLayout /></div>
      </div>
      <div className="mx-auto h-3 w-1/3 rounded-b-xl bg-gradient-to-b from-silver-dim/50 to-transparent" />
      <div className="absolute -bottom-6 -right-2 w-[28%] rounded-[1.4rem] border border-silver/30 bg-card p-1.5 shadow-glow sm:-right-6">
        <div className="aspect-[9/18] overflow-hidden rounded-[1.1rem] ring-1 ring-border"><DemoLayout compact /></div>
      </div>
      <span className="absolute -left-2 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">Layout demonstrativo</span>
    </div>
  );
}
