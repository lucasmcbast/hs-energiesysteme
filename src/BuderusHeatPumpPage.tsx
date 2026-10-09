import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import logoBuderus from "./imports/buderus-logo.png"
import monoblockBeratung from "./imports/monoblock-waermepumpe-beratung.webp"

const HEYFLOW_URL = "#heyflow-angebot"
const BUDERUS_MODELS_URL =
  "https://www.buderus.de/de/waermepumpe/luft-wasser-waermepumpe"

const CONTENTS = [
  ["warum-buderus", "Warum eine Buderus Wärmepumpe?"],
  ["modelle", "Buderus Wärmepumpen im Detail"],
  ["geschichte", "Buderus und Bosch"],
  ["altbau", "Buderus im Altbau"],
  ["kosten", "Kosten & Förderung"],
  ["vorteile", "Vorteile & Nachteile"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const MODELS = [
  {
    model: "Logatherm WLW186i AR",
    range: "4–12 kW",
    bestFor: "Modernisierung und Altbau mit Heizkörpern",
    features: [
      "R290-Kältemittel",
      "Bis 75 °C Vorlauftemperatur",
      "A+++ bei 35 °C Vorlauf",
      "Monoblock, Heizen und Kühlen",
    ],
    note: "Buderus nennt bis zu 75 °C Vorlauftemperatur, bei −10 °C Außentemperatur bis zu 65 °C. Die Leistungsgrößen 4, 5, 7, 10 und 12 kW beziehen sich auf A-7/W35. Innengeräte gibt es als T180 mit 180-Liter-Warmwasserspeicher, als TP70 mit 70-Liter-Pufferspeicher und als wandhängende E-Variante.",
  },
  {
    model: "Logatherm WLW176i AR",
    range: "4–12 kW",
    bestFor: "Neubau und Niedertemperatur-Heizsysteme",
    features: [
      "R290-Kältemittel",
      "Gleiche Außeneinheit wie die WLW186i AR",
      "Ausgelegt auf niedrige Vorlauftemperaturen",
      "Innengerät mit integriertem Speicher möglich",
    ],
    note: "Die WLW176i AR ist die Neubau-Variante der Baureihe. Sie teilt sich die Monoblock-Außeneinheit mit der WLW186i AR, ist aber auf niedrigere Vorlauftemperaturen etwa für Fußbodenheizungen ausgelegt.",
  },
  {
    model: "Logatherm WLW186i MBE+ AR",
    range: "11–15 kW",
    bestFor: "Bestandsgebäude mit höherer Heizlast",
    features: [
      "R290-Kältemittel",
      "Bis 70 °C Vorlauf bei −10 °C",
      "A+++ auch bei 55 °C Vorlauf",
      "Kombiniert mit WLW186i-Innengeräten",
    ],
    note: "Die neue Außeneinheit wurde zur ISH 2025 vorgestellt und ist in 11, 13 und 15 kW (bezogen auf A-7/W55) erhältlich. Buderus positioniert sie für die Heizungsmodernisierung in Ein- und Zweifamilienhäusern sowie kleineren Mehrfamilienhäusern.",
  },
]

const FAQS = [
  {
    q: "Welche Buderus Wärmepumpe ist für den Altbau geeignet?",
    a: "Für Bestandsgebäude mit Heizkörpern positioniert Buderus die Logatherm WLW186i AR mit bis zu 75 °C Vorlauftemperatur. Bei höherer Heizlast kommt die neue Außeneinheit WLW186i MBE+ AR mit 11 bis 15 kW infrage. Entscheidend bleibt eine individuelle Heizlastberechnung und die Prüfung der vorhandenen Heizflächen.",
  },
  {
    q: "Was ist der Unterschied zwischen WLW176i AR und WLW186i AR?",
    a: "Beide nutzen dieselbe Monoblock-Außeneinheit mit R290. Die WLW186i AR erreicht höhere Vorlauftemperaturen und ist damit auf die Modernisierung ausgerichtet, die WLW176i AR ist für Neubauten mit niedrigen Vorlauftemperaturen gedacht.",
  },
  {
    q: "Wie hat die Buderus Wärmepumpe bei Stiftung Warentest abgeschnitten?",
    a: "In der Ausgabe 08/2024 erhielt die Logatherm WLW186i-10 AR E die Note 2,3 (gut) und gehörte damit zu den Testsiegern. Ein Testergebnis ersetzt allerdings nicht die Planung für Ihr konkretes Gebäude.",
  },
  {
    q: "Nutzen Buderus Wärmepumpen R290?",
    a: "Die aktuellen Logatherm-Baureihen WLW176i AR, WLW186i AR und die Außeneinheit WLW186i MBE+ AR werden von Buderus mit dem natürlichen Kältemittel R290 (Propan) ausgewiesen.",
  },
  {
    q: "Ist Buderus dasselbe wie Bosch?",
    a: "Buderus ist eine eigenständige Marke der Bosch Home Comfort Group mit Sitz in Wetzlar und gehört damit zur Bosch-Gruppe. Beide Marken haben eigene Produktlinien, Vertriebswege und Bezeichnungen. Welche Baureihe besser passt, entscheidet die Planung für Ihr Gebäude.",
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
          Buderus Angebot anfragen
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
              Buderus Wärmepumpe: Logatherm für Neubau und Altbau
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Aktuelle Buderus Luft-Wasser-Wärmepumpen im Vergleich: Baureihen,
              Einsatzbereiche, Vorlauftemperaturen, Kosten sowie Vor- und
              Nachteile.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Produktangaben geprüft</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>9 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <a
                href={BUDERUS_MODELS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow decoration-2 underline-offset-4"
              >
                Buderus Produktübersicht
              </a>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl border border-graphite/10 bg-offwhite shadow-2xl shadow-graphite/10">
            <div className="flex min-h-36 items-center justify-center border-b border-graphite/10 p-8">
              <img
                src={logoBuderus}
                alt="Buderus Logo"
                className="h-20 max-w-full rounded-md object-contain"
              />
            </div>
            <div className="grid grid-cols-2">
              {[
                ["3", "Baureihen im Vergleich"],
                ["4–15 kW", "Leistungsgrößen"],
                ["R290", "bei allen Modellen"],
                ["bis 75 °C", "Vorlauf mit WLW186i AR"],
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

function WhyBuderus() {
  return (
    <section id="warum-buderus" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Überblick">
        Warum eine Buderus Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Buderus bündelt seine Luft-Wasser-Wärmepumpen für Wohngebäude in der
        Logatherm-Familie. Die aktuellen Baureihen arbeiten mit dem natürlichen
        Kältemittel R290 und decken mit unterschiedlichen Innengeräten und
        Außeneinheiten Neubau, Modernisierung und Gebäude mit höherer Heizlast
        ab.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "R290 in den aktuellen Baureihen",
          "Hohe Vorlauftemperaturen für Heizkörper",
          "Innengeräte mit integriertem Speicher",
          "Heizen, Warmwasser und Kühlen",
          "Geräuschreduzierter Betrieb möglich",
          "Testsieger bei Stiftung Warentest 08/2024",
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
        title="Buderus Wärmepumpe am Einfamilienhaus im Bestand"
        description="Professionell installierte Monoblock-Luft-Wasser-Wärmepumpe mit schwarzem Gehäuse an einem verklinkerten Einfamilienhaus aus den 1970er-Jahren in NRW. Das Gerät steht auf einem Streifenfundament mit Kiesbett, Leitungen sind sauber gedämmt in die Hauswand geführt. Eine H&S Fachkraft prüft die Kondensatableitung. Das Gerät bleibt ohne künstlich erzeugtes Markenlogo; das Buderus-Logo wird später im Layout ergänzt."
      />
    </section>
  )
}

function Models() {
  return (
    <section id="modelle" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Modellvergleich">
        Die Buderus Luft-Wasser-Wärmepumpen im Detail
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Modellwahl richtet sich nicht nur nach der Wohnfläche. Heizlast,
        notwendige Vorlauftemperatur, Warmwasserbedarf, Aufstellort und der
        Platz im Technikraum bestimmen, welche Kombination aus Außeneinheit und
        Innengerät sinnvoll ist.
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
                  Buderus Luft-Wasser-Wärmepumpe
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
        Leistungs-, Temperatur- und Effizienzangaben stammen aus der aktuellen
        Buderus-Produktdarstellung. Die Leistungsgrößen der WLW176i/186i AR
        beziehen sich auf A-7/W35, die der WLW186i MBE+ AR auf A-7/W55. Exakte
        Werte unterscheiden sich je Leistungsgröße, Innengerät und
        Messbedingung.
      </p>
    </section>
  )
}

function History() {
  return (
    <section id="geschichte" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Hersteller">
        Buderus und Bosch: Tradition aus Wetzlar
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Buderus wurde 1731 gegründet und gehört zu den ältesten
        Heiztechnik-Marken Deutschlands. Seit der Übernahme durch Bosch Anfang
        der 2000er-Jahre ist Buderus eine Marke der heutigen Bosch Home Comfort
        Group mit Sitz in Wetzlar. Beide Marken entwickeln Wärmepumpen im selben
        Konzern, treten aber mit eigenen Baureihen, Bezeichnungen und
        Vertriebswegen auf.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Wenn Sie beide Hersteller vergleichen möchten, finden Sie die aktuellen
        Compress-Baureihen in unserem{" "}
        <Link
          to="/hersteller/bosch-waermepumpe"
          className="font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"
        >
          Ratgeber zur Bosch Wärmepumpe
        </Link>
        .
      </p>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        Entscheidend ist nicht die Marke im Konzern, sondern die Baureihe, die
        bei Heizlast, Temperatur und Aufstellung zum Gebäude passt.
      </blockquote>
    </section>
  )
}

function OldBuilding() {
  return (
    <section id="altbau" className="scroll-mt-28 pt-16">
      <SectionHeading number="04" eyebrow="Modernisierung">
        Buderus Wärmepumpe im Altbau: Vorlauftemperatur richtig planen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Viele Bestandsgebäude in NRW heizen mit klassischen Heizkörpern. Die
        Logatherm WLW186i AR ist mit hohen Vorlauftemperaturen genau dafür
        ausgelegt. Effizient arbeitet aber jede Wärmepumpe nur, wenn die
        Vorlauftemperatur so niedrig wie möglich bleibt. Buderus empfiehlt
        deshalb, die Wärmeverteilung zu prüfen und die Anlage für den
        Dauerbetrieb möglichst auf höchstens 55 °C auszulegen.
      </p>
      <div className="reveal mt-10 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Buderus Herstellerangabe WLW186i AR
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-5xl font-semibold">75 °C</p>
            <p className="mt-2 text-sm text-offwhite/55">
              maximale Vorlauftemperatur
            </p>
          </div>
          <div className="sm:border-l sm:border-offwhite/10 sm:pl-8">
            <p className="font-display text-5xl font-semibold">65 °C</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Vorlauf bei −10 °C Außentemperatur
            </p>
          </div>
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={monoblockBeratung}
          alt="H&S Fachkraft erklärt einer Hausbesitzerin die Aufstellung einer Monoblock-Wärmepumpe am Einfamilienhaus"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Vor dem Einbau prüfen wir Heizkörper, Leitungswege und Aufstellort –
          damit die Wärmepumpe mit möglichst niedriger Vorlauftemperatur
          arbeitet.
        </figcaption>
      </figure>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Investition">
        Kosten und Förderung der Buderus Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Gesamtpreis einer Buderus Wärmepumpe hängt von Baureihe,
        Leistungsgröße, Innengerät mit oder ohne Speicher, Elektroarbeiten,
        Hydraulik, Aufstellung und notwendigen Anpassungen an den Heizflächen
        ab. Ein belastbarer Preis entsteht erst nach Heizlastberechnung und
        Aufmaß vor Ort.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Für den Heizungstausch im Bestand fördert die KfW (Programm 458) mit
        30 % Grundförderung. Selbstnutzende Eigentümer können zusätzlich den
        Klimageschwindigkeitsbonus von 16 % und einen einkommensabhängigen Bonus
        von 10 bis 40 % erhalten. Die Förderung ist grundsätzlich auf 70 %
        begrenzt, unter besonderen Einkommens- beziehungsweise
        Familienbedingungen auf 80 %.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["bis 28.000 €", "förderfähige Kosten EFH"],
          ["30–80 %", "Zuschuss je nach Situation"],
          ["bis 22.400 €", "maximaler Zuschuss EFH"],
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
      <SectionHeading number="06" eyebrow="Einordnung">
        Vorteile und Nachteile einer Buderus Wärmepumpe
      </SectionHeading>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Vorteile
          </p>
          <ul className="mt-5 space-y-4">
            {[
              "R290 bei den aktuellen Logatherm-Baureihen",
              "Bis 75 °C Vorlauf mit der WLW186i AR",
              "Neue MBE+ AR für höhere Heizlasten im Bestand",
              "Innengeräte mit integriertem Speicher sparen Platz",
              "Gutes Ergebnis bei Stiftung Warentest 08/2024",
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
              "Außeneinheit und Innengerät müssen exakt kombiniert werden",
              "Hohe Vorlauftemperaturen senken die Effizienz",
              "Schallsituation am Aufstellort muss geplant werden",
              "Varianten und Zubehör machen den Vergleich komplex",
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
        Fazit: Buderus Wärmepumpe – die passende Kombination entscheidet
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Buderus bietet mit der Logatherm-Familie ein klar gegliedertes
        Portfolio: Die WLW176i AR für den Neubau, die WLW186i AR für die
        Modernisierung mit bis zu 75 °C Vorlauf und die neue WLW186i MBE+ AR
        für Bestandsgebäude mit höherer Heizlast – alle mit R290.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Welche Buderus Wärmepumpe wirtschaftlich arbeitet, entscheidet sich
        erst nach Heizlastberechnung, Prüfung der Heizflächen und Planung des
        Aufstellorts.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir prüfen, welche Buderus-Baureihe zu Ihrem Gebäude passt.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Buderus Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zu Buderus Wärmepumpen
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
      title: "Bosch Wärmepumpe im Überblick",
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

export default function BuderusHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Buderus Wärmepumpe: Logatherm Modelle, Kosten und Vorteile | H&S Energiesysteme"
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
          <WhyBuderus />
          <Models />
          <History />
          <OldBuilding />
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
