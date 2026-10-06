import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import foerderberatung from "./imports/waermepumpe-foerderberatung.webp"
import alteHeizungAustausch from "./imports/alte-heizung-austausch.webp"

const HEYFLOW_URL = "#heyflow-angebot"
const KFW_URL =
  "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-(458)/"

const CONTENTS = [
  ["prozess", "Wärmepumpen-Förderung: Prozess"],
  ["foerdersaetze", "Fördersätze 2026"],
  ["einkommen", "Einkommensbonus"],
  ["beispiele", "Drei Beispielrechnungen"],
  ["kosten", "Förderfähige Kosten"],
  ["anforderungen", "Technische Anforderungen"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const PROCESS = [
  {
    number: "01",
    title: "Fachunternehmen beauftragen",
    text: "Vor dem Antrag benötigen Sie eine Planung und einen Lieferungs- oder Leistungsvertrag mit Fördervorbehalt und geplantem Umsetzungsdatum.",
  },
  {
    number: "02",
    title: "BzA erstellen lassen",
    text: "Das Fachunternehmen oder ein Energieeffizienz-Experte erstellt die Bestätigung zum Antrag mit Anlage, Kosten und technischen Angaben.",
  },
  {
    number: "03",
    title: "Antrag selbst stellen",
    text: "Mit der BzA-ID wird der Zuschuss vor Vorhabenbeginn im Kundenportal „Meine KfW“ beantragt.",
  },
  {
    number: "04",
    title: "Zusage abwarten und umsetzen",
    text: "Nach der Förderzusage kann die Maßnahme starten. Das Vorhaben muss grundsätzlich innerhalb des Bewilligungszeitraums abgeschlossen werden.",
  },
  {
    number: "05",
    title: "Nachweise einreichen",
    text: "Nach Abschluss erstellt der Fachbetrieb die Bestätigung nach Durchführung. Rechnungen und erforderliche Nachweise werden im Portal hochgeladen.",
  },
]

const FAQS = [
  {
    q: "Wie hoch ist die Förderung für eine Wärmepumpe 2026?",
    a: "Die KfW weist eine Grundförderung von 30 Prozent aus. Selbstnutzende Eigentümer können abhängig von alter Heizung und Haushaltseinkommen zusätzliche Boni erhalten. Unter besonderen Einkommens- beziehungsweise Familienbedingungen sind maximal 80 Prozent möglich; ansonsten liegt die Obergrenze grundsätzlich bei 70 Prozent.",
  },
  {
    q: "Wie hoch sind die maximal förderfähigen Kosten?",
    a: "Für ein Einfamilienhaus berücksichtigt die KfW aktuell bis zu 28.000 Euro. Für die zweite bis sechste Wohneinheit kommen jeweils 15.000 Euro hinzu, ab der siebten Wohneinheit jeweils 8.000 Euro.",
  },
  {
    q: "Muss die Förderung vor dem Einbau beantragt werden?",
    a: "Ja. Vor Beginn der Arbeiten muss grundsätzlich eine Förderzusage vorliegen. Für den Antrag wird bereits ein Lieferungs- oder Leistungsvertrag mit aufschiebender oder auflösender Förderbedingung benötigt.",
  },
  {
    q: "Kann der Heizungsbetrieb den KfW-Antrag übernehmen?",
    a: "Der Fachbetrieb erstellt die Bestätigung zum Antrag und darf beim Prozess unterstützen. Den Antrag im Kundenportal „Meine KfW“ stellt die antragsberechtigte Person grundsätzlich selbst.",
  },
  {
    q: "Gibt es noch einen Effizienzbonus für Wärmepumpen?",
    a: "Auf der aktuell ausgewiesenen KfW-458-Produktseite ist der frühere pauschale 5-Prozent-Effizienzbonus nicht mehr als eigener Förderbaustein aufgeführt. Maßgeblich sind immer die Bedingungen zum Zeitpunkt der Antragstellung.",
  },
]

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
          Förderung prüfen
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </aside>
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
          <span className="text-amber">Förderung</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              KfW Heizungsförderung 458
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Förderung für Wärmepumpen in Deutschland
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Aktuelle Fördersätze, Einkommensgrenzen, Antragsschritte und
              Beispiele nach den seit 21.07.2026 ausgewiesenen
              KfW-458-Konditionen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Geprüft anhand KfW 458</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>10 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <a
                href={KFW_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow decoration-2 underline-offset-4"
              >
                Offizielle Quelle
              </a>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                Aktuelle Förderlogik
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-5xl font-semibold text-yellow">
                30–80 %
              </p>
              <p className="mt-2 text-sm text-offwhite/60">
                Zuschuss abhängig von Nutzung, Heizung und Einkommen
              </p>
              <ul className="mt-7 space-y-3 border-t border-offwhite/10 pt-6 text-sm text-offwhite/80">
                <li className="flex justify-between gap-4">
                  <span>Förderfähige Kosten</span>
                  <strong className="text-offwhite">bis 28.000 €</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Grundförderung</span>
                  <strong className="text-offwhite">30 %</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Maximaler Zuschuss</span>
                  <strong className="text-yellow">22.400 €</strong>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="prozess" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Antrag">
        Wärmepumpen Förderung – der Prozess
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Förderantrag beginnt vor dem Einbau. Wichtig sind ein Vertrag mit
        Förderbedingung, die Bestätigung zum Antrag und die eigene
        Antragstellung im KfW-Portal. Erst nach der Zusage darf die Umsetzung
        starten.
      </p>
      <div className="mt-10">
        {PROCESS.map((step) => (
          <div
            key={step.number}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-display text-xl font-semibold text-amber">
              {step.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={foerderberatung}
          alt="Fachberater bespricht mit einem Hauseigentümer Angebot und Förderunterlagen für eine Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Vor der Antragstellung werden Angebot, förderfähige Kosten,
          Umsetzungstermin und Förderbedingungen gemeinsam geprüft.
        </figcaption>
      </figure>
    </section>
  )
}

function FundingRates() {
  const rates = [
    {
      value: "30 %",
      title: "Grundförderung",
      text: "Für private Eigentümer einer bestehenden Wohnimmobilie beim Einbau einer förderfähigen Wärmepumpe.",
    },
    {
      value: "+ 16 %",
      title: "Klimageschwindigkeitsbonus",
      text: "Für selbstnutzende Eigentümer beim Austausch bestimmter funktionsfähiger alter Heizungen.",
    },
    {
      value: "+ 10–40 %",
      title: "Einkommensbonus",
      text: "Gestaffelt nach dem zu versteuernden Haushaltsjahreseinkommen.",
    },
  ]

  return (
    <section id="foerdersaetze" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Zuschüsse">
        Förderung Wärmepumpe – Fördersätze 2026 im Überblick
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die KfW berücksichtigt beim Einfamilienhaus derzeit maximal 28.000 Euro
        förderfähige Kosten. Die Grundförderung steht am Anfang; Boni kommen nur
        bei erfüllten persönlichen und technischen Bedingungen hinzu.
      </p>
      <div className="mt-10">
        {rates.map((rate) => (
          <div
            key={rate.title}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[8rem_1fr]"
          >
            <p className="font-display text-3xl font-semibold text-amber">
              {rate.value}
            </p>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {rate.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{rate.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-8 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
              Reguläre Obergrenze
            </p>
            <p className="mt-3 font-display text-5xl font-semibold">70 %</p>
            <p className="mt-2 text-sm text-offwhite/55">
              grundsätzlich ohne besondere Einkommens-/Familienstufe
            </p>
          </div>
          <div className="sm:border-l sm:border-offwhite/10 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
              Besondere Obergrenze
            </p>
            <p className="mt-3 font-display text-5xl font-semibold">80 %</p>
            <p className="mt-2 text-sm text-offwhite/55">
              bei den ausgewiesenen Einkommens- beziehungsweise
              Familienbedingungen
            </p>
          </div>
        </div>
      </div>

      <div className="reveal mt-8 border-l-4 border-yellow pl-5">
        <p className="font-display text-2xl font-semibold text-graphite">
          Was sich gegenüber älteren Informationen geändert hat
        </p>
        <p className="mt-3 leading-relaxed text-slate">
          Die aktuelle KfW-Seite weist 28.000 statt 30.000 Euro
          Förderhöchstkosten, 16 statt 20 Prozent Klimageschwindigkeitsbonus
          sowie neue Einkommensstaffeln aus. Ein eigener pauschaler
          5-Prozent-Effizienzbonus wird dort nicht mehr als Förderbaustein
          aufgeführt.
        </p>
      </div>
    </section>
  )
}

function IncomeBonus() {
  const rows = [
    ["bis 30.000 €", "40 %", "40 %"],
    ["30.001–40.000 €", "30 %", "40 %"],
    ["40.001–50.000 €", "10 %", "30 %"],
    ["50.001–60.000 €", "—", "10 %"],
    ["ab 60.001 €", "—", "—"],
  ]

  return (
    <section id="einkommen" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Haushaltseinkommen">
        Einkommensbonus und Familienzuschlag
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Für die selbstgenutzte Haupt- oder alleinige Wohneinheit wird der
        Einkommensbonus nach dem durchschnittlichen zu versteuernden
        Haushaltsjahreseinkommen gestaffelt. Bei mindestens einem
        kindergeldberechtigten Kind unter 18 Jahren erhöhen sich die
        Einkommensgrenzen einmalig um 10.000 Euro.
      </p>
      <div className="mt-10 overflow-x-auto border-t border-graphite/15">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-5 border-b border-graphite/15 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-greengray">
            <span>Haushaltseinkommen</span>
            <span>Ohne Kind</span>
            <span>Mit berechtigtem Kind</span>
          </div>
          {rows.map(([income, withoutChild, withChild]) => (
            <div
              key={income}
              className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-5 border-b border-graphite/10 py-5"
            >
              <strong className="text-graphite">{income}</strong>
              <span className="font-display text-xl font-semibold text-graphite">
                {withoutChild}
              </span>
              <span className="font-display text-xl font-semibold text-amber">
                {withChild}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-slate">
        Für die Einkommensermittlung gelten die KfW-Vorgaben und die
        maßgeblichen Einkommensteuerbescheide. Entscheidend ist nicht das
        Bruttoeinkommen, sondern das zu versteuernde Haushaltseinkommen.
      </p>
    </section>
  )
}

function Examples() {
  const examples = [
    {
      title: "Vermietetes Einfamilienhaus",
      rate: "30 %",
      calculation: "28.000 € × 30 %",
      result: "8.400 €",
      text: "Grundförderung ohne selbstnutzungsbezogene Boni.",
    },
    {
      title: "Selbstnutzer, Einkommen 45.000 €",
      rate: "56 %",
      calculation: "30 % + 16 % + 10 %",
      result: "15.680 €",
      text: "Beispiel mit qualifizierendem Heizungstausch und Einkommensbonus.",
    },
    {
      title: "Selbstnutzer, Einkommen 28.000 €",
      rate: "max. 80 %",
      calculation: "30 % + 16 % + 40 % → gedeckelt",
      result: "22.400 €",
      text: "Höchstmöglicher Zuschuss bei 28.000 Euro förderfähigen Kosten.",
    },
  ]

  return (
    <section id="beispiele" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Rechenbeispiele">
        Beispielrechnung einer Wärmepumpenförderung in 2026
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Beispiele vereinfachen die Förderlogik für ein Einfamilienhaus und
        unterstellen mindestens 28.000 Euro förderfähige Kosten. Die
        tatsächliche Förderhöhe hängt vom Einzelfall und der KfW-Prüfung ab.
      </p>
      <div className="mt-10 space-y-5">
        {examples.map((example) => (
          <div
            key={example.title}
            className="reveal rounded-2xl border border-graphite/10 p-7"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="font-display text-2xl font-semibold text-graphite">
                  {example.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{example.text}</p>
              </div>
              <p className="font-display text-3xl font-semibold text-amber">
                {example.rate}
              </p>
            </div>
            <div className="mt-6 flex flex-col justify-between gap-3 border-t border-graphite/10 pt-5 sm:flex-row sm:items-end">
              <p className="text-sm font-semibold text-slate">
                {example.calculation}
              </p>
              <p className="font-display text-4xl font-semibold text-graphite">
                {example.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function EligibleCosts() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-24">
      <SectionHeading number="05" eyebrow="Umfeldmaßnahmen">
        Förderfähige Kosten beim Einbau einer Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Zuschuss kann neben der Wärmepumpe auch notwendige vorbereitende und
        wiederherstellende Maßnahmen umfassen, wenn sie unmittelbar mit der
        förderfähigen Anlage zusammenhängen.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "Wärmepumpe und Speicher",
          "Montage und Inbetriebnahme",
          "Demontage der alten Heizung",
          "Notwendige Elektroarbeiten",
          "Hydraulischer Abgleich",
          "Erforderliche Heizkörperanpassungen",
          "Planung und Baubegleitung",
          "Unmittelbare Wiederherstellung",
        ].map((item) => (
          <div
            key={item}
            className="reveal flex items-center gap-3 border-b border-graphite/10 pb-4"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-yellow" />
            <span className="font-medium text-graphite">{item}</span>
          </div>
        ))}
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={alteHeizungAustausch}
          alt="Fachkräfte demontieren eine alte Heizung vor dem Einbau einer Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Die fachgerechte Demontage und Entsorgung der alten Heizung ist beim
          Klimageschwindigkeitsbonus ein wichtiger Nachweis.
        </figcaption>
      </figure>
    </section>
  )
}

function Requirements() {
  return (
    <section id="anforderungen" className="scroll-mt-28 pt-10">
      <SectionHeading number="06" eyebrow="Voraussetzungen">
        Technische Anforderungen der Wärmepumpen-Förderung
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die KfW nennt technische Mindestanforderungen und verlangt die
        Optimierung des Heizungsverteilungssystems. Die konkrete Ausführung
        bestätigt das Fachunternehmen nach Abschluss.
      </p>
      <div className="mt-10 space-y-5">
        {[
          "Hydraulischer Abgleich beziehungsweise Anpassung der Luftvolumenströme",
          "Einhaltung der technischen Mindestanforderungen des Förderprogramms",
          "Fachgerechte Demontage und Entsorgung der ersetzten Heizung bei Bonusnutzung",
          "Nachweis der ordnungsgemäßen Durchführung durch BnD",
          "Abschluss des Vorhabens innerhalb des in der Zusage genannten Zeitraums",
        ].map((item, index) => (
          <div key={item} className="reveal flex gap-4">
            <span className="font-display text-xl font-semibold text-amber">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="leading-relaxed text-slate">{item}</p>
          </div>
        ))}
      </div>
      <div className="reveal mt-10 rounded-2xl bg-softblue/40 p-7">
        <p className="font-display text-2xl font-semibold text-graphite">
          Ergänzungskredit 358/359
        </p>
        <p className="mt-3 leading-relaxed text-slate">
          Laut KfW kann der Zuschuss mit einem Ergänzungskredit zur
          Zwischenfinanzierung kombiniert werden. Der Antrag läuft über einen
          Finanzierungspartner; Konditionen und Voraussetzungen sollten
          tagesaktuell geprüft werden.
        </p>
      </div>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="07" eyebrow="Zusammenfassung">
        Fazit zur Förderung einer Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Heizungsförderung kann den Eigenanteil erheblich reduzieren. Durch
        die 2026 ausgewiesenen Änderungen sind ältere Berechnungen jedoch nicht
        mehr zuverlässig: Förderhöchstkosten, Klimabonus und Einkommensstaffeln
        haben sich verändert.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Entscheidend ist, den Antrag in der richtigen Reihenfolge zu stellen und
        den Vertrag mit der vorgeschriebenen Förderbedingung abzuschließen. Vor
        jeder Beauftragung sollten die am Antragstag geltenden KfW-Bedingungen
        erneut geprüft werden.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir planen Anlage, Kosten und Förderprozess gemeinsam.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Förderung prüfen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zur Förderung einer Wärmepumpe
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
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
    {
      label: "Betrieb",
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
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Weiterlesen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-graphite md:text-5xl">
          Passende Ratgeber.
        </h2>
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

export default function HeatPumpFundingPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Förderung Wärmepumpe 2026: KfW-Zuschuss und Antrag | H&S"
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
          <Process />
          <FundingRates />
          <IncomeBonus />
          <Examples />
          <EligibleCosts />
          <Requirements />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
