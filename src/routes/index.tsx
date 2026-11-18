import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone, Smartphone, MessageSquareReply, Filter, CircleDot, Users, Flame, BarChart3, MapPin,
  Bot, Check, MessageCircle, ImageIcon, ShieldCheck, Zap, Settings2, Rocket, Play, Home, Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LINKS } from "@/config/links";
import robot from "@/assets/robot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ULTRA PRO — Automação de campanhas no WhatsApp" },
      { name: "description", content: "ULTRA PRO: campanhas, múltiplos chips, respostas automáticas e IA no WhatsApp. De R$ 450 por R$ 150/ano, sem mensalidade." },
      { property: "og:title", content: "ULTRA PRO — Automação de campanhas no WhatsApp" },
      { property: "og:description", content: "De R$ 450 por R$ 150 por ano. Sem mensalidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const buyHref = LINKS.compra || "#contato";
const waHref = LINKS.whatsapp || "#contato";
const ext = (h: string) => (h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

const features = [
  { icon: Megaphone, t: "Gerenciamento de Campanhas", d: "Crie, organize e acompanhe seus disparos." },
  { icon: Smartphone, t: "Múltiplas Contas e Chips", d: "Distribua envios entre várias contas." },
  { icon: MessageSquareReply, t: "Respostas Automáticas", d: "Agilize o atendimento aos seus clientes." },
  { icon: Filter, t: "Filtro de Números", d: "Filtre e organize suas listas." },
  { icon: CircleDot, t: "Publicador de Status", d: "Publique status pelo software." },
  { icon: Users, t: "Capturador de Grupos", d: "Capture e gerencie grupos." },
  { icon: Flame, t: "Aquecedor de Contas", d: "Aqueça suas contas com o software." },
  { icon: BarChart3, t: "Relatórios de Campanhas", d: "Acompanhe resultados e métricas." },
  { icon: MapPin, t: "Extrator Google / Google Maps", d: "Extraia dados de empresas." },
  { icon: Bot, t: "Atendimento com IA", d: "Inteligência artificial no WhatsApp." },
];

const gallery = ["Painel Geral", "Campanhas", "Respostas Automáticas", "Filtro de Números", "Publicador de Status", "Capturador de Grupos", "Aquecedor de Contas", "Relatórios de Campanhas", "Extrator do Google Maps", "Atendimento com IA"];

const steps = [
  { icon: Smartphone, t: "Conecte suas contas", d: "Adicione as contas e chips que vai usar." },
  { icon: Settings2, t: "Configure suas estratégias", d: "Crie campanhas, respostas e filtros." },
  { icon: Rocket, t: "Comece a vender mais", d: "Automatize e acompanhe os resultados." },
];

const faqs = [
  { q: "O que é o ULTRA PRO?", a: "Um software para gerenciar campanhas e atendimento no WhatsApp: múltiplas contas e chips, respostas automáticas, filtros de números, status, grupos, aquecimento de contas, relatórios, extração do Google / Google Maps e atendimento com IA." },
  { q: "Qual a forma de pagamento?", a: "Plano anual de R$ 150,00 por ano, sem mensalidade. O valor normal é R$ 450,00 — economia de R$ 300,00." },
  { q: "Tem mensalidade?", a: "Não. Você paga uma vez por ano." },
  { q: "Como faço para contratar?", a: "Clique em “Quero aproveitar a promoção”. Dúvidas? Fale com a equipe pelo WhatsApp." },
  { q: "Posso enviar para qualquer número?", a: "As campanhas devem ser destinadas a contatos que autorizaram o recebimento, conforme as regras do WhatsApp." },
  { q: "Como recebo suporte?", a: "Fale com nossa equipe pelo botão de WhatsApp nesta página." },
];

function Cta({ className = "" }: { className?: string }) {
  return (
    <Button asChild variant="cta" size="lg" className={`h-14 rounded-full px-8 text-base ${className}`}>
      <a href={buyHref} {...ext(buyHref)}>QUERO APROVEITAR A PROMOÇÃO</a>
    </Button>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand"><Bot className="h-6 w-6" aria-hidden /></span>
      <span className="leading-none">
        <span className="font-display text-2xl font-extrabold">ULTRA <span className="text-accent">PRO</span></span>
        <span className="block text-xs opacity-70">Automação para WhatsApp</span>
      </span>
    </span>
  );
}

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-0.5 w-16 bg-accent sm:block" />
        <h2 className="text-3xl font-bold text-secondary-foreground md:text-4xl">{title}</h2>
        <span className="hidden h-0.5 w-16 bg-accent sm:block" />
      </div>
      {sub && <p className="mt-2 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Mockup() {
  return (
    <div className="relative rounded-2xl border-4 border-deep-foreground/30 bg-card p-0 shadow-glow md:-rotate-2" aria-hidden>
      <div className="rounded-t-xl bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground">ULTRA PRO</div>
      <div className="grid grid-cols-5 gap-2 bg-primary/90 px-3 py-3 text-primary-foreground">
        {features.map(({ icon: Icon, t }) => (
          <div key={t} className="flex flex-col items-center gap-1 text-center text-[9px] leading-tight"><Icon className="h-4 w-4" />{t.split(" ")[0]}</div>
        ))}
      </div>
      <div className="space-y-2 p-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-accent/50 p-2">
            <MessageCircle className="h-5 w-5 text-accent" />
            <div className="h-2 flex-1 rounded bg-muted" />
            <div className="h-2 w-10 rounded bg-accent/60" />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-8 -right-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-cta">
        <MessageCircle className="h-12 w-12" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <header className="bg-hero text-deep-foreground">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Logo />
          <div className="hidden items-center gap-7 text-sm lg:flex">
            <a href="#inicio" className="flex items-center gap-1 hover:text-accent"><Home className="h-4 w-4" aria-hidden />Início</a>
            <a href="#funcionalidades" className="hover:text-accent">Funcionalidades</a>
            <a href="#oferta" className="hover:text-accent">Planos</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
            <a href="#contato" className="hover:text-accent">Contato</a>
          </div>
          <Button asChild variant="cta" size="sm" className="rounded-full"><a href={waHref} {...ext(waHref)}><MessageCircle aria-hidden />Falar no WhatsApp</a></Button>
        </nav>
        <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">10 ferramentas em um só software</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Venda mais no <span className="block text-accent md:text-7xl">WhatsApp</span> no piloto automático
            </h1>
            <p className="mt-6 max-w-lg text-lg opacity-85">Dispare campanhas, responda clientes, aqueça contas e capture contatos — tudo pelo <strong>ULTRA PRO</strong>.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta />
              <Button asChild variant="glass" size="lg" className="h-14 rounded-full px-6"><a href="#demonstracao"><Play aria-hidden />Ver demonstração</a></Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[[Zap, "Mais produtividade"], [BarChart3, "Relatórios de campanhas"], [ShieldCheck, "Sem mensalidade"], [Headphones, "Equipe no WhatsApp"]].map(([I, l]) => {
                const Icon = I as typeof Zap;
                return <div key={l as string} className="flex items-center gap-2 opacity-90"><Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />{l as string}</div>;
              })}
            </div>
          </div>
          <Mockup />
        </section>
      </header>

      <section id="funcionalidades" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle title="Conheça cada ferramenta" sub="Tudo o que você precisa para automatizar seu WhatsApp." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {features.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-glow">
              <Icon className="mx-auto h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-3 text-sm font-bold md:text-base">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          Campanhas destinadas a contatos que autorizaram o recebimento, conforme as regras do WhatsApp.
        </p>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle title="Como funciona?" sub="Em poucos passos você começa a usar o ULTRA PRO." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-glow"><Icon className="h-8 w-8" aria-hidden /></div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">{i + 1}</span>{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Inteligência artificial</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Atendimento por IA no WhatsApp</h2>
            <p className="mt-4 opacity-80">Conte com inteligência artificial para atender seus contatos pelo WhatsApp e ganhar agilidade no dia a dia.</p>
          </div>
          <img src={robot} alt="Mascote robô do ULTRA PRO" width={816} height={816} loading="lazy" className="mx-auto w-56 md:w-72" />
        </div>
      </section>

      <section id="demonstracao" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle title="Veja o ULTRA PRO em ação" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {gallery.map((g, i) => (
            <figure key={g} className="overflow-hidden rounded-xl border bg-card">
              <div className="flex aspect-video flex-col items-center justify-center gap-1 bg-muted text-muted-foreground">
                <ImageIcon className="h-6 w-6" aria-hidden /><span className="text-xs">Imagem em breve</span>
              </div>
              <figcaption className="flex items-center gap-2 p-2 text-xs font-semibold md:text-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{i + 1}</span>{g}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="oferta" className="bg-hero px-5 py-20 text-deep-foreground">
        <div className="mx-auto max-w-xl rounded-3xl border border-deep-foreground/20 bg-deep-foreground/5 p-8 text-center shadow-glow md:p-12">
          <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">OFERTA ESPECIAL</span>
          <p className="mt-6 text-lg opacity-70">DE <s>R$ 450,00</s> POR APENAS</p>
          <p className="font-display text-6xl font-extrabold">R$ 150<span className="text-2xl">,00</span></p>
          <p className="mt-1 opacity-80">por ano</p>
          <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left">
            {["Pagamento anual", "SEM MENSALIDADE", "Economia de R$ 300,00"].map((v) => (
              <li key={v} className="flex items-center gap-3 font-semibold"><Check className="h-5 w-5 text-accent" aria-hidden />{v}</li>
            ))}
          </ul>
          <Cta className="mt-10 w-full" />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-bold text-secondary-foreground">Perguntas Frequentes</h2>
        <p className="mt-1 text-muted-foreground">Tire suas dúvidas sobre o ULTRA PRO.</p>
        <Accordion type="single" collapsible className="mt-8 grid gap-x-8 md:grid-cols-2">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground md:p-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold">Pronto para automatizar seu WhatsApp?</h2>
            <p className="mt-2 opacity-90">Fale com nossa equipe e leve seu negócio para o próximo nível.</p>
            <Button asChild size="lg" variant="outline" className="mt-6 h-12 rounded-full border-0 px-6 font-bold">
              <a href={waHref} {...ext(waHref)}><MessageCircle className="text-accent" aria-hidden />Falar no WhatsApp</a>
            </Button>
          </div>
          <img src={robot} alt="" width={816} height={816} loading="lazy" className="absolute -bottom-6 right-4 hidden w-56 md:block" />
        </div>
      </section>

      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
          <Logo />
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-85">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" aria-hidden />Sem mensalidade</span>
            <span className="flex items-center gap-2"><Headphones className="h-4 w-4" aria-hidden />Atendimento pelo WhatsApp</span>
          </div>
          <p className="text-sm opacity-70">© {new Date().getFullYear()} ULTRA PRO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
