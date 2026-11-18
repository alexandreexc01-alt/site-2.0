import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone, Smartphone, MessageSquareReply, Filter, CircleDot, Users, Flame, BarChart3, MapPin,
  Bot, Check, MessageCircle, ImageIcon, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LINKS } from "@/config/links";

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
  { icon: Megaphone, t: "Gerenciamento de campanhas", d: "Crie, organize e acompanhe suas campanhas em um só lugar." },
  { icon: Smartphone, t: "Múltiplas contas e chips", d: "Distribua os envios entre várias contas e chips." },
  { icon: MessageSquareReply, t: "Respostas automáticas", d: "Configure respostas para agilizar o atendimento." },
  { icon: Filter, t: "Filtros e organização de números", d: "Filtre e organize suas listas de contatos." },
  { icon: CircleDot, t: "Publicação de status", d: "Publique status diretamente pelo software." },
  { icon: Users, t: "Captura e gestão de grupos", d: "Capture e gerencie grupos com praticidade." },
  { icon: Flame, t: "Aquecimento de contas", d: "Recurso de aquecimento para suas contas." },
  { icon: BarChart3, t: "Relatórios de campanhas", d: "Acompanhe os resultados de cada campanha." },
  { icon: MapPin, t: "Extração Google / Google Maps", d: "Extraia dados de empresas do Google e Google Maps." },
];

const faqs = [
  { q: "O que é o ULTRA PRO?", a: "É um software para gerenciar campanhas e atendimento no WhatsApp, com envio por múltiplas contas e chips, respostas automáticas, organização de números, publicação de status, gestão de grupos, aquecimento de contas, relatórios e extração de dados do Google / Google Maps." },
  { q: "Como funciona o pagamento?", a: "O plano é anual: R$ 150,00 por ano, sem mensalidade. O valor normal é R$ 450,00, uma economia de R$ 300,00." },
  { q: "Tem mensalidade?", a: "Não. Você paga uma vez por ano." },
  { q: "Como faço para contratar?", a: "Clique em “Quero aproveitar a promoção”. Se tiver dúvidas, fale com a equipe pelo WhatsApp." },
  { q: "Posso enviar mensagens para qualquer número?", a: "As campanhas devem ser destinadas a contatos que autorizaram o recebimento, respeitando as regras do WhatsApp." },
];

function Cta({ className = "" }: { className?: string }) {
  return (
    <Button asChild variant="cta" size="lg" className={`h-14 rounded-full px-8 text-base ${className}`}>
      <a href={buyHref} {...ext(buyHref)}>QUERO APROVEITAR A PROMOÇÃO</a>
    </Button>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <header className="bg-hero text-deep-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <span className="font-display text-xl font-extrabold tracking-tight">ULTRA <span className="text-accent">PRO</span></span>
          <div className="hidden gap-6 text-sm opacity-80 md:flex">
            <a href="#funcionalidades" className="hover:opacity-100">Funcionalidades</a>
            <a href="#ia" className="hover:opacity-100">IA</a>
            <a href="#oferta" className="hover:opacity-100">Oferta</a>
            <a href="#faq" className="hover:opacity-100">Dúvidas</a>
          </div>
          <Button asChild variant="glass" size="sm" className="rounded-full"><a href={waHref} {...ext(waHref)}>Fale conosco</a></Button>
        </nav>
        <section className="mx-auto max-w-6xl px-5 pb-24 pt-14 text-center md:pt-24">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">Oferta anual · sem mensalidade</span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Suas campanhas de WhatsApp em <span className="text-accent">um só lugar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-80">
            Gerencie campanhas, use várias contas e chips, automatize respostas e atenda com inteligência artificial — tudo com o ULTRA PRO.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Cta />
            <p className="text-sm opacity-70">De <s>R$ 450,00</s> por <strong className="text-accent">R$ 150,00/ano</strong></p>
          </div>
        </section>
      </header>

      <section id="funcionalidades" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Funcionalidades</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Ferramentas para organizar e escalar sua comunicação.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-6 w-6" aria-hidden /></div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
          Campanhas destinadas a contatos que autorizaram o recebimento, conforme as regras do WhatsApp.
        </p>
      </section>

      <section id="ia" className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Inteligência artificial</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Atendimento por IA no WhatsApp</h2>
            <p className="mt-4 opacity-80">Conte com inteligência artificial para atender seus contatos pelo WhatsApp e ganhar agilidade no dia a dia.</p>
          </div>
          <div className="flex justify-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-brand shadow-glow"><Bot className="h-20 w-20" aria-hidden /></div>
          </div>
        </div>
      </section>

      <section id="demonstracao" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Veja o ULTRA PRO por dentro</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed bg-muted text-muted-foreground">
              <ImageIcon className="h-8 w-8" aria-hidden />
              <span className="text-sm">Captura de tela {n} em breve</span>
            </div>
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

      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl bg-brand p-10 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">Ficou com alguma dúvida?</h2>
          <p className="mt-2 opacity-90">Fale com nossa equipe pelo WhatsApp.</p>
          <Button asChild variant="cta" size="lg" className="mt-6 h-12 rounded-full px-6">
            <a href={waHref} {...ext(waHref)}><MessageCircle aria-hidden /> Falar no WhatsApp</a>
          </Button>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} ULTRA PRO</footer>
    </main>
  );
}
