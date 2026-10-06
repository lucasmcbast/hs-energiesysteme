import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import monoblockBeratung from "./imports/monoblock-waermepumpe-beratung.webp"
import erdwaermeBohrung from "./imports/erdwaerme-bohrung.webp"

const HEYFLOW_URL = "#heyflow-angebot"

const CONTENTS = [
  ["grundprinzip", "Grundprinzip der Wärmepumpe"],
  ["monoblock", "Monoblock Luft-Wasser"],
  ["split", "Split Wärmepumpen"],
  ["erdwaerme", "Erdwärmepumpen"],
  ["vergleich", "Vor- und Nachteile"],
  ["effizienz", "Umwelt & Energieeffizienz"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const CYCLE = [
  {
    number: "01",
    title: "Verdampfen",
    text: "Das Kältemittel nimmt Umweltwärme auf und wird gasförmig.",
    detail: "Verdampfer",
  },
  {
    number: "02",
    title: "Verdichten",
    text: "Der Verdichter erhöht Druck und Temperatur des Kältemittels.",
    detail: "Kompressor",
  },
  {
    number: "03",
    title: "Verflüssigen",
    text: "Die Wärme wird über einen Wärmetauscher an das Heizwasser abgegeben.",
    detail: "Verflüssiger",
  },
  {
    number: "04",
    title: "Entspannen",
    text: "Das Kältemittel kühlt ab und der Kreislauf beginnt von vorn.",
    detail: "Expansionsventil",
  },
]

const TYPE_COMPARISON = [
  {
    type: "Monoblock",
    source: "Außenluft",
    strength: "Einfacher, geschlossener Kältekreis",
    consideration: "Fundament und frostsichere Leitungsführung",
  },
  {
    type: "Split",
    source: "Außenluft",
    strength: "Flexible Platzierung und schlanke Leitungen",
    consideration: "Kältemittelleitungen durch Fachbetrieb",
  },
  {
    type: "Erdwärme",
    source: "Erdreich",
    strength: "Sehr hohe, konstante Effizienz",
    consideration: "Bohrung oder Flächenkollektor erforderlich",
  },
]

const FAQS = [
  {
    q: "Wie funktioniert eine Wärmepumpe einfach erklärt?",
    a: "Eine Wärmepumpe entzieht Luft, Erdreich oder Wasser Umweltwärme. Ein Kältemittel nimmt diese Energie auf, ein Verdichter erhöht die Temperatur und ein Wärmetauscher überträgt die Wärme auf das Heizungswasser.",
  },
  {
    q: "Funktioniert eine Wärmepumpe auch im Winter?",
    a: "Ja. Selbst kalte Außenluft enthält nutzbare Wärmeenergie. Entscheidend sind eine passende Dimensionierung, die notwendige Vorlauftemperatur und die Effizienz der gewählten Anlage.",
  },
  {
    q: "Was bedeutet eine JAZ von 3 bis 4?",
    a: "Eine Jahresarbeitszahl von 3 bis 4 bedeutet, dass die Wärmepumpe über ein Jahr betrachtet aus einer Kilowattstunde Strom ungefähr drei bis vier Kilowattstunden Wärme erzeugt.",
  },
  {
    q: "Was ist besser: Monoblock oder Split?",
    a: "Das hängt vom Gebäude und der Einbausituation ab. Monoblock-Geräte haben einen geschlossenen Kältekreis in der Außeneinheit. Split-Geräte verbinden Außen- und Inneneinheit über Kältemittelleitungen und erlauben häufig flexiblere Leitungswege.",
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
          Wärmepumpe anfragen
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
          <span className="text-amber">Funktionsweise</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Grundlagen &amp; Technik
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Wie funktioniert eine Wärmepumpe?
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Ein verständlicher Blick auf den Kältekreis und die Unterschiede
              zwischen Monoblock-, Split- und Erdwärmepumpen.
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
                Kurz erklärt
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-3xl font-semibold leading-tight">
                Umweltwärme wird zu Heizwärme.
              </p>
              <div className="mt-7 space-y-4 border-t border-offwhite/10 pt-6">
                {[
                  ["01", "Wärme aus Luft, Erde oder Wasser aufnehmen"],
                  ["02", "Temperatur im Kältekreis anheben"],
                  ["03", "Wärme an Heizung und Warmwasser abgeben"],
                ].map(([number, text]) => (
                  <div key={number} className="flex gap-4">
                    <span className="font-display text-xl font-semibold text-yellow">
                      {number}
                    </span>
                    <p className="text-sm leading-relaxed text-offwhite/70">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Principle() {
  return (
    <section id="grundprinzip" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Funktionsweise">
        Grundprinzip der Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Das Prinzip ähnelt einem Kühlschrank — nur umgekehrt. Während der
        Kühlschrank Wärme von innen nach außen transportiert, entzieht die
        Wärmepumpe der Umgebung Energie und gibt sie als nutzbare Wärme an das
        Gebäude ab.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Der Name verrät dabei Quelle und Ziel: Eine Luft-Wasser-Wärmepumpe nutzt
        Energie aus der Außenluft und überträgt sie auf Heizungs- oder
        Brauchwasser. Möglich macht das der geschlossene Kältekreis.
      </p>

      <div className="reveal my-12 overflow-hidden rounded-2xl bg-ink p-6 text-offwhite sm:p-8">
        <div className="flex flex-col justify-between gap-3 border-b border-offwhite/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
              Der Kältekreis
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold">
              Vier Schritte, ein Kreislauf.
            </h3>
          </div>
          <p className="text-sm text-offwhite/45">läuft kontinuierlich</p>
        </div>
        <div className="knowledge-stagger mt-3 grid sm:grid-cols-2">
          {CYCLE.map((step, index) => (
            <div
              key={step.number}
              className={`reveal relative p-5 sm:p-6 ${
                index % 2 === 1 ? "sm:border-l sm:border-offwhite/10" : ""
              } ${index > 1 ? "border-t border-offwhite/10" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold text-yellow">
                  {step.number}
                </span>
                <span className="text-xs text-offwhite/35">{step.detail}</span>
              </div>
              <h4 className="mt-8 font-display text-2xl font-semibold">
                {step.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="leading-relaxed text-slate">
        Das erwärmte Heizungswasser fließt anschließend zur Inneneinheit. Von
        dort wird es direkt in die Heizkreise oder zunächst in einen Puffer-
        bzw. Warmwasserspeicher geleitet.
      </p>
    </section>
  )
}

function Monoblock() {
  return (
    <section id="monoblock" className="scroll-mt-28 pt-24">
      <SectionHeading number="02" eyebrow="Luft-Wasser">
        Funktionsweise Monoblock Luft-Wasser-Wärmepumpen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Bei einer Monoblock-Wärmepumpe befindet sich der komplette Kältekreis in
        einem geschlossenen Außengerät. Die Anlage entzieht der Außenluft Wärme
        und überträgt sie direkt auf das Heizungswasser.
      </p>
      <div className="mt-9 grid gap-8 border-y border-graphite/15 py-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Installation
          </p>
          <p className="mt-3 leading-relaxed text-slate">
            Isolierte wasserführende Leitungen verbinden die Außeneinheit mit
            dem Heizsystem im Gebäude. Spezielle Kältemittelleitungen zwischen
            innen und außen sind nicht notwendig.
          </p>
        </div>
        <div className="sm:border-l sm:border-graphite/15 sm:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Einsatzbereich
          </p>
          <p className="mt-3 leading-relaxed text-slate">
            Monoblock-Systeme eignen sich für Neubauten und viele
            Bestandsgebäude, wenn eine robuste und vergleichsweise einfache
            Installation gefragt ist.
          </p>
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={monoblockBeratung}
          alt="Fachkraft erklärt einer Hauseigentümerin die Funktionsweise einer Monoblock Luft-Wasser-Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Beim Monoblock befindet sich der geschlossene Kältekreis vollständig
          in der Außeneinheit; Heizungswasser wird über isolierte Leitungen ins
          Gebäude geführt.
        </figcaption>
      </figure>
    </section>
  )
}

function Split() {
  return (
    <section id="split" className="scroll-mt-28 pt-10">
      <SectionHeading number="03" eyebrow="Luft-Wasser">
        Funktionsweise Split Wärmepumpen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Split-Wärmepumpen bestehen aus einer Außen- und einer Inneneinheit. Der
        Verdampfer sitzt außen, Verdichter und Verflüssiger befinden sich je
        nach System ganz oder teilweise innen. Beide Einheiten sind über
        Kältemittelleitungen verbunden.
      </p>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        „Split-Systeme schaffen flexible Leitungswege, benötigen aber einen
        fachgerecht installierten Kältekreis.“
      </blockquote>
      <p className="leading-relaxed text-slate">
        Die schlanken Leitungen erleichtern die Platzierung bei engen
        Einbausituationen. Diese Bauweise kann sinnvoll sein, wenn die bisherige
        Heizung beispielsweise im Dachgeschoss steht oder der Weg zwischen
        Außen- und Inneneinheit komplex ist.
      </p>
    </section>
  )
}

function Geothermal() {
  return (
    <section id="erdwaerme" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Erdreich">
        Funktionsweise Erdwärmepumpen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Erdwärmepumpen nutzen die relativ konstante Temperatur des Erdreichs.
        Erdsonden führen vertikal in die Tiefe, während Flächenkollektoren
        horizontal unter dem Grundstück verlegt werden. Die aufgenommene
        Umweltwärme gelangt anschließend in den Kältekreis.
      </p>
      <div className="reveal mt-10 rounded-2xl bg-softblue/40 p-7 sm:p-9">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ["Wärmequelle", "Konstante Energie aus dem Erdreich"],
            ["Installation", "Bohrung oder Flächenkollektoren"],
            ["Stärke", "Hohe Effizienz unabhängig von der Außenluft"],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {title}
              </p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug text-graphite">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={erdwaermeBohrung}
          alt="Fachkräfte führen eine Erdwärmebohrung für eine Sole-Wärmepumpe an einem Einfamilienhaus durch"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Eine Erdsonde erschließt die relativ konstante Temperatur tieferer
          Erdschichten als Wärmequelle für die Sole-Wärmepumpe.
        </figcaption>
      </figure>
    </section>
  )
}

function Comparison() {
  return (
    <section id="vergleich" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Vergleich">
        Vor- und Nachteile der verschiedenen Wärmepumpentypen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die beste Bauart ergibt sich nicht aus einem pauschalen Ranking, sondern
        aus Grundstück, Gebäude, Leitungswegen, Schallsituation und verfügbarem
        Budget.
      </p>
      <div className="mt-10 overflow-x-auto border-t border-graphite/15">
        <div className="min-w-[680px]">
          <div className="grid grid-cols-[0.7fr_0.6fr_1.2fr_1.2fr] gap-5 border-b border-graphite/15 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-greengray">
            <span>Typ</span>
            <span>Quelle</span>
            <span>Vorteil</span>
            <span>Zu beachten</span>
          </div>
          {TYPE_COMPARISON.map((item) => (
            <div
              key={item.type}
              className="grid grid-cols-[0.7fr_0.6fr_1.2fr_1.2fr] gap-5 border-b border-graphite/10 py-5 text-sm"
            >
              <strong className="font-display text-lg text-graphite">
                {item.type}
              </strong>
              <span className="text-slate">{item.source}</span>
              <span className="text-slate">{item.strength}</span>
              <span className="text-slate">{item.consideration}</span>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/kosten/waermepumpen-kosten"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
      >
        Wärmepumpen-Kosten im Detail
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </section>
  )
}

function Efficiency() {
  return (
    <section id="effizienz" className="scroll-mt-28 pt-24">
      <SectionHeading number="06" eyebrow="Nachhaltigkeit">
        Umweltaspekte und Energieeffizienz
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Wärmepumpen nutzen erneuerbare Umweltenergie und verursachen am Gebäude
        keine direkten CO₂-Emissionen. Wie effizient sie arbeiten, zeigt die
        Jahresarbeitszahl: das Verhältnis aus erzeugter Wärme und eingesetztem
        Strom über ein Jahr.
      </p>
      <div className="reveal my-10 overflow-hidden rounded-2xl bg-yellow p-7 text-graphite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite/60">
          Typische Jahresarbeitszahl
        </p>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-6xl font-semibold">1 kWh</p>
          <ArrowIcon className="h-10 w-10 rotate-90 sm:rotate-0" />
          <p className="font-display text-6xl font-semibold">3–4 kWh</p>
        </div>
        <div className="mt-4 flex justify-between gap-6 text-sm font-semibold text-graphite/65">
          <span>Strom</span>
          <span>Wärme</span>
        </div>
      </div>
      <p className="leading-relaxed text-slate">
        Erdwärmepumpen können aufgrund der konstanten Quellentemperatur
        besonders hohe Werte erreichen. Mit Ökostrom oder einer eigenen
        Photovoltaikanlage lässt sich die Klimabilanz zusätzlich verbessern.
      </p>
      <Link
        to="/kosten/waermepumpe-stromverbrauch"
        className="mt-7 inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
      >
        Mehr zum Stromverbrauch einer Wärmepumpe
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="07" eyebrow="Zusammenfassung">
        Fazit: Wie funktioniert eine Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Jede Wärmepumpe nutzt denselben thermodynamischen Kältekreis. Der
        entscheidende Unterschied liegt in der Wärmequelle und darin, wie die
        Anlage in das Gebäude eingebunden wird. Monoblock-Systeme sind robust
        und kompakt, Split-Anlagen ermöglichen flexible Leitungswege und
        Erdwärmepumpen bieten eine besonders konstante Wärmequelle.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Welche Lösung wirtschaftlich und technisch passt, lässt sich erst mit
        Blick auf das konkrete Haus beantworten. Eine sorgfältige Planung
        verbindet Effizienz, Komfort und langfristig zuverlässigen Betrieb.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir planen die Technik passend zu Ihrem Gebäude.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Wärmepumpe anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zur Funktionsweise einer Wärmepumpe
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

export default function HowHeatPumpWorksPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Wie funktioniert eine Wärmepumpe? | H&S Energiesysteme"
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
          <Principle />
          <Monoblock />
          <Split />
          <Geothermal />
          <Comparison />
          <Efficiency />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
