import type { ReactNode } from "react"
import { Link } from "react-router"

/* Hero für Leistungsseiten (Wärmepumpen, PV): bewusst anders als der
   Startseiten-Hero – Überschrift oben, darunter ein breites Themenbild,
   das auf einen Blick zeigt, worum es geht. */

export type ServiceHeroProps = {
  crumb: string
  topic: string
  title: ReactNode
  text: ReactNode
  actions: ReactNode
  meta?: ReactNode
  image: { src: string; alt: string; position?: string }
  facts: { value: string; label: string }[]
}

export default function ServiceHero({
  crumb,
  topic,
  title,
  text,
  actions,
  meta,
  image,
  facts,
}: ServiceHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-offwhite">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-offwhite) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <nav
          aria-label="Brotkrumen"
          className="flex items-center gap-2 text-sm font-medium text-offwhite/50"
        >
          <Link to="/" className="transition-colors hover:text-offwhite">
            Startseite
          </Link>
          <span aria-hidden>/</span>
          <span>Leistungen</span>
          <span aria-hidden>/</span>
          <span className="text-offwhite/90">{crumb}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow px-3.5 py-1.5 text-[13px] font-semibold text-graphite">
              <span className="h-2 w-2 rounded-full bg-graphite" />
              {topic}
            </span>
            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-offwhite sm:text-6xl md:text-[4.1rem]">
              {title}
            </h1>
          </div>
          <div className="reveal">
            <p className="text-lg leading-relaxed text-offwhite/75">{text}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">{actions}</div>
            {meta && <div className="mt-5">{meta}</div>}
          </div>
        </div>

        <figure className="reveal relative mt-10 overflow-hidden rounded-3xl ring-1 ring-offwhite/10 md:mt-14">
          <img
            src={image.src}
            alt={image.alt}
            className={`aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9] ${image.position ?? ""}`}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/5 bg-gradient-to-t from-ink/85 to-transparent sm:block"
          />
          <ul className="absolute inset-x-6 bottom-6 hidden gap-3 sm:flex md:inset-x-8 md:bottom-8">
            {facts.map((f) => (
              <li
                key={f.label}
                className="rounded-2xl border border-offwhite/15 bg-ink/70 px-4 py-3 backdrop-blur-md"
              >
                <p className="font-display text-xl font-semibold text-yellow md:text-2xl">
                  {f.value}
                </p>
                <p className="text-xs text-offwhite/75 md:text-sm">{f.label}</p>
              </li>
            ))}
          </ul>
        </figure>
        {/* Mobil: Fakten unter dem Bild, damit das Motiv frei bleibt */}
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
          {facts.map((f) => (
            <li
              key={f.label}
              className="rounded-2xl border border-offwhite/15 bg-offwhite/[0.05] px-4 py-3"
            >
              <p className="font-display text-xl font-semibold text-yellow">{f.value}</p>
              <p className="text-xs text-offwhite/75">{f.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
