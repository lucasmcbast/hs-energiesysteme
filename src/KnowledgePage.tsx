import { Link } from "react-router"
import logoBosch from "./imports/Bosch_Logo.png"
import logoViessmann from "./imports/Viessmann_Logo.png"
import logoVaillant from "./imports/vaillant-logo.png"
import logoBuderus from "./imports/buderus-logo.png"

type Article = {
  title: string
  description: string
  href: string
  label: string
  readTime: string
}

const BASICS: Article[] = [
  {
    title: "Wie funktioniert eine Wärmepumpe?",
    description:
      "Einfach erklärt: So wird aus Umweltenergie zuverlässig Wärme für Ihr Zuhause.",
    href: "/wissen/wie-funktioniert-eine-warmepumpe",
    label: "Grundlagen",
    readTime: "6 Min.",
  },
  {
    title: "Stromverbrauch einer Wärmepumpe",
    description:
      "Welche Faktoren den Verbrauch bestimmen und wie Sie realistisch kalkulieren.",
    href: "/kosten/waermepumpe-stromverbrauch",
    label: "Wirtschaftlichkeit",
    readTime: "8 Min.",
  },
]

const FINANCE: Article[] = [
  {
    title: "Was kostet eine Wärmepumpe?",
    description:
      "Anschaffung, Installation und Betrieb: alle Kosten transparent eingeordnet.",
    href: "/kosten/waermepumpen-kosten",
    label: "Kosten",
    readTime: "9 Min.",
  },
  {
    title: "Förderung für Wärmepumpen",
    description:
      "Fördersätze, Voraussetzungen und der Weg zur passenden Unterstützung.",
    href: "/kosten/foerderung-waermepumpe",
    label: "Förderung",
    readTime: "7 Min.",
  },
]

const MANUFACTURERS = [
  {
    name: "Bosch",
    href: "/hersteller/bosch-waermepumpe",
    logo: logoBosch,
    teaser:
      "Modelle und Preise im Überblick: Dazu die wichtigsten Vorteile, Nachteile und Einsatzbereiche von Bosch Wärmepumpen.",
  },
  {
    name: "Viessmann",
    href: "/hersteller/viessmann-waermepumpe",
    logo: logoViessmann,
    teaser:
      "Welche Modelle gibt es, was kosten sie und wo liegen Stärken und Schwächen einer Viessmann Wärmepumpe?",
  },
  {
    name: "Buderus",
    href: "/hersteller/buderus-warmepumpe",
    logo: logoBuderus,
    teaser:
      "Alle Informationen zu Baureihen, Preisen, Vorteilen und möglichen Nachteilen von Buderus Wärmepumpen.",
  },
  {
    name: "Vaillant",
    href: "/hersteller/vaillant-warmepumpe",
    logo: logoVaillant,
    teaser:
      "Modelle vergleichen und Kosten einschätzen: die Vorteile und Nachteile von Vaillant Wärmepumpen kompakt erklärt.",
  },
]

function ArrowIcon({ className = "" }: { className?: string }) {
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

function KnowledgeHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 text-offwhite md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-offwhite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div className="reveal">
          <div className="flex items-center gap-3 text-sm font-semibold text-offwhite/60">
            <Link to="/" className="transition-colors hover:text-offwhite">
              Startseite
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-yellow">Wissen</span>
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            H&amp;S Ratgeber
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-[4.4rem]">
            Antworten für ein{" "}
            <span className="text-yellow">zukunftssicheres Zuhause.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-offwhite/70">
            Verständliche Antworten rund um Wärmepumpen, Kosten, Förderung und
            Technik — fundiert von unserem Meisterbetrieb und übersichtlich an
            einem Ort.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#themen"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
            >
              Alle Themen ansehen <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-offwhite/30 px-7 py-3.5 text-base font-semibold text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-graphite"
            >
              Persönlich beraten lassen
            </a>
          </div>
        </div>

        <aside className="reveal border-t border-offwhite/20 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="flex gap-10">
            <div>
              <p className="font-display text-4xl font-semibold text-yellow">
                10
              </p>
              <p className="mt-1 text-sm text-offwhite/60">Ratgeber</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-yellow">
                4
              </p>
              <p className="mt-1 text-sm text-offwhite/60">Themenwelten</p>
            </div>
          </div>
          <div className="mt-8 border-t border-offwhite/15 pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-offwhite/50">
              Beliebte Artikel
            </p>
            <div className="mt-4 divide-y divide-offwhite/15">
              {[BASICS[0], FINANCE[0], FINANCE[1]].map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="group flex items-center justify-between gap-5 py-4 first:pt-0"
                >
                  <span className="font-medium leading-snug">
                    {article.title}
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-yellow transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function TopicNavigation() {
  const topics = [
    ["01", "Grundlagen", "#grundlagen"],
    ["02", "Kosten & Förderung", "#kosten"],
    ["03", "Hersteller", "#hersteller"],
    ["04", "Wärmepumpen-Typen", "#typen"],
  ]

  return (
    <section id="themen" className="border-y border-graphite/10 bg-softblue/30">
      <div className="mx-auto grid max-w-7xl px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {topics.map(([number, title, href], index) => (
          <a
            key={title}
            href={href}
            className={`group flex items-center justify-between gap-4 py-6 transition-colors hover:text-amber lg:px-6 ${
              index > 0 ? "border-t border-graphite/10 sm:border-t-0" : ""
            } ${index % 2 === 1 ? "sm:border-l sm:border-graphite/10" : ""} ${
              index > 1 ? "lg:border-l lg:border-graphite/10" : ""
            }`}
          >
            <span>
              <span className="flex items-center gap-2 text-xs font-semibold text-amber">
                <span className="knowledge-topic-dot h-1.5 w-1.5 rounded-full bg-amber" />
                {number}
              </span>
              <span className="mt-1 block font-display text-xl font-semibold text-graphite">
                {title}
              </span>
            </span>
            <ArrowIcon className="h-5 w-5 text-slate transition-transform duration-200 group-hover:translate-x-1 group-hover:text-amber" />
          </a>
        ))}
      </div>
    </section>
  )
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={article.href}
      className="reveal group flex min-h-72 flex-col rounded-2xl border border-graphite/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
        {article.label}
      </span>
      <h3 className="mt-auto pt-12 font-display text-3xl font-semibold leading-tight text-graphite">
        {article.title}
      </h3>
      <p className="mt-4 leading-relaxed text-slate">{article.description}</p>
      <span className="mt-6 flex items-center justify-between border-t border-graphite/10 pt-5 text-sm">
        <span className="text-slate">{article.readTime} Lesezeit</span>
        <span className="inline-flex items-center gap-2 font-semibold text-graphite">
          Artikel lesen
          <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  )
}

function Basics() {
  return (
    <section
      id="grundlagen"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Wärmepumpen verstehen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Gute Entscheidungen beginnen mit{" "}
            <span className="marker">klarem Wissen.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            Wie arbeitet eine Wärmepumpe und was bedeutet das für den
            Stromverbrauch? Hier starten Sie mit den wichtigsten Grundlagen.
          </p>
        </div>
        <div className="knowledge-stagger grid gap-5 sm:grid-cols-2">
          {BASICS.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Finance() {
  return (
    <section id="kosten" className="bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="knowledge-stagger order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
            {FINANCE.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group flex min-h-80 flex-col rounded-2xl border border-offwhite/10 bg-offwhite/[0.06] p-7 transition-colors hover:bg-offwhite/[0.1]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
                  {article.label}
                </span>
                <h3 className="mt-auto pt-12 font-display text-3xl font-semibold leading-tight">
                  {article.title}
                </h3>
                <p className="mt-4 leading-relaxed text-offwhite/65">
                  {article.description}
                </p>
                <span className="mt-6 flex items-center justify-between border-t border-offwhite/10 pt-5 text-sm">
                  <span className="text-offwhite/50">
                    {article.readTime} Lesezeit
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold">
                    Artikel lesen
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="reveal order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
              Kosten &amp; Förderung
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              Rechnen, fördern, langfristig profitieren.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-offwhite/70">
              Eine Wärmepumpe ist eine Investition in Ihr Zuhause. Wir zeigen,
              welche Kosten entstehen, welche Förderung möglich ist und worauf
              es bei einer realistischen Betrachtung ankommt.
            </p>
            <div className="mt-9 border-l-2 border-yellow pl-5">
              <p className="font-display text-2xl font-semibold">
                Neutral eingeordnet, verständlich erklärt.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/60">
                Unsere Inhalte basieren auf täglicher Praxis in Beratung,
                Planung und Installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Manufacturers() {
  return (
    <section
      id="hersteller"
      className="border-b border-graphite/10 bg-offwhite py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Hersteller im Vergleich
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Welche Wärmepumpe passt zu Ihrem Zuhause?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Lernen Sie die Besonderheiten etablierter Hersteller kennen und
            vergleichen Sie Systeme, Stärken und Einsatzbereiche.
          </p>
        </div>

        <div className="knowledge-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MANUFACTURERS.map((manufacturer) => (
            <Link
              key={manufacturer.name}
              to={manufacturer.href}
              className="reveal group flex min-h-80 flex-col rounded-2xl border border-graphite/10 bg-offwhite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-graphite/10"
            >
              <img
                src={manufacturer.logo}
                alt={`${manufacturer.name} Logo`}
                className="h-12 max-w-36 object-contain object-left"
              />
              <div className="mt-auto pt-10">
                <h3 className="font-display text-2xl font-semibold leading-tight text-graphite">
                  {manufacturer.name} Wärmepumpen
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {manufacturer.teaser}
                </p>
                <span className="mt-5 flex items-center justify-between border-t border-graphite/10 pt-4 text-sm font-semibold text-graphite">
                  Marken-Ratgeber lesen
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Types() {
  const types = [
    {
      title: "Luft-Wasser-Wärmepumpe",
      text: "Die vielseitige Lösung für Neubau und Bestand — effizient, bewährt und vergleichsweise einfach zu installieren.",
      href: "/typen/luft-wasser-warmepumpe",
      readTime: "7 Min.",
    },
    {
      title: "Warmwasser-Wärmepumpe",
      text: "Warmwasser unabhängig und effizient erzeugen — ideal als Ergänzung zu bestehenden Heizsystemen.",
      href: "/typen/warmwasser-waermepumpe",
      readTime: "5 Min.",
    },
  ]

  return (
    <section
      id="typen"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Wärmepumpen-Typen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Die richtige Technik für Ihren Bedarf.
          </h2>
        </div>
        <p className="max-w-md leading-relaxed text-slate">
          Nicht jede Wärmepumpe löst dieselbe Aufgabe. Unsere Übersichten helfen
          bei der ersten Orientierung.
        </p>
      </div>

      <div className="knowledge-stagger mt-12 grid gap-6 md:grid-cols-2">
        {types.map((type) => (
          <Link
            key={type.title}
            to={type.href}
            className="reveal group flex min-h-80 flex-col rounded-2xl border border-graphite/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10 sm:p-9"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Typen-Ratgeber
            </span>
            <h3 className="mt-auto pt-12 font-display text-3xl font-semibold text-graphite">
              {type.title}
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed text-slate">
              {type.text}
            </p>
            <span className="mt-6 flex items-center justify-between border-t border-graphite/10 pt-5 text-sm">
              <span className="text-slate">{type.readTime} Lesezeit</span>
              <span className="inline-flex items-center gap-2 font-semibold text-graphite">
                Artikel lesen
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ConsultationBand() {
  return (
    <section className="bg-yellow">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-16 md:px-8 lg:flex-row lg:items-end">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite/60">
            Wissen trifft Erfahrung
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Manche Antworten findet man am besten direkt vor Ort.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-graphite/70">
            Wir übersetzen technische Möglichkeiten in eine klare,
            wirtschaftliche Empfehlung für Ihr Zuhause.
          </p>
        </div>
        <div className="reveal shrink-0">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-graphite px-7 py-3.5 text-base font-semibold text-offwhite transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-xl"
          >
            Beratung anfragen <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function KnowledgePage() {
  return (
    <>
      <KnowledgeHero />
      <TopicNavigation />
      <Basics />
      <Finance />
      <Manufacturers />
      <Types />
      <ConsultationBand />
    </>
  )
}
