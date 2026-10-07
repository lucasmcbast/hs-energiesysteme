import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router"
import useReveal from "./useReveal"
import { ArrowIcon } from "./SeoArticlePage"
import logoDark from "./imports/H_S_logo_large-Dark.png"
import heroFoto from "./imports/L1090589-Edit.jpg"
import beratungFoto from "./imports/L1090431.jpg"
import montageFoto from "./imports/L1090512.jpg"
import aussenFoto from "./imports/L1090577.jpg"
import kupferFoto from "./imports/L1090437.jpg"
import deckeFoto from "./imports/L1090564.jpg"
import rohreFoto from "./imports/L1090531.jpg"
import karte from "./imports/hs-einzugsgebiet-karte-2026_v2-mai.webp"
import logoBosch from "./imports/Bosch_Logo.png"
import logoBuderus from "./imports/buderus-logo.png"
import logoVaillant from "./imports/vaillant-logo.png"
import logoViessmann from "./imports/Viessmann_Logo.png"
import logoPanasonic from "./imports/panasonic-logo.png"
import logoBwp from "./imports/bwp.jpg"
import inst1 from "./imports/installation-1.webp"
import inst2 from "./imports/installation-2.webp"
import inst3 from "./imports/installation-3.webp"
import inst4 from "./imports/installation-4.webp"
import inst5 from "./imports/installation-5.webp"
import inst6 from "./imports/installation-6.webp"
import inst7 from "./imports/installation-7.webp"
import inst8 from "./imports/installation-8.webp"
import inst9 from "./imports/installation-9.webp"
import inst11 from "./imports/installation-11.webp"
import inst15 from "./imports/installation-15.webp"
import inst16 from "./imports/installation-16.webp"

/* ------------------------------------------------------------------ */
/*  Kampagnen-Landingpage: ein Ziel — der Klick in den Angebots-Funnel */
/* ------------------------------------------------------------------ */

const FUNNEL_URL = "https://anfrage.hs-energiesysteme.de/"
const PHONE_DISPLAY = "02154 8809537"
const PHONE_HREF = "tel:+4921548809537"
const WHATSAPP_HREF = "https://wa.me/4921548809537"
const CALENDLY_HREF = "https://calendly.com/d/ck5p-4mg-cx7"
const GOOGLE_REVIEWS_HREF = "https://g.co/kgs/BAWjz9L"
/* Google-Profil Standort Willich (Stand Okt. 2026). Köln/Solingen später ergänzen. */
const GOOGLE_RATING = "4,9"
const GOOGLE_REVIEW_COUNT = 107

/* Kampagnen-Parameter, die an den Funnel weitergereicht werden, damit
   Leads in Heyflow/Ads der richtigen Kampagne zugeordnet bleiben. */
const PASSTHROUGH = /^(utm_\w+|gclid|gbraid|wbraid|fbclid|msclkid|ttclid|li_fat_id)$/

function useFunnelLink() {
  const { search } = useLocation()
  return useMemo(() => {
    const incoming = new URLSearchParams(search)
    return (extra: Record<string, string> = {}) => {
      const url = new URL(FUNNEL_URL)
      incoming.forEach((value, key) => {
        if (PASSTHROUGH.test(key)) url.searchParams.set(key, value)
      })
      Object.entries(extra).forEach(([k, v]) => url.searchParams.set(k, v))
      return url.toString()
    }
  }, [search])
}

type FunnelLink = ReturnType<typeof useFunnelLink>

/* Erste Funnel-Frage direkt im Hero: ein Klick = Einstieg in den Funnel.
   TODO: prüfen, ob Heyflow ?heizung= vorbelegt; sonst landet man einfach am Start. */
const HEATING_OPTIONS = [
  { id: "gas", label: "Gas", icon: "M12 3c1 3.5 5 5.5 5 10a5 5 0 01-10 0c0-2.5 1.5-4 2.5-5 0 2 1 3 2 3.5C11 9 11 6 12 3z" },
  { id: "oel", label: "Öl", icon: "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" },
  { id: "nachtspeicher", label: "Nachtspeicher", icon: "M13 2L5 13h6l-1 9 8-11h-6l1-9z" },
  { id: "andere", label: "Andere", icon: "M5 12h.01M12 12h.01M19 12h.01" },
]

const HERO_BULLETS = [
  "Installation in 4–5 Werktagen",
  "Bis zu 70 % Förderung — wir begleiten den Antrag",
  "Auch im Altbau mit normalen Heizkörpern",
  "Persönlicher Ansprechpartner, auch nach dem Einbau",
]

const TRUST_STATS = [
  { value: "400+", label: "Wärmepumpen pro Jahr" },
  { value: "80+", label: "Fachkräfte im Team" },
  { value: "10 %", label: "Anzahlung statt 50 %" },
  { value: "4–5", label: "Werktage Installation" },
]

const STEPS = [
  {
    title: "Angebot anfragen",
    text: "Ein paar kurze Fragen zu Ihrem Haus — in rund 2 Minuten erledigt. Kostenlos und unverbindlich.",
    img: beratungFoto,
    alt: "H&S Beratungsunterlagen „Der Partner für Ihr Zuhause“",
  },
  {
    title: "Beratung vor Ort",
    text: "Wir kommen zu Ihnen, prüfen Heizlast, Aufstellort und Heizflächen und rechnen die Förderung mit Ihnen durch.",
    img: montageFoto,
    alt: "Zwei H&S Fachkräfte bei der Arbeit im Heizungsraum",
  },
  {
    title: "Installation in 4–5 Tagen",
    text: "Unser eigenes Montageteam baut sauber und termintreu ein — inklusive Bestätigung für Ihren KfW-Antrag.",
    img: aussenFoto,
    alt: "H&S Team richtet eine Wärmepumpen-Außeneinheit aus",
  },
]

const REASONS = [
  {
    title: "Wärmepumpen-Spezialist",
    text: "Mit 400+ Installationen pro Jahr legen wir nach echten Daten aus — nicht nach Baugefühl.",
  },
  {
    title: "Nur 10 % Anzahlung",
    text: "Kundenfreundliche Zahlungskonditionen statt der üblichen 50 % und mehr vorab.",
  },
  {
    title: "Herstellerunabhängig",
    text: "Bosch, Buderus, Vaillant oder Panasonic — Sie bekommen das Gerät, das zu Ihrem Haus passt.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Beratung, Planung, Montage, Förderbegleitung und Wartung — ohne Abstimmungschaos zwischen Partnern.",
  },
  {
    title: "Schnell erreichbar",
    text: "Feste Ansprechpartner, auch nach 16 Uhr im Büro — und WhatsApp, wenn es schnell gehen soll.",
  },
  {
    title: "Regional verwurzelt",
    text: "Drei Standorte in Willich, Köln und Solingen. Unsere Monteure fahren direkt zu Ihnen.",
  },
]

const REVIEWS = [
  {
    name: "Bernd B.",
    city: "Willich",
    title: "Hervorragende Arbeit von der Planung bis zur Inbetriebnahme!",
    text: "Wir haben unsere alte Gasheizung durch eine Luft-Wasser-Wärmepumpe ersetzen lassen. Das Team war pünktlich, hat extrem sauber gearbeitet und alle Leitungen fachgerecht verlegt. Die Anlage läuft flüsterleise und hocheffizient.",
  },
  {
    name: "Dominik H.",
    city: "Duisburg",
    title: "Ölheizung raus, Buderus Wärmepumpe rein",
    text: "Vom Angebot über Planung bis hin zur Ausführung lief alles hervorragend. Wichtig war mir die telefonische Erreichbarkeit des Projektleiters — so konnten viele KfW-Antragsfragen und technische Fragen schnell geklärt werden.",
  },
  {
    name: "Renate K.",
    city: "Mönchengladbach",
    title: "Höchst zufrieden mit allen Mitarbeitern",
    text: "Von der ersten Beratung bis zum Abschluss aller Arbeiten waren wir höchst zufrieden. Das Team war sehr gut eingespielt, verfügte über profundes Wissen und war überaus freundlich.",
  },
  {
    name: "Stephan H.",
    city: "Siegburg",
    title: "Reibungslos von der Demontage bis zur Inbetriebnahme",
    text: "Die Montage unserer Bosch-Wärmepumpe wurde zu meiner vollsten Zufriedenheit durchgeführt. Toll fand ich auch das Angebot, bei später auftretenden Fragen jederzeit die Monteure kontaktieren zu können.",
  },
  {
    name: "Rolf K.",
    city: "Krefeld",
    title: "Bedingungslos weiterzuempfehlen",
    text: "Von Beginn an gestaltete sich die Installation hervorragend — der Fundamentbau, die pünktliche Anlieferung und die kompetente, freundliche Montage der beiden Fachleute vor Ort.",
  },
  {
    name: "Gordon G.",
    city: "Viersen",
    title: "Hier waren echte Profis am Werk",
    text: "Wir haben unsere alte Ölheizung gegen eine Wärmepumpe tauschen lassen. Alles bestens geplant und durchgeführt. Wir fühlten uns rundum sehr gut aufgehoben.",
  },
]

const GALLERY = [
  { src: kupferFoto, alt: "Sauber verlegte Kupferleitungen einer H&S Installation" },
  { src: deckeFoto, alt: "H&S Monteur bei der Rohrmontage an der Kellerdecke" },
  { src: rohreFoto, alt: "Anschluss der Hydraulik an der Inneneinheit" },
]


/* Echte Anlagen von H&S (aus der bisherigen Landingpage). Marke nur, wo sie am Gerät sichtbar ist. */
const INSTALLATIONS: { src: string; where: "Außen" | "Innen"; brand?: string }[] = [
  { src: inst1, where: "Außen", brand: "Buderus" },
  { src: inst2, where: "Außen", brand: "Bosch" },
  { src: inst15, where: "Außen", brand: "Vaillant" },
  { src: inst5, where: "Innen", brand: "Bosch" },
  { src: inst11, where: "Außen", brand: "Buderus" },
  { src: inst4, where: "Innen" },
  { src: inst9, where: "Außen", brand: "Bosch" },
  { src: inst8, where: "Innen", brand: "Bosch" },
  { src: inst3, where: "Außen", brand: "Buderus" },
  { src: inst16, where: "Innen" },
  { src: inst7, where: "Außen", brand: "Buderus" },
  { src: inst6, where: "Innen", brand: "Bosch" },
]

const PARTNER_LOGOS = [
  { src: logoBosch, alt: "Bosch" },
  { src: logoBuderus, alt: "Buderus", className: "h-12 md:h-14 grayscale-0" },
  { src: logoVaillant, alt: "Vaillant" },
  { src: logoViessmann, alt: "Viessmann" },
  { src: logoPanasonic, alt: "Panasonic" },
  { src: logoBwp, alt: "Mitglied im Bundesverband Wärmepumpe (bwp)" },
]

/* Förderangaben wie auf /kosten/foerderung-waermepumpe (KfW 458, Stand 21.07.2026). */
const FAQS = [
  {
    q: "Was kostet eine Wärmepumpe mit Einbau?",
    a: "Für ein Einfamilienhaus liegt eine vollständig installierte Luft-Wasser-Wärmepumpe meist bei 33.500 bis 36.000 € vor Förderung. Mit Grundförderung und Klimageschwindigkeitsbonus (46 %) sinkt Ihr Eigenanteil um bis zu 12.880 €. Sie haben schon ein Angebot? Schicken Sie es uns — wir prüfen, ob wir es besser machen können.",
  },
  {
    q: "Wie viel Förderung bekomme ich?",
    a: "Die KfW fördert 30 % Grundförderung, dazu 16 % Klimageschwindigkeitsbonus beim Tausch einer alten Öl-, Gas- oder Nachtspeicherheizung und bis zu 40 % Einkommensbonus. Regulär sind bis zu 70 % möglich, unter besonderen Einkommens- bzw. Familienbedingungen bis zu 80 % — auf bis zu 28.000 € förderfähige Kosten. Wir erstellen die Bestätigung zum Antrag und begleiten Sie durch den Prozess.",
  },
  {
    q: "Funktioniert eine Wärmepumpe auch ohne Fußbodenheizung?",
    a: "Ja. Auch normale Heizkörper funktionieren, wenn die Heizflächen groß genug sind. Das prüfen wir bei der Beratung vor Ort — grundsätzlich finden wir für Einfamilienhäuser, Doppelhaushälften und Reihenhäuser eine Lösung.",
  },
  {
    q: "Wie schnell geht die Installation?",
    a: "Die Installation selbst dauert in der Regel 4–5 Werktage. Wir arbeiten mit eigenen, festen Montageteams und brauchen nur 10 % Anzahlung.",
  },
  {
    q: "Wie laut ist eine Wärmepumpe?",
    a: "Moderne Geräte sind im Alltag kaum zu hören — hörbar werden sie vor allem bei Volllast an sehr kalten Tagen. Wir planen den Aufstellort so, dass Sie und Ihre Nachbarn nicht gestört werden.",
  },
  {
    q: "Welche Hersteller bauen Sie ein?",
    a: "Wir verbauen vor allem Bosch, Buderus und Vaillant, bei größeren Leistungen Panasonic — als Monoblock oder Split, und auf Wunsch mit Vergleichsangeboten mehrerer Hersteller.",
  },
  {
    q: "In welchem Gebiet sind Sie unterwegs?",
    a: "Im Umkreis von rund 50 km um unsere Standorte in Willich, Köln und Solingen — vom Niederrhein bis ins Rheinland, u. a. Düsseldorf, Krefeld, Mönchengladbach, Duisburg, Erkelenz und Bonn.",
  },
]

/* ------------------------------------------------------------------ */
/*  Bausteine                                                          */
/* ------------------------------------------------------------------ */

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-amber ${className}`} aria-hidden="true">
      ★★★★★
    </span>
  )
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow text-[11px] font-bold text-graphite">
      ✓
    </span>
  )
}

function PrimaryCta({
  href,
  cta,
  children = "Kostenloses Angebot anfragen",
  className = "",
}: {
  href: string
  cta: string
  children?: string
  className?: string
}) {
  return (
    <a
      href={href}
      data-cta={cta}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-7 py-4 text-base font-semibold text-graphite shadow-lg shadow-yellow/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/50 ${className}`}
    >
      {children} <ArrowIcon className="h-4 w-4" />
    </a>
  )
}

function Microcopy({ dark = false }: { dark?: boolean }) {
  return (
    <p className={`mt-3 text-sm ${dark ? "text-offwhite/60" : "text-slate"}`}>
      In 2 Minuten · kostenlos · unverbindlich
    </p>
  )
}

/* Dringlichkeit — nur belegbare Fakten: Kürzung zum 21.07.2026, Antrag vor Auftragsbeginn. */
function UrgencyBanner({ funnel }: { funnel: FunnelLink }) {
  return (
    <a
      href={funnel({ cta: "banner" })}
      data-cta="banner"
      className="block bg-graphite px-5 py-2.5 text-center text-sm text-offwhite transition-colors hover:bg-ink"
    >
      <span className="mr-2 inline-block rounded-full bg-yellow px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-graphite">
        Förderung 2026
      </span>
      <span className="hidden sm:inline">Die Förderung wurde zum 21.07.2026 bereits gekürzt — jetzt die aktuellen Sätze sichern. </span>
      <span className="sm:hidden">Bereits gekürzt — aktuelle Sätze sichern. </span>
      <span className="font-semibold text-yellow underline underline-offset-2">
        <span className="hidden sm:inline">Förder-Check starten</span>
        <span className="sm:hidden">Prüfen</span>
      </span>
    </a>
  )
}

function LpHeader({ funnel }: { funnel: FunnelLink }) {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-offwhite/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <img src={logoDark} alt="H&S Energiesysteme" className="h-7 w-auto md:h-8" />
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            data-cta="header-phone"
            className="hidden items-center gap-2 text-sm font-semibold text-graphite sm:inline-flex"
          >
            <span className="text-slate">Fragen?</span> {PHONE_DISPLAY}
          </a>
          <a
            href={funnel({ cta: "header" })}
            data-cta="header"
            className="rounded-full bg-yellow px-5 py-2.5 text-sm font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/40"
          >
            Angebot anfragen
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero({ funnel }: { funnel: FunnelLink }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-graphite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <a
            href={GOOGLE_REVIEWS_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-graphite/15 bg-offwhite px-3.5 py-1.5 text-[13px] font-semibold text-slate"
          >
            <span className="font-display text-base font-semibold text-graphite">{GOOGLE_RATING}</span>
            <Stars /> {GOOGLE_REVIEW_COUNT} Google-Bewertungen
          </a>
          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4rem]">
            Ihre Wärmepumpe vom{" "}
            <span className="marker">Meisterbetrieb aus NRW.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            Beratung, Förderantrag und Installation aus einer Hand — von Ihrem
            regionalen Fachbetrieb aus Willich, Köln und Solingen.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {HERO_BULLETS.map((b) => (
              <li key={b} className="flex gap-2.5 text-[15px] font-medium text-graphite">
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCta href={funnel({ cta: "hero" })} cta="hero" />
            <a
              href="#preisrechner"
              className="inline-flex items-center justify-center rounded-full border border-graphite/20 px-7 py-4 text-base font-semibold text-graphite transition-colors duration-200 hover:bg-graphite hover:text-offwhite"
            >
              Kosten berechnen
            </a>
          </div>
          <Microcopy />
        </div>

        <div className="relative">
          <img
            src={heroFoto}
            alt="H&S Fachkraft neben einer frisch installierten Luft-Wasser-Wärmepumpe"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-[60%_center] shadow-2xl shadow-graphite/10"
          />
          <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-2 gap-2 rounded-2xl border border-graphite/10 bg-offwhite p-4 shadow-xl shadow-graphite/10 sm:left-auto sm:right-[-1rem] sm:w-72">
            {TRUST_STATS.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-graphite">{s.value}</p>
                <p className="text-xs leading-snug text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Hervorgehobener Einstieg in den Funnel: erste Frage direkt auf der Seite */
function PriceCalculator({ funnel }: { funnel: FunnelLink }) {
  return (
    <section id="preisrechner" className="scroll-mt-20 bg-yellow">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite/60">
            Kostenloser Preisrechner
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Was kostet Ihre Wärmepumpe?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-graphite/75">
            Beantworten Sie ein paar kurze Fragen zu Ihrem Haus — wir erstellen
            Ihnen ein persönliches Angebot inklusive Förder-Check.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["In rund 2 Minuten erledigt", "Kostenlos & unverbindlich", "Inklusive Förder-Check"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-graphite">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-graphite text-[11px] font-bold text-yellow">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-offwhite p-6 shadow-2xl shadow-graphite/15 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Frage 1</p>
          <p className="mt-2 font-display text-2xl font-semibold text-graphite sm:text-3xl">
            Womit heizen Sie aktuell?
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {HEATING_OPTIONS.map((o) => (
              <a
                key={o.id}
                href={funnel({ heizung: o.id, cta: "rechner-heizung" })}
                data-cta={`rechner-heizung-${o.id}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-graphite/10 bg-offwhite px-3 py-5 text-center font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow hover:bg-yellow/15 hover:shadow-lg hover:shadow-yellow/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/30 text-graphite transition-colors group-hover:bg-yellow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={o.icon} />
                  </svg>
                </span>
                {o.label}
              </a>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-slate">
            Mit einem Klick geht es direkt weiter.
          </p>
        </div>
      </div>
    </section>
  )
}

function LogoStrip() {
  return (
    <section className="border-y border-graphite/10 bg-offwhite py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate/70">
          Zertifizierter Partner der führenden Hersteller
        </p>
        <div className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
          {PARTNER_LOGOS.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className={`mx-auto h-8 w-auto max-w-full object-contain opacity-80 grayscale md:h-9 ${"className" in l ? l.className : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="bg-ink text-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-8">
        {TRUST_STATS.map((s, i) => (
          <div key={s.label} className={`px-2 md:px-6 ${i ? "md:border-l md:border-offwhite/15" : ""}`}>
            <p className="font-display text-4xl font-semibold text-yellow md:text-5xl">{s.value}</p>
            <p className="mt-1 text-sm text-offwhite/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks({ funnel }: { funnel: FunnelLink }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">So einfach geht’s</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          In drei Schritten zur Wärmepumpe.
        </h2>
      </div>
      <ol className="knowledge-stagger mt-10 grid gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="reveal overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite">
            <img src={s.img} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow font-display font-semibold text-graphite">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-graphite">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center">
        <PrimaryCta href={funnel({ cta: "steps" })} cta="steps">
          Schritt 1: Angebot anfragen
        </PrimaryCta>
        <Microcopy />
      </div>
    </section>
  )
}

function Funding({ funnel }: { funnel: FunnelLink }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
      <div className="reveal grid grid-cols-1 gap-8 rounded-3xl bg-ink p-6 text-offwhite sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14 [&>*]:min-w-0">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">Förderung 2026</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            Bis zu 22.400 € Zuschuss vom Staat.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-offwhite/70">
            Für die meisten Eigentümer sind es 46 % — also bis zu 12.880 €.
            Wir prüfen Ihre Förderbausteine, erstellen die Bestätigung zum
            KfW-Antrag und begleiten Sie Schritt für Schritt.
          </p>
          <p className="mt-5 flex gap-3 rounded-2xl border border-yellow/40 bg-yellow/10 p-4 text-sm leading-relaxed text-offwhite/85">
            <span aria-hidden="true" className="text-lg leading-none">⏳</span>
            <span>
              <strong className="text-yellow">Wichtig:</strong> Der Antrag muss vor
              Auftragsbeginn gestellt werden, und die Sätze wurden 2026 bereits
              gesenkt (z. B. Klimabonus von 20 auf 16 %). Wer früh plant, sichert
              sich die aktuellen Konditionen.
            </span>
          </p>
          <PrimaryCta href={funnel({ cta: "foerderung" })} cta="foerderung" className="mt-8">
            Förderung & Preis berechnen
          </PrimaryCta>
          <Microcopy dark />
        </div>
        <div className="grid gap-3">
          {[
            ["30 %", "Grundförderung", "für jede förderfähige Wärmepumpe"],
            ["+ 16 %", "Klima­geschwindigkeits­bonus", "beim Tausch alter Öl-, Gas- oder Nachtspeicherheizungen"],
            ["+ bis 40 %", "Einkommensbonus", "abhängig vom Haushaltseinkommen"],
          ].map(([v, t, d]) => (
            <div key={t} className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4 rounded-2xl border border-offwhite/10 bg-offwhite/[0.05] p-4">
              <p className="whitespace-nowrap font-display text-xl font-semibold text-yellow sm:text-2xl">{v}</p>
              <div>
                <p className="font-semibold">{t}</p>
                <p className="text-sm text-offwhite/55">{d}</p>
              </div>
            </div>
          ))}
          <p className="text-xs leading-relaxed text-offwhite/45">
            KfW-Heizungsförderung 458: bis zu 28.000 € förderfähige Kosten im
            Einfamilienhaus. Bis zu 80 % nur unter besonderen Einkommens- bzw.
            Familienbedingungen. Alle Angaben ohne Gewähr.
          </p>
        </div>
      </div>
    </section>
  )
}

function Reasons() {
  return (
    <section className="border-y border-graphite/10 bg-softblue/30">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Warum H&amp;S</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Lokaler Handwerksbetrieb — mit der Erfahrung eines Spezialisten.
          </h2>
        </div>
        <div className="knowledge-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="reveal rounded-2xl border border-graphite/10 bg-offwhite p-6">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-graphite">
                <CheckIcon /> {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {GALLERY.map((g) => (
            <img key={g.alt} src={g.src} alt={g.alt} loading="lazy" className="reveal aspect-[4/3] w-full rounded-2xl object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Installations({ funnel }: { funnel: FunnelLink }) {
  const [filter, setFilter] = useState<"Alle" | "Außen" | "Innen">("Alle")
  const items = INSTALLATIONS.filter((i) => filter === "Alle" || i.where === filter)

  return (
    <section id="referenzen" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Echte Installationen</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            So sieht es bei unseren Kunden aus.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            Keine Stockfotos: Anlagen, die unsere Teams in der Region eingebaut
            haben — draußen sauber aufgestellt, drinnen ordentlich verrohrt.
          </p>
        </div>
        <div role="tablist" aria-label="Fotos filtern" className="flex gap-2">
          {(["Alle", "Außen", "Innen"] as const).map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => {
                setFilter(f)
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "border-graphite bg-graphite text-offwhite"
                  : "border-graphite/15 bg-offwhite text-graphite hover:border-graphite/40"
              }`}
            >
              {f === "Alle" ? "Alle" : f === "Außen" ? "Außeneinheit" : "Technikraum"}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((i, idx) => (
          <li key={i.src} className="group relative overflow-hidden rounded-2xl bg-softblue">
            <img
              src={i.src}
              alt={`Von H&S installierte Wärmepumpe${i.brand ? ` (${i.brand})` : ""} — ${i.where === "Außen" ? "Außeneinheit" : "Technikraum"}`}
              loading={idx < 4 ? "eager" : "lazy"}
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-graphite/80 px-3 py-1 text-xs font-semibold text-offwhite backdrop-blur-sm">
              {i.brand ? `${i.brand} · ` : ""}
              {i.where === "Außen" ? "Außen" : "Technikraum"}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <PrimaryCta href={funnel({ cta: "referenzen" })} cta="referenzen">
          So eine Anlage anfragen
        </PrimaryCta>
      </div>
    </section>
  )
}

/* Aus der bisherigen FAQ: vorhandene Angebote prüfen wir kostenlos. */
function SecondOpinion({ funnel }: { funnel: FunnelLink }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
      <div className="reveal flex flex-col items-start justify-between gap-6 rounded-3xl border-2 border-dashed border-amber/60 bg-yellow/10 p-7 sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Zweite Meinung</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-graphite md:text-4xl">
            Sie haben schon ein Angebot? Wir prüfen es kostenlos.
          </h2>
          <p className="mt-3 leading-relaxed text-slate">
            Schicken Sie uns Ihr vorhandenes Angebot — wir sagen Ihnen ehrlich,
            ob es passt, und ob wir Ihnen ein attraktiveres machen können.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            data-cta="zweitmeinung-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-7 py-4 font-semibold text-offwhite transition-all hover:-translate-y-0.5 hover:bg-ink"
          >
            Angebot per WhatsApp schicken
          </a>
          <a
            href={funnel({ cta: "zweitmeinung" })}
            data-cta="zweitmeinung"
            className="inline-flex items-center justify-center rounded-full border border-graphite/25 px-7 py-4 font-semibold text-graphite transition-colors hover:bg-graphite hover:text-offwhite"
          >
            Eigenes Angebot anfragen
          </a>
        </div>
      </div>
    </section>
  )
}

function Reviews({ funnel }: { funnel: FunnelLink }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Kundenstimmen</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Das sagen Kunden aus der Region.
          </h2>
        </div>
        <a
          href={GOOGLE_REVIEWS_HREF}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-graphite/10 bg-offwhite px-5 py-4 transition-shadow hover:shadow-lg hover:shadow-graphite/5"
        >
          <span className="font-display text-5xl font-semibold leading-none text-graphite">{GOOGLE_RATING}</span>
          <span>
            <Stars className="text-lg" />
            <span className="block text-sm text-slate">
              {GOOGLE_REVIEW_COUNT} Bewertungen auf Google
            </span>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-graphite">
              Alle lesen <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </span>
        </a>
      </div>
      <div className="knowledge-stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-graphite/10 bg-offwhite p-6">
            <Stars className="text-lg" />
            <p className="mt-3 font-display text-lg font-semibold leading-snug text-graphite">„{r.title}“</p>
            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">{r.text}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-graphite/10 pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-softblue text-sm font-semibold text-slate">
                {r.name.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-graphite">{r.name}</span>
                <span className="text-greengray">{r.city}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 text-center">
        <PrimaryCta href={funnel({ cta: "reviews" })} cta="reviews" />
        <Microcopy />
      </div>
    </section>
  )
}

function Region() {
  return (
    <section className="border-y border-graphite/10 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Einzugsgebiet</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Regional für Sie vor Ort.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            Mit über 80 Mitarbeitenden sind wir im Umkreis von rund 50 km um
            Willich, Köln und Solingen für Sie da.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Willich", "Köln", "Solingen", "Düsseldorf", "Krefeld", "Mönchengladbach", "Duisburg", "Viersen", "Bonn", "Erkelenz"].map((c) => (
              <span key={c} className="rounded-full border border-graphite/15 bg-offwhite px-3.5 py-1.5 text-sm font-medium text-graphite">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal">
          <img src={karte} alt="Karte des Einzugsgebiets von H&S mit Willich, Köln und Solingen" loading="lazy" className="mx-auto w-full max-w-lg" />
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Häufige Fragen</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Gut zu wissen.
        </h2>
      </div>
      <div className="mt-10 divide-y divide-graphite/10 border-y border-graphite/10">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q}>
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-graphite md:text-xl">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-all duration-300 ${
                      isOpen ? "rotate-45 border-yellow bg-yellow" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden pr-12 text-[15px] leading-relaxed text-slate">
                  <span className="block pb-6">{f.a}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function FinalCta({ funnel }: { funnel: FunnelLink }) {
  const contacts = [
    { label: PHONE_DISPLAY, sub: "Direkt anrufen", href: PHONE_HREF, cta: "final-phone" },
    { label: "WhatsApp", sub: "Schnelle Frage stellen", href: WHATSAPP_HREF, cta: "final-whatsapp" },
    { label: "Termin buchen", sub: "Beratungstermin online", href: CALENDLY_HREF, cta: "final-calendly" },
  ]
  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8 md:pb-24">
      <div className="reveal overflow-hidden rounded-3xl bg-yellow p-8 text-center md:p-14">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Jetzt kostenloses Angebot für Ihre Wärmepumpe sichern.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-graphite/75">
          Beantworten Sie ein paar kurze Fragen zu Ihrem Haus — wir melden uns
          schnell mit einer ersten Einschätzung.
        </p>
        <a
          href={funnel({ cta: "final" })}
          data-cta="final"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-graphite px-8 py-4 text-lg font-semibold text-offwhite transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-xl"
        >
          Kostenloses Angebot anfragen <ArrowIcon className="h-5 w-5" />
        </a>
        <p className="mt-3 text-sm text-graphite/65">In 2 Minuten · kostenlos · unverbindlich</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 border-t border-graphite/15 pt-8 sm:grid-cols-3">
          {contacts.map((c) => (
            <a
              key={c.cta}
              href={c.href}
              data-cta={c.cta}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-graphite/15 bg-offwhite/40 px-4 py-3 transition-colors hover:bg-offwhite/70"
            >
              <span className="block font-semibold text-graphite">{c.label}</span>
              <span className="block text-sm text-graphite/65">{c.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Auf dem Handy immer erreichbar: Anruf + Angebot */
function MobileStickyBar({ funnel }: { funnel: FunnelLink }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-graphite/10 bg-offwhite/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <a
          href={PHONE_HREF}
          data-cta="sticky-phone"
          aria-label={`Anrufen: ${PHONE_DISPLAY}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-graphite"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 5c0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-3.3c0-.4-.3-.8-.7-.9l-3.3-.7c-.4-.1-.8.1-1 .4l-1 1.3a12 12 0 01-5.4-5.4l1.3-1c.3-.2.5-.6.4-1L9.2 4.7C9.1 4.3 8.7 4 8.3 4H5c-.6 0-1 .4-1 1z" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href={funnel({ cta: "sticky" })}
          data-cta="sticky"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-yellow font-semibold text-graphite"
        >
          Kostenloses Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function LpFooter() {
  return (
    <footer className="border-t border-graphite/10 py-8 text-center text-sm text-slate">
      <p>© {new Date().getFullYear()} H&amp;S Energiesysteme GmbH · Gießerallee 19, 47877 Willich</p>
      <p className="mt-2 flex justify-center gap-5">
        <a href="https://www.hs-energiesysteme.de/rechtliches/impressum" className="hover:text-graphite">Impressum</a>
        <a href="https://drive.google.com/file/d/1NdwHutkYPrtGhyX46zGExjmKN0g-kXiR/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-graphite">
          Datenschutz
        </a>
      </p>
    </footer>
  )
}

export default function LandingPage() {
  const funnel = useFunnelLink()
  useReveal()

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Wärmepumpe vom Meisterbetrieb in NRW – kostenloses Angebot | H&S"
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="min-h-full bg-offwhite">
      <UrgencyBanner funnel={funnel} />
      <LpHeader funnel={funnel} />
      <main>
        <Hero funnel={funnel} />
        <PriceCalculator funnel={funnel} />
        <LogoStrip />
        <HowItWorks funnel={funnel} />
        <Funding funnel={funnel} />
        <StatsBar />
        <Reasons />
        <Installations funnel={funnel} />
        <Reviews funnel={funnel} />
        <SecondOpinion funnel={funnel} />
        <Region />
        <Faq />
        <FinalCta funnel={funnel} />
      </main>
      <LpFooter />
      <MobileStickyBar funnel={funnel} />
    </div>
  )
}
