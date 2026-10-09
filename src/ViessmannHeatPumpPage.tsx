import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import logoViessmann from "./imports/Viessmann_Logo.png"
import aufstellortPlanung from "./imports/luft-wasser-aufstellort-planung.webp"

const HEYFLOW_URL = "#heyflow-angebot"
const VIESSMANN_MODELS_URL =
  "https://www.viessmann.de/de/produkte/waermepumpe/vitocal-familie.html"

const CONTENTS = [
  ["warum-viessmann", "Warum eine Viessmann Wärmepumpe?"],
  ["modelle", "Vitocal-Modelle im Detail"],
  ["warentest", "Stiftung Warentest"],
  ["hersteller", "Hersteller, App & Energiemanagement"],
  ["aufstellung", "Leiser Betrieb & Aufstellung"],
  ["kosten", "Kosten & Förderung"],
  ["vorteile", "Vorteile & Nachteile"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const MODELS = [
  {
    type: "Luft-Wasser-Wärmepumpe",
    model: "Vitocal 250-A",
    range: "2,6–18,5 kW",
    bestFor: "Modernisierung und Neubau",
    features: [
      "R290-Kältemittel (Propan)",
      "Bis 70 °C Vorlauf bis −10 °C außen",
      "Monoblock mit Innen- und Außeneinheit",
      "Varianten Compact und Hybrid",
    ],
    note: "Viessmann nennt eine Nenn-Wärmeleistung von 2,6 bis 18,5 kW. Die Compact-Variante integriert einen 190-Liter-Warmwasserspeicher, die Hybrid-Variante ist für die Kombination mit einem vorhandenen Wärmeerzeuger vorgesehen.",
  },
  {
    type: "Luft-Wasser-Wärmepumpe",
    model: "Vitocal 150-A",
    range: "2,1–14,9 kW",
    bestFor: "Einstieg in die Vitocal-Luft-Wasser-Reihe",
    features: [
      "R290-Kältemittel (Propan)",
      "Bis 70 °C Vorlauf bis −10 °C außen",
      "Heizen, Kühlen und Warmwasser",
      "Varianten Compact und Hybrid",
    ],
    note: "Die Vitocal 150-A ist die Einstiegsbaureihe unterhalb der 250-A. Viessmann nennt 2,1 bis 14,9 kW Nenn-Wärmeleistung; auch hier gibt es eine Compact-Variante mit 190-Liter-Speicher sowie eine Hybrid-Variante.",
  },
  {
    type: "Sole-Wasser-Wärmepumpe",
    model: "Vitocal 300-G",
    range: "1,7–15,9 kW",
    bestFor: "Erdwärme mit Sonde oder Kollektor",
    features: [
      "Nutzt Erdwärme statt Außenluft",
      "SCOP bis 5,6 bei W35",
      "Drei modulierende Leistungsgrößen",
      "Größere Ausführung bis 42,8 kW",
    ],
    note: "Die Modulationsbereiche liegen laut Viessmann bei 1,7–8,6 kW, 2,4–11,4 kW und 3,8–15,9 kW (B0/W35). Weil die Wärmequelle das Erdreich ist, hängt die Effizienz deutlich weniger von der Außentemperatur ab – dafür kommen Kosten für Bohrung oder Kollektor hinzu.",
  },
]

const FAQS = [
  {
    q: "Welche Viessmann Wärmepumpe eignet sich für den Altbau?",
    a: "Für viele Bestandsgebäude kommt die Vitocal 250-A infrage. Viessmann gibt bis zu 70 °C Vorlauftemperatur bei Außentemperaturen bis −10 °C an. Ob diese Temperaturen überhaupt nötig sind, zeigt erst die Heizlastberechnung und die Prüfung der vorhandenen Heizkörper.",
  },
  {
    q: "Was ist der Unterschied zwischen Vitocal 150-A und 250-A?",
    a: "Beide Baureihen sind Luft-Wasser-Wärmepumpen mit R290 und bis zu 70 °C Vorlauftemperatur. Die 150-A ist die Einstiegsbaureihe mit 2,1 bis 14,9 kW, die 250-A reicht laut Viessmann von 2,6 bis 18,5 kW und ist das Modell, das bei der Stiftung Warentest zweimal Testsieger wurde.",
  },
  {
    q: "Wie hat die Vitocal 250-A bei der Stiftung Warentest abgeschnitten?",
    a: "Im Test 2023 erhielt die Vitocal 250-A die Note „Gut“ (2,1), in Ausgabe 10/2025 erneut „Gut“ (2,0). In beiden Tests war sie Testsieger. Das Prüfprogramm wurde 2025 deutlich verändert, die Noten der beiden Jahre sind daher nicht direkt vergleichbar.",
  },
  {
    q: "Gehört Viessmann inzwischen zu Carrier?",
    a: "Ja. Die Sparte Viessmann Climate Solutions, zu der die Wärmepumpen gehören, wurde am 2. Januar 2024 vom US-Konzern Carrier Global übernommen. Die Marke Viessmann und die Vitocal-Produkte werden weitergeführt.",
  },
  {
    q: "Kann eine Viessmann Wärmepumpe mit Photovoltaik kombiniert werden?",
    a: "Ja. Viessmann bietet über die ViCare App und das eigene Energiemanagement eine Einbindung von PV-Anlage und Stromspeicher an. Welche Komponenten konkret nötig sind und wie hoch der Eigenverbrauch wird, klären wir bei der Planung.",
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
          Viessmann Angebot anfragen
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
          <span className="text-amber">Hersteller</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Hersteller-Ratgeber
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Viessmann Wärmepumpe: Vitocal-Modelle im Überblick
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Aktuelle Viessmann Wärmepumpen im Vergleich: Vitocal 250-A, 150-A
              und 300-G, Testergebnisse, Schallwerte, Kosten und Förderung sowie
              Vor- und Nachteile.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Produktangaben geprüft</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>10 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <a
                href={VIESSMANN_MODELS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow decoration-2 underline-offset-4"
              >
                Viessmann Produktübersicht
              </a>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl border border-graphite/10 bg-offwhite shadow-2xl shadow-graphite/10">
            <div className="flex min-h-36 items-center justify-center border-b border-graphite/10 p-8">
              <img
                src={logoViessmann}
                alt="Viessmann Logo"
                className="h-14 max-w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2">
              {[
                ["2,1–18,5 kW", "Luft-Wasser 150-A und 250-A"],
                ["R290", "bei 150-A und 250-A"],
                ["bis 70 °C", "Vorlauf bis −10 °C außen"],
                ["„Gut“ (2,0)", "Vitocal 250-A, test 10/2025"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`p-5 ${
                    index % 2 === 1 ? "border-l border-graphite/10" : ""
                  } ${index > 1 ? "border-t border-graphite/10" : ""}`}
                >
                  <p className="font-display text-2xl font-semibold text-graphite">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-slate">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function VisualBrief({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <figure className="reveal my-14 overflow-hidden rounded-2xl border border-dashed border-amber/50 bg-yellow/10">
      <div className="grid min-h-80 place-items-center p-8 text-center">
        <div className="max-w-2xl">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-2xl text-graphite">
            +
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Bild benötigt · Querformat 16:9
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-graphite">
            {title}
          </h3>
          <p className="mt-3 leading-relaxed text-slate">{description}</p>
        </div>
      </div>
    </figure>
  )
}

function WhyViessmann() {
  return (
    <section id="warum-viessmann" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Überblick">
        Warum eine Viessmann Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Viessmann bündelt seine Wärmepumpen in der Vitocal-Familie. Für
        Einfamilienhäuser stehen vor allem die Luft-Wasser-Baureihen Vitocal
        250-A und 150-A im Mittelpunkt, ergänzt durch die Sole-Wasser-Wärmepumpe
        Vitocal 300-G für Erdwärme. Die Luft-Wasser-Modelle arbeiten mit dem
        natürlichen Kältemittel R290 und erreichen laut Hersteller bis zu 70 °C
        Vorlauftemperatur – ein wichtiger Punkt bei der Modernisierung von
        Bestandsgebäuden.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "Luft-Wasser und Sole-Wasser im Programm",
          "R290 bei Vitocal 150-A und 250-A",
          "Bis 70 °C Vorlauftemperatur",
          "Zweifacher Testsieger: Vitocal 250-A",
          "Bedienung über die ViCare App",
          "Einbindung von Photovoltaik möglich",
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
      <VisualBrief
        title="Viessmann Luft-Wasser-Wärmepumpe am Einfamilienhaus"
        description="Professionell installierte Monoblock-Außeneinheit in heller Gehäuseoptik auf einem Betonfundament vor einem modernisierten Einfamilienhaus mit Putzfassade in NRW. Eine H&S Fachkraft in dunkler Arbeitskleidung prüft den Kondensatablauf und die gedämmte Hauseinführung. Das Gerät bleibt ohne künstlich erzeugtes Markenlogo; das Viessmann-Logo wird später im Layout ergänzt."
      />
    </section>
  )
}

function Models() {
  return (
    <section id="modelle" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Modellvergleich">
        Die Viessmann Vitocal-Wärmepumpen im Detail
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Modellwahl richtet sich nicht nur nach der Wohnfläche. Heizlast,
        Vorlauftemperatur, verfügbare Wärmequelle, Schallanforderungen und
        Aufstellort entscheiden, ob eine Luft-Wasser- oder eine
        Sole-Wasser-Wärmepumpe sinnvoller ist.
      </p>
      <div className="mt-10 space-y-6">
        {MODELS.map((model) => (
          <article
            key={model.model}
            className="reveal overflow-hidden rounded-2xl border border-graphite/10"
          >
            <div className="grid gap-5 border-b border-graphite/10 bg-softblue/30 p-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  Viessmann {model.type}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-graphite">
                  {model.model}
                </h3>
                <p className="mt-2 text-sm text-slate">{model.bestFor}</p>
              </div>
              <p className="font-display text-3xl font-semibold text-graphite">
                {model.range}
              </p>
            </div>
            <div className="p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {model.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-yellow" />
                    <span className="text-sm font-medium text-graphite">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-graphite/10 pt-5 text-sm leading-relaxed text-slate">
                {model.note}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-slate">
        Leistungs-, Temperatur- und Effizienzwerte stammen aus der aktuellen
        Viessmann-Produktdarstellung. Exakte Werte unterscheiden sich je
        Leistungsgröße, Variante und Betriebspunkt.
      </p>
    </section>
  )
}

function TestResults() {
  return (
    <section id="warentest" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Unabhängige Tests">
        Stiftung Warentest: Vitocal 250-A zweimal Testsieger
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Luft-Wasser-Wärmepumpe Vitocal 250-A wurde von der Stiftung
        Warentest zweimal geprüft und war beide Male Testsieger. Im Test 2023
        erhielt sie die Note „Gut“ (2,1), in Ausgabe 10/2025 erneut „Gut“
        (2,0). Viessmann hebt dabei die Bestnote 1,0 für die Handhabung hervor.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-2">
        {[
          ["„Gut“ (2,1)", "Testsieger 2023"],
          ["„Gut“ (2,0)", "Testsieger Ausgabe 10/2025"],
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
      <p className="leading-relaxed text-slate">
        Wichtig für die Einordnung: Das Prüfprogramm wurde 2025 deutlich
        überarbeitet, die Ergebnisse der beiden Jahre sind daher nicht direkt
        vergleichbar. Ein Testurteil bezieht sich außerdem immer auf eine
        bestimmte Leistungsgröße unter Prüfbedingungen – wie effizient eine
        Wärmepumpe im eigenen Haus arbeitet, hängt vor allem von Auslegung,
        Hydraulik und Einstellung ab.
      </p>
    </section>
  )
}

function Manufacturer() {
  return (
    <section id="hersteller" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Hersteller">
        Viessmann heute: Carrier, ViCare und Energiemanagement
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Viessmann ist ein traditionsreicher Heiztechnik-Hersteller aus
        Allendorf (Eder). Seit dem 2. Januar 2024 gehört die Sparte Viessmann
        Climate Solutions – und damit auch das Wärmepumpengeschäft – zum
        US-Konzern Carrier Global. Marke, Produktnamen und das
        Fachpartner-Vertriebsmodell bleiben bestehen.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Bedient werden die Vitocal-Wärmepumpen über die ViCare App. Über das
        Viessmann-Energiemanagement lassen sich zudem eine Photovoltaikanlage
        und ein Stromspeicher einbinden, damit die Wärmepumpe bevorzugt mit
        eigenem Solarstrom arbeitet. Welche Zusatzkomponenten dafür im Einzelfall
        nötig sind, hängt von der vorhandenen Anlage ab.
      </p>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        Entscheidend ist nicht der Testsieger, sondern die Baureihe, die bei
        Heizlast, Temperatur und Aufstellung zum Gebäude passt.
      </blockquote>
    </section>
  )
}

function Placement() {
  return (
    <section id="aufstellung" className="scroll-mt-28 pt-16">
      <SectionHeading number="05" eyebrow="Aufstellung">
        Leiser Betrieb: Viessmann Wärmepumpe richtig aufstellen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Für die Vitocal 250-A gibt Viessmann einen schallreduzierten
        Nachtbetrieb an. In dichter Bebauung zählt trotzdem nicht nur der
        Herstellerwert: Abstand, Ausblasrichtung, Mauern, Ecken und harte
        Reflexionsflächen beeinflussen, wie Schall am Nachbargrundstück
        ankommt. Deshalb planen wir den Aufstellort immer vor Ort.
      </p>
      <div className="reveal mt-10 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Viessmann Herstellerangabe Vitocal 250-A
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-5xl font-semibold">35 dB(A)</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Schalldruck in 4 m Entfernung im schallreduzierten Nachtbetrieb
            </p>
          </div>
          <div className="sm:border-l sm:border-offwhite/10 sm:pl-8">
            <p className="font-display text-5xl font-semibold">70 °C</p>
            <p className="mt-2 text-sm text-offwhite/55">
              max. Vorlauftemperatur bei Außentemperaturen bis −10 °C
            </p>
          </div>
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={aufstellortPlanung}
          alt="H&S Fachkraft misst an einem Einfamilienhaus den möglichen Aufstellort einer Luft-Wasser-Wärmepumpe aus"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Vor der Montage werden Abstände zu Fenstern, Grundstücksgrenze und
          Reflexionsflächen am konkreten Aufstellort gemessen.
        </figcaption>
      </figure>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="06" eyebrow="Investition">
        Kosten und Förderung der Viessmann Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Was eine Viessmann Wärmepumpe mit Einbau kostet, hängt von Baureihe,
        Leistungsgröße, Speicher, Elektroarbeiten, Hydraulik und Aufstellung
        ab. Bei der Sole-Wasser-Wärmepumpe Vitocal 300-G kommen die Kosten für
        Erdsonde oder Kollektor hinzu. Einen belastbaren Preis nennen wir nach
        Planung und Aufmaß vor Ort.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Für den Heizungstausch im Bestand gibt es die KfW-Heizungsförderung
        (Programm 458, Stand 21.07.2026): 30 % Grundförderung, für
        selbstnutzende Eigentümer beim Austausch bestimmter alter Heizungen
        16 % Klimageschwindigkeitsbonus und
        einkommensabhängig 10–40 % Einkommensbonus. Der Fördersatz ist
        grundsätzlich auf 70 % begrenzt, unter besonderen Einkommens- bzw.
        Familienbedingungen auf 80 %.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["bis 28.000 €", "förderfähige Kosten EFH"],
          ["30 %", "Grundförderung KfW 458"],
          ["bis 22.400 €", "max. Zuschuss bei 80 %"],
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
      <div className="flex flex-wrap gap-4">
        <Link
          to="/kosten/waermepumpen-kosten"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Wärmepumpen-Kosten im Detail
          <ArrowIcon className="h-4 w-4" />
        </Link>
        <Link
          to="/kosten/foerderung-waermepumpe"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Aktuelle KfW-Förderung
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function ProsAndCons() {
  return (
    <section id="vorteile" className="scroll-mt-28 pt-24">
      <SectionHeading number="07" eyebrow="Einordnung">
        Vorteile und Nachteile einer Viessmann Wärmepumpe
      </SectionHeading>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Vorteile
          </p>
          <ul className="mt-5 space-y-4">
            {[
              "Vitocal 250-A zweimal Testsieger der Stiftung Warentest",
              "R290 bei den Luft-Wasser-Baureihen 150-A und 250-A",
              "Bis 70 °C Vorlauf – interessant für die Sanierung",
              "Luft- und Erdwärme aus einer Produktfamilie",
              "App-Bedienung und PV-Einbindung über ViCare",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-slate">
                <span className="font-semibold text-amber">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:border-l sm:border-graphite/15 sm:pl-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Zu beachten
          </p>
          <ul className="mt-5 space-y-4">
            {[
              "Modell und Leistungsgröße müssen exakt geplant werden",
              "Leiser Nachtbetrieb ersetzt keine Schallplanung",
              "Hohe Vorlauftemperaturen können die Effizienz reduzieren",
              "Energiemanagement kann Zusatzkomponenten erfordern",
              "Sole-Wasser-Lösungen benötigen Bohrung oder Kollektor",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-slate">
                <span className="font-semibold text-amber">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="08" eyebrow="Zusammenfassung">
        Fazit: Viessmann Wärmepumpe – die passende Vitocal entscheidet
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Viessmann bietet ein klar gegliedertes Portfolio: Die Vitocal 250-A
        überzeugt mit zwei Testsiegen, R290 und bis zu 70 °C Vorlauf, die
        Vitocal 150-A ist die Einstiegsbaureihe mit gleichem Kältemittel, und
        die Vitocal 300-G erschließt Erdwärme für Häuser, in denen eine Bohrung
        oder ein Kollektor möglich ist.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Welche Viessmann Wärmepumpe wirtschaftlich arbeitet, entscheidet sich
        erst nach Heizlastberechnung, Prüfung der Heizflächen und Planung des
        Aufstellorts.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir vergleichen die Vitocal-Baureihen für Ihr Gebäude.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Viessmann Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zu Viessmann Wärmepumpen
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
      label: "Förderung",
      title: "Aktuelle Förderung für Wärmepumpen",
      href: "/kosten/foerderung-waermepumpe",
    },
    {
      label: "Hersteller",
      title: "Bosch Wärmepumpe im Vergleich",
      href: "/hersteller/bosch-waermepumpe",
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

export default function ViessmannHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Viessmann Wärmepumpe: Vitocal-Modelle, Kosten und Test | H&S Energiesysteme"
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
          <WhyViessmann />
          <Models />
          <TestResults />
          <Manufacturer />
          <Placement />
          <Costs />
          <ProsAndCons />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
