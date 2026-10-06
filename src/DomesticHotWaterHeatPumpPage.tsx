import { useEffect } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import technikraumVisual from "./imports/warmwasser-waermepumpe-technikraum.webp"
import luftKondensatVisual from "./imports/warmwasser-waermepumpe-luft-kondensat.webp"

const HEYFLOW_URL = "#heyflow-angebot"

const CONTENTS = [
  ["was-ist-das", "Was ist eine Warmwasser-Wärmepumpe?"],
  ["funktion", "Funktionsweise"],
  ["vorteile", "Vorteile"],
  ["installation", "Installation & Standort"],
  ["kosten", "Kosten"],
  ["photovoltaik", "Kombination mit Photovoltaik"],
  ["fazit", "Fazit"],
  ["faq", "Häufige Fragen"],
]

const CYCLE = [
  {
    number: "01",
    title: "Luft ansaugen",
    text: "Ein Ventilator führt der Wärmepumpe Raum-, Außen- oder Abluft zu.",
  },
  {
    number: "02",
    title: "Wärme anheben",
    text: "Kältemittel und Verdichter bringen die aufgenommene Energie auf ein höheres Temperaturniveau.",
  },
  {
    number: "03",
    title: "Wasser erwärmen",
    text: "Ein Wärmetauscher überträgt die Energie auf das Trinkwasser im Speicher.",
  },
]

const FAQS = [
  {
    q: "Was ist der Unterschied zwischen einer Warmwasser-Wärmepumpe und einer Heizungswärmepumpe?",
    a: "Eine Warmwasser-Wärmepumpe erwärmt in erster Linie Trinkwasser für Dusche, Küche und Waschbecken. Eine Heizungswärmepumpe versorgt zusätzlich die Heizflächen des Gebäudes und ist entsprechend leistungsstärker.",
  },
  {
    q: "Wie viel Strom spart eine Warmwasser-Wärmepumpe?",
    a: "Gegenüber einem rein elektrischen Warmwasserspeicher kann der Strombedarf je nach Modell, Lufttemperatur und Nutzung deutlich sinken. Hersteller werben teilweise mit Einsparungen bis etwa 70 Prozent; realistisch ist immer die konkrete Betriebssituation entscheidend.",
  },
  {
    q: "Wo sollte eine Warmwasser-Wärmepumpe stehen?",
    a: "Geeignet sind häufig Keller, Hauswirtschafts- oder Technikräume mit ausreichendem Luftvolumen beziehungsweise geeigneter Luftführung. Zusätzlich werden Strom, Wasseranschlüsse und ein Ablauf für Kondensat benötigt.",
  },
  {
    q: "Kann eine Warmwasser-Wärmepumpe mit Photovoltaik betrieben werden?",
    a: "Ja. Die Warmwasserbereitung lässt sich häufig gezielt in Zeiten mit PV-Überschuss verschieben. Dafür müssen Wärmepumpe, Regelung und gegebenenfalls Energiemanagement passend zusammenspielen.",
  },
  {
    q: "Was kostet eine Warmwasser-Wärmepumpe mit Installation?",
    a: "Als grobe Orientierung nennt die bisherige H&S-Seite 2.500 bis 4.500 Euro für das Gerät und zusätzlich ungefähr 1.500 bis 3.000 Euro für die Installation. Leitungswege, Speichergröße und Luftführung können den Gesamtpreis verändern.",
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
          Beratung anfragen
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
              Trinkwasser effizient erwärmen
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.4rem]">
              Warmwasser-Wärmepumpe: effiziente Warmwasserbereitung
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              Funktionsweise, Vorteile, Aufstellung und Kosten einer kompakten
              Wärmepumpe, die unabhängig von der Raumheizung Trinkwasser
              erwärmt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Technik-Ratgeber</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>8 Min. Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>Geprüft vom H&amp;S Meisterbetrieb</span>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                Kostenorientierung
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-5xl font-semibold text-yellow">
                4.000–7.500 €
              </p>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
                Gerät und typische Installation als grober Richtwert
              </p>
              <ul className="mt-7 space-y-3 border-t border-offwhite/10 pt-6 text-sm text-offwhite/80">
                <li className="flex justify-between gap-4">
                  <span>Gerät</span>
                  <strong className="text-offwhite">2.500–4.500 €</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Installation</span>
                  <strong className="text-offwhite">1.500–3.000 €</strong>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Typischer Speicher</span>
                  <strong className="text-yellow">ca. 200–300 l</strong>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Definition() {
  return (
    <section id="was-ist-das" className="scroll-mt-28">
      <SectionHeading number="01" eyebrow="Grundlagen">
        Was ist eine Warmwasser-Wärmepumpe?
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine Warmwasser-Wärmepumpe — auch Brauchwasserwärmepumpe genannt —
        erwärmt ausschließlich Trinkwasser. Sie nutzt Wärme aus der umgebenden
        Luft und speichert das erwärmte Wasser in einem integrierten oder
        angeschlossenen Speicher.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Anders als eine Heizungswärmepumpe versorgt sie keine Heizkörper oder
        Fußbodenheizung. Dadurch ist sie kompakter und lässt sich häufig
        unabhängig vom vorhandenen Heizsystem nachrüsten.
      </p>
      <div className="reveal mt-10 grid gap-6 rounded-2xl bg-softblue/40 p-7 sm:grid-cols-2 sm:p-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Warmwasser-Wärmepumpe
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-graphite">
            Dusche, Küche und Waschbecken
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            Zuständig für die Trinkwassererwärmung.
          </p>
        </div>
        <div className="sm:border-l sm:border-graphite/15 sm:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Heizungswärmepumpe
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-graphite">
            Raumheizung und Warmwasser
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            Versorgt das gesamte Heizsystem des Gebäudes.
          </p>
        </div>
      </div>
    </section>
  )
}

function Functioning() {
  return (
    <section id="funktion" className="scroll-mt-28 pt-24">
      <SectionHeading number="02" eyebrow="Technik">
        Funktionsweise einer Warmwasser-Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Technisch arbeitet sie mit demselben Kältekreis wie eine große
        Wärmepumpe. Der entscheidende Unterschied ist die Aufgabe: Die gewonnene
        Wärme landet direkt im Trinkwasserspeicher.
      </p>
      <div className="reveal my-10 overflow-hidden rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
        <div className="knowledge-stagger grid sm:grid-cols-3">
          {CYCLE.map((step, index) => (
            <div
              key={step.number}
              className={`reveal p-5 ${
                index > 0
                  ? "border-t border-offwhite/10 sm:border-l sm:border-t-0"
                  : ""
              }`}
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
        Den vollständigen Kältekreis verstehen
        <ArrowIcon className="h-4 w-4" />
      </a>
      <figure className="reveal my-14 overflow-hidden rounded-2xl">
        <img
          src={technikraumVisual}
          alt="Fachkraft prüft die integrierte Regelung einer Warmwasser-Wärmepumpe im Keller"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Die kompakte Einheit verbindet Wärmepumpenmodul und
          Trinkwasserspeicher; Betriebswerte werden direkt an der integrierten
          Regelung kontrolliert.
        </figcaption>
      </figure>
    </section>
  )
}

function Advantages() {
  return (
    <section id="vorteile" className="scroll-mt-28 pt-10">
      <SectionHeading number="03" eyebrow="Einordnung">
        Vorteile der Warmwasser-Wärmepumpe
      </SectionHeading>
      <div className="mt-10">
        {[
          [
            "Effiziente Warmwasserbereitung",
            "Umweltwärme ersetzt einen großen Teil der direkten elektrischen Energie.",
          ],
          [
            "Unabhängig von der Raumheizung",
            "Die Hauptheizung kann im Sommer vollständig ausgeschaltet bleiben.",
          ],
          [
            "Gut nachrüstbar",
            "Bei passendem Standort sind häufig keine großen Eingriffe in das Heizsystem notwendig.",
          ],
          [
            "PV-Strom nutzbar",
            "Die Speicherladung lässt sich in Zeiten mit Solarüberschuss verschieben.",
          ],
          [
            "Keller kann mitentfeuchtet werden",
            "Beim Betrieb wird der angesaugten Raumluft Wärme und teilweise Feuchtigkeit entzogen.",
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
      <div className="reveal mt-8 border-l-4 border-yellow pl-5">
        <p className="font-display text-2xl font-semibold text-graphite">
          Bis zu 70 % weniger Strom?
        </p>
        <p className="mt-3 leading-relaxed text-slate">
          Solche Herstellerangaben beziehen sich meist auf den Vergleich mit
          direkter elektrischer Warmwasserbereitung. Lufttemperatur,
          Zapfverhalten, Speichertemperatur und Modell entscheiden über die
          tatsächlich erreichbare Einsparung.
        </p>
      </div>
    </section>
  )
}

function Installation() {
  return (
    <section id="installation" className="scroll-mt-28 pt-24">
      <SectionHeading number="04" eyebrow="Planung">
        Installation einer Warmwasser-Wärmepumpe: Was Sie wissen sollten
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Die Nachrüstung ist häufig unkompliziert, aber nicht jeder Raum ist
        geeignet. Luftvolumen, Temperatur, Schall, Kondensat und Leitungswege
        müssen zusammenpassen.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {[
          {
            title: "Standort und Luftvolumen",
            text: "Herstellervorgaben zu Mindestvolumen, Raumtemperatur und Luftführung beachten.",
          },
          {
            title: "Abkühlung des Raumes",
            text: "Die Wärmepumpe entzieht dem Aufstellraum Wärme; das kann im Keller erwünscht, in kleinen Räumen aber problematisch sein.",
          },
          {
            title: "Kondensatablauf",
            text: "Beim Betrieb entsteht Kondenswasser, das dauerhaft und frostsicher abgeführt werden muss.",
          },
          {
            title: "Schall und Vibrationen",
            text: "Ventilator und Verdichter sind hörbar. Schlaf- und Wohnräume sollten akustisch berücksichtigt werden.",
          },
          {
            title: "Wasseranschlüsse",
            text: "Trinkwasserhygiene, Sicherheitsgruppe und Leitungswege sind fachgerecht auszuführen.",
          },
          {
            title: "Luftkanäle als Option",
            text: "Je nach Modell kann Zu- oder Abluft über Kanäle aus einem anderen Bereich geführt werden.",
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
          src={luftKondensatVisual}
          alt="Fachkraft kontrolliert Luftkanal und Kondensatablauf einer Warmwasser-Wärmepumpe"
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
          Luftführung und Kondensatablauf müssen dauerhaft sicher angeschlossen
          sein; zugleich bleiben Wasserleitungen und Sicherheitsgruppe gut
          zugänglich.
        </figcaption>
      </figure>
    </section>
  )
}

function Costs() {
  return (
    <section id="kosten" className="scroll-mt-28 pt-10">
      <SectionHeading number="05" eyebrow="Investition">
        Kosten der Warmwasser-Wärmepumpe
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Speichergröße, Modell, Luftführung und vorhandene Wasseranschlüsse
        bestimmen den Preis. Die folgenden Werte stammen aus der bisherigen
        H&amp;S-Seite und dienen als grobe Orientierung.
      </p>
      <div className="my-10 grid gap-8 border-y border-graphite/15 py-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Anschaffung
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-graphite">
            2.500–4.500 €
          </p>
          <p className="mt-2 text-sm text-slate">
            abhängig von Speicher und Ausstattung
          </p>
        </div>
        <div className="sm:border-l sm:border-graphite/15 sm:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Installation
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-graphite">
            1.500–3.000 €
          </p>
          <p className="mt-2 text-sm text-slate">
            abhängig von Anschlüssen und Luftführung
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate">
        Zusätzliche Arbeiten an Elektroverteilung, Trinkwasserleitungen oder
        Luftkanälen können den Gesamtpreis erhöhen. Ein individueller
        Förderanspruch sollte vor Beauftragung separat geprüft werden.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <a
          href="/kosten/waermepumpen-kosten"
          className="inline-flex items-center gap-2 font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
        >
          Wärmepumpen-Kosten vergleichen
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

function Photovoltaics() {
  return (
    <section id="photovoltaik" className="scroll-mt-28 pt-24">
      <SectionHeading number="06" eyebrow="Eigenstrom">
        Warmwasser-Wärmepumpe mit Photovoltaik kombinieren
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine Warmwasser-Wärmepumpe eignet sich gut als verschiebbarer
        Stromverbraucher. Statt nachts kann der Speicher tagsüber geladen
        werden, wenn die Photovoltaikanlage Überschuss produziert.
      </p>
      <div className="reveal my-10 rounded-2xl bg-yellow p-7 text-graphite sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite/60">
          Einfache Betriebsstrategie
        </p>
        <div className="mt-6 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <p className="font-display text-2xl font-semibold">PV-Überschuss</p>
          <ArrowIcon className="h-7 w-7 rotate-90 sm:rotate-0" />
          <p className="font-display text-2xl font-semibold">Speicher laden</p>
          <ArrowIcon className="h-7 w-7 rotate-90 sm:rotate-0" />
          <p className="font-display text-2xl font-semibold">
            Warmwasser nutzen
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-slate">
        Ein größerer Speicher erhöht die zeitliche Flexibilität, verursacht aber
        auch höhere Bereitschaftsverluste. Die richtige Größe orientiert sich
        deshalb zuerst am tatsächlichen Warmwasserbedarf.
      </p>
    </section>
  )
}

function Conclusion() {
  return (
    <section id="fazit" className="scroll-mt-28 pt-24">
      <SectionHeading number="07" eyebrow="Zusammenfassung">
        Fazit: Die Warmwasser-Wärmepumpe als nachhaltige Wahl
      </SectionHeading>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Eine Warmwasser-Wärmepumpe ist besonders interessant, wenn die
        Trinkwasserbereitung vom vorhandenen Heizsystem getrennt werden soll,
        ein geeigneter Technikraum vorhanden ist und eigener Solarstrom genutzt
        werden kann.
      </p>
      <p className="mt-5 leading-relaxed text-slate">
        Ob sie wirtschaftlich arbeitet, hängt nicht nur vom Gerätepreis ab.
        Warmwasserbedarf, Lufttemperatur, Speichergröße und Aufstellung
        entscheiden über Effizienz und Komfort.
      </p>
      <div className="mt-10 flex flex-col justify-between gap-6 border-y border-graphite/15 py-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold text-graphite">
          Wir prüfen Aufstellort, Speichergröße und Anschlüsse vor Ort.
        </p>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
        >
          Beratung anfragen <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen zur Warmwasser-Wärmepumpe
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

export default function DomesticHotWaterHeatPumpPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title =
      "Warmwasser-Wärmepumpe: Funktion, Kosten und Vorteile | H&S"
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
          <Costs />
          <Photovoltaics />
          <Conclusion />
          <Faq />
        </article>
      </div>
      <RelatedArticles />
    </>
  )
}
