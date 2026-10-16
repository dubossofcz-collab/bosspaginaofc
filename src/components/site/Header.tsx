import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/boss-dev-logo.png.asset.json";
import { MSG } from "@/lib/whatsapp";
import { WaButton } from "./ui";
import { cn } from "@/lib/utils";

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300",
      scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20">
        <a href="#inicio" className="flex min-w-0 items-center gap-2" aria-label="BOSS DEV — início">
          <img src={logo.url} alt="" className="h-11 w-11 shrink-0 rounded-md object-cover object-[50%_30%] md:h-12 md:w-12" />
          <span className="font-display text-lg font-bold tracking-wider"><span className="text-metal">BOSS</span> <span className="text-primary">DEV</span></span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>)}
        </nav>
        <div className="hidden lg:block"><WaButton message={MSG.geral} className="px-5 py-2.5">Solicitar meu site</WaButton></div>
        <button className="rounded-md p-2 text-silver lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 pt-2 lg:hidden" aria-label="Menu mobile">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-base text-silver">{n.label}</a>)}
          <WaButton message={MSG.geral} className="mt-5 w-full">Solicitar meu site</WaButton>
        </nav>
      )}
    </header>
  );
}
