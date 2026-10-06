import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import aufstellortPlanung from "./imports/luft-wasser-aufstellort-planung.webp"
import installationFertig from "./imports/luft-wasser-installation-fertig.webp"

const HEYFLOW_URL = "#heyflow-angebot"

const CONTENTS = [
  ["definition", "Was ist eine Luft-Wasser-Wärmepumpe?"],
  ["funktion", "Funktionsweise"],
  ["vorteile", "Vorteile"],
  ["installation", "Installation & Standort"],
  ["bauarten", "Monoblock oder Split"],
  ["vergleich", "Vergleich mit anderen Heizungen"],
  ["kosten", "Kosten & Stromverbrauch"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const CYCLE = [
  {
    number: "01",
    title: "Außenluft aufnehmen",
    text: "Ein Ventilator führt dem Verdampfer kontinuierlich Umgebungsluft zu.",
  },
  {
    number: "02",
    title: "Kältemittel verdampfen",
    text: "Das Kältemittel nimmt Umweltwärme auf und wechselt in den gasförmigen Zustand.",
  },
  {
    number: "03",
    title: "Temperatur anheben",
    text: "Der Verdichter erhöht Druck und Temperatur des Kältemittels.",
  },
  {
    number: "04",
    title: "Wärme übertragen",
    text: "Ein Wärmetauscher gibt die Energie an Heizungs- und Warmwasser ab.",
  },
]

const FAQS = [
  {
    q: "Funktioniert eine Luft-Wasser-Wärmepumpe auch bei Minusgraden?",
    a: "Ja. Auch kalte Außenluft enthält nutzbare Wärmeenergie. Mit sinkender Außentemperatur nimmt die Effizienz jedoch ab und die erforderliche Heizleistung steigt. Deshalb ist eine korrekte Auslegung für den Norm-Außentemperaturbereich des Standorts wichtig.",
  },
  {
    q: "Ist eine Luft-Wasser-Wärmepumpe für den Altbau geeignet?",
    a: "Viele Bestandsgebäude können mit einer Luft-Wasser-Wärmepumpe beheizt werden. Entscheidend sind Heizlast, Heizflächen, benötigte Vorlauftemperatur und energetischer Zustand — nicht allein das Baujahr.",
  },
  {
    q: "Wie laut ist eine Luft-Wasser-Wärmepumpe?",
    a: "Das hängt von Modell, Betriebszustand und Aufstellung ab. Neben dem Herstellerwert beeinflussen Wände, Ecken, Abstände und Ausblasrichtung die Schallausbreitung. Der Standort sollte deshalb vor der Installation geplant werden.",
  },
  {
    q: "Was kostet eine Luft-Wasser-Wärmepumpe mit Einbau?",
    a: "Für ein vollständig geplantes und installiertes System im Einfamilienhaus sind ungefähr 33.500 bis 36.000 Euro vor Förderung eine realistische Orientierung. Gebäude, Modell, Speicher, Elektroarbeiten und Leitungswege verändern den Preis.",
  },
  {
    q: "Was ist besser: Monoblock oder Split?",
    a: "Monoblock-Anlagen enthalten den vollständigen Kältekreis in der Außeneinheit und werden über Heizungswasser angebunden. Split-Anlagen verbinden Außen- und Inneneinheit mit Kältemittelleitungen. Welche Bauart besser passt, entscheidet die konkrete Einbausituation.",
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
          Angebot anfragen
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
          <span className="text-amber">Wärmepumpen-Typen</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Heizen mit Außenluft
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Luft-Wasser-Wärmepumpe: effiziente Heizlösung für Ihr Zuhause
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Funktionsweise, Bauarten, Aufstellung, Kosten und Verbrauch der am
              häufigsten eingesetzten Wärmepumpenart.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Technik-Ratgeber</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>10 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>Geprüft vom H&amp;S Meisterbetrieb</span>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                Typische Orientierung
              </p>
            </div>
            <div className="grid grid-cols-2">
              {[
                ["3–4", "typische JAZ"],
                ["33.500–36.000 €", "mit Einbau"],
                ["Monoblock", "häufige Bauart"],
                ["bis 80 %*", "mögliche Förderung"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`p-6 ${
                    index % 2 === 1 ? "border-l border-offwhite/10" : ""
                  } ${index > 1 ? "border-t border-offwhite/10" : ""}`}
                >
                  <p className="font-display text-2xl font-semibold text-yellow">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-offwhite/50">{label}</p>
                </div>
              ))}
            </div>
            <p className="border-t border-offwhite/10 px-6 py-4 text-xs leading-relaxed text-offwhite/45">
              * Nur unter den besonderen Einkommens- beziehungsweise
              Familienbedingungen der aktuellen KfW-Förderung.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Definition() {
  return (
    <section id="definition" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Grundlagen">
        Was ist eine Luft-Wasser-Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine Luft-Wasser-Wärmepumpe entzieht der Außenluft Energie und überträgt
        sie auf das wassergeführte Heizsystem. Sie versorgt je nach
        Anlagenkonzept Heizkörper oder Fußbodenheizung und übernimmt zusätzlich
        die Trinkwassererwärmung.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Anders als eine Erdwärmepumpe benötigt sie weder Tiefenbohrung noch
        Flächenkollektor. Dadurch ist sie in Neubau und Bestand vergleichsweise
        flexibel einsetzbar.
      </p>
      <div className="reveal mt-10 grid gap-6 rounded-2xl bg-softblue/40 p-7 sm:grid-cols-3 sm:p-9">
        {[
          ["Wärmequelle", "Außenluft"],
          ["Wärmeübergabe", "Heizungswasser"],
          ["Aufgaben", "Heizen & Warmwasser"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              {label}
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-graphite">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Functioning() {
  return (
    <section id="funktion" className="scroll-mt-28 pt-24">
      <SectionHeading number="02" eyebrow="Kältekreis">
        Funktionsweise einer Luft-Wasser-Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Selbst kalte Außenluft enthält thermische Energie. Ein geschlossener
        Kältekreis hebt diese Energie auf das Temperaturniveau, das für Heizung
        und Warmwasser benötigt wird.
      </p>
      <div className="reveal my-10 overflow-hidden rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <div className="knowledge-stagger grid sm:grid-cols-2">
          {CYCLE.map((step, index) => (
            <div
              key={step.number}
              className={`reveal p-5 sm:p-6 ${
                index % 2 === 1 ? "sm:border-l sm:border-offwhite/10" : ""
              } ${index > 1 ? "border-t border-offwhite/10" : ""}`}
            >
              <span className="font-display text-3xl font-semibold text-yellow">
                {step.number}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="/wissen/wie-funktioniert-eine-warmepumpe"
        className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
      >
        Kältekreis ausführlich erklärt
        <ArrowIcon className="h-4 w-4" />
      </a>
    </section>
  )
}

function Advantages() {
  return (
    <section id="vorteile" className="scroll-mt-28 pt-24">
      <SectionHeading number="03" eyebrow="Einordnung">
        Vorteile der Luft-Wasser-Wärmepumpe
      </SectionHeading>
      <div className="mt-10">
        {[
          [
            "Keine Erdarbeiten notwendig",
            "Die Außenluft steht überall zur Verfügung; Bohrung und Flächenkollektor entfallen.",
          ],
          [
            "Für Neubau und Bestand",
            "Breite Modell- und Leistungsauswahl für unterschiedliche Heizlasten und Temperaturen.",
          ],
          [
            "Heizen und Warmwasser",
            "Eine Anlage kann Raumheizung und Trinkwasserbereitung übernehmen.",
          ],
          [
            "Kühlen teilweise möglich",
            "Reversible Modelle können unter passenden hydraulischen Bedingungen auch kühlen.",
          ],
          [
            "Mit Photovoltaik kombinierbar",
            "Eigener Solarstrom kann einen Teil des Netzbezugs der Wärmepumpe ersetzen.",
          ],
        ].map(([title, text], index) => (
          <div
            key={title}
            className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-display text-xl font-semibold text-amber">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-graphite">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Installation() {
  return (
    <section id="installation" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Planung">
        Installation einer Luft-Wasser-Wärmepumpe: Worauf Sie achten sollten
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine gute Anlage beginnt mit Heizlast und Aufstellplanung. Freie
        Luftführung, Schall, Leitungswege, Kondensat und bei R290-Geräten die
        Herstellervorgaben zu Schutzbereichen müssen vor der Montage geklärt
        sein.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {[
          {
            title: "Freie Luftführung",
            text: "Ansaug- und Ausblasbereich dürfen nicht durch Mauern, Pflanzen oder Gegenstände behindert werden.",
          },
          {
            title: "Schallplanung",
            text: "Abstände, Ausrichtung und Reflexionsflächen beeinflussen die Geräuschsituation beim Nachbarn.",
          },
          {
            title: "Fundament & Kondensat",
            text: "Die Außeneinheit benötigt sicheren Stand und eine dauerhaft funktionierende Entwässerung.",
          },
          {
            title: "Kältemittel beachten",
            text: "Schutzbereiche bei R290 sind modell- und herstellerabhängig — pauschale Abstände sind nicht ausreichend.",
          },
          {
            title: "Kurze Leitungswege",
            text: "Eine sinnvolle Position reduziert Material, Wärmeverluste und Installationsaufwand.",
          },
          {
            title: "Passende Heizflächen",
            text: "Heizkörper oder Fußbodenheizung müssen die Räume mit möglichst niedriger Vorlauftemperatur versorgen.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="reveal rounded-2xl border border-graphite/10 p-6"
          >
            <h3 className="font-display text-xl font-semibold text-graphite">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {item.text}
            </p>
          </article>
        ))}
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={aufstellortPlanung}
          alt="Fachkraft prüft mit Maßband den Aufstellort einer Luft-Wasser-Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Vor der Montage werden Platzbedarf, Leitungsweg, Fenster,
          Lichtschächte und Grundstückssituation am realen Aufstellort geprüft.
        </figcaption>
      </figure>
    </section>
  )
}

function Designs() {
  return (
    <section id="bauarten" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Bauarten">
        Luft-Wasser-Wärmepumpe als Monoblock oder Split
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Beide Bauarten nutzen Außenluft, unterscheiden sich aber darin, wo der
        Kältekreis sitzt und welches Medium zwischen Außen- und Inneneinheit
        fließt.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="reveal rounded-2xl bg-ink p-7 text-offwhite">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
            Monoblock
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold">
            Kältekreis komplett außen
          </h3>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-offwhite/65">
            <li>• Verbindung über Heizungswasser</li>
            <li>• Kein Kältemittelanschluss zwischen innen und außen</li>
            <li>• Frostschutz und Leitungsführung besonders beachten</li>
          </ul>
        </article>
        <article className="reveal rounded-2xl border border-graphite/10 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Split
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-graphite">
            Kältekreis aufgeteilt
          </h3>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate">
            <li>• Verbindung über Kältemittelleitungen</li>
            <li>• Flexible, dünnere Leitungsführung</li>
            <li>• Installation durch Kältemittel-Fachbetrieb</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

function Comparison() {
  return (
    <section id="vergleich" className="scroll-mt-28 pt-24">
      <SectionHeading number="06" eyebrow="Systemvergleich">
        Luft-Wasser-Wärmepumpe im Vergleich zu anderen Heizsystemen
      </SectionHeading>
      <div className="mt-10 overflow-x-auto border-t border-graphite/15">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[1fr_0.9fr_1fr_1.1fr] gap-5 border-b border-graphite/15 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-greengray">
            <span>System</span>
            <span>Wärmequelle</span>
            <span>Installation</span>
            <span>Zu beachten</span>
          </div>
          {[
            [
              "Luft-Wasser",
              "Außenluft",
              "Ohne Erdarbeiten",
              "Effizienz schwankt mit Außentemperatur",
            ],
            [
              "Erdwärme",
              "Erdreich",
              "Bohrung oder Kollektor",
              "Höhere Erschließungskosten",
            ],
            [
              "Gasheizung",
              "Erdgas",
              "Bekannte Technik",
              "Fossiler Brennstoff und CO₂-Kosten",
            ],
          ].map(([system, source, installation, note]) => (
            <div
              key={system}
              className="grid grid-cols-[1fr_0.9fr_1fr_1.1fr] gap-5 border-b border-graphite/10 py-5 text-sm"
            >
              <strong className="font-display text-lg text-graphite">
                {system}
              </strong>
              <span className="text-slate">{source}</span>
              <span className="text-slate">{installation}</span>
              <span className="text-slate">{note}</span>
            </div>
          ))}
        </div>
      </div>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={installationFertig}
          alt="Fachkraft kontrolliert die Leitungsdämmung einer fertig installierten Luft-Wasser-Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Fundament, Kiesbett, kurze Leitungswege und eine sauber ausgeführte
          Hauseinführung gehören zu einer dauerhaft sicheren Installation.
        </figcaption>
      </figure>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="07" eyebrow="Wirtschaftlichkeit">
        Kosten und Stromverbrauch einer Luft-Wasser-Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Gerätepreis und Betriebskosten hängen von Leistung und Effizienz ab. Für
        das vollständige Projekt zählen zusätzlich Speicher, Hydraulik,
        Elektroarbeiten, Aufstellung und Montage.
      </p>
      <div className="my-10 grid border-y border-graphite/15 sm:grid-cols-3">
        {[
          ["33.500–36.000 €", "typisch mit Einbau"],
          ["900–1.600 €", "Strom pro Jahr"],
          ["bis 80 %*", "mögliche Förderung"],
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
      <p className="text-sm leading-relaxed text-slate">
        * Die maximale Förderstufe gilt nur unter besonderen Einkommens- oder
        Familienbedingungen. Ohne diese liegt die Obergrenze grundsätzlich bei
        70 %.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <a
          href="/kosten/waermepumpen-kosten"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Kosten im Detail
          <ArrowIcon className="h-4 w-4" />
        </a>
        <a
          href="/kosten/waermepumpe-stromverbrauch"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Stromverbrauch berechnen
          <ArrowIcon className="h-4 w-4" />
        </a>
        <a
          href="/kosten/foerderung-waermepumpe"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Förderung prüfen
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="08" eyebrow="Zusammenfassung">
        Fazit: Die Luft-Wasser-Wärmepumpe als Zukunftstechnologie
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Luft-Wasser-Wärmepumpe lässt sich ohne Erdarbeiten installieren und
        deckt mit einer großen Modellauswahl viele Neubauten und Bestandsgebäude
        ab. Ihre Wirtschaftlichkeit steht und fällt jedoch mit korrekter
        Dimensionierung, niedriger Vorlauftemperatur und guter Aufstellplanung.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Nicht die größte oder heißeste Anlage ist automatisch die beste.
        Heizlast, Heizflächen, Schallsituation und Regelung müssen als
        Gesamtsystem betrachtet werden.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir planen Leistung und Aufstellort passend zu Ihrem Haus.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Angebot anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zur Luft-Wasser-Wärmepumpe
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
      title: "Warmwasser-Wärmepumpe im Überblick",
      href: "/typen/warmwasser-waermepumpe",
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

export default function AirWaterHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Luft-Wasser-Wärmepumpe: Funktion, Kosten und Vorteile | H&S"
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
          <Definition />
          <Functioning />
          <Advantages />
          <Installation />
          <Designs />
          <Comparison />
          <Costs />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
