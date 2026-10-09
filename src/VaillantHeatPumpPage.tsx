import { Link } from "react-router"
import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import logoVaillant from "./imports/vaillant-logo.png"
import vaillantPutzfassade from "./imports/vaillant-arotherm-plus-putzfassade-quer.webp"
import vaillantSplitWandkonsole from "./imports/vaillant-split-wandkonsole-klinker-quer.webp"
import vaillantKlinkerhaus from "./imports/vaillant-arotherm-plus-klinkerhaus.webp"
import vaillantMonteur from "./imports/vaillant-arotherm-plus-monteur-schieferhaus.webp"
import vaillantTechnikraumSpeicher from "./imports/vaillant-technikraum-speicher.webp"
import vaillantInnengeraet from "./imports/vaillant-innengeraet-technikraum-fenster.webp"

const HEYFLOW_URL = "#heyflow-angebot"
const VAILLANT_MODELS_URL = "https://www.vaillant.de/produkte/arothermplus/"

const CONTENTS = [
  ["warum-vaillant", "Warum eine Vaillant Wärmepumpe?"],
  ["modelle", "Vaillant Wärmepumpen im Detail"],
  ["monoblock-split", "Monoblock oder Split?"],
  ["aufstellung", "Aufstellung & Schall"],
  ["geschichte", "Innovation & Geschichte"],
  ["kosten", "Kosten & Förderung"],
  ["vorteile", "Vorteile & Nachteile"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const MODELS = [
  {
    model: "aroTHERM plus",
    range: "3–12 kW",
    bestFor: "Einfamilienhaus in Neubau und Sanierung",
    features: [
      "Monoblock mit R290-Kältemittel",
      "Bis 75 °C Vorlauf im Wärmepumpenbetrieb",
      "A+++ bei 35 °C Vorlauftemperatur",
      "Steuerung per myVAILLANT App",
    ],
    note: "Die neue Generation (VWL 35/8.1 A bis VWL 125/8.1 A) ist seit September 2025 erhältlich. Vaillant nennt eine jahreszeitbedingte Raumheizungs-Energieeffizienz von bis zu 202 % bei 35 °C Vorlauf und bewirbt die Baureihe als leiseste Luft-Wasser-Wärmepumpe im eigenen Sortiment.",
  },
  {
    model: "aroTHERM Split plus",
    range: "3–7 kW",
    bestFor: "Neubau und gut gedämmte Bestandsgebäude",
    features: [
      "Split-System mit R32-Kältemittel",
      "Bis 62 °C Vorlauftemperatur",
      "Außeneinheit plus Inneneinheit",
      "Kältemittelleitung zwischen Außen- und Inneneinheit",
    ],
    note: "Vaillant bietet die Split-Baureihe in den Leistungsgrößen 3, 5 und 7 kW an. Weil Kältemittelleitungen ins Haus geführt werden, sind bei Montage und Wartung zusätzliche Anforderungen an den Fachbetrieb zu beachten.",
  },
  {
    model: "aroTHERM pro",
    range: "5–11 kW",
    bestFor: "Wenig Platz am Aufstellort",
    features: [
      "Monoblock mit R290-Kältemittel",
      "Sehr kompakte Bauform",
      "Rund 0,75 m Bauhöhe bei 5 und 7 kW",
      "Minimierter Schutzbereich laut Vaillant",
    ],
    note: "Die kompakte Baureihe gibt es in 5, 7 und 11 kW. Laut Vaillant startete die Auslieferung der 5- und 7-kW-Geräte im April 2026, die 11-kW-Variante folgte ab Juni 2026.",
  },
  {
    model: "aroTHERM perform",
    range: "15–20 kW",
    bestFor: "Große Häuser und Mehrfamilienhäuser",
    features: [
      "Monoblock mit R290-Kältemittel",
      "Bis 75 °C Vorlauftemperatur",
      "Für höhere Heizlasten ausgelegt",
      "Einsatz im Mehrfamilienhaus",
    ],
    note: "Vaillant positioniert die aroTHERM perform mit 15 und 20 kW Wärmeleistung für Gebäude mit hohem Wärmebedarf, etwa Mehrfamilienhäuser.",
  },
]

const FAQS = [
  {
    q: "Welche Vaillant Wärmepumpe ist für den Altbau geeignet?",
    a: "Für viele Bestandsgebäude mit Heizkörpern kommt die aroTHERM plus infrage, weil Vaillant bis zu 75 °C Vorlauftemperatur im reinen Wärmepumpenbetrieb angibt. Bei sehr hoher Heizlast oder im Mehrfamilienhaus kann die aroTHERM perform passen. Entscheidend bleiben eine individuelle Heizlastberechnung und die Prüfung der Heizflächen – je niedriger die nötige Vorlauftemperatur, desto effizienter arbeitet jede Wärmepumpe.",
  },
  {
    q: "Wie leise ist die Vaillant aroTHERM plus?",
    a: "Vaillant nennt für den schallreduzierten Nachtmodus 27,5 dB(A). Dabei handelt es sich um einen Schalldruckwert in drei Metern Abstand bei der kleinsten Leistungsgröße – nicht um die Schallleistung des Geräts. Wie laut die Anlage am Nachbargrundstück ankommt, hängt von Leistungsgröße, Abstand, Ausblasrichtung und Reflexionsflächen ab.",
  },
  {
    q: "Was ist der Unterschied zwischen aroTHERM plus und aroTHERM Split plus?",
    a: "Die aroTHERM plus ist ein Monoblock: Der komplette Kältekreis mit R290 sitzt im Außengerät, ins Haus führen nur Wasserleitungen. Die aroTHERM Split plus arbeitet mit R32 und verbindet Außen- und Inneneinheit über Kältemittelleitungen. Laut Vaillant erreicht die Split plus bis 62 °C, die aroTHERM plus bis 75 °C Vorlauftemperatur.",
  },
  {
    q: "Welche Garantie gibt Vaillant auf die aroTHERM plus?",
    a: "Vaillant bewirbt für die neue aroTHERM plus eine kostenlose 5-Jahres-Garantie. Voraussetzung sind laut Hersteller Installation und Inbetriebnahme durch einen Fachbetrieb, die Registrierung im myVAILLANT-Portal, die Verbindung mit der myVAILLANT App und eine regelmäßige Wartung. Maßgeblich sind die jeweils aktuellen Garantiebedingungen von Vaillant.",
  },
  {
    q: "Wie hoch ist die Förderung für eine Vaillant Wärmepumpe?",
    a: "Die Förderung hängt nicht vom Hersteller ab, sondern von Gerät, Gebäude und Antragsteller. Über die KfW-Heizungsförderung (458) gibt es 30 % Grundförderung, dazu können Klimageschwindigkeitsbonus und Einkommensbonus kommen. Grundsätzlich sind maximal 70 % möglich, unter besonderen Einkommens- beziehungsweise Familienbedingungen bis 80 % von höchstens 28.000 Euro förderfähigen Kosten im Einfamilienhaus.",
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
          Vaillant Angebot anfragen
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
              Vaillant Wärmepumpe: effizient, leise und altbautauglich
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Die aktuellen Vaillant Luft-Wasser-Wärmepumpen im Vergleich:
              aroTHERM plus, Split plus, pro und perform – mit Einsatzbereichen,
              technischen Unterschieden, Kosten sowie Vor- und Nachteilen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Produktangaben geprüft</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>10 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <a
                href={VAILLANT_MODELS_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-yellow decoration-2 underline-offset-4"
              >
                Vaillant Produktseite
              </a>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl border border-graphite/10 bg-offwhite shadow-2xl shadow-graphite/10">
            <div className="flex min-h-36 items-center justify-center border-b border-graphite/10 p-8">
              <img
                src={logoVaillant}
                alt="Vaillant Logo"
                className="h-14 max-w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2">
              {[
                ["4", "Luft-Wasser-Baureihen"],
                ["3–20 kW", "Leistungsspektrum"],
                ["R290", "bei plus, pro und perform"],
                ["bis 75 °C", "Vorlauf mit aroTHERM plus"],
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

function WhyVaillant() {
  return (
    <section id="warum-vaillant" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Überblick">
        Warum eine Vaillant Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Vaillant gehört zu den traditionsreichsten Heiztechnik-Herstellern
        Europas und hat mit der aroTHERM-Familie Luft-Wasser-Wärmepumpen vom
        kompakten Neubaugerät bis zur Lösung für Mehrfamilienhäuser im
        Programm. Die Monoblock-Baureihen setzen auf das natürliche Kältemittel
        R290, für das Vaillant ein Treibhauspotenzial (GWP) von 0,02 angibt.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "Leistungsspektrum von 3 bis 20 kW",
          "R290 bei aroTHERM plus, pro und perform",
          "Bis 75 °C Vorlauf mit aroTHERM plus",
          "Schallreduzierter Nachtmodus",
          "Steuerung per myVAILLANT App",
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
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={vaillantPutzfassade}
          alt="Vaillant aroTHERM plus Monoblock-Wärmepumpe vor der Putzfassade eines Einfamilienhauses"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Die aroTHERM plus als Monoblock: Der gesamte Kältekreis sitzt im
          Außengerät, ins Haus führen nur wasserführende Leitungen.
        </figcaption>
      </figure>
    </section>
  )
}

function Models() {
  return (
    <section id="modelle" className="scroll-mt-28 pt-10">
      <SectionHeading number="02" eyebrow="Modellvergleich">
        Die Vaillant Luft-Wasser-Wärmepumpen im Detail
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Modellwahl richtet sich nicht nur nach der Wohnfläche. Heizlast,
        Vorlauftemperatur, Schallanforderungen, Platz am Aufstellort und die
        Frage Monoblock oder Split sind für die Planung entscheidend.
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
                  Vaillant Luft-Wasser-Wärmepumpe
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
        Leistungs-, Effizienz- und Temperaturwerte stammen aus der aktuellen
        Vaillant-Produktdarstellung. Exakte Werte unterscheiden sich je
        Leistungsgröße und Betriebspunkt. Stiftung Warentest bewertete die
        aroTHERM plus in Ausgabe 10/2025 mit „gut“ (2,3).
      </p>
    </section>
  )
}

function MonoblockOrSplit() {
  return (
    <section id="monoblock-split" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Bauart">
        Monoblock oder Split? aroTHERM plus und aroTHERM Split plus
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Vaillant bietet beide Bauarten an. Beim Monoblock befindet sich der
        komplette Kältekreis im Außengerät; zwischen Außen- und Innenbereich
        fließt nur Heizungswasser. Beim Split-System verbinden
        Kältemittelleitungen die Außeneinheit mit der Inneneinheit im Haus.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "aroTHERM plus",
            label: "Monoblock",
            items: [
              "Kältemittel R290 (Propan)",
              "3 bis 12 kW",
              "Bis 75 °C Vorlauftemperatur",
              "Keine Kältemittelleitungen ins Haus",
            ],
          },
          {
            title: "aroTHERM Split plus",
            label: "Split",
            items: [
              "Kältemittel R32",
              "3, 5 und 7 kW",
              "Bis 62 °C Vorlauftemperatur",
              "Kältemittelleitungen ins Haus",
            ],
          },
        ].map((variant) => (
          <div
            key={variant.title}
            className="reveal rounded-2xl border border-graphite/10 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              {variant.label}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-graphite">
              {variant.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {variant.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-graphite"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 leading-relaxed text-slate">
        Für Bestandsgebäude mit Heizkörpern und höherem Temperaturbedarf spricht
        meist die aroTHERM plus. Die Split plus ist eine Option, wenn das
        Außengerät besonders klein ausfallen soll und das Gebäude mit niedrigeren Vorlauftemperaturen auskommt.
      </p>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={vaillantSplitWandkonsole}
          alt="Außeneinheit einer Vaillant aroTHERM Split plus auf einer Wandkonsole an einer Klinkerfassade"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Die Außeneinheit der aroTHERM Split plus lässt sich platzsparend auf
          einer Wandkonsole montieren. Tragfähigkeit der Wand und
          Körperschallentkopplung werden vorab geprüft.
        </figcaption>
      </figure>
      <div className="grid gap-6 sm:grid-cols-2">
        <figure className="reveal overflow-hidden rounded-2xl">
          <img
            src={vaillantTechnikraumSpeicher}
            alt="Technikraum mit Vaillant Warmwasserspeicher und Hydraulikkomponenten"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
            Speicher und Hydraulik im Technikraum gehören bei beiden Bauarten
            zur Planung.
          </figcaption>
        </figure>
        <figure className="reveal overflow-hidden rounded-2xl">
          <img
            src={vaillantInnengeraet}
            alt="Vaillant Inneneinheit im Technikraum neben einem Fenster"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
            Die Inneneinheit übernimmt Regelung und Heizungshydraulik im Haus.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Placement() {
  return (
    <section id="aufstellung" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Aufstellung">
        Aufstellung und Schall: Vaillant Wärmepumpe richtig planen
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Vaillant wirbt bei der aroTHERM plus mit einem schallreduzierten
        Nachtmodus. Am Nachbargrundstück zählen aber nicht nur
        Herstellerwerte: Abstand, Ausblasrichtung, Mauern, Ecken und harte
        Reflexionsflächen beeinflussen, wie laut eine Anlage tatsächlich
        ankommt.
      </p>
      <div className="reveal mt-10 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
          Vaillant Herstellerangabe aroTHERM plus
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-5xl font-semibold">27,5 dB(A)</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Schalldruck im Nachtmodus, kleinste Leistungsgröße, 3 m Abstand
            </p>
          </div>
          <div className="sm:border-l sm:border-offwhite/10 sm:pl-8">
            <p className="font-display text-5xl font-semibold">bis 75 °C</p>
            <p className="mt-2 text-sm text-offwhite/55">
              Vorlauftemperatur im reinen Wärmepumpenbetrieb
            </p>
          </div>
        </div>
      </div>
      <p className="mt-10 leading-relaxed text-slate">
        Weil R290 brennbar ist, legt Vaillant um das Außengerät einen
        Schutzbereich fest. Darin dürfen sich laut Installationsanleitung keine
        Fenster, Türen, Lichtschächte, Kellerzugänge oder Lüftungsöffnungen
        befinden, und er darf nicht über das eigene Grundstück hinausragen.
        Mit der Flexible Space Function lässt sich der Schutzbereich bei der
        neuen aroTHERM plus deutlich verkleinern – die zulässigen Abstände
        ergeben sich aus Modell und Montagesituation.
      </p>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={vaillantKlinkerhaus}
          alt="Vaillant aroTHERM plus vor einem Einfamilienhaus mit Klinkerfassade"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Vor der Montage prüfen wir Schutzbereich, Schallsituation und
          Kondensatableitung am konkreten Aufstellort.
        </figcaption>
      </figure>
    </section>
  )
}

function History() {
  return (
    <section id="geschichte" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Hersteller">
        Innovation und Geschichte der Vaillant Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Vaillant wurde 1874 von Johann Vaillant in Remscheid gegründet und ist
        bis heute ein Familienunternehmen mit Sitz im Bergischen Land. Bei
        Luft-Wasser-Wärmepumpen setzte Vaillant früh auf natürliche
        Kältemittel: Die aroTHERM plus mit R290 wurde 2019 vorgestellt.
      </p>
      <div className="mt-10 border-t border-graphite/15">
        {[
          ["1874", "Gründung durch Johann Vaillant in Remscheid"],
          ["2019", "Vorstellung der aroTHERM plus mit Kältemittel R290"],
          [
            "2025",
            "Präsentation der neuen aroTHERM-Generation auf der ISH, Marktstart der neuen aroTHERM plus im September",
          ],
          [
            "2026",
            "Auslieferung der kompakten aroTHERM pro in 5, 7 und 11 kW",
          ],
        ].map(([year, text]) => (
          <div
            key={year}
            className="reveal grid gap-2 border-b border-graphite/15 py-5 sm:grid-cols-[6rem_1fr]"
          >
            <p className="font-display text-2xl font-semibold text-amber">
              {year}
            </p>
            <p className="leading-relaxed text-slate">{text}</p>
          </div>
        ))}
      </div>
      <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
        Entscheidend ist nicht das bekannteste Modell, sondern die Baureihe, die
        bei Heizlast, Temperatur und Aufstellung zum Gebäude passt.
      </blockquote>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="06" eyebrow="Investition">
        Kosten und Förderung der Vaillant Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Der Gesamtpreis einer Vaillant Wärmepumpe hängt von Baureihe,
        Leistungsgröße, Speicher, Elektroarbeiten, Hydraulik, Aufstellung und
        notwendigen Anpassungen am Gebäude ab. Einen belastbaren Preis nennen
        wir nach Heizlastberechnung und Vor-Ort-Termin.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Für den Heizungstausch im Bestand fördert die KfW (Programm 458) mit
        30 % Grundförderung. Selbstnutzende Eigentümer können zusätzlich 16 %
        Klimageschwindigkeitsbonus und einen gestaffelten Einkommensbonus von
        bis zu 40 % erhalten. Die Förderung ist grundsätzlich auf 70 %
        begrenzt, nur unter besonderen Einkommens- beziehungsweise
        Familienbedingungen sind bis 80 % möglich.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["30 %", "KfW-Grundförderung"],
          ["bis 28.000 €", "förderfähige Kosten EFH"],
          ["max. 22.400 €", "Zuschuss bei 80 %"],
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
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={vaillantMonteur}
          alt="Monteur bei der Installation einer Vaillant aroTHERM plus an einem Haus mit Schieferfassade"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Fundament, Leitungsführung und Elektroanschluss bestimmen den
          Installationsaufwand – und damit einen großen Teil der Gesamtkosten.
        </figcaption>
      </figure>
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
        Vorteile und Nachteile einer Vaillant Wärmepumpe
      </SectionHeading>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Vorteile
          </p>
          <ul className="mt-5 space-y-4">
            {[
              "Baureihen von 3 bis 20 kW für unterschiedliche Heizlasten",
              "R290 bei aroTHERM plus, pro und perform",
              "Bis 75 °C Vorlauf mit aroTHERM plus – interessant für Heizkörper",
              "Monoblock und Split aus einer Hand",
              "Kostenlose 5-Jahres-Garantie bei Registrierung und Wartung",
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
              "Schutzbereich des R290-Geräts bei der Aufstellung beachten",
              "Leiser Nachtmodus ersetzt keine Schallplanung",
              "Hohe Vorlauftemperaturen senken die Effizienz",
              "Garantie an Registrierung, App und regelmäßige Wartung gebunden",
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
        Fazit: Vaillant Wärmepumpe – die passende Baureihe entscheidet
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Vaillant deckt mit der aroTHERM-Familie ein breites Spektrum ab: Die
        aroTHERM plus ist der Allrounder für Neubau und Sanierung mit bis zu
        75 °C Vorlauf, die Split plus die kompakte Split-Alternative, die
        aroTHERM pro die platzsparende Lösung und die aroTHERM perform das
        Gerät für große Gebäude.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Als Vaillant Kompetenzpartner planen und installieren wir
        Vaillant-Wärmepumpen in Willich, Köln und Solingen. Welche Baureihe
        wirtschaftlich arbeitet, entscheidet sich erst nach Heizlastberechnung,
        Prüfung der Heizflächen und Planung des Aufstellorts. Mehr zu unserem
        Angebot vor Ort lesen Sie unter{" "}
        <Link
          to="/lp/vaillant-solingen"
          className="font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"
        >
          Vaillant Wärmepumpe in Solingen
        </Link>
        .
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir vergleichen die Vaillant-Baureihen für Ihr Gebäude.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Vaillant Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zu Vaillant Wärmepumpen
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

export default function VaillantHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Vaillant Wärmepumpe: Modelle, Kosten und Vorteile | H&S Energiesysteme"
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
          <WhyVaillant />
          <Models />
          <MonoblockOrSplit />
          <Placement />
          <History />
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
