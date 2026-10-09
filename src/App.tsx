import { useEffect, useMemo, useState } from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useLocation,
} from "react-router"
import logoDark from "./imports/H_S_logo_large-Dark.png"
import useReveal from "./useReveal"
import heroWaermepumpe from "./imports/L1090589-Edit.jpg"
import familieHaus from "./imports/image-3.webp"
import portraitGF from "./imports/image-4.webp"
import portraitMeister from "./imports/image-5.webp"
import portraitBeratung from "./imports/image-6.webp"
import portraitService from "./imports/image-7.webp"
import einzugsgebietKarte from "./imports/hs-einzugsgebiet-karte-2026_v2-mai.webp"
import teamDuo from "./imports/L1090304.jpg"
import beratungBroschuere from "./imports/L1090431.jpg"
import montageKupfer from "./imports/L1090437.jpg"
import serviceLuefter from "./imports/L1090463.jpg"
import montageTeam from "./imports/L1090512.jpg"
import montageRohre from "./imports/L1090531.jpg"
import montageBohren from "./imports/L1090564.jpg"
import aussenTeam from "./imports/L1090577.jpg"
import logoBosch from "./imports/Bosch_Logo.png"
import logoViessmann from "./imports/Viessmann_Logo.png"
import logoVaillant from "./imports/vaillant-logo.png"
import logoPanasonic from "./imports/panasonic-logo.png"
import logoBuderus from "./imports/buderus-logo.png"
import logoGruenbeck from "./imports/gruenbeck-logo.png"
import logoBwp from "./imports/bwp.jpg"

/* Zentraler Clickout in den Heyflow-Angebots-Funnel.
   TODO: durch den echten Heyflow-Link ersetzen. */
const HEYFLOW_URL = "#heyflow-angebot"

/* Logo — die offizielle Datei, unverändert. `light` invertiert nur die
   Farbe zu Weiß für dunkle Hintergründe (Brand erlaubt Graphite oder Weiß). */
function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <img
      src={logoDark}
      alt="H&S Energiesysteme"
      className={className}
      style={light ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */
const NAV: { label: string; href?: string; to?: string }[] = [
  { label: "Wärmepumpen", to: "/waermepumpen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Wissen", to: "/wissen-und-infos" },
  { label: "Jobs", to: "/bewerben" },
  { label: "So arbeiten wir", href: `${import.meta.env.BASE_URL}#prozess` },
  { label: "Kontakt", href: "#kontakt" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Auf der Unterseite ist der Hero dunkel — der Header wird dann hell
  // gerendert, bis gescrollt wird (dann greift der helle Header-Grund).
  const onDark =
    (pathname === "/waermepumpen" || pathname === "/wissen-und-infos") &&
    !scrolled
  const navCls = `group relative text-[15px] font-medium transition-colors duration-200 ${
    onDark ? "text-offwhite/80 hover:text-offwhite" : "text-graphite/80 hover:text-graphite"
  }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-offwhite/90 backdrop-blur-md border-b border-graphite/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="shrink-0" aria-label="Zur Startseite">
          <Logo light={onDark} className="h-7 w-auto md:h-8" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) =>
            n.to ? (
              <Link key={n.label} to={n.to} className={navCls}>
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ) : (
              <a key={n.label} href={n.href} className={navCls}>
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className={`hidden rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 lg:inline-block ${
              onDark
                ? "border-offwhite/30 text-offwhite hover:bg-offwhite hover:text-graphite"
                : "border-graphite/20 text-graphite hover:bg-graphite hover:text-offwhite"
            }`}
          >
            Beratung
          </a>
          <a
            href={HEYFLOW_URL}
            className="hidden rounded-full bg-yellow px-5 py-2.5 text-sm font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/40 md:inline-block"
          >
            Angebot anfragen
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              onDark ? "border-offwhite/30 text-offwhite" : "border-graphite/15 text-graphite"
            }`}
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-graphite/10 bg-offwhite px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((n) =>
              n.to ? (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-graphite/10 py-3 text-lg font-medium text-graphite"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-graphite/10 py-3 text-lg font-medium text-graphite"
                >
                  {n.label}
                </a>
              ),
            )}
            <a
              href={HEYFLOW_URL}
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-yellow px-5 py-3 text-center font-semibold text-graphite"
            >
              Angebot kostenlos anfragen
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-graphite/20 px-5 py-3 text-center font-semibold text-graphite"
            >
              Kostenlose Beratung
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* Deutlich markiertes Foto-Platzhalterfeld (echte Team-/Chef-Fotos folgen) */
function PhotoPlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/5]",
  src,
  alt,
  position = "object-center",
}: {
  label: string
  className?: string
  ratio?: string
  src?: string
  alt?: string
  position?: string
}) {
  if (src) {
    return (
      <div
        className={`relative ${ratio} w-full overflow-hidden rounded-2xl bg-softblue ${className}`}
      >
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className={`h-full w-full object-cover ${position}`}
        />
      </div>
    )
  }
  return (
    <div
      className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-2xl bg-softblue ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-softgreen via-softblue to-bluegray" />
      </div>
      <span className="absolute right-3 top-3 rounded-full bg-graphite/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-offwhite">
        Platzhalter
      </span>
      <div className="relative z-10 flex w-full items-center gap-2 p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/80 text-slate">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 20c0-3.3 3.6-5 8-5s8 1.7 8 5" strokeLinecap="round" />
            <circle cx="12" cy="8" r="4" />
          </svg>
        </span>
        <span className="text-sm font-medium text-slate">{label}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* dezentes technisches Linienmotiv im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-graphite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24">
        <div className="reveal">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-graphite/15 bg-offwhite px-3.5 py-1.5 text-[12px] font-semibold text-slate sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
            Wärmepumpen-Meisterbetrieb · seit über 20 Jahren
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.1rem]">
            Ihre Wärmepumpe — vom Meisterbetrieb, den Sie{" "}
            <span className="marker">persönlich kennen</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            H&amp;S Energiesysteme ist ein Meisterbetrieb mit über 80 Fachkräften
            und mehr als 400 Wärmepumpen im Jahr. Groß genug für jedes Projekt —
            nah genug, dass Sie wissen, wer bei Ihnen zu Hause steht.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={HEYFLOW_URL}
              className="rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
            >
              Angebot kostenlos anfragen
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-graphite/20 px-7 py-3.5 text-base font-semibold text-graphite transition-colors duration-200 hover:bg-graphite hover:text-offwhite"
            >
              Kostenlose Beratung sichern
            </a>
          </div>

          <p className="mt-6 text-sm text-slate/80">
            Der Partner für Ihr Zuhause · Willich · Köln · Solingen
          </p>

          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-graphite/10 bg-offwhite px-4 py-2.5">
            <GoogleG className="h-5 w-5 shrink-0" />
            <span className="flex items-center gap-1.5">
              <span className="font-display text-base font-semibold text-graphite">
                4,9
              </span>
              <span className="text-amber" aria-hidden>
                ★★★★★
              </span>
            </span>
            <span className="text-sm font-medium text-slate">
              Google Bewertungen · [Anzahl]
            </span>
          </div>
        </div>

        <div className="reveal">
          <div className="relative">
            <PhotoPlaceholder
              label="H&S Energiesysteme — Wärmepumpe vor Ort"
              alt="H&S-Fachkraft neben einer frisch installierten Luft-Wasser-Wärmepumpe am Haus"
              src={heroWaermepumpe}
              ratio="aspect-[4/5]"
              position="object-[60%_center]"
              className="shadow-2xl shadow-graphite/10"
            />
            {/* kleine, persönliche Signatur-Karte */}
            <div className="absolute -bottom-5 -left-5 hidden max-w-[220px] rounded-xl border border-graphite/10 bg-offwhite p-4 shadow-xl shadow-graphite/10 sm:block">
              <p className="font-display text-lg font-semibold text-graphite">
                „Wir stehen mit unserem Namen dafür ein.“
              </p>
              <p className="mt-1 text-sm text-slate">[Name], Geschäftsführung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Vertrauens-Leiste                                                  */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: "80+", label: "Fachkräfte im Team" },
  { value: "400+", label: "Wärmepumpen pro Jahr" },
  { value: "3", label: "Standorte in Ihrer Nähe" },
  { value: "~50 km", label: "Einzugsgebiet, u.a. Bonn & Erkelenz" },
]

function TrustBar() {
  return (
    <section className="border-y border-graphite/10 bg-ink text-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-12 md:grid-cols-4 md:px-8">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`reveal px-2 md:px-6 ${i !== 0 ? "md:border-l md:border-offwhite/15" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="font-display text-4xl font-semibold tracking-tight text-yellow md:text-5xl">
              {s.value}
            </div>
            <p className="mt-2 text-sm leading-snug text-offwhite/75">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Team                                                               */
/* ------------------------------------------------------------------ */
const TEAM: { role: string; loc: string; src?: string }[] = [
  { role: "Geschäftsführung", loc: "Willich", src: portraitGF },
  { role: "Meister / Projektleitung", loc: "Köln", src: portraitMeister },
  // TODO: Teamfoto wird neu generiert – bis dahin zeigt PhotoPlaceholder "Foto folgt"
  { role: "Montageleitung", loc: "Solingen" },
  { role: "Kundenberatung & Förderung", loc: "Willich", src: portraitBeratung },
  { role: "Service & Wartung", loc: "Köln", src: portraitService },
]

function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Das Team
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Gesichter, keine Callcenter.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Wer bei Ihnen plant, montiert und wartet, hat einen Namen. Lernen Sie
            die Menschen kennen, die für H&amp;S in Willich, Köln und Solingen
            unterwegs sind.
          </p>
        </div>
        <div className="reveal">
          <PhotoPlaceholder
            label="Das Team von H&S Energiesysteme"
            alt="Zwei Kollegen von H&S Energiesysteme im Betrieb"
            src={teamDuo}
            ratio="aspect-[4/3]"
            position="object-center"
            className="shadow-xl shadow-graphite/10"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((m, i) => (
          <div
            key={i}
            className="reveal group"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <PhotoPlaceholder
                label="Foto folgt"
                ratio="aspect-[3/4]"
                src={m.src}
                alt={`${m.role}, H&S Energiesysteme ${m.loc}`}
                position="object-[60%_center]"
              />
            </div>
            <div className="mt-3">
              <p className="font-display text-lg font-semibold text-graphite">[Name]</p>
              <p className="text-sm text-slate">{m.role}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-greengray">
                {m.loc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  So arbeiten wir — interaktiver Stepper                             */
/* ------------------------------------------------------------------ */
const STEPS = [
  {
    n: "01",
    t: "Aufmaß & Beratung",
    lead: "Wir kommen zu Ihnen nach Hause.",
    d: "Ehrliche Einschätzung vor Ort, klare Zahlen und eine passende Lösung — verständlich erklärt, ganz ohne Verkaufsdruck.",
    src: beratungBroschuere,
    alt: "H&S-Beratungsunterlagen „Der Partner für Ihr Zuhause“ auf dem Tisch",
  },
  {
    n: "02",
    t: "Förderung & Begleitung",
    lead: "Den Papierkram übernehmen wir.",
    d: "Wir holen die maximale Förderung für Sie heraus, stellen die Anträge und begleiten Sie durch den gesamten Prozess — Schritt für Schritt.",
    src: montageTeam,
    alt: "Zwei H&S-Fachkräfte arbeiten gemeinsam an der Wärmepumpen-Installation",
  },
  {
    n: "03",
    t: "Saubere Montage",
    lead: "Handwerk mit Meisterqualität.",
    d: "Feste Ansprechpartner, geplante Termine, sauber verlegte Leitungen. Sie wissen immer, wer bei Ihnen arbeitet.",
    src: montageRohre,
    alt: "H&S-Fachkraft verlegt sauber die Kupferleitungen der Wärmepumpe",
  },
  {
    n: "04",
    t: "Service danach",
    lead: "Wir bleiben erreichbar.",
    d: "Regelmäßige Wartung und schnelle Hilfe, wenn es doch mal klemmt — persönlich, auch Jahre nach der Inbetriebnahme.",
    src: serviceLuefter,
    alt: "H&S-Servicetechniker prüft die Lüftereinheit der Wärmepumpe",
  },
]

function Prozess() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section id="prozess" className="bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
              So arbeiten wir
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              Handwerk, das man sehen darf.
            </h2>
          </div>
          <p className="max-w-sm text-offwhite/70">
            In drei Schritten von der ersten Idee bis zur warmen Wohnung.
            <span className="text-offwhite/50"> Schritt antippen ↓</span>
          </p>
        </div>

        <div className="reveal mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Großflächiges Bild, wechselt je Schritt */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate md:aspect-[16/10]">
            {STEPS.map((s, i) => (
              <img
                key={s.n}
                src={s.src}
                alt={s.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-display text-5xl font-semibold text-yellow drop-shadow">
                {step.n}
              </span>
              <p className="mt-1 font-display text-2xl font-semibold">{step.lead}</p>
            </div>
          </div>

          {/* Klickbare Schritte */}
          <ol className="flex flex-col gap-3">
            {STEPS.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.n}>
                  <button
                    onClick={() => setActive(i)}
                    aria-current={isActive}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-yellow bg-yellow/10"
                        : "border-offwhite/15 hover:border-offwhite/40 hover:bg-offwhite/[0.04]"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-semibold transition-colors duration-300 ${
                        isActive
                          ? "bg-yellow text-graphite"
                          : "bg-offwhite/10 text-offwhite/70 group-hover:bg-offwhite/20"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 font-display text-xl font-semibold">
                        {s.t}
                        <span
                          className={`transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-yellow opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                          }`}
                        >
                          →
                        </span>
                      </span>
                      <span
                        className={`mt-1 block text-sm leading-relaxed text-offwhite/70 transition-all duration-300 ${
                          isActive
                            ? "max-h-32 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0 md:max-h-32 md:opacity-70"
                        }`}
                      >
                        {s.d}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Leistungen                                                         */
/* ------------------------------------------------------------------ */
const SERVICES = [
  {
    t: "Beratung & Förderung",
    d: "Wir prüfen, was für Ihr Zuhause passt, und holen die maximale Förderung für Sie heraus — verständlich erklärt.",
    icon: (
      <path d="M12 3l8 4v6c0 4.4-3.4 7.4-8 8-4.6-.6-8-3.6-8-8V7l8-4z" />
    ),
  },
  {
    t: "Installation",
    d: "Wärmepumpen fachgerecht installiert vom Meisterbetrieb — sauber, termintreu und mit festen Ansprechpartnern.",
    icon: (
      <path d="M14 4l6 6-3 3-2-2-6 6-4 1 1-4 6-6-2-2 4-2z" strokeLinejoin="round" />
    ),
  },
  {
    t: "Wartung & Service",
    d: "Damit Ihre Anlage effizient bleibt: regelmäßige Wartung und schnelle Hilfe, wenn es doch mal klemmt.",
    icon: <path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
]

function Leistungen() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Leistungen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Alles rund um Ihre Wärmepumpe — aus einer Hand.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            key={s.t}
            className="reveal group flex flex-col rounded-2xl border border-graphite/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:border-graphite/20 hover:shadow-xl hover:shadow-graphite/5"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow text-graphite transition-transform duration-300 group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                {s.icon}
              </svg>
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-graphite">{s.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Bildband „Ihr Zuhause"                                             */
/* ------------------------------------------------------------------ */
function HomeBand({
  headline = "Am Ende geht es nicht um Technik — sondern um ein warmes Zuhause.",
  cta = false,
}: {
  headline?: string
  cta?: boolean
}) {
  return (
    <section className="reveal relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[380px] w-full">
        <img
          src={familieHaus}
          alt="Familie blickt im Abendlicht auf ihr Zuhause mit Wärmepumpe"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
              Der Partner für Ihr Zuhause
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-offwhite md:text-5xl">
              {headline}
            </h2>
            {cta && (
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={HEYFLOW_URL}
                  className="rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
                >
                  Angebot kostenlos anfragen
                </a>
                <a
                  href="#kontakt"
                  className="rounded-full border border-offwhite/40 px-7 py-3.5 text-base font-semibold text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-graphite"
                >
                  Kostenlose Beratung
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Kontakt / CTA                                                      */
/* ------------------------------------------------------------------ */
function Contact() {
  const channels = [
    {
      t: "Angebot kostenlos anfragen",
      d: "In wenigen Minuten zum unverbindlichen Wärmepumpen-Angebot",
      href: HEYFLOW_URL,
      highlight: true,
      icon: (
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      t: "info@hs-energiesysteme.de",
      d: "Schreiben Sie uns eine E-Mail",
      href: "mailto:info@hs-energiesysteme.de",
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
    },
    {
      t: "WhatsApp schreiben",
      d: "Schnelle Frage? Antwort in der Regel am selben Tag.",
      href: "#",
      icon: (
        <path
          d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm4.3 12.4c-.2.5-1 .9-1.4 1-.4.1-.8.1-1.3-.1-.3-.1-.7-.2-1.2-.5-2.1-.9-3.5-3-3.6-3.2-.1-.1-.9-1.2-.9-2.3s.6-1.6.8-1.9c.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .6.5l.7 1.6c.1.1.1.3 0 .4l-.3.5-.3.3c-.1.1-.2.2-.1.4.1.3.6 1 1.2 1.5.8.7 1.4.9 1.7 1 .2.1.3.1.4-.1l.6-.7c.1-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.3.1.2.1.6-.1 1.1z"
          strokeLinejoin="round"
        />
      ),
    },
    {
      t: "02154 8809537",
      d: "Lieber direkt sprechen? Rufen Sie uns an.",
      href: "tel:+4921548809537",
      icon: (
        <path
          d="M4 5c0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-3.3c0-.4-.3-.8-.7-.9l-3.3-.7c-.4-.1-.8.1-1 .4l-1 1.3a12 12 0 01-5.4-5.4l1.3-1c.3-.2.5-.6.4-1L9.2 4.7C9.1 4.3 8.7 4 8.3 4H5c-.6 0-1 .4-1 1z"
          strokeLinejoin="round"
        />
      ),
    },
    {
      t: "Termin vereinbaren",
      d: "Erstberatung online buchen — in 2 Minuten",
      href: "#",
      icon: (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
        </>
      ),
    },
  ]
  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal overflow-hidden rounded-3xl bg-ink text-offwhite">
        <div className="p-8 md:p-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
              Lernen wir uns <span className="text-yellow">kennen.</span>
            </h2>
            <p className="mt-4 text-lg text-offwhite/75">
              Kostenlose Erstberatung, ehrliche Einschätzung, keine Verpflichtung.
              Wählen Sie einfach den Weg, der Ihnen am liebsten ist.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.t}
                href={c.href}
                className={`group flex items-center gap-4 rounded-xl border p-4 transition-colors duration-200 ${
                  c.highlight
                    ? "border-yellow bg-yellow text-graphite hover:bg-yellow/90 sm:col-span-2"
                    : "border-offwhite/15 bg-offwhite/[0.03] hover:bg-offwhite/[0.08]"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                    c.highlight ? "bg-graphite/10 text-graphite" : "bg-yellow/15 text-yellow"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {c.icon}
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-lg font-semibold">{c.t}</p>
                  <p
                    className={`text-sm ${c.highlight ? "text-graphite/70" : "text-offwhite/65"}`}
                  >
                    {c.d}
                  </p>
                </div>
                <span
                  className={`shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${
                    c.highlight ? "text-graphite" : "text-yellow"
                  }`}
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 border-t border-offwhite/15 pt-6 text-sm text-offwhite/70">
            H&amp;S Energiesysteme · Gießerallee 19, 47877 Willich · Willich · Köln
            · Solingen · www.hs-energiesysteme.de
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Störer — gelbes Haltungs-Statement                                 */
/* ------------------------------------------------------------------ */
function StatementBand() {
  return (
    <section className="relative overflow-hidden bg-yellow">
      {/* dezentes Punktraster */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-graphite) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="reveal relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-graphite/70">
            Unser Versprechen
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-graphite md:text-6xl">
            Kein Callcenter. Keine Warteschleife. Ein Name, den Sie kennen.
          </h2>
        </div>
        <div className="flex shrink-0 flex-col gap-3">
          <a
            href={HEYFLOW_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-7 py-4 text-base font-semibold text-offwhite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-graphite/25"
          >
            Angebot kostenlos anfragen →
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-graphite/30 px-7 py-4 text-base font-semibold text-graphite transition-colors duration-200 hover:bg-graphite hover:text-offwhite"
          >
            Beratung
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Störer — Förderungs-/Kosten-Teaser                                 */
/* ------------------------------------------------------------------ */
function FoerderBand() {
  const points = [
    { k: "bis 70 %", v: "staatliche Förderung möglich" },
    { k: "0 €", v: "für die Erstberatung vor Ort" },
    { k: "100 %", v: "Antrag übernehmen wir für Sie" },
  ]
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <div className="reveal grid gap-6 rounded-3xl bg-ink p-6 text-offwhite sm:p-8 md:grid-cols-[1fr_1.1fr] md:items-center md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Förderung & Kosten
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
            Die gute Nachricht zuerst: Der Staat zahlt kräftig mit.
          </h2>
          <p className="mt-4 max-w-md text-offwhite/75">
            Wir rechnen ehrlich, holen die maximale Förderung heraus und kümmern
            uns um den Papierkram — Sie müssen sich um nichts kümmern.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {points.map((p) => (
            <div
              key={p.k}
              className="flex flex-col rounded-2xl border border-offwhite/15 bg-offwhite/[0.04] p-3 text-center sm:p-4 md:p-6"
            >
              <div className="whitespace-nowrap font-display text-sm font-semibold leading-tight text-yellow sm:text-2xl md:text-4xl">
                {p.k}
              </div>
              <p className="mt-2 text-xs leading-snug text-offwhite/70 md:text-sm">
                {p.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Google „G" — offizielle Vierfarb-Marke */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-label="Google" role="img">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Kundenstimmen                                                       */
/* ------------------------------------------------------------------ */
const STIMMEN: { q: string; loc: string; img?: string; imgAlt?: string }[] = [
  {
    q: "Man hat vom ersten Termin an gemerkt: Hier weiß jemand, was er tut — und nimmt sich Zeit. Kein Verkaufsgespräch, sondern echte Beratung.",
    loc: "Willich",
    img: montageKupfer,
    imgAlt: "Detail der sauber verlegten Kupferleitungen einer H&S-Installation",
  },
  {
    q: "Termine wurden eingehalten, die Baustelle war jeden Abend sauber. Unser Monteur war immer derselbe — das schafft Vertrauen.",
    loc: "Köln",
    img: montageBohren,
    imgAlt: "H&S-Monteur bei der Montage der Wärmepumpe auf der Baustelle in Köln",
  },
  {
    q: "Die Förderung hätte ich allein nie durchblickt. H&S hat das komplett übernommen. Heizung läuft, Haus ist warm, alles gut.",
    loc: "Solingen",
    img: aussenTeam,
    imgAlt: "H&S-Team an der fertig installierten Wärmepumpen-Außeneinheit",
  },
]

function Stimmen() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Kundenstimmen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Was die Menschen sagen, für die wir arbeiten.
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-graphite/10 bg-offwhite px-4 py-2.5">
          <GoogleG className="h-5 w-5 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="flex items-center gap-1.5">
              <span className="font-display text-base font-semibold text-graphite">
                4,9
              </span>
              <span className="text-amber" aria-hidden>
                ★★★★★
              </span>
            </span>
            <span className="text-xs font-medium text-slate">
              Google Bewertungen · [Anzahl]
            </span>
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {STIMMEN.map((s, i) => (
          <figure
            key={i}
            className="reveal flex flex-col overflow-hidden rounded-2xl border border-graphite/10 bg-offwhite"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {s.img && (
              <div className="aspect-[16/9] w-full overflow-hidden bg-softblue">
                <img
                  src={s.img}
                  alt={s.imgAlt ?? `Baustelle H&S Energiesysteme ${s.loc}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-7">
            <span className="font-display text-5xl leading-none text-yellow" aria-hidden>
              „
            </span>
            <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-graphite">
              {s.q}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-graphite/10 pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-softblue text-sm font-semibold text-slate">
                {s.loc.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-graphite">
                  [Name]
                </span>
                <span className="block text-xs font-medium uppercase tracking-wide text-greengray">
                  Kund:in · {s.loc}
                </span>
              </span>
            </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Hersteller / Logo-Wall                                             */
/* ------------------------------------------------------------------ */
const PARTNERS = [
  { src: logoBosch, alt: "Bosch" },
  { src: logoViessmann, alt: "Viessmann" },
  { src: logoVaillant, alt: "Vaillant" },
  { src: logoBuderus, alt: "Buderus" },
  { src: logoPanasonic, alt: "Panasonic" },
  { src: logoGruenbeck, alt: "Grünbeck" },
  { src: logoBwp, alt: "Mitglied im Bundesverband Wärmepumpe e.V. (bwp)" },
]

function LogoWall() {
  return (
    <section className="border-b border-graphite/10 bg-offwhite">
      <div className="py-12 md:py-14">
        <p className="reveal mx-auto max-w-7xl px-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate/60 sm:text-sm md:px-8">
          Zertifizierter Partner der führenden Hersteller
        </p>
        {/* durchgehend rotierende Logo-Leiste (pausiert bei Hover) */}
        <div className="marquee reveal mt-8 overflow-hidden">
          <div className="marquee__track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={`${p.alt}-${i}`}
                className="flex w-[42vw] shrink-0 items-center justify-center px-6 sm:w-[28vw] md:w-[20vw] lg:w-[15vw]"
                aria-hidden={i >= PARTNERS.length}
              >
                <img
                  src={p.src}
                  alt={i < PARTNERS.length ? p.alt : ""}
                  title={p.alt}
                  loading="lazy"
                  className="h-8 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Einzugsgebiet — stilisierte Karte mit Standorten                   */
/* ------------------------------------------------------------------ */
type Ort = {
  name: string
  x: number
  y: number
  hub?: boolean
  radius?: number
}
const ORTE: Ort[] = [
  { name: "Willich", x: 34, y: 30, hub: true, radius: 30 },
  { name: "Solingen", x: 63, y: 44, hub: true, radius: 26 },
  { name: "Köln", x: 52, y: 62, hub: true, radius: 28 },
  { name: "Erkelenz", x: 20, y: 54 },
  { name: "Bonn", x: 60, y: 84 },
]

function Einzugsgebiet() {
  const [aktiv, setAktiv] = useState<string | null>(null)
  return (
    <section id="einzugsgebiet" className="border-y border-graphite/10 bg-softblue/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Einzugsgebiet
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            In Ihrer Nähe — nicht am anderen Ende der Republik.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Von unseren drei Standorten aus sind wir im Umkreis von rund 50&nbsp;km
            für Sie da — vom Niederrhein bis ins Rheinland.
          </p>

          <ul className="mt-8 space-y-2">
            {ORTE.filter((o) => o.hub).map((o) => (
              <li key={o.name}>
                <button
                  onMouseEnter={() => setAktiv(o.name)}
                  onMouseLeave={() => setAktiv(null)}
                  onFocus={() => setAktiv(o.name)}
                  onBlur={() => setAktiv(null)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                    aktiv === o.name
                      ? "border-graphite/25 bg-softblue/40"
                      : "border-graphite/10 hover:bg-softblue/30"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full bg-yellow ring-4 ring-yellow/25" />
                  <span className="font-display text-lg font-semibold text-graphite">
                    {o.name}
                  </span>
                  {o.name === "Willich" && (
                    <span className="ml-auto rounded-full bg-graphite px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-offwhite">
                      Hauptsitz
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate/80">
            Auch für Sie da: u.&nbsp;a. Erkelenz, Bonn und das gesamte Umland.
          </p>
        </div>

        {/* Karte des Einzugsgebiets */}
        <div className="reveal">
          <div className="relative overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite p-3 md:p-5">
            <img
              src={einzugsgebietKarte}
              alt="Karte des Einzugsgebiets von H&S Energiesysteme mit den Standorten Willich, Solingen und Köln"
              className="mx-auto h-auto w-full max-w-xl"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-graphite" />
              Standort (Willich · Solingen · Köln)
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-yellow" />
              Einzugsgebiet ~50&nbsp;km
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ — Akkordeon                                                     */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "Lohnt sich eine Wärmepumpe auch im Altbau?",
    a: "In den allermeisten Fällen ja. Entscheidend ist nicht das Baujahr, sondern der tatsächliche Wärmebedarf. Beim Aufmaß vor Ort prüfen wir ehrlich, ob und mit welchen Maßnahmen sich eine Wärmepumpe für Ihr Haus rechnet.",
  },
  {
    q: "Wie laut ist eine Wärmepumpe im Betrieb?",
    a: "Moderne Geräte sind sehr leise — im Alltag meist kaum wahrnehmbar. Wir planen den Aufstellort so, dass weder Sie noch Ihre Nachbarn gestört werden, und halten die gesetzlichen Grenzwerte sicher ein.",
  },
  {
    q: "Wie lange dauert die Installation?",
    a: "Eine typische Wärmepumpen-Installation dauert bei uns in der Regel [X] Tage. Den genauen Ablauf und einen festen Termin besprechen wir vorab — inklusive fester Ansprechpartner:innen.",
  },
  {
    q: "Wie viel Förderung bekomme ich?",
    a: "Nach den seit 21.07.2026 ausgewiesenen KfW-Konditionen sind unter besonderen Einkommens- beziehungsweise Familienbedingungen bis zu 80 % Förderung möglich; ansonsten liegt die Obergrenze grundsätzlich bei 70 %. Wir prüfen Ihre Förderbausteine, erstellen die technischen Unterlagen und begleiten Sie bei Ihrem eigenen KfW-Antrag.",
  },
  {
    q: "Was kostet eine Wärmepumpe ungefähr?",
    a: "Das hängt von Haus, Technik und Aufwand ab — seriös lässt sich das erst nach einem kurzen Blick vor Ort sagen. Deshalb ist unsere Erstberatung kostenlos und unverbindlich. Über den Angebots-Assistenten erhalten Sie schnell eine erste Einschätzung.",
  },
  {
    q: "Was ist, wenn später einmal etwas kaputtgeht?",
    a: "Dann sind wir für Sie da. Als Meisterbetrieb mit eigenem Service-Team kümmern wir uns um Wartung und Reparaturen — persönlich erreichbar, auch Jahre nach der Inbetriebnahme.",
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Häufige Fragen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Was Kundinnen und Kunden uns oft fragen.
        </h2>
      </div>

      <div className="reveal mt-12 divide-y divide-graphite/10 border-y border-graphite/10">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={i}>
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-slate"
                >
                  <span className="font-display text-lg font-semibold text-graphite md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-yellow border-yellow" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-12 text-[15px] leading-relaxed text-slate">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="reveal mt-10 text-center text-slate">
        Ihre Frage ist nicht dabei?{" "}
        <a href="#kontakt" className="font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4 hover:text-slate">
          Sprechen Sie uns einfach an.
        </a>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  SEO-Text                                                           */
/* ------------------------------------------------------------------ */
function SeoText() {
  return (
    <section className="border-t border-graphite/10 bg-softblue/25">
      <div className="reveal mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Wärmepumpen aus Willich, Köln & Solingen
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-4xl">
          Ihr Meisterbetrieb für Wärmepumpen im Rheinland und am Niederrhein
        </h2>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate">
          <p>
            H&amp;S Energiesysteme ist Ihr spezialisierter Meisterbetrieb für
            Wärmepumpen in Willich, Köln, Solingen und der gesamten Region. Mit
            über 80 Fachkräften und mehr als 400 installierten Wärmepumpen pro Jahr
            gehören wir zu den erfahrensten Ansprechpartnern für moderne Heiztechnik
            im Rheinland und am Niederrhein. Ob Neubau oder Altbau, Einfamilienhaus
            oder Mehrfamilienhaus — wir planen, installieren und warten
            Wärmepumpen-Systeme, die zu Ihrem Zuhause und Ihrem Budget passen. Als
            Meisterbetrieb stehen wir mit unserem Namen für saubere Handwerksarbeit,
            ehrliche Beratung und langlebige Technik.
          </p>
          <p>
            Eine Wärmepumpe ist heute die wohl zukunftssicherste Art zu heizen. Sie
            nutzt kostenlose Umweltwärme aus der Luft, dem Erdreich oder dem
            Grundwasser und wandelt sie hocheffizient in Heizwärme für Ihr Haus um.
            Das senkt nicht nur Ihre Heizkosten spürbar, sondern macht Sie auch
            unabhängiger von Öl- und Gaspreisen. Gleichzeitig reduzieren Sie Ihren
            CO₂-Ausstoß deutlich und leisten einen wichtigen Beitrag zur
            Wärmewende. Besonders die Luft-Wasser-Wärmepumpe hat sich in den
            vergangenen Jahren zum Standard entwickelt: Sie ist vergleichsweise
            einfach zu installieren, arbeitet zuverlässig und lässt sich in den
            meisten Bestandsgebäuden nachrüsten.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
            Wärmepumpe im Altbau — funktioniert das?
          </h3>
          <p>
            Ein weit verbreiteter Irrtum ist, dass sich Wärmepumpen nur im Neubau
            lohnen. Tatsächlich lassen sich die meisten Bestandsgebäude erfolgreich
            mit einer Wärmepumpe beheizen — entscheidend ist nicht das Baujahr,
            sondern der tatsächliche Wärmebedarf und die vorhandenen Heizflächen.
            Bei einem kostenlosen Aufmaß vor Ort prüfen unsere Meister ehrlich, ob
            und mit welchen Maßnahmen sich eine Wärmepumpe für Ihr Haus rechnet.
            Häufig genügen bereits kleine Anpassungen, damit Ihre Heizung auch mit
            niedrigen Vorlauftemperaturen effizient läuft. Wir sagen Ihnen klar,
            was sinnvoll ist — und was nicht.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
            Förderung für Ihre Wärmepumpe — wir übernehmen den Papierkram
          </h3>
          <p>
            Der Umstieg auf eine Wärmepumpe wird vom Staat großzügig gefördert.
            Unter den besonderen Einkommens- beziehungsweise Familienbedingungen
            sind aktuell bis zu 80&nbsp;% Zuschuss möglich; ansonsten liegt die
            Obergrenze grundsätzlich bei 70&nbsp;%. Die Antragstellung wirkt für
            viele Hausbesitzerinnen und Hausbesitzer zunächst kompliziert. Genau
            hier unterstützen wir Sie: Wir ermitteln die möglichen Förderbausteine,
            erstellen die technischen Nachweise und begleiten Sie bei Ihrem eigenen
            Antrag im KfW-Portal.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
            Von der Beratung bis zum Service — alles aus einer Hand
          </h3>
          <p>
            Bei H&amp;S Energiesysteme erhalten Sie alle Leistungen rund um Ihre
            Wärmepumpe aus einer Hand. Alles beginnt mit einer kostenlosen und
            unverbindlichen Beratung bei Ihnen zu Hause. Wir nehmen die
            Gegebenheiten auf, berechnen die passende Anlagengröße und erklären
            Ihnen verständlich, welche Lösung für Sie sinnvoll ist. Nach Ihrer
            Entscheidung übernehmen wir die fachgerechte Installation durch unser
            eigenes Montageteam — mit festen Ansprechpartnern, geplanten Terminen
            und sauber verlegten Leitungen. Auch nach der Inbetriebnahme lassen wir
            Sie nicht allein: Mit unserem eigenen Service-Team kümmern wir uns um
            die regelmäßige Wartung und sind schnell zur Stelle, wenn doch einmal
            etwas klemmt.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
            Persönlich statt anonym — der Partner für Ihr Zuhause
          </h3>
          <p>
            Was uns von großen, anonymen Anbietern unterscheidet, ist unsere Nähe.
            Bei H&amp;S kennen Sie die Menschen, die bei Ihnen planen, montieren
            und warten. Kein Callcenter, keine endlose Warteschleife — sondern feste
            Gesichter und ein Team, das Verantwortung übernimmt. Diese persönliche
            Handschrift ist uns wichtig, auch wenn wir längst kein kleiner
            Ein-Mann-Betrieb mehr sind. Genau darin liegt unsere Stärke: groß genug
            für jedes Projekt und jede Fördersituation, nah genug, dass Sie wissen,
            wer bei Ihnen zu Hause steht.
          </p>
          <h3 className="pt-2 font-display text-xl font-semibold text-graphite">
            Ihr Einzugsgebiet: Willich, Köln, Solingen und Umgebung
          </h3>
          <p>
            Von unseren drei Standorten in Willich, Köln und Solingen aus sind wir
            im Umkreis von rund 50&nbsp;km für Sie da. Dazu gehören unter anderem
            Erkelenz, Bonn, Krefeld, Mönchengladbach, Neuss, Düsseldorf, Leverkusen
            und die umliegenden Gemeinden am Niederrhein und im Rheinland. Wer eine
            Wärmepumpe in dieser Region plant, findet in H&amp;S Energiesysteme
            einen erfahrenen, regional verankerten Meisterbetrieb, der schnell vor
            Ort ist. Fordern Sie noch heute Ihr kostenloses und unverbindliches
            Wärmepumpen-Angebot an oder sichern Sie sich einen Termin für Ihre
            persönliche Erstberatung — wir freuen uns darauf, Sie und Ihr Zuhause
            kennenzulernen.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/hsenergiesysteme/" },
    { label: "TikTok", href: "https://www.tiktok.com/@hsenergiesysteme" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hs-energiesysteme" },
  ]
  return (
    <footer className="border-t border-graphite/10 bg-offwhite">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo className="h-8 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Der Partner für Ihr Zuhause. Wärmepumpen-Meisterbetrieb in Willich,
              Köln und Solingen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-graphite">Standorte</p>
              <ul className="mt-3 space-y-2 text-sm text-slate">
                <li>Willich</li>
                <li>Köln</li>
                <li>Solingen</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-graphite">Social</p>
              <ul className="mt-3 space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate transition-colors duration-200 hover:text-graphite"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-graphite">Rechtliches</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.hs-energiesysteme.de/rechtliches/impressum"
                    className="text-slate hover:text-graphite"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1NdwHutkYPrtGhyX46zGExjmKN0g-kXiR/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate hover:text-graphite"
                  >
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-graphite/10 pt-6 text-xs text-slate/70">
          © {new Date().getFullYear()} H&amp;S Energiesysteme GmbH · Gießerallee 19,
          47877 Willich
        </div>
      </div>
    </footer>
  )
}

/* ================================================================== */
/*  UNTERSEITE „Wärmepumpen"                                           */
/*  Gleiches Design-System wie die Startseite — nur andere Inhalte.    */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  Hero der Unterseite                                                */
/* ------------------------------------------------------------------ */
function WpHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-offwhite">
      {/* helles Punktraster auf dunklem Grund — deutlich anders als die Startseite */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-offwhite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* warmer Lichtschein oben rechts */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-36">
        <div className="reveal">
          {/* Breadcrumb — signalisiert klar: Unterseite */}
          <nav
            aria-label="Brotkrumen"
            className="flex items-center gap-2 text-sm font-medium text-offwhite/50"
          >
            <Link to="/" className="transition-colors hover:text-offwhite">
              Startseite
            </Link>
            <span aria-hidden>/</span>
            <span className="text-offwhite/90">Wärmepumpen</span>
          </nav>

          <span className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-offwhite/20 bg-offwhite/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-offwhite/80 sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
            Willich · Köln · Solingen — persönlich vor Ort
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-offwhite sm:text-6xl md:text-[4.1rem]">
            Wärmepumpen vom{" "}
            <span className="marker text-graphite">regionalen Meisterbetrieb</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-offwhite/75">
            Beratung, Einbau und Service aus einer Hand — von Menschen, die Sie
            kennen. Statt anonymer Bundes-Anbieter bekommen Sie bei H&amp;S echtes
            Handwerk, feste Ansprechpartner und die volle Förderung.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#rechner"
              className="rounded-full bg-yellow px-7 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/40"
            >
              Jetzt Angebot berechnen
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-offwhite/40 px-7 py-3.5 text-base font-semibold text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-graphite"
            >
              Kostenlose Beratung sichern
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-offwhite/15 bg-offwhite/[0.06] px-4 py-2.5">
            <GoogleG className="h-5 w-5 shrink-0" />
            <span className="flex items-center gap-1.5">
              <span className="font-display text-base font-semibold text-offwhite">
                4,9
              </span>
              <span className="text-amber" aria-hidden>
                ★★★★★
              </span>
            </span>
            <span className="text-sm font-medium text-offwhite/70">
              Google Bewertungen · [Anzahl]
            </span>
          </div>
        </div>

        <div className="reveal">
          <div className="relative">
            <PhotoPlaceholder
              label="H&S Energiesysteme — Wärmepumpe vor Ort"
              alt="H&S-Fachkraft neben einer frisch installierten Luft-Wasser-Wärmepumpe am Haus"
              src={heroWaermepumpe}
              ratio="aspect-[4/5]"
              position="object-[60%_center]"
              className="shadow-2xl shadow-graphite/40 ring-1 ring-offwhite/10"
            />
            <div className="absolute -bottom-5 -left-5 hidden max-w-[220px] rounded-xl border border-graphite/10 bg-offwhite p-4 shadow-xl shadow-graphite/30 sm:block">
              <p className="font-display text-lg font-semibold text-graphite">
                „Ein Team. Ein Ansprechpartner. Ein Ergebnis.“
              </p>
              <p className="mt-1 text-sm text-slate">[Name], Meister</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  A) USP-Leiste direkt unter dem Hero                                */
/* ------------------------------------------------------------------ */
const USPS = [
  {
    t: "Meisterbetrieb",
    d: "Handwerk mit Meisterbrief",
    icon: <path d="M12 3l8 4v6c0 4.4-3.4 7.4-8 8-4.6-.6-8-3.6-8-8V7l8-4z" />,
  },
  {
    t: "In 4–5 Tagen",
    d: "Installation ohne wochenlange Baustelle",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </>
    ),
  },
  {
    t: "Beratung vor Ort",
    d: "Persönlich bei Ihnen zu Hause",
    icon: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    t: "Mehrere Kontaktwege",
    d: "Telefon, WhatsApp oder vor Ort",
    icon: (
      <path
        d="M4 5c0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-3.3c0-.4-.3-.8-.7-.9l-3.3-.7c-.4-.1-.8.1-1 .4l-1 1.3a12 12 0 01-5.4-5.4l1.3-1c.3-.2.5-.6.4-1L9.2 4.7C9.1 4.3 8.7 4 8.3 4H5c-.6 0-1 .4-1 1z"
        strokeLinejoin="round"
      />
    ),
  },
]

function UspLeiste() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-4 pt-2 md:px-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {USPS.map((u, i) => (
          <div
            key={u.t}
            className="reveal flex items-start gap-3 rounded-2xl border border-graphite/10 bg-offwhite p-4 sm:p-5"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow text-graphite">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                {u.icon}
              </svg>
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold leading-tight text-graphite">
                {u.t}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate">{u.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Intro — „Beratung, Einbau & Service aus einer Hand"               */
/* ------------------------------------------------------------------ */
function WpIntro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Alles aus einer Hand
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Beratung, Einbau &amp; Service aus einer Hand.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Bei H&amp;S landen Sie nicht in einem Callcenter und werden nicht von
            Subunternehmern abgewickelt. Von der ersten Beratung über die Montage
            bis zur Wartung Jahre später ist es dasselbe Team, das Sie betreut —
            mit Meisterbrief, festen Gesichtern und kurzen Wegen in Ihrer Region.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Ehrliche Vor-Ort-Beratung statt Verkaufsdruck",
              "Eigenes Montageteam — keine wechselnden Subunternehmer",
              "Wartung & Notdienst aus der Region",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[15px] text-graphite">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow text-graphite">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <PhotoPlaceholder
            label="Beratung & Montage von H&S Energiesysteme"
            alt="H&S-Team bei Beratung und Montage einer Wärmepumpe"
            src={teamDuo}
            ratio="aspect-[4/3]"
            className="shadow-xl shadow-graphite/10"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  C) Wärmepumpen-Typen-Vergleich                                     */
/* ------------------------------------------------------------------ */
const WP_TYPEN = [
  {
    t: "Luft-Wasser-Wärmepumpe",
    tag: "Am beliebtesten",
    highlight: true,
    fuer: "Ein- & Mehrfamilienhäuser, Neubau und die meisten Altbauten",
    pro: ["Günstig in der Anschaffung", "Einfach nachrüstbar", "Kein Bohren nötig"],
    contra: ["Etwas geringere Effizienz an sehr kalten Tagen"],
    kosten: "ca. 18.000 – 28.000 €",
  },
  {
    t: "Sole-Wasser-Wärmepumpe",
    tag: "Erdkollektor",
    highlight: false,
    fuer: "Häuser mit ausreichend Gartenfläche für Flächenkollektoren",
    pro: ["Sehr effizient & konstant", "Niedrige Betriebskosten", "Sehr leise"],
    contra: ["Große Grabungsarbeiten im Garten", "Höhere Anfangsinvestition"],
    kosten: "ca. 25.000 – 35.000 €",
  },
  {
    t: "Erdwärmepumpe (Sonde)",
    tag: "Tiefenbohrung",
    highlight: false,
    fuer: "Grundstücke mit wenig Fläche, dafür Bohrgenehmigung",
    pro: ["Höchste Effizienz", "Ganzjährig stabil", "Minimaler Flächenbedarf"],
    contra: ["Genehmigungspflichtige Bohrung", "Höchste Investition"],
    kosten: "ca. 30.000 – 45.000 €",
  },
]

function TypenVergleich() {
  return (
    <section id="leistungen" className="border-y border-graphite/10 bg-softblue/30">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Welcher Typ passt?
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Die drei Wärmepumpen-Typen im Vergleich.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Ein erster Überblick zur Vorauswahl — welche Lösung für Ihr Haus am
            besten passt, klären wir ehrlich bei der Beratung vor Ort.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {WP_TYPEN.map((w, i) => (
            <div
              key={w.t}
              className={`reveal flex flex-col rounded-3xl border bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/5 ${
                w.highlight ? "border-yellow ring-1 ring-yellow" : "border-graphite/10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                  w.highlight
                    ? "bg-yellow text-graphite"
                    : "bg-softblue text-slate"
                }`}
              >
                {w.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-graphite">
                {w.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                <span className="font-semibold text-graphite">Geeignet für: </span>
                {w.fuer}
              </p>

              <div className="mt-5 space-y-2">
                {w.pro.map((p) => (
                  <p key={p} className="flex items-start gap-2 text-[14px] text-graphite">
                    <span className="mt-1 text-amber">＋</span>
                    {p}
                  </p>
                ))}
                {w.contra.map((c) => (
                  <p key={c} className="flex items-start gap-2 text-[14px] text-slate">
                    <span className="mt-1 text-greengray">－</span>
                    {c}
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t border-graphite/10 pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-greengray">
                  Kosten-Richtwert (vor Förderung)
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-graphite">
                  {w.kosten}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="reveal mt-6 text-sm text-slate/80">
          Richtwerte inkl. Montage, je nach Gebäude und Ausstattung. Mit Förderung
          reduziert sich Ihr Eigenanteil unter besonderen Voraussetzungen um bis
          zu 80&nbsp;%.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  I) Video-Hub „H&S erklärt"                                         */
/* ------------------------------------------------------------------ */
type WpVideo = { t: string; d: string; poster: string; youtubeId: string }
const WP_VIDEOS: WpVideo[] = [
  {
    t: "Welche Wärmepumpen bieten wir an?",
    d: "Luft, Sole oder Erdwärme — welcher Typ zu welchem Haus passt.",
    poster: montageRohre,
    youtubeId: "", // TODO: echte YouTube-Video-ID einsetzen
  },
  {
    t: "Der häufigste Fehler beim Wärmepumpen-Kauf",
    d: "Worauf Sie achten sollten, bevor Sie unterschreiben.",
    poster: beratungBroschuere,
    youtubeId: "", // TODO: echte YouTube-Video-ID einsetzen
  },
  {
    t: "Wie läuft die Montage ab?",
    d: "Ein Blick auf unsere Baustelle — Schritt für Schritt.",
    poster: montageTeam,
    youtubeId: "", // TODO
  },
  {
    t: "Förderung einfach erklärt",
    d: "Bis zu 80 % unter besonderen Voraussetzungen — und wie der Antrag abläuft.",
    poster: serviceLuefter,
    youtubeId: "", // TODO
  },
]

function VideoHub() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const video = WP_VIDEOS[active]

  const select = (i: number) => {
    setActive(i)
    setPlaying(false)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          H&amp;S erklärt
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Wissen aus der Werkstatt — kurz erklärt.
        </h2>
      </div>

      <div className="reveal mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        {/* Hauptplayer im YouTube-Look */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-graphite shadow-xl shadow-graphite/10">
          {playing && video.youtubeId ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.t}
              allow="accelerated-download; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Video abspielen: ${video.t}`}
            >
              <img
                src={video.poster}
                alt={video.t}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0000] shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="absolute bottom-5 left-5 right-5 text-left">
                <span className="block font-display text-2xl font-semibold text-offwhite">
                  {video.t}
                </span>
                <span className="mt-1 block text-sm text-offwhite/80">{video.d}</span>
              </span>
            </button>
          )}
        </div>

        {/* Playlist */}
        <div className="flex flex-col gap-3">
          {WP_VIDEOS.map((v, i) => {
            const isActive = i === active
            return (
              <button
                key={v.t}
                onClick={() => select(i)}
                aria-current={isActive}
                className={`group flex items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${
                  isActive
                    ? "border-yellow bg-yellow/10"
                    : "border-graphite/10 hover:border-graphite/25 hover:bg-softblue/40"
                }`}
              >
                <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-lg bg-graphite">
                  <img src={v.poster} alt="" className="h-full w-full object-cover" />
                  <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0000]/90">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[15px] font-semibold leading-snug text-graphite">
                    {v.t}
                  </span>
                  <span className="mt-0.5 line-clamp-2 block text-xs text-slate">
                    {v.d}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  D) Interaktiver Ersparnis-/Preisrechner                           */
/* ------------------------------------------------------------------ */
const HAUSTYPEN = [
  { key: "efh", label: "Einfamilienhaus", flaeche: 140 },
  { key: "dhh", label: "Doppelhaus", flaeche: 110 },
  { key: "mfh", label: "Mehrfamilienhaus", flaeche: 320 },
] as const
const HEIZARTEN = [
  { key: "oel", label: "Öl", preis: 0.12 },
  { key: "gas", label: "Gas", preis: 0.11 },
  { key: "strom", label: "Nachtstrom", preis: 0.26 },
] as const

function eur(n: number) {
  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 0,
  }).format(Math.round(n / 50) * 50)
}

function Rechner() {
  const [haus, setHaus] = useState(0)
  const [baujahr, setBaujahr] = useState(1985)
  const [heiz, setHeiz] = useState(1)

  const result = useMemo(() => {
    const flaeche = HAUSTYPEN[haus].flaeche
    // spez. Wärmebedarf: alt ~180, neu ~60 kWh/m²·a
    const spez = Math.max(60, 180 - (baujahr - 1950) * (120 / 70))
    const bedarf = flaeche * spez // kWh/a
    const preisAlt = HEIZARTEN[heiz].preis
    const kostenAlt = (bedarf / 0.85) * preisAlt
    const cop = 3.2 + (baujahr - 1950) * (0.9 / 70) // neuer = niedrigere Vorlauf = besser
    const kostenWp = (bedarf / cop) * 0.3
    const ersparnis = Math.max(0, kostenAlt - kostenWp)
    // Investition grob nach Haustyp, mit beispielhafter Förderannahme
    const invBrutto = flaeche > 200 ? 34000 : flaeche > 120 ? 24000 : 21000
    const eigenanteil = invBrutto * 0.45 // Annahme ~55 % Förderung
    return {
      ersparnisLow: ersparnis * 0.85,
      ersparnisHigh: ersparnis * 1.15,
      eigenLow: eigenanteil * 0.9,
      eigenHigh: eigenanteil * 1.1,
    }
  }, [haus, baujahr, heiz])

  return (
    <section id="rechner" className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <div className="reveal overflow-hidden rounded-3xl bg-ink text-offwhite">
        <div className="grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:items-center md:p-14">
          {/* Eingaben */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
              Ersparnis-Rechner
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
              Was bringt eine Wärmepumpe bei Ihnen?
            </h2>
            <p className="mt-3 max-w-md text-offwhite/70">
              Drei Angaben genügen für eine grobe Einschätzung. Kein Blackbox-Preis —
              die genauen Zahlen bekommen Sie im persönlichen Angebot.
            </p>

            <div className="mt-8 space-y-7">
              {/* Haustyp */}
              <div>
                <label className="text-sm font-semibold text-offwhite/80">Haustyp</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {HAUSTYPEN.map((h, i) => (
                    <button
                      key={h.key}
                      onClick={() => setHaus(i)}
                      className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                        haus === i
                          ? "border-yellow bg-yellow text-graphite"
                          : "border-offwhite/20 text-offwhite/80 hover:bg-offwhite/[0.06]"
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Baujahr */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-offwhite/80">
                    Baujahr
                  </label>
                  <span className="font-display text-lg font-semibold text-yellow">
                    {baujahr}
                  </span>
                </div>
                <input
                  type="range"
                  min={1950}
                  max={2020}
                  step={5}
                  value={baujahr}
                  onChange={(e) => setBaujahr(Number(e.target.value))}
                  className="mt-3 w-full accent-yellow"
                />
                <div className="mt-1 flex justify-between text-xs text-offwhite/50">
                  <span>1950</span>
                  <span>2020</span>
                </div>
              </div>

              {/* Heizart */}
              <div>
                <label className="text-sm font-semibold text-offwhite/80">
                  Aktuelle Heizart
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {HEIZARTEN.map((h, i) => (
                    <button
                      key={h.key}
                      onClick={() => setHeiz(i)}
                      className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                        heiz === i
                          ? "border-yellow bg-yellow text-graphite"
                          : "border-offwhite/20 text-offwhite/80 hover:bg-offwhite/[0.06]"
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ergebnis */}
          <div className="rounded-2xl border border-offwhite/15 bg-offwhite/[0.04] p-7 md:p-8">
            <p className="text-sm font-medium text-offwhite/70">
              Geschätzte Heizkosten-Ersparnis pro Jahr
            </p>
            <p className="mt-1 font-display text-4xl font-semibold text-yellow md:text-5xl">
              {eur(result.ersparnisLow)}–{eur(result.ersparnisHigh)} €
            </p>

            <div className="mt-6 border-t border-offwhite/15 pt-6">
              <p className="text-sm font-medium text-offwhite/70">
                Grober Eigenanteil nach Förderung
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-offwhite">
                {eur(result.eigenLow)}–{eur(result.eigenHigh)} €
              </p>
            </div>

            <a
              href={HEYFLOW_URL}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-base font-semibold text-graphite transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow/30"
            >
              Unverbindliches Angebot anfragen →
            </a>
            <p className="mt-4 text-xs leading-relaxed text-offwhite/50">
              Grobe, unverbindliche Schätzung auf Basis typischer Werte. Ihre
              tatsächlichen Zahlen ermitteln wir kostenlos bei der Beratung vor Ort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  E) Fördermittel-Visualisierung                                     */
/* ------------------------------------------------------------------ */
const FOERDER_BAUSTEINE = [
  { t: "Grundförderung", pct: 30, color: "var(--color-yellow)" },
  { t: "Klimageschwindigkeits-Bonus", pct: 16, color: "var(--color-amber)" },
  { t: "Einkommens-Bonus", pct: 40, color: "var(--color-greengray)" },
]

function Foerdermittel() {
  const gesamt = 80
  const r = 52
  const umfang = 2 * Math.PI * r
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Donut */}
        <div className="reveal flex flex-col items-center">
          <div className="relative">
            <svg width="220" height="220" viewBox="0 0 140 140" className="-rotate-90">
              <circle
                cx="70"
                cy="70"
                r={r}
                fill="none"
                stroke="var(--color-softblue)"
                strokeWidth="14"
              />
              <circle
                cx="70"
                cy="70"
                r={r}
                fill="none"
                stroke="var(--color-yellow)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={`${(umfang * gesamt) / 100} ${umfang}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-5xl font-semibold text-graphite">
                80%
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-greengray">
                Förderung möglich
              </span>
            </div>
          </div>
        </div>

        {/* Aufschlüsselung + Service-Hinweis */}
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Förderung
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Bis zu 80 % unter besonderen Voraussetzungen.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Die Förderung setzt sich aus mehreren Bausteinen zusammen. Wie viel für
            Sie zusammenkommt, hängt von Ihrer Situation ab — wir prüfen es genau.
          </p>

          <div className="mt-8 space-y-4">
            {FOERDER_BAUSTEINE.map((b) => (
              <div key={b.t}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-graphite">{b.t}</span>
                  <span className="font-display font-semibold text-graphite">
                    bis {b.pct}%
                  </span>
                </div>
                <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-softblue">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(b.pct / 80) * 100}%`, background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-yellow p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graphite text-yellow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[15px] font-medium leading-relaxed text-graphite">
              Wir prüfen die Förderbausteine, erstellen BzA und BnD und begleiten
              Sie bei Ihrem eigenen Antrag im KfW-Portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  5) Prozess-Sektion „Unser typischer Ablauf" — 6 Schritte          */
/* ------------------------------------------------------------------ */
const WP_STEPS = [
  { n: "01", t: "Kontakt & Erstgespräch", d: "Sie melden sich — telefonisch, per WhatsApp oder Formular. Wir klären die ersten Fragen." },
  { n: "02", t: "Beratung vor Ort", d: "Wir kommen zu Ihnen, nehmen auf und beraten ehrlich, was für Ihr Haus sinnvoll ist." },
  { n: "03", t: "Angebot & Förderung", d: "Sie erhalten ein klares Festpreis-Angebot. Die maximale Förderung beantragen wir für Sie." },
  { n: "04", t: "Terminplanung", d: "Feste Termine, feste Ansprechpartner. Sie wissen genau, wann was passiert." },
  { n: "05", t: "Montage in 4–5 Tagen", d: "Unser eigenes Team installiert sauber und termintreu — ohne wochenlange Baustelle." },
  { n: "06", t: "Übergabe & Service", d: "Einweisung in Ihre neue Anlage — und danach bleiben wir für Wartung & Notdienst erreichbar." },
]

function WpProzess() {
  return (
    <section id="prozess" className="bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Unser typischer Ablauf
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            In sechs Schritten zur eigenen Wärmepumpe.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WP_STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal group relative flex flex-col rounded-2xl border border-offwhite/15 bg-offwhite/[0.03] p-6 transition-colors duration-300 hover:border-yellow/50 hover:bg-offwhite/[0.06]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-4xl font-semibold text-yellow">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  K) Service nach der Installation                                   */
/* ------------------------------------------------------------------ */
const SERVICE_PUNKTE = [
  {
    t: "Regelmäßige Wartung",
    d: "Wartungspakete halten Ihre Anlage effizient und verlängern die Lebensdauer.",
    icon: <path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    t: "Schneller Notdienst",
    d: "Wenn es doch mal klemmt: Wir sind aus der Region schnell bei Ihnen.",
    icon: (
      <path
        d="M4 5c0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-3.3c0-.4-.3-.8-.7-.9l-3.3-.7c-.4-.1-.8.1-1 .4l-1 1.3a12 12 0 01-5.4-5.4l1.3-1c.3-.2.5-.6.4-1L9.2 4.7C9.1 4.3 8.7 4 8.3 4H5c-.6 0-1 .4-1 1z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    t: "Garantieleistungen",
    d: "Wir übernehmen die Abwicklung der Herstellergarantie — unkompliziert für Sie.",
    icon: <path d="M12 3l8 4v6c0 4.4-3.4 7.4-8 8-4.6-.6-8-3.6-8-8V7l8-4z" />,
  },
]

function ServiceDanach() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Nach der Installation
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Mit der Übergabe fängt unsere Betreuung erst an.
        </h2>
        <p className="mt-4 text-lg text-slate">
          Ein Kauf ohne Reue: Als Meisterbetrieb mit eigenem Service-Team bleiben
          wir für Sie erreichbar — auch Jahre nach der Inbetriebnahme.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICE_PUNKTE.map((s, i) => (
          <div
            key={s.t}
            className="reveal group flex flex-col rounded-2xl border border-graphite/10 bg-offwhite p-7 transition-all duration-300 hover:-translate-y-1 hover:border-graphite/20 hover:shadow-xl hover:shadow-graphite/5"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow text-graphite transition-transform duration-300 group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                {s.icon}
              </svg>
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-graphite">
              {s.t}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  F) „Handwerk in Aktion" — Foto-Galerie                             */
/* ------------------------------------------------------------------ */
const HANDWERK = [
  { src: montageRohre, alt: "Sauber verlegte Kupferleitungen einer H&S-Installation", span: "sm:col-span-2 sm:row-span-2" },
  { src: montageBohren, alt: "H&S-Monteur bei der Kernbohrung auf der Baustelle" },
  { src: montageKupfer, alt: "Detailarbeit an den Leitungen der Wärmepumpe" },
  { src: serviceLuefter, alt: "Servicetechniker prüft die Außeneinheit" },
  { src: montageTeam, alt: "Zwei H&S-Fachkräfte bei der gemeinsamen Montage" },
]

function HandwerkGrid() {
  return (
    <section className="border-y border-graphite/10 bg-ink py-20 text-offwhite md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            Handwerk in Aktion
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
            Echtes Handwerk, echte Ergebnisse.
          </h2>
          <p className="mt-4 text-lg text-offwhite/70">
            Keine Stockfotos — das sind unsere Teams auf echten Baustellen in der
            Region.
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {HANDWERK.map((h) => (
            <figure
              key={h.src}
              className={`group relative overflow-hidden rounded-2xl bg-slate ${h.span ?? ""}`}
            >
              <img
                src={h.src}
                alt={h.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  G) Referenzen — Vorher/Nachher                                     */
/* ------------------------------------------------------------------ */
const REFERENZEN = [
  {
    ort: "Willich-Anrath",
    nachher: aussenTeam,
    alt: "Fertig installierte Wärmepumpen-Außeneinheit in Willich",
    kpi1: "-58 %",
    kpi1l: "Heizkosten",
    kpi2: "Öl → Luft-Wasser",
    q: "Ölkessel raus, Wärmepumpe rein — und das Haus ist warm wie nie. Alles sauber und pünktlich.",
  },
  {
    ort: "Köln-Nippes",
    nachher: montageBohren,
    alt: "Wärmepumpen-Installation im Altbau in Köln",
    kpi1: "-45 %",
    kpi1l: "Heizkosten",
    kpi2: "Altbau von 1962",
    q: "Man hatte uns gesagt, im Altbau geht das nicht. H&S hat bewiesen, dass es sehr wohl geht.",
  },
  {
    ort: "Solingen-Ohligs",
    nachher: montageRohre,
    alt: "Neue Wärmepumpe mit sauber verlegten Leitungen in Solingen",
    kpi1: "70 %",
    kpi1l: "Förderung erhalten",
    kpi2: "Gas → Wärmepumpe",
    q: "Die Förderung hat H&S komplett übernommen. Wir mussten uns um nichts kümmern.",
  },
]

function Referenzen() {
  const [nach, setNach] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true })
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
          Referenzen
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
          Projekte aus der Nachbarschaft.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {REFERENZEN.map((r, i) => {
          const showNach = nach[i]
          return (
            <figure
              key={r.ort}
              className="reveal flex flex-col overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-softblue">
                {showNach ? (
                  <img src={r.nachher} alt={r.alt} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-softgreen via-softblue to-bluegray text-slate">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <path d="M9 21V12h6v9" />
                    </svg>
                    <span className="text-sm font-medium">Vorher · alte Heizung</span>
                  </div>
                )}
                {/* Vorher/Nachher-Umschalter */}
                <div className="absolute left-3 top-3 flex overflow-hidden rounded-full border border-offwhite/60 bg-graphite/70 p-0.5 backdrop-blur">
                  <button
                    onClick={() => setNach((s) => ({ ...s, [i]: false }))}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                      !showNach ? "bg-offwhite text-graphite" : "text-offwhite"
                    }`}
                  >
                    Vorher
                  </button>
                  <button
                    onClick={() => setNach((s) => ({ ...s, [i]: true }))}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                      showNach ? "bg-yellow text-graphite" : "text-offwhite"
                    }`}
                  >
                    Nachher
                  </button>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-graphite">
                    {r.kpi1} {r.kpi1l}
                  </span>
                  <span className="rounded-full bg-softblue px-3 py-1 text-xs font-semibold text-slate">
                    {r.kpi2}
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-graphite">
                  „{r.q}“
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-graphite/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-softblue text-sm font-semibold text-slate">
                    {r.ort.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-graphite">[Vorname]</span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-greengray">
                      {r.ort}
                    </span>
                  </span>
                </figcaption>
              </div>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  J) Google-Bewertungen / Vertrauen                                  */
/* ------------------------------------------------------------------ */
const REVIEW_ZITATE = [
  { q: "Kompetent, pünktlich, ehrlich. So stellt man sich einen Handwerksbetrieb vor.", loc: "Willich" },
  { q: "Von der Beratung bis zur Förderung alles aus einer Hand. Absolut empfehlenswert.", loc: "Köln" },
  { q: "Fester Ansprechpartner, saubere Arbeit, faire Preise. Fünf Sterne verdient.", loc: "Solingen" },
]
const QUALI = [
  "Eingetragener Meisterbetrieb",
  "Innung SHK",
  "Mitglied im Bundesverband Wärmepumpe (bwp)",
]

function VertrauenReviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Rating */}
        <div className="rounded-3xl border border-graphite/10 bg-offwhite p-8 text-center">
          <GoogleG className="mx-auto h-8 w-8" />
          <p className="mt-4 font-display text-6xl font-semibold text-graphite">4,9</p>
          <p className="mt-1 text-amber" aria-hidden>
            ★★★★★
          </p>
          <p className="mt-2 text-sm font-medium text-slate">
            aus [Anzahl] Google-Bewertungen
          </p>
          <div className="mt-6 flex flex-col gap-2 border-t border-graphite/10 pt-6 text-left">
            {QUALI.map((q) => (
              <p key={q} className="flex items-center gap-2 text-sm text-graphite">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {q}
              </p>
            ))}
          </div>
        </div>

        {/* Zitate */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Vertrauen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
            Was unsere Kundschaft sagt.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {REVIEW_ZITATE.map((z, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-2xl border border-graphite/10 bg-offwhite p-5"
              >
                <span className="text-amber" aria-hidden>
                  ★★★★★
                </span>
                <blockquote className="mt-2 flex-1 text-[14px] leading-relaxed text-graphite">
                  {z.q}
                </blockquote>
                <figcaption className="mt-4 text-xs font-medium uppercase tracking-wide text-greengray">
                  Google · {z.loc}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Seiten-Kompositionen                                               */
/* ------------------------------------------------------------------ */
function HomePage() {
  return (
    <>
      <Hero />
      <LogoWall />
      <TrustBar />
      <HomeBand />
      <Team />
      <Prozess />
      <StatementBand />
      <Leistungen />
      <FoerderBand />
      <Stimmen />
      <Einzugsgebiet />
      <Faq />
      <HomeBand
        headline="Bereit für Ihre Wärmepumpe? Holen Sie sich Ihr kostenloses Angebot."
        cta
      />
      <Contact />
      <SeoText />
    </>
  )
}

function WaermepumpenPage() {
  return (
    <>
      <WpHero />
      <UspLeiste />
      <LogoWall />
      <WpIntro />
      <TypenVergleich />
      <WpProzess />
      <VideoHub />
      <Rechner />
      <Foerdermittel />
      <ServiceDanach />
      <HandwerkGrid />
      <Referenzen />
      <VertrauenReviews />
      <Faq />
      <HomeBand
        headline="Bereit für Ihre Wärmepumpe? Jetzt Angebot berechnen."
        cta
      />
      <Contact />
    </>
  )
}

function UeberUnsPage() {
  return (
    <>
      <AboutPage />
      <Contact />
    </>
  )
}

function WissenPage() {
  return (
    <>
      <KnowledgePage />
      <Contact />
    </>
  )
}

function WaermepumpenKostenRoute() {
  return (
    <>
      <WaermepumpenKostenPage />
      <Contact />
    </>
  )
}

function WieFunktioniertWaermepumpeRoute() {
  return (
    <>
      <HowHeatPumpWorksPage />
      <Contact />
    </>
  )
}

function WaermepumpeStromverbrauchRoute() {
  return (
    <>
      <HeatPumpElectricityPage />
      <Contact />
    </>
  )
}

function WaermepumpeFoerderungRoute() {
  return (
    <>
      <HeatPumpFundingPage />
      <Contact />
    </>
  )
}

function BoschWaermepumpeRoute() {
  return (
    <>
      <BoschHeatPumpPage />
      <Contact />
    </>
  )
}

function VaillantWaermepumpeRoute() {
  return (
    <>
      <VaillantHeatPumpPage />
      <Contact />
    </>
  )
}

function ViessmannWaermepumpeRoute() {
  return (
    <>
      <ViessmannHeatPumpPage />
      <Contact />
    </>
  )
}

function BuderusWaermepumpeRoute() {
  return (
    <>
      <BuderusHeatPumpPage />
      <Contact />
    </>
  )
}

function WarmwasserWaermepumpeRoute() {
  return (
    <>
      <DomesticHotWaterHeatPumpPage />
      <Contact />
    </>
  )
}

function LuftWasserWaermepumpeRoute() {
  return (
    <>
      <AirWaterHeatPumpPage />
      <Contact />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Layout + Router                                                    */
/* ------------------------------------------------------------------ */
function RootLayout() {
  const { pathname } = useLocation()
  useReveal(pathname)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname])
  return (
    <div className="min-h-full bg-offwhite">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import FlyerPage from "./FlyerPage"
import AboutPage from "./AboutPage"
import KnowledgePage from "./KnowledgePage"
import WaermepumpenKostenPage from "./SeoArticlePage"
import HowHeatPumpWorksPage from "./HowHeatPumpWorksPage"
import HeatPumpElectricityPage from "./HeatPumpElectricityPage"
import HeatPumpFundingPage from "./HeatPumpFundingPage"
import BoschHeatPumpPage from "./BoschHeatPumpPage"
import VaillantHeatPumpPage from "./VaillantHeatPumpPage"
import ViessmannHeatPumpPage from "./ViessmannHeatPumpPage"
import BuderusHeatPumpPage from "./BuderusHeatPumpPage"
import DomesticHotWaterHeatPumpPage from "./DomesticHotWaterHeatPumpPage"
import AirWaterHeatPumpPage from "./AirWaterHeatPumpPage"
import CareerPage from "./CareerPage"
import LandingPage from "./LandingPage"
import LandingPageVaillantSolingen from "./LandingPageVaillantSolingen"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "waermepumpen", Component: WaermepumpenPage },
      { path: "ueber-uns", Component: UeberUnsPage },
      { path: "wissen-und-infos", Component: WissenPage },
      {
        path: "kosten/waermepumpen-kosten",
        Component: WaermepumpenKostenRoute,
      },
      {
        path: "wissen/wie-funktioniert-eine-warmepumpe",
        Component: WieFunktioniertWaermepumpeRoute,
      },
      {
        path: "kosten/waermepumpe-stromverbrauch",
        Component: WaermepumpeStromverbrauchRoute,
      },
      {
        path: "kosten/foerderung-waermepumpe",
        Component: WaermepumpeFoerderungRoute,
      },
      {
        path: "hersteller/bosch-waermepumpe",
        Component: BoschWaermepumpeRoute,
      },
      // Gleiche URLs (inkl. Schreibweise) wie die bisherige Live-Seite.
      {
        path: "hersteller/vaillant-warmepumpe",
        Component: VaillantWaermepumpeRoute,
      },
      {
        path: "hersteller/viessmann-waermepumpe",
        Component: ViessmannWaermepumpeRoute,
      },
      {
        path: "hersteller/buderus-warmepumpe",
        Component: BuderusWaermepumpeRoute,
      },
      {
        path: "typen/warmwasser-waermepumpe",
        Component: WarmwasserWaermepumpeRoute,
      },
      {
        path: "typen/luft-wasser-warmepumpe",
        Component: LuftWasserWaermepumpeRoute,
      },
      // Gleiche URL wie die bisherige Live-Seite, damit Links und Rankings erhalten bleiben.
      { path: "bewerben", Component: CareerPage },
      { path: "karriere", Component: CareerPage },
      { path: "*", Component: HomePage },
    ],
  },
  { path: "/flyer", Component: FlyerPage },
  // Kampagnen-Landingpage: eigenes, ablenkungsfreies Layout ohne Hauptnavigation.
  { path: "/lp/waermepumpe-nrw", Component: LandingPage },
  { path: "/lp/vaillant-solingen", Component: LandingPageVaillantSolingen },
], { basename: import.meta.env.BASE_URL })

export default function App() {
  return <RouterProvider router={router} />
}
