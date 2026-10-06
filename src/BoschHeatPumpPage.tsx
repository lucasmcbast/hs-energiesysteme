import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import logoBosch from "./imports/Bosch_Logo.png"
import boschSchallmessung from "./imports/bosch-waermepumpe-schallmessung.webp"

const HEYFLOW_URL = "#heyflow-angebot"
const BOSCH_MODELS_URL =
  "https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/luft-wasser-waermepumpen-854511-c/"

const CONTENTS = [
  ["warum-bosch", "Warum eine Bosch Wärmepumpe?"],
  ["modelle", "Bosch Wärmepumpen im Detail"],
  ["geschichte", "Innovation & Geschichte"],
  ["reihenhaus", "Bosch im Reihenhaus"],
  ["kosten", "Kosten & Förderung"],
  ["vorteile", "Vorteile & Nachteile"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const MODELS = [
  {
    model: "Compress 5800i AW",
    range: "3,9–11,6 kW",
    bestFor: "Neubau und geräuschsensible Lagen",
    features: [
      "R290-Kältemittel",
      "SCOP bis 4,6 bei A7/W35",
      "Boschs leiseste Wärmepumpe",
      "App-Steuerung möglich",
    ],
    note: "Bosch nennt 46 dB(A) Schallleistung im Nachtmodus und 28,5 dB(A) Schalldruck in drei Metern Entfernung unter den angegebenen Messbedingungen.",
  },
  {
    model: "Compress 6800i AW",
    range: "3,9–11,6 kW",
    bestFor: "Sanierung und Neubau",
    features: [
      "R290-Kältemittel",
      "Hohe Vorlauftemperatur",
      "Kompakte Innen- und Außeneinheiten",
      "Heizen, Warmwasser und Kühlen",
    ],
    note: "Die flexible Systemlösung ist laut Bosch für Ein- und Mehrfamilienhäuser sowie den Austausch vorhandener Heizungsanlagen konzipiert.",
  },
  {
    model: "Compress 3800i AW",
    range: "4–13 kW",
    bestFor: "Breites Einsatzspektrum",
    features: [
      "R290-Kältemittel",
      "Bis Energieeffizienzklasse A+++",
      "Kleine und große Außeneinheit",
      "HomeCom Easy kompatibel",
    ],
    note: "Die Baureihe deckt mit fünf Leistungsgrößen unterschiedliche Gebäude- und Heizlastsituationen ab.",
  },
  {
    model: "Compress 8800i AW",
    range: "11–15 kW",
    bestFor: "Ältere Gebäude und höhere Heizlast",
    features: [
      "Bis 75 °C Vorlauftemperatur",
      "A+++ auch bei 55 °C",
      "R290-Kältemittel",
      "Kaskadierbar bis 45 kW",
    ],
    note: "Bosch positioniert die Baureihe für den Austausch von Gas- oder Ölheizungen in älteren Ein- und Mehrfamilienhäusern.",
  },
]

const FAQS = [
  {
    q: "Welche Bosch Wärmepumpe ist für den Altbau geeignet?",
    a: "Für viele sanierte Bestandsgebäude kommen die Compress 6800i AW oder 3800i AW infrage. Bei höherer Heizlast und hohen notwendigen Vorlauftemperaturen positioniert Bosch die Compress 8800i AW als Lösung für ältere Gebäude. Entscheidend bleibt eine individuelle Heizlastberechnung.",
  },
  {
    q: "Wie leise ist die Bosch Compress 5800i AW?",
    a: "Bosch bezeichnet sie als leiseste Wärmepumpe im eigenen Sortiment. Genannt werden 46 dB(A) Schallleistung im Nachtmodus und 28,5 dB(A) Schalldruck in drei Metern Entfernung. Für die Aufstellung zählen trotzdem Grundstück, Reflexionsflächen und Nachbarabstände.",
  },
  {
    q: "Was kostet eine Bosch Wärmepumpe mit Einbau?",
    a: "Die ursprüngliche H&S-Seite nennt einen Einstieg ab ungefähr 28.000 Euro. Vollständige Projekte liegen abhängig von Modell, Speicher, Elektroarbeiten, Hydraulik und Gebäudesituation häufig höher. Ein belastbarer Preis entsteht erst nach Planung und Aufmaß.",
  },
  {
    q: "Nutzen Bosch Wärmepumpen R290?",
    a: "Die aktuellen Baureihen Compress 3800i, 5800i, 6800i und 8800i AW werden von Bosch mit dem natürlichen Kältemittel R290 ausgewiesen.",
  },
  {
    q: "Kann eine Bosch Wärmepumpe mit Photovoltaik kombiniert werden?",
    a: "Ja. Bosch bietet einen optionalen Energiemanager zur Einbindung eigener Solarenergie an. Wie hoch der Eigenverbrauchsanteil wird, hängt von PV-Leistung, Speicherstrategie und Wärmebedarf ab.",
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
          Bosch Angebot anfragen
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
          <a href="/" className="transition-colors hover:text-graphite">
            Startseite
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="/wissen-und-infos"
            className="transition-colors hover:text-graphite"
          >
            Wissen
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-amber">Hersteller</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Hersteller-Ratgeber
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Bosch Wärmepumpe: effizient, leise und vielseitig
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Aktuelle Bosch Luft-Wasser-Wärmepumpen im Vergleich: Modelle,
              Einsatzbereiche, technische Unterschiede, Kosten sowie Vor- und
              Nachteile.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Produktangaben geprüft</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>10 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <a
                href={BOSCH_MODELS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow decoration-2 underline-offset-4"
              >
                Bosch Produktübersicht
              </a>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl border border-graphite/10 bg-offwhite shadow-2xl shadow-graphite/10">
            <div className="flex min-h-36 items-center justify-center border-b border-graphite/10 p-8">
              <img
                src={logoBosch}
                alt="Bosch Logo"
                className="h-14 max-w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2">
              {[
                ["4", "aktuelle Baureihen"],
                ["3,9–15 kW", "Auswahl im Vergleich"],
                ["R290", "bei allen Modellen"],
                ["bis 75 °C", "Vorlauf mit 8800i AW"],
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

function WhyBosch() {
  return (
    <section id="warum-bosch" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Überblick">
        Warum eine Bosch Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Bosch deckt mit mehreren Luft-Wasser-Baureihen unterschiedliche
        Leistungs- und Temperaturniveaus ab. Die aktuellen Modelle kombinieren
        R290, digitale Regelung und Varianten für Neubau, Sanierung sowie
        Gebäude mit höherer Heizlast.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "Breites Leistungsspektrum",
          "R290 in den aktuellen Baureihen",
          "Leise Betriebsmodi",
          "Heizen, Warmwasser und teilweise Kühlen",
          "HomeCom Easy App möglich",
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
        title="Bosch Wärmepumpe im realen Wohnumfeld"
        description="Professionell installierte, dunkelgraue Luft-Wasser-Wärmepumpe an einem modernen deutschen Einfamilienhaus. Eine H&S Fachkraft kontrolliert Fundament, Kondensatbereich und Hauseinführung. Das Gerät bleibt ohne künstlich erzeugtes Markenlogo; das Bosch-Logo wird später im Layout ergänzt."
      />
    </section>
  )
}

function Models() {
  return (
    <section id="modelle" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Modellvergleich">
        Die Bosch Luft-Wasser-Wärmepumpen im Detail
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Modellwahl richtet sich nicht nur nach der Wohnfläche. Heizlast,
        Vorlauftemperatur, Schallanforderungen, Aufstellort und gewünschte
        Systemeinbindung sind für die Planung entscheidend.
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
                  Bosch Luft-Wasser-Wärmepumpe
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
        Leistungs-, Effizienz- und Schallwerte stammen aus der aktuellen
        Bosch-Produktdarstellung. Exakte Werte unterscheiden sich je
        Leistungsgröße und Messbedingung.
      </p>
    </section>
  )
}

function History() {
  return (
    <section id="geschichte" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Hersteller">
        Innovation und Geschichte der Bosch Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Bosch beschäftigt sich seit Jahrzehnten mit Wärmepumpentechnik und hat
        das Portfolio über Entwicklung, Produktion und die Integration von IVT
        aus Schweden erweitert. Heute reicht das Angebot von kompakten
        Einfamilienhauslösungen bis zu leistungsstarken und kaskadierbaren
        Systemen.
      </p>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        Entscheidend ist nicht das größte Modell, sondern die Baureihe, die bei
        Heizlast, Temperatur und Aufstellung zum Gebäude passt.
      </blockquote>
    </section>
  )
}

function RowHouse() {
  return (
    <section id="reihenhaus" className="scroll-mt-28 pt-16">
      <SectionHeading number="04" eyebrow="Aufstellung">
        Bosch Wärmepumpe im Reihenhaus: leiser Betrieb richtig geplant
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        In enger Bebauung zählt nicht nur der Herstellerwert. Abstand,
        Ausblasrichtung, Mauern, Ecken und harte Reflexionsflächen beeinflussen,
        wie Schall am Nachbargrundstück ankommt. Die Compress 5800i AW bietet
        dafür einen schalloptimierten Nachtmodus, ersetzt aber keine
        standortbezogene Planung.
      </p>
      <div className="reveal mt-10 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Bosch Herstellerangabe 5800i AW
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-5xl font-semibold">46 dB(A)</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Schallleistung im Nachtmodus
            </p>
          </div>
          <div className="sm:border-l sm:border-offwhite/10 sm:pl-8">
            <p className="font-display text-5xl font-semibold">28,5 dB(A)</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Schalldruck in 3 m Entfernung
            </p>
          </div>
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={boschSchallmessung}
          alt="Fachkraft misst den Schallpegel einer Bosch Wärmepumpe in einer Reihenhaussiedlung"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Bei enger Wohnbebauung wird die Schallsituation am konkreten
          Aufstellort geprüft – einschließlich Abstand, Ausblasrichtung und
          möglicher Reflexionsflächen.
        </figcaption>
      </figure>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Investition">
        Kosten und Förderung der Bosch Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die ursprüngliche H&amp;S-Seite nennt Bosch-Komplettanlagen ab etwa
        28.000 Euro. Der tatsächliche Gesamtpreis hängt jedoch von Baureihe,
        Leistung, Speicher, Elektroarbeiten, Hydraulik, Aufstellung und
        notwendigen Anpassungen am Gebäude ab.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["ab ca. 28.000 €", "möglicher Einstieg"],
          ["bis 28.000 €", "förderfähige Kosten EFH"],
          ["bis 80 %", "unter besonderen Bedingungen"],
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
        <a
          href="/kosten/waermepumpen-kosten"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Wärmepumpen-Kosten im Detail
          <ArrowIcon className="h-4 w-4" />
        </a>
        <a
          href="/kosten/foerderung-waermepumpe"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Aktuelle KfW-Förderung
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function ProsAndCons() {
  return (
    <section id="vorteile" className="scroll-mt-28 pt-24">
      <SectionHeading number="06" eyebrow="Einordnung">
        Vorteile und Nachteile einer Bosch Wärmepumpe
      </SectionHeading>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Vorteile
          </p>
          <ul className="mt-5 space-y-4">
            {[
              "Mehrere Baureihen für unterschiedliche Heizlasten",
              "R290 bei den aktuellen Modellen im Vergleich",
              "Leise Lösung mit Compress 5800i AW",
              "Hohe Vorlauftemperatur mit Compress 8800i AW",
              "App- und PV-Integration im Bosch-System möglich",
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
              "Leiser Betrieb ersetzt keine Schallplanung",
              "Hohe Vorlauftemperaturen können die Effizienz reduzieren",
              "App- und Energiemanagement benötigen optionale Komponenten",
              "Gesamtkosten hängen stark von Hydraulik und Gebäude ab",
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
      <SectionHeading number="07" eyebrow="Zusammenfassung">
        Fazit: Bosch Wärmepumpe – die passende Baureihe entscheidet
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Bosch bietet ein breites aktuelles Portfolio: Die 5800i AW setzt den
        Schwerpunkt auf besonders leisen Betrieb, die 6800i AW auf flexible
        Sanierung, die 3800i AW auf ein breites Leistungsspektrum und die 8800i
        AW auf höhere Heizlasten und Vorlauftemperaturen.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Welche Bosch Wärmepumpe wirtschaftlich arbeitet, entscheidet sich erst
        nach Heizlastberechnung, Prüfung der Heizflächen und Planung des
        Aufstellorts.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir vergleichen die Bosch-Baureihen für Ihr Gebäude.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Bosch Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zu Bosch Wärmepumpen
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
            <a
              key={article.href}
              href={article.href}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BoschHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Bosch Wärmepumpe: Modelle, Kosten und Vorteile | H&S Energiesysteme"
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
          <WhyBosch />
          <Models />
          <History />
          <RowHouse />
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
