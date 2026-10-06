import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import verbrauchPruefung from "./imports/waermepumpe-verbrauch-pruefung.webp"
import waermepumpePhotovoltaik from "./imports/waermepumpe-photovoltaik.webp"

const HEYFLOW_URL = "#heyflow-angebot"

const CONTENTS = [
  ["faktoren", "Faktoren für den Stromverbrauch"],
  ["durchschnitt", "Durchschnittlicher Stromverbrauch"],
  ["berechnung", "Stromverbrauch berechnen"],
  ["einsparen", "Einsparpotenziale"],
  ["effizienz", "Effizienz & Umwelt"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const FACTORS = [
  {
    number: "01",
    title: "Heizlast des Gebäudes",
    text: "Je mehr Wärme das Haus benötigt, desto mehr Energie muss die Wärmepumpe bereitstellen.",
  },
  {
    number: "02",
    title: "Dämmstandard",
    text: "Dach, Fenster und Außenwände bestimmen, wie schnell erzeugte Wärme wieder verloren geht.",
  },
  {
    number: "03",
    title: "Vorlauftemperatur",
    text: "Niedrige Systemtemperaturen verbessern die Effizienz und reduzieren den Strombedarf.",
  },
  {
    number: "04",
    title: "Jahresarbeitszahl",
    text: "Die JAZ beschreibt das Verhältnis von erzeugter Wärme zu eingesetztem Strom über ein Jahr.",
  },
  {
    number: "05",
    title: "Warmwasser & Nutzung",
    text: "Haushaltsgröße, Raumtemperatur und Warmwasserbedarf wirken sich direkt auf den Verbrauch aus.",
  },
]

const SAVINGS = [
  {
    title: "Vorlauftemperatur optimieren",
    text: "Die Heizkurve schrittweise senken, ohne den Wohnkomfort zu beeinträchtigen.",
  },
  {
    title: "Hydraulischen Abgleich durchführen",
    text: "Den Heizwasserdurchfluss passend zu Räumen und Heizflächen einstellen.",
  },
  {
    title: "Photovoltaik intelligent nutzen",
    text: "Warmwasser und Pufferspeicher möglichst in Zeiten mit Solarertrag laden.",
  },
  {
    title: "Stromtarif prüfen",
    text: "Dynamische oder geeignete Wärmepumpentarife mit dem eigenen Lastprofil vergleichen.",
  },
  {
    title: "Gebäudehülle verbessern",
    text: "Dämmung, Fenster und Luftdichtheit reduzieren den benötigten Wärmebedarf dauerhaft.",
  },
]

const FAQS = [
  {
    q: "Wie viel Strom verbraucht eine Wärmepumpe im Jahr?",
    a: "In einem gut gedämmten Einfamilienhaus liegt der Stromverbrauch häufig bei etwa 4.500 bis 6.000 kWh pro Jahr. Der tatsächliche Wert hängt vor allem vom Wärmebedarf, der Vorlauftemperatur und der Jahresarbeitszahl ab.",
  },
  {
    q: "Wie berechnet man den Stromverbrauch einer Wärmepumpe?",
    a: "Als einfache Näherung wird der jährliche Wärmebedarf durch die erwartete Jahresarbeitszahl geteilt. Bei 18.000 kWh Wärmebedarf und einer JAZ von 3,5 ergibt das etwa 5.140 kWh Strom.",
  },
  {
    q: "Was kostet der Wärmepumpenstrom pro Jahr?",
    a: "Bei 4.500 bis 6.000 kWh Stromverbrauch und einem Strompreis von 27 bis 30 Cent pro kWh ergeben sich grob etwa 1.215 bis 1.800 Euro pro Jahr.",
  },
  {
    q: "Senkt Photovoltaik den Stromverbrauch der Wärmepumpe?",
    a: "Die Wärmepumpe benötigt dadurch nicht automatisch weniger Energie, aber ein Teil des Stroms kann selbst erzeugt werden. Besonders Warmwasserbereitung und Betrieb in den Übergangsmonaten lassen sich gut mit Solarstrom kombinieren.",
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
          Verbrauch einschätzen
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
          <span className="text-amber">Stromverbrauch</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Verbrauch &amp; Betriebskosten
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Wärmepumpe Stromverbrauch: Effizienz und Kosten im Fokus
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Wie viel Strom eine Wärmepumpe benötigt, welche Faktoren den
              Verbrauch beeinflussen und wie sich die Betriebskosten senken
              lassen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Aktualisiert 2026</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>8 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>Geprüft vom H&amp;S Meisterbetrieb</span>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                Typischer Jahresverbrauch
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-5xl font-semibold text-yellow">
                4.500–6.000 kWh
              </p>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
                pro Jahr für ein gut gedämmtes Einfamilienhaus
              </p>
              <div className="mt-7 border-t border-offwhite/10 pt-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-sm text-offwhite/55">Stromkosten</p>
                    <p className="mt-1 font-display text-3xl font-semibold">
                      1.215–1.800 €
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-yellow">
                    bei 27–30 ct/kWh
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Factors() {
  return (
    <section id="faktoren" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Einflussfaktoren">
        Faktoren, die den Stromverbrauch einer Wärmepumpe beeinflussen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Verbrauch ist keine feste Produkteigenschaft. Er entsteht aus dem
        Zusammenspiel von Gebäude, Heizsystem, Nutzung und Planung. Zwei gleiche
        Wärmepumpen können deshalb in unterschiedlichen Häusern deutlich andere
        Werte erreichen.
      </p>
      <div className="mt-10">
        {FACTORS.map((factor) => (
          <div
            key={factor.number}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-display text-xl font-semibold text-amber">
              {factor.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {factor.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-slate">
                {factor.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={verbrauchPruefung}
          alt="Fachkraft dokumentiert Betriebs- und Verbrauchswerte an der Inneneinheit einer Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Regelmäßige Kontrolle und saubere Dokumentation helfen, Betriebswerte
          einzuordnen und Optimierungspotenziale zu erkennen.
        </figcaption>
      </figure>
    </section>
  )
}

function AverageConsumption() {
  return (
    <section id="durchschnitt" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Richtwerte">
        Durchschnittlicher Wärmepumpen Stromverbrauch
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Hersteller und Praxiswerte nennen für ein gut gedämmtes Einfamilienhaus
        häufig einen jährlichen Stromverbrauch von etwa 4.500 bis 6.000 kWh.
        Entscheidend ist der individuelle Heizbedarf: Er wird durch die
        erreichbare Jahresarbeitszahl geteilt.
      </p>
      <div className="reveal my-10 overflow-hidden rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Einfache Faustformel
        </p>
        <div className="mt-6 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold">Wärmebedarf</p>
            <p className="mt-1 text-sm text-offwhite/50">kWh pro Jahr</p>
          </div>
          <span className="font-display text-3xl text-yellow">÷</span>
          <div>
            <p className="font-display text-3xl font-semibold">JAZ</p>
            <p className="mt-1 text-sm text-offwhite/50">meist 3 bis 4</p>
          </div>
          <span className="font-display text-3xl text-yellow">=</span>
          <div>
            <p className="font-display text-3xl font-semibold">Strombedarf</p>
            <p className="mt-1 text-sm text-offwhite/50">kWh pro Jahr</p>
          </div>
        </div>
      </div>
      <Link
        to="/wissen/wie-funktioniert-eine-warmepumpe"
        className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
      >
        So funktioniert der Kältekreis einer Wärmepumpe
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </section>
  )
}

function Calculation() {
  return (
    <section id="berechnung" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Beispiele">
        Stromverbrauch einer Wärmepumpe berechnen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Wenn der Wärmebedarf noch nicht bekannt ist, lässt er sich aus dem
        bisherigen Gas- oder Ölverbrauch grob annähern. Leitungsverluste und der
        Wirkungsgrad der alten Heizung werden dabei vereinfacht berücksichtigt.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="reveal rounded-2xl border border-graphite/10 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Beispiel Gas
          </p>
          <p className="mt-5 font-display text-3xl font-semibold text-graphite">
            20.000 kWh Gas
          </p>
          <div className="my-5 h-px bg-graphite/10" />
          <p className="leading-relaxed text-slate">
            Abzüglich 10 % Verluste ergeben sich rund 18.000 kWh Wärmebedarf.
            Bei einer JAZ von 3,5 benötigt die Wärmepumpe ungefähr:
          </p>
          <p className="mt-5 font-display text-4xl font-semibold text-graphite">
            5.140 kWh Strom
          </p>
        </div>
        <div className="reveal rounded-2xl border border-graphite/10 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Beispiel Heizöl
          </p>
          <p className="mt-5 font-display text-3xl font-semibold text-graphite">
            1.500 Liter Öl
          </p>
          <div className="my-5 h-px bg-graphite/10" />
          <p className="leading-relaxed text-slate">
            Vereinfacht ergeben sich nach Abzug der Verluste etwa 13.500 kWh
            Wärmebedarf. Bei einer JAZ von 3,5 benötigt die Wärmepumpe ungefähr:
          </p>
          <p className="mt-5 font-display text-4xl font-semibold text-graphite">
            3.860 kWh Strom
          </p>
        </div>
      </div>
      <div className="reveal mt-6 flex flex-col justify-between gap-5 rounded-2xl bg-yellow p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-graphite/60">
            5.140 kWh × 0,27 €/kWh
          </p>
          <p className="mt-1 font-display text-3xl font-semibold text-graphite">
            etwa 1.388 € Stromkosten pro Jahr
          </p>
        </div>
        <Link
          to="/kosten/waermepumpen-kosten"
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-graphite underline decoration-offwhite decoration-4 underline-offset-4"
        >
          Alle Wärmepumpen-Kosten
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function Savings() {
  return (
    <section id="einsparen" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Optimierung">
        Einsparpotenziale beim Stromverbrauch einer Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der größte Hebel ist ein möglichst niedriger Wärmebedarf bei einer
        optimal eingestellten Anlage. Viele Verbesserungen entstehen nicht durch
        den Austausch der Wärmepumpe, sondern durch bessere Regelung und
        abgestimmte Heizflächen.
      </p>
      <div className="mt-10">
        {SAVINGS.map((saving, index) => (
          <div
            key={saving.title}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-display text-xl font-semibold text-amber">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {saving.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{saving.text}</p>
            </div>
          </div>
        ))}
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={waermepumpePhotovoltaik}
          alt="Einfamilienhaus mit Luft-Wasser-Wärmepumpe und Photovoltaikanlage"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Photovoltaik kann einen Teil des Wärmepumpenstroms direkt am Gebäude
          erzeugen, besonders für Warmwasser und in den Übergangsmonaten.
        </figcaption>
      </figure>
    </section>
  )
}

function Efficiency() {
  return (
    <section id="effizienz" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Nachhaltigkeit">
        Effizienz und Umweltaspekte
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine moderne Wärmepumpe erzeugt aus einer Kilowattstunde Strom mehrere
        Kilowattstunden Wärme. Besonders gegenüber Öl- und Gasheizungen sinken
        damit sowohl der fossile Energieeinsatz als auch die direkten Emissionen
        am Gebäude.
      </p>
      <div className="reveal my-10 rounded-2xl bg-softblue/40 p-7 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
          Typische Effizienz
        </p>
        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
          <p className="font-display text-5xl font-semibold text-graphite">
            1 kWh Strom
          </p>
          <ArrowIcon className="h-9 w-9 rotate-90 text-amber sm:rotate-0" />
          <p className="font-display text-5xl font-semibold text-graphite">
            3–5 kWh Wärme
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-slate">
        Wie klimafreundlich der Betrieb tatsächlich ist, hängt auch vom Strommix
        ab. Ökostrom und eigener Solarstrom verbessern die Bilanz zusätzlich.
        Gleichzeitig werden fossile Heizungen durch steigende CO₂-Kosten
        langfristig teurer.
      </p>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="06" eyebrow="Zusammenfassung">
        Fazit zum Stromverbrauch einer Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Stromverbrauch einer Wärmepumpe bleibt dann niedrig, wenn Gebäude,
        Heizflächen und Anlage als Gesamtsystem geplant werden. Richtwerte von
        4.500 bis 6.000 kWh helfen bei der ersten Einordnung, ersetzen aber
        keine individuelle Heizlast- und Effizienzberechnung.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Niedrige Vorlauftemperaturen, ein hydraulischer Abgleich, passende
        Stromtarife und die Kombination mit Photovoltaik können die laufenden
        Kosten weiter reduzieren.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir berechnen Verbrauch und Leistung passend zu Ihrem Haus.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Verbrauch einschätzen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zum Wärmepumpen-Stromverbrauch
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
      label: "Grundlagen",
      title: "Wie funktioniert eine Wärmepumpe?",
      href: "/wissen/wie-funktioniert-eine-warmepumpe",
    },
    {
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
    {
      label: "Wärmepumpen-Typ",
      title: "Luft-Wasser-Wärmepumpe im Überblick",
      href: "/typen/luft-wasser-warmepumpe",
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

export default function HeatPumpElectricityPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Wärmepumpe Stromverbrauch: Effizienz und Kosten | H&S Energiesysteme"
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
          <Factors />
          <AverageConsumption />
          <Calculation />
          <Savings />
          <Efficiency />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
