import { Link } from "react-router"
import { useEffect, type ReactNode } from "react"
import waermepumpeKostenVisual from "./imports/waermepumpe-kosten-visual.webp"

const HEYFLOW_URL = "#heyflow-angebot"

const CONTENTS = [
  ["kurzfassung", "Kosten auf einen Blick"],
  ["anschaffung", "Anschaffungskosten"],
  ["gesamtpreis", "Was im Gesamtpreis steckt"],
  ["betrieb", "Laufende Betriebskosten"],
  ["foerderung", "Fördermöglichkeiten"],
  ["wirtschaftlichkeit", "Wirtschaftlichkeit"],
  ["faq", "Häufige Fragen"],
]

const SYSTEM_PRICES = [
  {
    type: "Luft-Wasser, Monoblock",
    price: "9.500–14.800 €",
    note: "Nur das Gerät, ca. 7–12 kW",
  },
  {
    type: "Luft-Wasser, Split",
    price: "6.300–10.800 €",
    note: "Nur das Gerät, ca. 6–12 kW",
  },
  {
    type: "Sole-/Erdwärmepumpe",
    price: "10.700–13.500 €",
    note: "Gerät ohne Bohrung oder Kollektor",
  },
]

const COST_COMPONENTS = [
  {
    number: "01",
    title: "Wärmepumpe",
    price: "ab 6.300 €",
    text: "Preis abhängig von Bauart, Leistung und Hersteller.",
  },
  {
    number: "02",
    title: "Speicher & Warmwasser",
    price: "ca. 3.500–5.000 €",
    text: "Puffer- und Warmwasserspeicher passend zum Anlagenkonzept.",
  },
  {
    number: "03",
    title: "Hydraulik & Material",
    price: "ca. 4.000–6.000 €",
    text: "Pumpengruppen, Rohre, Ventile, Filter und Sicherheitstechnik.",
  },
  {
    number: "04",
    title: "Montage & Elektro",
    price: "ca. 7.300–10.300 €",
    text: "Installation durch das Montageteam plus elektrischer Anschluss.",
  },
  {
    number: "05",
    title: "Aufstellung & Verbindung",
    price: "ca. 4.000–6.000 €",
    text: "Fundament, Kernbohrung und Verbindung von außen nach innen.",
  },
]

const FAQS = [
  {
    q: "Was kostet eine Wärmepumpe inklusive Einbau?",
    a: "Für ein typisches Einfamilienhaus liegen vollständig geplante und installierte Luft-Wasser-Wärmepumpen häufig bei etwa 33.500 bis 36.000 Euro vor Förderung. Gebäudesituation, Leistung, Leitungswege und notwendige Anpassungen können den Preis verändern.",
  },
  {
    q: "Warum kostet das Angebot deutlich mehr als das Gerät?",
    a: "Der Gerätepreis ist nur ein Teil der Anlage. Speicher, Hydraulik, Elektroarbeiten, Aufstellung, Verrohrung, hydraulischer Abgleich und Montage machen einen wesentlichen Anteil des Gesamtpreises aus.",
  },
  {
    q: "Welche laufenden Kosten entstehen?",
    a: "Bei einem durchschnittlichen Einfamilienhaus können die Stromkosten grob zwischen 900 und 1.600 Euro pro Jahr liegen. Hinzu kommen üblicherweise 180 bis 280 Euro für die jährliche Wartung.",
  },
  {
    q: "Wie hoch kann die Förderung sein?",
    a: "Je nach Ausgangssituation, Einkommen und erfüllten Bonusbedingungen sind nach den seit 21.07.2026 ausgewiesenen KfW-Konditionen Förderquoten von bis zu 80 Prozent möglich. Ohne die besonderen Einkommens- beziehungsweise Familienbedingungen liegt die Obergrenze grundsätzlich bei 70 Prozent.",
  },
]

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
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

function CheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow text-xs font-bold text-graphite">
      ✓
    </span>
  )
}

function ArticleHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-graphite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="flex items-center gap-3 text-sm font-semibold text-slate">
          <Link to="/" className="transition-colors hover:text-graphite">
            Startseite
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to="/wissen-und-infos"
            className="transition-colors hover:text-graphite"
          >
            Wissen
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber">Kosten</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Kosten &amp; Wirtschaftlichkeit
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Was kostet eine Wärmepumpe?
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Von Anschaffung und Einbau bis zu Strom, Wartung und Förderung:
              eine transparente Kostenbetrachtung für Ihr Zuhause.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Aktualisiert 2026</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>9 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>Geprüft vom H&amp;S Meisterbetrieb</span>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                Die kurze Antwort
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-5xl font-semibold text-yellow">
                33.500–36.000 €
              </p>
              <p className="mt-2 text-sm text-offwhite/60">
                realistische Gesamtkosten mit Einbau, vor Förderung
              </p>
              <ul className="mt-7 space-y-3 border-t border-offwhite/10 pt-6 text-sm text-offwhite/80">
                <li className="flex justify-between gap-4">
                  <span>Strom pro Jahr</span>
                  <strong className="text-offwhite">900–1.600 €</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Wartung pro Jahr</span>
                  <strong className="text-offwhite">180–280 €</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Förderung</span>
                  <strong className="text-yellow">bis zu 80 %</strong>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ArticleNavigation() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="border-t border-graphite/15 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
          In diesem Artikel
        </p>
        <nav className="mt-4">
          {CONTENTS.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex gap-3 border-b border-graphite/10 py-3 text-sm text-slate transition-colors hover:text-graphite"
            >
              <span className="font-semibold text-greengray">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a
          href={HEYFLOW_URL}
          className="mt-6 inline-flex w-full items-center justify-between rounded-xl bg-yellow px-4 py-3.5 text-sm font-semibold text-graphite transition-transform hover:-translate-y-0.5"
        >
          Preis berechnen
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </aside>
  )
}

export function SectionHeading({
  number,
  eyebrow,
  children,
}: {
  number?: string
  eyebrow: string
  children: ReactNode
}) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-display text-2xl font-semibold text-amber">
            {number}
          </span>
        )}
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
        {children}
      </h2>
    </div>
  )
}

function FundingInfographic() {
  const bonuses = [
    {
      value: "+ 16 %",
      title: "Klimageschwindigkeit",
      text: "bei erfülltem Heizungstausch",
    },
    {
      value: "bis 40 %",
      title: "Einkommensbonus",
      text: "abhängig vom Haushaltseinkommen",
    },
    {
      value: "+ Familie",
      title: "Höhere Einkommensgrenzen",
      text: "bei berechtigtem Kind unter 18 Jahren",
    },
  ]

  return (
    <figure className="reveal my-14 overflow-hidden rounded-2xl bg-ink text-offwhite">
      <div className="border-b border-offwhite/10 px-6 py-5 sm:px-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
              Förderlogik im Überblick
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              So kann sich die Förderung zusammensetzen.
            </h3>
          </div>
          <span className="text-xs text-offwhite/45">
            Beispiel Einfamilienhaus
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm text-offwhite/55">
              Maximal förderfähige Kosten
            </p>
            <p className="mt-2 font-display text-5xl font-semibold text-yellow">
              28.000 €
            </p>
            <div className="mt-6 border-t border-offwhite/10 pt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-offwhite/55">Grundförderung</p>
                  <p className="mt-1 font-display text-3xl font-semibold">
                    30 %
                  </p>
                </div>
                <p className="font-display text-2xl font-semibold text-yellow">
                  8.400 €
                </p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-offwhite/10">
                <div className="h-full w-[38%] rounded-full bg-yellow" />
              </div>
            </div>
          </div>

          <div className="border-t border-offwhite/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-offwhite/45">
              Mögliche Bonusbausteine
            </p>
            <div className="mt-5 divide-y divide-offwhite/10">
              {bonuses.map((bonus) => (
                <div
                  key={bonus.title}
                  className="grid grid-cols-[5.5rem_1fr] gap-4 py-4 first:pt-0"
                >
                  <p className="font-display text-2xl font-semibold text-yellow">
                    {bonus.value}
                  </p>
                  <div>
                    <p className="font-semibold">{bonus.title}</p>
                    <p className="mt-1 text-sm text-offwhite/50">
                      {bonus.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 rounded-xl bg-yellow p-6 text-graphite sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite/60">
              Gesetzliche Deckelung
            </p>
            <p className="mt-2 font-display text-2xl font-semibold">
              Auch wenn mehrere Boni greifen
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-display text-5xl font-semibold">max. 80 %</p>
            <p className="mt-1 text-sm font-semibold text-graphite/65">
              beziehungsweise 22.400 €
            </p>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-offwhite/10 px-6 py-4 text-xs leading-relaxed text-offwhite/45 sm:px-8">
        Vereinfachte Darstellung. Förderfähigkeit, Bonusbedingungen und
        Bemessungsgrenzen müssen immer anhand der aktuell gültigen
        Förderbedingungen geprüft werden.
      </figcaption>
    </figure>
  )
}

function InlineCta() {
  return (
    <div className="reveal my-16 border-y border-graphite/15 py-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Für Ihr Zuhause gerechnet
          </p>
          <p className="mt-2 max-w-xl font-display text-2xl font-semibold text-graphite">
            Pauschalen helfen bei der Orientierung. Klarheit bringt die Planung
            vor Ort.
          </p>
        </div>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Preis berechnen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function Summary() {
  return (
    <section id="kurzfassung" className="scroll-mt-28">
      <SectionHeading eyebrow="Kosten auf einen Blick">
        Was kostet eine Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Gesamtkosten einer Wärmepumpe setzen sich nicht nur aus dem Gerät
        zusammen. Speicher, Hydraulik, Elektroarbeiten, Aufstellung und Montage
        sind ebenso relevant. Für eine vollständig installierte
        Luft-Wasser-Wärmepumpe im Einfamilienhaus sind{" "}
        <strong className="font-semibold text-graphite">
          33.500 bis 36.000 Euro
        </strong>{" "}
        vor Förderung eine realistische Orientierung.
      </p>
      <div className="mt-9 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["33.500–36.000 €", "Anschaffung & Einbau"],
          ["900–1.600 €", "Strom pro Jahr"],
          ["bis zu 80 %", "mögliche Förderung"],
        ].map(([value, label], index) => (
          <div
            key={label}
            className={`py-6 sm:px-6 ${
              index > 0
                ? "border-t border-graphite/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="font-display text-3xl font-semibold text-graphite">
              {value}
            </p>
            <p className="mt-1 text-sm text-slate">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-slate">
        Alle Preisangaben sind Orientierungswerte inklusive Mehrwertsteuer.
        Gebäude, Leistung, Leitungswege und notwendige Anpassungen beeinflussen
        den tatsächlichen Preis.
      </p>
    </section>
  )
}

function Acquisition() {
  return (
    <section id="anschaffung" className="scroll-mt-28 pt-24">
      <SectionHeading number="01" eyebrow="Anschaffung">
        Wärmepumpe und ihre Anschaffungskosten
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Energiequelle, Bauart, benötigte Leistung und Hersteller bestimmen den
        Preis des eigentlichen Wärmepumpengeräts. Monoblock- und Split-Systeme
        unterscheiden sich dabei ebenso wie Luft-, Sole- und Wasser-Wärmepumpen.
      </p>

      <div className="mt-10 border-t border-graphite/15">
        {SYSTEM_PRICES.map((system) => (
          <div
            key={system.type}
            className="grid gap-2 border-b border-graphite/10 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-graphite">
                {system.type}
              </h3>
              <p className="mt-1 text-sm text-slate">{system.note}</p>
            </div>
            <p className="font-display text-2xl font-semibold text-graphite">
              {system.price}
            </p>
          </div>
        ))}
      </div>

      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={waermepumpeKostenVisual}
          alt="Fachkraft prüft die Außeneinheit einer Luft-Wasser-Wärmepumpe an einem Einfamilienhaus"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Neben dem Wärmepumpengerät beeinflussen Aufstellung, Leitungswege und
          die Einbindung in das Heizsystem die tatsächlichen Gesamtkosten.
        </figcaption>
      </figure>
    </section>
  )
}

function TotalPrice() {
  return (
    <section id="gesamtpreis" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Gesamtpreis">
        Wärmepumpe mit Einbau: Bestandteile der Anschaffungskosten
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Online wird häufig nur der Preis der Außen- und Inneneinheit verglichen.
        Damit ein Haus zuverlässig warm wird, braucht es jedoch ein abgestimmtes
        Gesamtsystem. Diese Positionen erklären, warum vollständige Angebote
        höher liegen als reine Gerätepreise.
      </p>

      <div className="mt-10">
        {COST_COMPONENTS.map((item) => (
          <div
            key={item.number}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
          >
            <span className="font-display text-xl font-semibold text-amber">
              {item.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-slate">
                {item.text}
              </p>
            </div>
            <p className="font-display text-xl font-semibold text-graphite">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="reveal mt-8 rounded-2xl bg-softblue/40 p-7">
        <p className="font-display text-2xl font-semibold text-graphite">
          Achten Sie auf vollständige Angebote.
        </p>
        <p className="mt-3 leading-relaxed text-slate">
          Bedarfspositionen und „bauseits zu stellende Leistungen“ können den
          Endpreis später deutlich erhöhen. Ein transparentes Angebot weist
          Aufstellung, Elektro, Hydraulik, Inbetriebnahme und hydraulischen
          Abgleich nachvollziehbar aus.
        </p>
      </div>
      <InlineCta />
    </section>
  )
}

function RunningCosts() {
  return (
    <section id="betrieb" className="scroll-mt-28 pt-8">
      <SectionHeading number="03" eyebrow="Laufende Kosten">
        Wärmepumpen Kosten im laufenden Betrieb
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Jahresarbeitszahl beschreibt, wie viel Wärme aus einer
        Kilowattstunde Strom entsteht. Eine gut geplante Anlage erreicht
        typischerweise eine JAZ von 3 bis 4 — also drei bis vier Kilowattstunden
        Wärme aus einer Kilowattstunde Strom.
      </p>

      <div className="my-10 grid gap-8 border-y border-graphite/15 py-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Stromkosten
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-graphite">
            900–1.600 €
          </p>
          <p className="mt-2 text-sm text-slate">
            pro Jahr im durchschnittlichen Einfamilienhaus
          </p>
        </div>
        <div className="sm:border-l sm:border-graphite/15 sm:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Wartung
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-graphite">
            180–280 €
          </p>
          <p className="mt-2 text-sm text-slate">
            pro Jahr; Schornsteinfegerkosten entfallen
          </p>
        </div>
      </div>

      <div className="reveal rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Beispielrechnung
        </p>
        <p className="mt-4 font-display text-2xl font-semibold">
          20.000 kWh Wärmebedarf ÷ 3,75 JAZ × 0,30 € Strompreis
        </p>
        <div className="mt-6 flex items-end justify-between gap-6 border-t border-offwhite/15 pt-6">
          <span className="text-offwhite/60">Geschätzte Stromkosten</span>
          <strong className="font-display text-4xl font-semibold text-yellow">
            1.600 €
          </strong>
        </div>
      </div>
    </section>
  )
}

function Funding() {
  return (
    <section id="foerderung" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Förderung">
        Fördermöglichkeiten einer Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die KfW-Förderung setzt sich aus einer Grundförderung und möglichen Boni
        zusammen. Welche Bausteine greifen, hängt unter anderem von der alten
        Heizung, der Selbstnutzung, dem Haushaltseinkommen und der persönlichen
        Situation ab.
      </p>

      <div className="mt-10 space-y-5">
        {[
          [
            "30 %",
            "Grundförderung",
            "für den Einbau einer förderfähigen Wärmepumpe",
          ],
          [
            "+ 16 %",
            "Klimageschwindigkeitsbonus",
            "beim Austausch bestimmter alter Heizungen",
          ],
          [
            "bis 40 %",
            "Einkommensbonus",
            "abhängig vom zu versteuernden Haushaltseinkommen",
          ],
          [
            "+ Familie",
            "Erhöhte Einkommensgrenzen",
            "bei mindestens einem berechtigten Kind unter 18 Jahren",
          ],
        ].map(([value, title, text]) => (
          <div
            key={title}
            className="reveal grid gap-3 border-b border-graphite/15 pb-5 sm:grid-cols-[6rem_1fr]"
          >
            <p className="font-display text-3xl font-semibold text-amber">
              {value}
            </p>
            <div>
              <h3 className="font-display text-xl font-semibold text-graphite">
                {title}
              </h3>
              <p className="mt-1 text-slate">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-9 flex gap-4 rounded-2xl bg-yellow p-6">
        <CheckIcon />
        <div>
          <p className="font-semibold text-graphite">
            Maximal 80 % beziehungsweise 22.400 Euro
          </p>
          <p className="mt-1 text-sm leading-relaxed text-graphite/70">
            Die höchste Förderstufe bezieht sich beim Einfamilienhaus auf bis zu
            28.000 Euro förderfähige Kosten und gilt nur bei erfüllten
            Einkommens- beziehungsweise Familienbedingungen. Ansonsten liegt die
            Obergrenze grundsätzlich bei 70 %.
          </p>
        </div>
      </div>

      <FundingInfographic />
    </section>
  )
}

function Economy() {
  return (
    <section id="wirtschaftlichkeit" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Wirtschaftlichkeit">
        Wirtschaftlichkeit und Amortisation der Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Ob und wann sich eine Wärmepumpe amortisiert, hängt von der alten
        Heizung, den Energiepreisen, dem Wärmebedarf und der Effizienz der neuen
        Anlage ab. Nach Förderung können die Investitionskosten nahe an denen
        einer neuen fossilen Heizung liegen — bei langfristig anderen
        Betriebskosten und ohne steigende CO₂-Abgaben auf Gas oder Öl.
      </p>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        „Die wirtschaftlichste Wärmepumpe ist nicht die günstigste Anlage,
        sondern diejenige, die präzise zum Gebäude passt.“
      </blockquote>
      <p className="leading-relaxed text-slate">
        Eine eigene Photovoltaikanlage kann den Netzbezug zusätzlich reduzieren,
        besonders bei der Warmwasserbereitung im Sommer und in den
        Übergangsmonaten. Entscheidend bleibt eine saubere Dimensionierung:
        Über- und Unterdimensionierung kosten Effizienz.
      </p>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Häufige Fragen zu Wärmepumpen Kosten
      </SectionHeading>
      <div className="mt-10 border-t border-graphite/15">
        {FAQS.map((item) => (
          <details
            key={item.q}
            className="group border-b border-graphite/15 py-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-semibold text-graphite">
              {item.q}
              <span className="text-2xl font-normal text-amber transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-2xl pt-4 leading-relaxed text-slate">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

function RelatedArticles() {
  const articles = [
    {
      label: "Förderung",
      title: "Welche Förderung gibt es für Wärmepumpen?",
      href: "/kosten/foerderung-waermepumpe",
    },
    {
      label: "Betriebskosten",
      title: "Wie viel Strom verbraucht eine Wärmepumpe?",
      href: "/kosten/waermepumpe-stromverbrauch",
    },
    {
      label: "Grundlagen",
      title: "Wie funktioniert eine Wärmepumpe?",
      href: "/wissen/wie-funktioniert-eine-warmepumpe",
    },
  ]

  return (
    <section className="border-t border-graphite/10 bg-softblue/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Weiterlesen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-graphite md:text-5xl">
            Passende Ratgeber.
          </h2>
        </div>
        <div className="knowledge-stagger mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              to={article.href}
              className="reveal group flex min-h-64 flex-col rounded-2xl border border-graphite/10 bg-offwhite p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {article.label}
              </span>
              <h3 className="mt-auto pt-12 font-display text-2xl font-semibold leading-tight text-graphite">
                {article.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-graphite">
                Artikel lesen
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function WaermepumpenKostenPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Wärmepumpen-Kosten: Anschaffung, Betrieb und Förderung | H&S"
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <ArticleHero />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
        <ArticleNavigation />
        <article className="min-w-0 max-w-3xl">
          <Summary />
          <Acquisition />
          <TotalPrice />
          <RunningCosts />
          <Funding />
          <Economy />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}

export default WaermepumpenKostenPage
