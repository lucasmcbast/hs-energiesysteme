import { useEffect, useState } from "react"
import { ArrowIcon } from "./SeoArticlePage"
import fotoHof from "./imports/karriere-hof.webp"
import fotoTischrunde from "./imports/karriere-tischrunde.webp"
import fotoTeamevent from "./imports/karriere-teamevent.webp"
import fotoTeamKessel from "./imports/karriere-team-kessel.webp"
import fotoFirmenwagen from "./imports/karriere-firmenwagen.webp"
import fotoSchulung from "./imports/karriere-schulung.webp"
import fotoWerkzeug from "./imports/karriere-werkzeug.webp"
import fotoSonja from "./imports/sonja-dominikus.webp"

const HEYFLOW_RECRUITING = "https://heyflow.id/recruiting--hs-energiesysteme#01-ansprache"
const heyflowJob = (job: string) => `${HEYFLOW_RECRUITING}?job=${job}`

type Area = "Handwerk" | "Büro & Vertrieb"

type Job = {
  title: string
  area: Area
  summary: string
  salary: string
  /* Nur anzeigen, was für die Stelle gilt — bei Bürostellen entfallen beide. */
  needsJourneyman?: boolean
  needsLicense?: boolean
  keywords?: string[]
  applyUrl: string
}

/* Stellen aus hs-energiesysteme.de/bewerben (Stand Okt. 2026) + Buchhaltung aus Personio.
   TODO: Die alte Seite schickte die letzten vier Handwerks-/Vertriebsstellen alle mit
   ?job=elektriker zu Heyflow. Die job-Werte unten bitte mit den Heyflow-Regeln abgleichen. */
const JOBS: Job[] = [
  {
    title: "Anlagenmechaniker SHK",
    area: "Handwerk",
    summary: "Montage von Wärmepumpen",
    salary: "2.804 – 5.175 €",
    needsJourneyman: true,
    needsLicense: true,
    applyUrl: heyflowJob("anlagemechaniker"),
  },
  {
    title: "Heizungsinstallateur",
    area: "Handwerk",
    summary: "Hilfe bei der Montage von Wärmepumpen — auch ohne Gesellenbrief",
    salary: "2.604 – 3.175 €",
    needsLicense: true,
    applyUrl: heyflowJob("heizungsinstalleur"),
  },
  {
    title: "Elektriker",
    area: "Handwerk",
    summary: "Elektrische Installation von Wärmepumpen und PV-Anlagen",
    salary: "3.333 – 4.948 €",
    needsJourneyman: true,
    needsLicense: true,
    applyUrl: heyflowJob("elektriker"),
  },
  {
    title: "Kundendienstmonteur SHK",
    area: "Handwerk",
    summary: "Wartung und Service von Wärmepumpen",
    salary: "3.400 – 5.500 €",
    needsJourneyman: true,
    needsLicense: true,
    applyUrl: heyflowJob("kundendienstmonteur"),
  },
  {
    title: "Projektleiter & Planer Wärmepumpen",
    area: "Handwerk",
    summary: "Du leitest eigenverantwortlich Wärmepumpenprojekte",
    salary: "4.000 – 5.200 €",
    needsJourneyman: true,
    needsLicense: true,
    applyUrl: heyflowJob("projektleiter"),
  },
  {
    title: "Technischer Kundenberater Außendienst",
    area: "Büro & Vertrieb",
    summary: "Beratung und Verkauf von Wärmepumpen beim Kunden",
    salary: "5.000 – 10.000 €",
    needsJourneyman: true,
    needsLicense: true,
    applyUrl: heyflowJob("kundenberater"),
  },
  {
    title: "Buchhalter/in / Accountant",
    area: "Büro & Vertrieb",
    summary: "Den Überblick über alle Zahlen im Betrieb behalten",
    salary: "4.000 – 4.600 €",
    keywords: ["Buchhaltung", "Rechnungswesen", "Finanzen", "Verwaltung"],
    applyUrl: "https://hsenergiesysteme.jobs.personio.com/job/2827595",
  },
]

const AREAS: ("Alle" | Area)[] = ["Alle", "Handwerk", "Büro & Vertrieb"]

const HIGHLIGHTS = [
  { value: "32 h", label: "Woche möglich" },
  { value: "30", label: "Tage Urlaub" },
  { value: "2er", label: "feste Teams" },
  { value: "3", label: "Standorte" },
]

const VOICES = [
  {
    name: "Timm",
    meta: "24 Jahre · Anlagenmechaniker",
    quote:
      "Man wird mit Problemen nicht alleine gelassen, sondern wir finden gemeinsam eine Lösung. Wir gehen alle einen gemeinsamen Weg und gehen auf Augenhöhe miteinander um. Es werden alle Meinungen gehört und respektiert.",
  },
  {
    name: "Björn",
    meta: "32 Jahre · Technischer Kundenberater",
    quote:
      "Offene und direkte Kommunikation, Vorgesetzte interessieren sich für ihre Mitarbeiter, auch die Chefs haben Baustellen schon gesehen und mit montiert. Keine leeren Versprechen — und Material, Werkzeug und Autos auf hohem Niveau.",
  },
]

const STEPS = [
  { title: "Bewerben", text: "Gib einfach deine Daten und Kontaktinfos ein — in 2 Minuten." },
  { title: "Telefonat", text: "Wir rufen dich an und telefonieren 10–15 Minuten." },
  { title: "Kennenlernen", text: "Du kommst zu uns oder wir zu dir — und wir sprechen im Detail." },
  { title: "Es passt", text: "Passt es für alle, erhältst du direkt ein Angebot." },
  { title: "Start", text: "Du bekommst eine ordentliche Einarbeitung." },
]

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/hsenergiesysteme/" },
  { label: "TikTok", href: "https://www.tiktok.com/@hsenergiesysteme" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/hs-energiesysteme" },
]

function CareerHero() {
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
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1fr_1.05fr]">
        <div className="reveal">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-graphite/15 bg-offwhite px-3.5 py-1.5 text-[12px] font-semibold text-slate sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
            Jobs bei H&amp;S · {JOBS.length} offene Stellen
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.1rem]">
            Qualität in unserer Arbeit.{" "}
            <span className="marker">Qualität als Arbeitgeber.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            Wir sind ein lokaler Meisterbetrieb für Wärmepumpen und PV-Anlagen.
            Wir arbeiten auf Augenhöhe, zahlen überdurchschnittlich und
            ermöglichen 32-Stunden-Wochen.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#stellen"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
            >
              Offene Stellen ansehen <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={HEYFLOW_RECRUITING}
              className="inline-flex items-center rounded-full border border-graphite/20 px-7 py-3.5 text-base font-semibold text-graphite transition-colors duration-200 hover:bg-graphite hover:text-offwhite"
            >
              Initiativ bewerben
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-4 gap-4 border-t border-graphite/10 pt-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-3xl font-semibold text-graphite">
                  {h.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-slate">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Collage aus echten Team-Fotos */}
        <div className="reveal grid grid-cols-2 gap-4">
          <img
            src={fotoHof}
            alt="Das H&S Team im Hof am Standort"
            className="col-span-2 aspect-[16/8] w-full rounded-2xl object-cover shadow-2xl shadow-graphite/10"
          />
          <img
            src={fotoTischrunde}
            alt="Kollegen von H&S im Gespräch bei der Firmenfeier"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="relative">
            <img
              src={fotoTeamevent}
              alt="H&S Team beim Sommerfest mit Foodtruck"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <p className="absolute -bottom-4 -right-3 hidden max-w-[230px] rounded-xl border border-graphite/10 bg-offwhite p-4 font-display text-lg font-semibold leading-snug text-graphite shadow-xl shadow-graphite/10 sm:block">
              „Wir sorgen für gut geplante Baustellen. Du machst, was dir Spaß
              macht.“
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Requirement({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-graphite/15 px-3 py-1 text-xs font-medium text-slate">
      {children}
    </span>
  )
}

function OpenPositions() {
  const [area, setArea] = useState<(typeof AREAS)[number]>("Alle")
  const visible = JOBS.filter((j) => area === "Alle" || j.area === area)

  return (
    <section id="stellen" className="scroll-mt-24 border-y border-graphite/10 bg-softblue/30">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Offene Stellen
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Finde deinen Platz im Team.
            </h2>
          </div>
          <div role="tablist" aria-label="Bereich filtern" className="flex flex-wrap gap-2">
            {AREAS.map((a) => {
              const count = a === "Alle" ? JOBS.length : JOBS.filter((j) => j.area === a).length
              const active = a === area
              return (
                <button
                  key={a}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setArea(a)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "border-graphite bg-graphite text-offwhite"
                      : "border-graphite/15 bg-offwhite text-graphite hover:border-graphite/40"
                  }`}
                >
                  {a} <span className={active ? "text-yellow" : "text-slate"}>{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {visible.map((job) => (
            <li
              key={job.title}
              className="group flex flex-col rounded-2xl border border-graphite/10 bg-offwhite p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-graphite/20 hover:shadow-xl hover:shadow-graphite/5 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {job.area}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-graphite">
                {job.title}{" "}
                <span className="font-body text-base font-medium text-slate">(m/w/d)</span>
              </h3>
              <p className="mt-3 leading-relaxed text-slate">{job.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.needsJourneyman && <Requirement>Gesellenbrief</Requirement>}
                {job.needsLicense && <Requirement>Führerschein</Requirement>}
                {job.keywords?.map((k) => <Requirement key={k}>{k}</Requirement>)}
              </div>
              <div className="flex-1" />
              <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-graphite/10 pt-5">
                <div>
                  <p className="text-xs text-slate">Gehalt pro Monat</p>
                  <p className="font-display text-2xl font-semibold text-graphite">{job.salary}</p>
                </div>
                <a
                  href={job.applyUrl}
                  target={job.applyUrl.includes("personio") ? "_blank" : undefined}
                  rel={job.applyUrl.includes("personio") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-sm font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/40"
                >
                  Jetzt bewerben <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-slate">
          Nichts Passendes dabei?{" "}
          <a
            href={HEYFLOW_RECRUITING}
            className="font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
          >
            Bewirb dich initiativ
          </a>{" "}
          — wir melden uns.
        </p>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Was für H&amp;S spricht
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Faire, moderne Arbeit — <span className="marker">im Handwerk.</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate">
          Um ein nachhaltiges Arbeitsumfeld im Handwerk zu schaffen, legen wir
          besonderen Wert auf faire und moderne Arbeitsbedingungen.
        </p>
      </div>

      <div className="knowledge-stagger mt-12 grid gap-5 md:grid-cols-6">
        <article className="reveal group overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite md:col-span-3 md:row-span-2">
          <img src={fotoTeamKessel} alt="Vier H&S Monteure arbeiten gemeinsam an einer alten Heizung" className="aspect-[4/3] w-full object-cover md:aspect-[4/4]" loading="lazy" />
          <div className="p-7">
            <h3 className="font-display text-2xl font-semibold text-graphite">Eingespielte Teams</h3>
            <p className="mt-2 leading-relaxed text-slate">
              Auf der Baustelle seid ihr immer zu zweit im festen Team. Das Büro
              ist eure verlängerte Werkbank.
            </p>
          </div>
        </article>

        <article className="reveal flex flex-col justify-between rounded-3xl bg-yellow p-7 md:col-span-3">
          <p className="font-display text-4xl font-semibold text-graphite md:text-5xl">über Tarif</p>
          <div className="mt-8">
            <h3 className="font-display text-2xl font-semibold text-graphite">Attraktives Gehalt &amp; Bonus</h3>
            <p className="mt-2 leading-relaxed text-graphite/75">
              Wir zahlen über Tarif und Branchenschnitt. Dein Gehalt kommt
              natürlich pünktlich.
            </p>
          </div>
        </article>

        <article className="reveal flex flex-col justify-between rounded-3xl bg-ink p-7 text-offwhite md:col-span-3">
          <p className="font-display text-4xl font-semibold text-yellow md:text-5xl">4-Tage-Woche</p>
          <div className="mt-8">
            <h3 className="font-display text-2xl font-semibold">Freitag frei möglich</h3>
            <p className="mt-2 leading-relaxed text-offwhite/70">
              Wenn die Baustelle am Donnerstag fertig ist, gibt’s Freitag frei.
            </p>
          </div>
        </article>

        {[
          {
            src: fotoFirmenwagen,
            alt: "H&S Servicefahrzeug mit Firmenbeschriftung",
            title: "Firmenwagen",
            text: "Jedes Team erhält ein Fahrzeug für die Baustelle und die Option auf ein weiteres.",
          },
          {
            src: fotoSchulung,
            alt: "Zwei H&S Kollegen an einer Wärmepumpe im Schulungsraum",
            title: "Handwerksstolz",
            text: "Wir legen viel Wert auf Qualität, schulen dich und nehmen jeden Kollegen ernst.",
          },
          {
            src: fotoWerkzeug,
            alt: "H&S Monteur trägt Werkzeugkoffer zum Kundenhaus",
            title: "Und mehr",
            text: "30 Tage Urlaub, Hilti- und Milwaukee-Werkzeug, Engelbert Strauss, Teamevents.",
          },
        ].map((b) => (
          <article key={b.title} className="reveal overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite md:col-span-2">
            <img src={b.src} alt={b.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-graphite">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Voices() {
  return (
    <section className="bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Was unsere Mitarbeiter sagen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            „Gemeinsam weiterentwickeln und als Team in der Champions League spielen.“
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {VOICES.map((v) => (
            <figure key={v.name} className="reveal flex flex-col rounded-3xl border border-offwhite/10 bg-offwhite/[0.04] p-7 sm:p-9">
              <span className="font-display text-5xl leading-none text-yellow" aria-hidden="true">„</span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-offwhite/85">{v.quote}</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-offwhite/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow font-display text-lg font-semibold text-graphite">
                  {v.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{v.name}</span>
                  <span className="block text-sm text-offwhite/55">{v.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Unser Bewerbungsprozess
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Ohne Anschreiben. In fünf Schritten.
        </h2>
      </div>
      <ol className="knowledge-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="reveal rounded-2xl border border-graphite/10 bg-offwhite p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow font-display text-lg font-semibold text-graphite">
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-graphite">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function RecruitingContact() {
  return (
    <section id="kontakt" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
      <div className="reveal grid overflow-hidden rounded-3xl bg-yellow md:grid-cols-[0.8fr_1.2fr]">
        <img
          src={fotoSonja}
          alt="Sonja Dominikus, Senior People & Culture Manager bei H&S Energiesysteme"
          className="aspect-square h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite/60">
            Deine Ansprechpartnerin
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Jetzt in nur 2 Minuten bewerben.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite/75">
            Beantworte ein paar kurze Fragen und wir melden uns umgehend bei dir.
            Wir freuen uns auf dich!
          </p>
          <p className="mt-6 font-semibold text-graphite">
            Sonja Dominikus
            <span className="block text-sm font-medium text-graphite/65">
              Senior People &amp; Culture Manager
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={HEYFLOW_RECRUITING}
              className="inline-flex items-center gap-2 rounded-full bg-graphite px-7 py-4 font-semibold text-offwhite transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Bewerbung starten <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="tel:+4921548809537"
              className="inline-flex items-center rounded-full border border-graphite/30 px-7 py-4 font-semibold text-graphite transition-colors hover:bg-graphite hover:text-offwhite"
            >
              02154 8809537
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-graphite/70">
            <span>Folge uns:</span>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-semibold text-graphite underline decoration-graphite/30 underline-offset-4 hover:decoration-graphite">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CareerPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Jobs bei H&S Energiesysteme: Anlagenmechaniker, Elektriker & mehr"
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <CareerHero />
      <OpenPositions />
      <Benefits />
      <Voices />
      <Process />
      <RecruitingContact />
    </>
  )
}
