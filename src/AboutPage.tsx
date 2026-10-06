import { Link } from "react-router"
// TODO: Platzhalter, bis das neue Teamfoto (vor dem Servicefahrzeug) generiert ist
import heroTeam from "./imports/L1090589-Edit.jpg"
import founders from "./imports/L1090304.jpg"
import installationTeam from "./imports/L1090577.jpg"
import workshopTeam from "./imports/L1090512.jpg"
import detailWork from "./imports/L1090437.jpg"
import fieldTeam from "./imports/L1090564.jpg"

const VALUES = [
  {
    number: "01",
    title: "Expertise, die das Ganze sieht.",
    text: "Wir verbinden fundiertes SHK-Handwerk mit moderner Energietechnik. Unser fest angestelltes Team wird kontinuierlich geschult und denkt Beratung, Planung, Montage und Service als ein System.",
  },
  {
    number: "02",
    title: "Erreichbar, wenn es zählt.",
    text: "Feste Ansprechpersonen, kurze Wege und eigene Montageteams sorgen dafür, dass Fragen schnell beantwortet und Projekte verlässlich umgesetzt werden — auch wenn es einmal kurzfristig sein muss.",
  },
  {
    number: "03",
    title: "Transparent und proaktiv.",
    text: "Wir sagen offen, was möglich ist und was nicht. Wir halten Sie auf dem Laufenden, übernehmen Verantwortung und empfehlen nur Lösungen, die wirtschaftlich und langfristig sinnvoll sind.",
  },
]

const LOCATIONS = ["Willich", "Köln", "Solingen"]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
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

function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-graphite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24">
        <div className="reveal z-10">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-graphite/15 bg-offwhite px-3.5 py-1.5 text-[12px] font-semibold text-slate sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
            Über H&amp;S Energiesysteme
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.1rem]">
            Handwerk mit Herkunft.{" "}
            <span className="marker">Energie mit Zukunft.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            Unsere Familien stammen aus traditionsreichen Handwerksbetrieben.
            Diese Erfahrung verbinden wir mit moderner Energietechnik und einem
            Service, auf den Sie sich vom ersten Gespräch bis zur fertigen
            Anlage verlassen können.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#werte"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
            >
              Wofür wir stehen <ArrowIcon />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full border border-graphite/20 px-7 py-3.5 text-base font-semibold text-graphite transition-colors duration-200 hover:bg-graphite hover:text-offwhite"
            >
              Persönlich kennenlernen
            </a>
          </div>
        </div>

        <div className="reveal relative lg:translate-x-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-graphite/10">
            <img
              src={heroTeam}
              alt="Das H&S Team vor einem Servicefahrzeug"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-graphite/10 bg-offwhite p-4 text-graphite shadow-xl shadow-graphite/10 sm:block">
            <p className="font-display text-4xl font-semibold leading-none">
              150+
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              Jahre Handwerkstradition
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Heritage() {
  return (
    <section className="bg-offwhite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Unsere Geschichte
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Aus Überzeugung
              <br />
              <span className="marker">Meisterbetrieb.</span>
            </h2>
          </div>
          <div className="reveal lg:col-span-7 lg:pt-10">
            <blockquote className="font-display text-3xl leading-snug text-graphite sm:text-4xl">
              „Echte Handwerksqualität — zu Ehren unserer Gründerväter und
              gemacht für die Anforderungen von morgen.“
            </blockquote>
            <div className="mt-8 grid gap-6 border-t border-graphite/15 pt-8 sm:grid-cols-2">
              <p className="leading-relaxed text-slate">
                Für uns ist gutes Handwerk mehr als eine saubere Installation.
                Es beginnt mit ehrlicher Beratung, lebt von guter Kommunikation
                und endet erst, wenn die Anlage zuverlässig läuft.
              </p>
              <p className="leading-relaxed text-slate">
                Deshalb arbeiten bei H&amp;S Fachleute aus Beratung, Planung,
                Montage und Service eng zusammen — regional verwurzelt und mit
                einem gemeinsamen Qualitätsanspruch.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-[2rem]">
          <img
            src={founders}
            alt="Zwei Mitglieder des H&S Teams am Standort"
            className="h-[420px] w-full object-cover sm:h-[560px]"
          />
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section
      id="werte"
      className="border-y border-graphite/10 bg-softblue/30 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Unsere Werte
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Verlässlichkeit zeigt sich
              <br />
              <span className="marker">in jedem Schritt.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-slate">
            Was wir versprechen, prägt unsere tägliche Arbeit — auf der
            Baustelle, am Telefon und lange nach der Inbetriebnahme.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {VALUES.map((value) => (
            <article
              key={value.number}
              className="reveal group flex min-h-[350px] flex-col rounded-3xl border border-graphite/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/5 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-amber">
                  {value.number}
                </span>
                <span className="h-3 w-3 rounded-full bg-yellow transition-transform duration-300 group-hover:scale-150" />
              </div>
              <h3 className="mt-auto pt-16 font-display text-3xl font-semibold leading-tight text-graphite">
                {value.title}
              </h3>
              <p className="mt-5 leading-relaxed text-slate">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section className="overflow-hidden bg-ink px-5 py-20 text-offwhite md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
              Unser Team
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-offwhite md:text-5xl">
              Eigene Fachkräfte.
              <br />
              Ein gemeinsamer Anspruch.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-offwhite/65">
              Unsere Mitarbeitenden sind fest bei uns angestellt und arbeiten
              als eingespieltes Team. So bleiben Wissen, Verantwortung und
              Qualität dort, wo sie hingehören: bei uns.
            </p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Kontinuierliche Schulungen",
                "Feste Ansprechpartner",
                "Eigene Montageteams",
                "Service aus einer Hand",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-offwhite/85"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-xs font-bold text-graphite">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal grid grid-cols-5 gap-4">
            <img
              src={installationTeam}
              alt="H&S Fachkräfte bei der Installation einer Wärmepumpe"
              className="col-span-5 h-72 w-full rounded-3xl object-cover sm:h-80"
            />
            <img
              src={workshopTeam}
              alt="Gemeinsame Montagearbeit im Heizungsraum"
              className="col-span-3 h-56 w-full rounded-3xl object-cover"
            />
            <img
              src={detailWork}
              alt="Präzise handwerkliche Arbeit an Rohrleitungen"
              className="col-span-2 h-56 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Regional() {
  return (
    <section className="bg-yellow px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/60">
              Regional verbunden
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Drei Standorte.
              <br />
              Kurze Wege.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite/70">
              Von Willich, Köln und Solingen aus begleiten wir private Haushalte
              in der Region — persönlich, schnell erreichbar und immer nah am
              Projekt.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {LOCATIONS.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-graphite/25 bg-offwhite/30 px-5 py-2.5 font-semibold"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-[2rem]">
            <img
              src={fieldTeam}
              alt="H&S Team bei einem regionalen Kundenprojekt"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="bg-offwhite px-5 py-20 md:px-8 md:py-28">
      <div className="reveal mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Lernen wir uns kennen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Wir machen Ihr Zuhause
          <br />
          <span className="marker">zukunftssicher.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate">
          Ob Wärmepumpe oder ergänzende Energielösung: Wir finden den Weg, der
          zu Ihrem Zuhause, Ihrem Budget und Ihren Zielen passt.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-graphite px-7 py-4 font-semibold text-offwhite transition-all hover:-translate-y-0.5 hover:bg-ink"
          >
            Jetzt Kontakt aufnehmen <ArrowIcon />
          </a>
          <Link
            to="/waermepumpen"
            className="inline-flex items-center rounded-full border border-graphite/20 px-7 py-4 font-semibold text-graphite transition-colors hover:border-graphite hover:bg-graphite hover:text-offwhite"
          >
            Wärmepumpen entdecken
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Heritage />
      <Values />
      <Craft />
      <Regional />
      <ClosingCta />
    </>
  )
}
