import { createFileRoute } from "@tanstack/react-router";
import {
  Monitor, Rocket, BookOpen, Store, MessageCircle, RefreshCw, Check, Palette, Smartphone,
  LayoutGrid, Compass, Search, Crown, Sparkles,
} from "lucide-react";
import { Header, NAV } from "@/components/site/Header";
import { HeroDevices, DemoLayout } from "@/components/site/Mockups";
import { CtaLink, SectionHead, WaButton, WaIcon } from "@/components/site/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MSG, WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";
import logo from "@/assets/boss-dev-logo.png.asset.json";
import { cn } from "@/lib/utils";

const TITLE = "BOSS DEV — Criação de sites profissionais e personalizados";
const DESC = "Sites modernos, landing pages e catálogos digitais para empresas. Planos a partir de R$ 397,00 com contratação pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { icon: Monitor, t: "Criação de sites", d: "Sites modernos, personalizados e adaptados para computadores e celulares." },
  { icon: Rocket, t: "Landing pages", d: "Páginas desenvolvidas para apresentar ofertas, serviços e facilitar o contato de potenciais clientes." },
  { icon: BookOpen, t: "Catálogos digitais", d: "Apresentação organizada de produtos e serviços para facilitar a consulta dos visitantes." },
  { icon: Store, t: "Sites para comércios locais", d: "Sites para oficinas, restaurantes, barbearias, lojas, prestadores de serviços e outras empresas." },
  { icon: MessageCircle, t: "Integração com WhatsApp", d: "Botões que facilitam o contato entre empresas e clientes." },
  { icon: RefreshCw, t: "Modernização de sites", d: "Redesign de sites antigos para melhorar a aparência, a navegação e a experiência do usuário." },
];

type Plan = { name: string; price: string; desc: string; items: string[]; cta: string; msg: string; tier: "basic" | "pro" | "premium" };
const PLANS: Plan[] = [
  { tier: "basic", name: "Básico", price: "397,00", cta: "Contratar Site Básico", msg: MSG.basico,
    desc: "Uma presença digital profissional para apresentar sua empresa com qualidade e facilitar o contato com seus clientes.",
    items: ["Site moderno e responsivo.", "Design profissional personalizado.", "Apresentação da empresa.", "Seção de serviços e informações do negócio.", "Botão direto para WhatsApp.", "Endereço e localização.", "Links para redes sociais.", "Layout adaptado para celulares, tablets e computadores.", "Uma edição gratuita após a entrega."] },
  { tier: "pro", name: "Profissional", price: "797,00", cta: "Contratar Site Profissional", msg: MSG.profissional,
    desc: "Um site mais completo, sofisticado e personalizado para empresas que querem se destacar no ambiente digital.",
    items: ["Tudo o que está incluído no plano Básico.", "Design mais sofisticado e personalizado.", "Até 5 páginas.", "Galeria de fotos e portfólio.", "Animações e efeitos visuais.", "Formulário de contato funcional.", "Catálogo de produtos ou serviços.", "Otimização básica para mecanismos de busca (SEO).", "Integração com WhatsApp e redes sociais.", "Uma edição gratuita após a entrega."] },
  { tier: "premium", name: "Premium", price: "1.449,90", cta: "Contratar Site Premium", msg: MSG.premium,
    desc: "A solução mais completa da BOSS DEV, com um site exclusivo, recursos avançados e domínio personalizado incluso por um ano.",
    items: ["Tudo o que está incluído nos planos Básico e Profissional.", "Design exclusivo e avançado.", "Até 10 páginas.", "Recursos e animações personalizadas.", "Catálogo mais completo de produtos ou serviços.", "Otimização básica para mecanismos de busca (SEO).", "Integração com WhatsApp e redes sociais.", "Domínio personalizado com final .com.br incluso por 1 ano.", "Uma edição gratuita após a entrega."] },
];

const WHY = [
  { icon: Palette, t: "Design personalizado", d: "Cada projeto tem uma identidade visual coerente com o negócio." },
  { icon: Smartphone, t: "Responsividade", d: "O site funciona bem em celulares e computadores." },
  { icon: MessageCircle, t: "Comunicação facilitada", d: "Integração com WhatsApp para simplificar o contato." },
  { icon: LayoutGrid, t: "Apresentação profissional", d: "Organização de informações, serviços e produtos." },
  { icon: Compass, t: "Navegação intuitiva", d: "Visitantes encontram o que procuram facilmente." },
  { icon: Search, t: "Estrutura preparada para SEO", d: "Boas práticas técnicas para facilitar a compreensão do site pelos mecanismos de busca." },
];

const STEPS = [
  { n: "01", t: "Escolha seu plano", d: "O cliente seleciona o plano que atende às necessidades da empresa." },
  { n: "02", t: "Converse com a BOSS DEV", d: "O cliente entra em contato pelo WhatsApp para explicar o projeto." },
  { n: "03", t: "Envie as informações", d: "O cliente fornece textos, fotos, logotipo, serviços e outras informações necessárias." },
  { n: "04", t: "Desenvolvimento e entrega", d: "O site é desenvolvido conforme o escopo combinado, revisado e entregue ao cliente." },
];

const DEMOS = [
  { t: "Restaurantes e lanchonetes", a: "primary" as const },
  { t: "Oficinas mecânicas", a: "silver" as const },
  { t: "Barbearias e salões", a: "primary" as const },
  { t: "Lojas e comércios locais", a: "whatsapp" as const },
  { t: "Prestadores de serviços", a: "silver" as const },
];

const FAQ = [
  ["Os sites funcionam no celular?", "Sim. Todos os planos incluem um layout responsivo para celulares, tablets e computadores."],
  ["A edição gratuita está incluída?", "Sim. Todos os planos incluem uma rodada de edição gratuita após a entrega, limitada às alterações previstas no escopo acordado."],
  ["O domínio .com.br está incluído?", "Sim. O plano Premium inclui um domínio personalizado .com.br por um ano. A renovação após esse período é cobrada separadamente."],
  ["A hospedagem está incluída?", "A hospedagem é definida no orçamento de cada projeto. Converse com a BOSS DEV pelo WhatsApp para saber as opções disponíveis."],
  ["Posso solicitar alterações no site?", "Sim. Todos os planos incluem uma rodada de edição gratuita. Alterações adicionais podem ser orçadas separadamente."],
  ["Como contrato um site?", "Escolha um dos planos e clique no botão de contratação. Você será direcionado para uma conversa com a BOSS DEV pelo WhatsApp."],
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background bg-page">
      <Header />
      <main>
        {/* Hero */}
        <section id="inicio" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
            <div className="animate-rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-accent/40 px-4 py-1.5 text-xs font-medium text-primary-glow">
                <Sparkles className="h-3.5 w-3.5" /> Desenvolvimento de sites sob medida
              </p>
              <h1 className="text-metal text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Seu negócio merece um site à altura da sua marca.</h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                A BOSS DEV transforma ideias em sites modernos, profissionais e personalizados para empresas que querem fortalecer sua presença digital e conquistar novas oportunidades.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaLink href="#planos" variant="outline">Conhecer os planos</CtaLink>
                <WaButton message={MSG.geral}>Solicitar meu site</WaButton>
              </div>
            </div>
            <HeroDevices />
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Serviços" title="Soluções digitais para o seu negócio." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: I, t, d }) => (
                <article key={t} className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-silver/20 bg-gradient-to-b from-secondary to-background text-primary-glow"><I className="h-6 w-6" /></div>
                  <h3 className="text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="planos" className="relative py-20 md:py-28">
          <div className="absolute inset-x-0 top-1/3 mx-auto h-96 max-w-4xl rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Planos e preços" title="Escolha o plano ideal para sua empresa." sub="Compare os planos e contrate diretamente pelo WhatsApp." />
            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {PLANS.map((p) => <PlanCard key={p.name} plan={p} />)}
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-1.5 text-center text-xs text-muted-foreground">
              <p>O domínio .com.br está incluso apenas no plano Premium, por 1 ano. A renovação após o primeiro ano é cobrada separadamente.</p>
              <p>A edição gratuita corresponde a uma rodada de alterações dentro do escopo acordado. Hospedagem definida no orçamento do projeto.</p>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Por que escolher a BOSS DEV?" title="Seu projeto merece atenção aos detalhes." />
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ icon: I, t, d }) => (
                <div key={t} className="bg-background p-7">
                  <I className="mb-4 h-6 w-6 text-primary-glow" />
                  <h3 className="font-semibold text-silver">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How */}
        <section id="como-funciona" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Como funciona" title="Do primeiro contato à entrega." />
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="relative rounded-2xl border border-border bg-card/60 p-7">
                  <span className="text-metal font-display text-5xl font-bold">{s.n}</span>
                  <div className="my-4 h-px w-12 bg-blue-grad" />
                  <h3 className="font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center"><WaButton message={MSG.comecar}>Quero começar meu projeto</WaButton></div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Portfólio demonstrativo" title="Projetos que representam possibilidades." sub="Exemplos visuais ilustrativos de layouts por segmento. Não representam clientes reais." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {DEMOS.map((d) => (
                <figure key={d.t} className="rounded-2xl border border-border bg-card/60 p-3 transition-colors hover:border-primary/50">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-border"><DemoLayout accent={d.a} /></div>
                  <figcaption className="px-1 pt-3">
                    <p className="text-sm font-semibold text-silver">{d.t}</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Demonstração</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" />
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card/60 px-6">
              {FAQ.map(([q, a], i) => (
                <AccordionItem key={q} value={`q${i}`} className="border-border last:border-b-0">
                  <AccordionTrigger className="py-5 text-left text-base text-foreground hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contato" className="px-5 py-20 md:py-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-silver/20 bg-card px-6 py-16 text-center shadow-card md:px-16">
            <div className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-metal text-3xl font-bold sm:text-4xl md:text-5xl">Vamos transformar sua ideia em um site profissional?</h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Escolha seu plano e converse com a BOSS DEV para tirar seu projeto do papel.</p>
              <WaButton message={MSG.geral} className="mt-9 px-8 py-4 text-base">Solicitar meu site agora</WaButton>
              <p className="mt-5 text-sm text-silver-dim">WhatsApp: {WHATSAPP_DISPLAY}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <img src={logo.url} alt="Logo BOSS DEV" className="h-16 w-16 shrink-0 rounded-lg object-cover object-[50%_30%]" />
            <div>
              <p className="font-display text-lg font-bold"><span className="text-metal">BOSS</span> <span className="text-primary">DEV</span></p>
              <p className="mt-1 text-sm text-muted-foreground">Desenvolvimento de sites modernos e personalizados para empresas.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-center" aria-label="Rodapé">
            {NAV.filter((n) => n.label !== "Como funciona").map((n) => <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">{n.label}</a>)}
          </nav>
          <div className="md:text-right">
            <a href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-silver hover:text-whatsapp">
              <WaIcon className="h-4 w-4" /> {WHATSAPP_DISPLAY}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} BOSS DEV. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-card ring-4 ring-whatsapp/20 transition-transform hover:scale-110">
        <WaIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function PlanCard({ plan: p }: { plan: Plan }) {
  const pro = p.tier === "pro";
  const premium = p.tier === "premium";
  return (
    <article className={cn("relative flex flex-col rounded-3xl border p-8 transition-all duration-300",
      pro && "border-primary bg-gradient-to-b from-accent to-card shadow-glow lg:-translate-y-3",
      premium && "border-silver/40 bg-gradient-to-b from-secondary to-card shadow-card",
      p.tier === "basic" && "border-border bg-card/70")}>
      {pro && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-grad px-4 py-1 text-xs font-bold tracking-widest text-primary-foreground">MAIS ESCOLHIDO</span>}
      {premium && <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full border border-silver/40 bg-background px-4 py-1 text-xs font-bold tracking-widest text-silver"><Crown className="h-3.5 w-3.5" /> EXCLUSIVO</span>}
      <h3 className={cn("text-2xl font-bold", premium ? "text-metal" : "text-foreground")}>{p.name}</h3>
      <p className="mt-3 min-h-[4.5rem] text-sm text-muted-foreground">{p.desc}</p>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="text-lg text-silver-dim">R$</span>
        <span className={cn("font-display text-5xl font-bold", premium ? "text-metal" : "text-foreground")}>{p.price}</span>
      </p>
      <ul className="my-8 flex-1 space-y-3">
        {p.items.map((it) => (
          <li key={it} className="flex gap-3 text-sm text-secondary-foreground">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", premium ? "text-silver" : "text-primary-glow")} />{it}
          </li>
        ))}
      </ul>
      <WaButton message={p.msg} variant={pro ? "primary" : "outline"} className="w-full">{p.cta}</WaButton>
    </article>
  );
}
