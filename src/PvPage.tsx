import { useEffect, useState } from "react"
import { Link } from "react-router"
import pvFachkraft from "./imports/pv-fachkraft-dach.webp"
import pvHeroBild from "./imports/waermepumpe-photovoltaik.webp"
import ServiceHero from "./ServiceHero"
import teamPortrait from "./imports/hs-team-portrait-halle.webp"

/* Leistungsseite Solaranlage & PV – Inhalte der bisherigen Live-Seite
   (/leistungen/solaranlage-und-pv), Zahlen wie im Artikel
   /aktuelle-themen/pv-anlagen-und-ihre-vorteile (Stand 09.10.2026). */

const WHATSAPP_URL = "https://wa.me/4921548809537"

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PvHero() {
  return (
    <ServiceHero
      crumb="Solaranlage & PV"
      topic="Leistung: Photovoltaik"
      title={
        <>
          PV-Anlage vom{" "}
          <span className="marker text-offwhite">regionalen Meisterbetrieb</span>.
        </>
      }
      text={
        <>
          Eine Photovoltaikanlage ist eine langfristige Investition. Deshalb
          legen wir Wert auf saubere Planung, abgestimmte Komponenten und eine
          verlässliche Umsetzung – von der ersten Analyse bis zur
          Inbetriebnahme.
        </>
      }
      actions={
        <>
          <a
            href="#kontakt"
            data-cta="pv-hero"
            className="rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
          >
            PV-Angebot anfragen
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            data-cta="pv-hero-whatsapp"
            className="rounded-full border border-offwhite/40 px-7 py-3.5 text-base font-semibold text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-graphite"
          >
            Per WhatsApp fragen
          </a>
        </>
      }
      image={{
        src: pvHeroBild,
        alt: "Einfamilienhaus mit Photovoltaikanlage auf dem Dach und Wärmepumpe im Garten",
        position: "object-[center_30%]",
      }}
      facts={[
        { value: "0 %", label: "Mehrwertsteuer" },
        { value: "inklusive", label: "Anmeldung & Zählertausch" },
        { value: "PV + WP", label: "aus einer Hand" },
        { value: "1 Kontakt", label: "per Telefon & WhatsApp" },
      ]}
    />
  )
}

function Intro() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-28">
      <div className="reveal">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Beratung, Montage &amp; Service aus einer Hand
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Erst zuhören, dann über kWp sprechen.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate">
          Wir sind ein Meisterbetrieb aus der Region und mögen klare Worte.
          Bevor wir über Anlagengrößen sprechen, hören wir zu: Wie wohnen Sie?
          Wann verbrauchen Sie Strom? Wo stört eine Leitung – und wo fällt sie
          nicht auf? Dann planen wir Ihre PV praktisch und alltagstauglich:
          ordentliche Unterkonstruktion, saubere DC/AC-Führung, aufgeräumter
          Zählerschrank.
        </p>
        <p className="mt-5 leading-relaxed text-slate">
          Transparenz gehört dazu: Wir erklären Größe, Speicher-Optionen und
          Wirtschaftlichkeit ohne Fachchinesisch. Sie bekommen ein Angebot, das
          man versteht – mit Namen Ihrer Ansprechperson, Telefon- und
          WhatsApp-Nummer. Wenn es Fragen gibt, rufen Sie uns einfach an. Wir
          gehen ran.
        </p>
      </div>

      <figure className="reveal overflow-hidden rounded-3xl bg-ink text-offwhite">
        <img
          src={teamPortrait}
          alt="Mitarbeiter von H&S Energiesysteme in der Werkhalle"
          className="aspect-[3/2] w-full object-cover"
          loading="lazy"
        />
        <blockquote className="p-7 md:p-8">
          <p className="font-display text-2xl font-semibold leading-snug">
            „Energiezukunft ist nichts Abstraktes – sie beginnt auf Ihrem Dach
            und mit einem Team, das erreichbar ist. Wir kommen vorbei, planen
            vernünftig und montieren ordentlich. Und wenn später etwas ist,
            melden Sie sich: Wir sind da.“
          </p>
          {/* TODO: Name und Funktion der zitierten Person ergänzen */}
          <footer className="mt-4 text-sm text-offwhite/60">
            [Name], H&amp;S Energiesysteme
          </footer>
        </blockquote>
      </figure>
    </section>
  )
}

const FACTS = [
  {
    value: "7,70 ct",
    label: "Einspeisevergütung je kWh",
    text: "Teileinspeisung bis 10 kWp für neue Anlagen seit 01.08.2026. Jede selbst genutzte Kilowattstunde ist mehrfach so viel wert.",
  },
  {
    value: "0 %",
    label: "Mehrwertsteuer",
    text: "Kauf und Installation von PV-Anlagen auf oder an Wohngebäuden sind umsatzsteuerfrei.",
  },
  {
    value: "60 %",
    label: "Einspeisegrenze",
    text: "Neue Anlagen ohne Smart Meter und Steuerbox dürfen höchstens 60 % ihrer Leistung einspeisen – ab 7 kWp ist das Messsystem Pflicht.",
  },
]

function Facts() {
  return (
    <section className="border-y border-graphite/10 bg-softblue/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            PV 2026 – das gilt jetzt
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Heute zählt der Eigenverbrauch.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Die Einspeisevergütung ist gesunken, die Netzregeln sind strenger
            geworden. Deshalb planen wir Ihre Anlage so, dass Sie möglichst viel
            Solarstrom selbst nutzen – im Haushalt, im Speicher oder in Ihrer
            Wärmepumpe.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="reveal rounded-2xl border border-graphite/10 bg-offwhite p-7"
            >
              <p className="font-display text-5xl font-semibold text-graphite">
                {fact.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-amber">
                {fact.label}
              </p>
              <p className="mt-4 leading-relaxed text-slate">{fact.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/aktuelle-themen/pv-anlagen-und-ihre-vorteile"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Alles zu Kosten, Vergütung und Solarspitzengesetz
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function Combination() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
      <img
        src={pvFachkraft}
        alt="H&S-Fachkraft mit Tablet neben einer Photovoltaikanlage auf einem Flachdach"
        className="reveal aspect-[4/3] w-full rounded-3xl object-cover object-[center_25%]"
        loading="lazy"
      />
      <div className="reveal">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          PV &amp; Wärmepumpe
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Ihr Solarstrom heizt mit.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate">
          Eine Wärmepumpe ist der größte Stromverbraucher im Haus – und damit
          der beste Abnehmer für Ihren eigenen Solarstrom, vor allem für
          Warmwasser und in der Übergangszeit. Weil wir beides installieren,
          planen wir Anlage, Speicher und Regelung aufeinander abgestimmt.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/leistungen/waermepumpen"
            className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
          >
            Unsere Wärmepumpen
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/kosten/waermepumpe-stromverbrauch"
            className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
          >
            Stromverbrauch einer Wärmepumpe
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    t: "Kurz sprechen – grob rechnen",
    d: "Zwei, drei Fragen klären wir direkt am Telefon oder per WhatsApp. Sie bekommen eine erste Einschätzung zu kWp, Speicher und Ertrag.",
  },
  {
    t: "Vor-Ort-Termin",
    d: "Wir schauen uns Dach, Ausrichtung, Neigung, Verschattung und Leitungswege an. Wo kommt der Wechselrichter hin? Wie wird es optisch ruhig? Wir sagen es Ihnen – und markieren es auf dem Plan.",
  },
  {
    t: "Finales Angebot",
    d: "Komponenten, Montage, Anmeldung, Zeitplan – klar aufgelistet. Keine Überraschungen, kein Kleingedrucktes. Ihre Ansprechperson bleibt dieselbe.",
  },
  {
    t: "Montage & Anmeldung",
    d: "Pünktlich, sauber, zügig. Wir sprechen vorab mit dem Netzbetreiber, kümmern uns um den Zählertausch und halten Sie auf dem Laufenden. Am Ende ist alles ordentlich beschriftet.",
  },
  {
    t: "Übergabe & danach",
    d: "App und Monitoring erklären wir in Ruhe. Sie bekommen eine Dokumentationsmappe – digital und auf Wunsch gedruckt. Und wenn später etwas sein sollte: Telefon und WhatsApp – Sie kennen uns ja.",
  },
]

function Process() {
  return (
    <section id="ablauf" className="bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            So läuft es ab
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            In fünf Schritten zu Ihrer PV-Anlage.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-offwhite/70">
            Uns ist besonders wichtig, dass wir jederzeit ansprechbar und ein
            vertrauensvoller Partner für Sie sind.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step.t}
              className="reveal rounded-2xl border border-offwhite/10 bg-offwhite/[0.04] p-6"
            >
              <span className="font-display text-3xl font-semibold text-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{step.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-2xl bg-yellow p-7 text-graphite sm:flex-row sm:items-center md:p-9">
          <div>
            <p className="font-display text-2xl font-semibold md:text-3xl">
              Jetzt unverbindliches PV-Angebot anfragen.
            </p>
            <p className="mt-2 text-graphite/75">
              Ein paar Angaben genügen – alle Details klären wir danach
              persönlich.
            </p>
          </div>
          <a
            href="#kontakt"
            data-cta="pv-process"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-graphite px-6 py-3.5 font-semibold text-offwhite transition-transform hover:-translate-y-0.5"
          >
            Angebot anfragen <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: "Welche Komponenten verbaut H&S?",
    a: "Hochwertige All-Black-Module, einen passenden Wechselrichter – bei Verschattung gern mit Optimierern – und einen Speicher, der zu Ihrem Alltag passt. Keine Exoten, sondern zuverlässige Technik, ordentlich verbaut.",
  },
  {
    q: "Wie groß sollte die Anlage sein – und rechnet sich ein Speicher?",
    a: "Wir dimensionieren nach Dach und Verbrauch, nicht nach Wunschlisten. Einen Speicher empfehlen wir, wenn Ihr Lastprofil dazu passt – etwa weil Sie abends viel Strom brauchen oder eine Wärmepumpe betreiben.",
  },
  {
    q: "Lohnt sich PV bei 7,70 Cent Einspeisevergütung noch?",
    a: "Ja, wenn die Anlage auf Eigenverbrauch ausgelegt ist. Selbst genutzter Solarstrom ersetzt Netzstrom, der für Haushalte deutlich über 30 Cent je kWh kostet. Wie hoch Ihr Eigenverbrauch werden kann, rechnen wir mit Ihren Verbrauchsdaten durch.",
  },
  {
    q: "Wer kümmert sich um Anmeldung und Zählerwechsel?",
    a: "Wir. Netzbetreiber-Formulare, Anmeldung und Zählerwechsel gehören zu unserem Leistungspaket. Sie müssen dafür nicht frei nehmen – wir stimmen die Termine mit Ihnen ab.",
  },
  {
    q: "Wie sieht das am Haus aus?",
    a: "Aufgeräumte Leitungswege, saubere Wand- und Dachdurchführungen, dezente Kabelführung. Wenn man Ihre PV sieht, dann so, dass sie gut aussieht.",
  },
  {
    q: "Und wenn später etwas ist?",
    a: "Melden Sie sich – per Telefon, E-Mail oder WhatsApp. Wir antworten schnell.",
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Häufige Fragen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Fragen zur PV-Anlage.
        </h2>
      </div>
      <div className="reveal mt-12 divide-y divide-graphite/10 border-y border-graphite/10">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q}>
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-slate"
                >
                  <span className="font-display text-lg font-semibold text-graphite md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-all duration-300 ${
                      isOpen ? "rotate-45 border-yellow bg-yellow" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              {isOpen && (
                <p className="pb-6 pr-12 leading-relaxed text-slate">{f.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function PvPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Solaranlage & PV vom Meisterbetrieb | H&S Energiesysteme"
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <PvHero />
      <Intro />
      <Facts />
      <Combination />
      <Process />
      <Faq />
    </>
  )
}
