import { Link } from "react-router"
import { useEffect, type ReactNode } from "react"
import { ArrowIcon, SectionHeading } from "./SeoArticlePage"
import waermepumpenTrend from "./articles/waermepumpenTrend"
import gasheizung from "./articles/gasheizung"
import foerderung from "./articles/foerderung"
import pvAnlagen from "./articles/pvAnlagen"

const HEYFLOW_URL = "#heyflow-angebot"

/* ------------------------------------------------------------------ */
/* Datenmodell                                                         */
/* ------------------------------------------------------------------ */

export type ArticleBlock =
  | { type: "p"; content: ReactNode }
  | { type: "lead"; content: ReactNode }
  | { type: "h3"; content: ReactNode }
  | { type: "facts"; items: { value: string; label: string }[]; note?: ReactNode }
  | { type: "list"; items: ReactNode[] }
  | {
      type: "rows"
      items: { value: string; title: string; text: ReactNode }[]
    }
  | { type: "steps"; items: { title: string; text: ReactNode }[] }
  | {
      type: "callout"
      title: string
      content: ReactNode
      tone?: "soft" | "dark" | "yellow" | "line"
      eyebrow?: string
    }
  | { type: "image"; src: string; alt: string; caption: ReactNode }
  | { type: "quote"; content: ReactNode }
  | {
      type: "table"
      head: string[]
      rows: ReactNode[][]
      note?: ReactNode
      highlightLast?: boolean
    }
  | { type: "inlineCta"; eyebrow: string; title: string; button: string }

export type ArticleSection = {
  id: string
  nav: string
  eyebrow: string
  heading: ReactNode
  blocks: ArticleBlock[]
}

export type TopicArticle = {
  /** Live-Slug unter /aktuelle-themen/<slug> – nicht ändern (Rankings). */
  slug: string
  /** Sichtbare H1 */
  title: string
  /** document.title */
  metaTitle: string
  /** Kurzbeschreibung für Übersichtslisten / Meta-Description */
  teaser: string
  /** Kategorie-Label (Eyebrow, Breadcrumb, Karten) */
  label: string
  readTime: string
  /** Aktualisierungsdatum im Format TT.MM.JJJJ */
  updated: string
  /** Vorschaubild für Übersichtskarten */
  image: string
  imageAlt: string
  heroIntro: string
  heroBox: {
    eyebrow: string
    value: string
    valueNote: string
    rows: { label: string; value: string; highlight?: boolean }[]
  }
  navCta: string
  sections: ArticleSection[]
  faqs: { q: string; a: string }[]
  closing: { title: string; text: string; button: string }
  related: { label: string; title: string; href: string }[]
  sources: { label: string; href: string }[]
}

/** Registry aller „Aktuelle Themen“-Artikel. Route: /aktuelle-themen/<slug> */
export const ARTICLES: TopicArticle[] = [
  waermepumpenTrend,
  gasheizung,
  foerderung,
  pvAnlagen,
]

/* ------------------------------------------------------------------ */
/* Bausteine                                                           */
/* ------------------------------------------------------------------ */

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="mt-5 leading-relaxed text-slate">{block.content}</p>

    case "lead":
      return (
        <p className="mt-6 text-lg leading-relaxed text-slate">
          {block.content}
        </p>
      )

    case "h3":
      return (
        <h3 className="mt-10 font-display text-2xl font-semibold text-graphite">
          {block.content}
        </h3>
      )

    case "facts":
      return (
        <div className="mt-9">
          <div
            className={`grid border-y border-graphite/15 ${
              block.items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {block.items.map((item, index) => (
              <div
                key={item.label}
                className={`py-6 sm:px-6 ${
                  index > 0
                    ? "border-t border-graphite/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <p className="font-display text-3xl font-semibold text-graphite">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate">{item.label}</p>
              </div>
            ))}
          </div>
          {block.note && (
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {block.note}
            </p>
          )}
        </div>
      )

    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3 leading-relaxed text-slate">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-yellow" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case "rows":
      return (
        <div className="mt-10">
          {block.items.map((item) => (
            <div
              key={item.title}
              className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[8rem_1fr]"
            >
              <p className="font-display text-3xl font-semibold text-amber">
                {item.value}
              </p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case "steps":
      return (
        <div className="mt-10">
          {block.items.map((step, index) => (
            <div
              key={step.title}
              className="reveal grid gap-3 border-t border-graphite/15 py-6 sm:grid-cols-[3rem_1fr]"
            >
              <span className="font-display text-xl font-semibold text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-graphite">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case "callout": {
      const tone = block.tone ?? "soft"
      if (tone === "dark") {
        return (
          <div className="reveal mt-9 rounded-2xl bg-ink p-7 text-offwhite sm:p-9">
            {block.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                {block.eyebrow}
              </p>
            )}
            <p className="mt-3 font-display text-2xl font-semibold">
              {block.title}
            </p>
            <div className="mt-4 leading-relaxed text-offwhite/75">
              {block.content}
            </div>
          </div>
        )
      }
      if (tone === "yellow") {
        return (
          <div className="reveal mt-9 flex gap-4 rounded-2xl bg-yellow p-6">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-graphite text-xs font-bold text-yellow">
              ✓
            </span>
            <div>
              <p className="font-semibold text-graphite">{block.title}</p>
              <div className="mt-1 text-sm leading-relaxed text-graphite/70">
                {block.content}
              </div>
            </div>
          </div>
        )
      }
      if (tone === "line") {
        return (
          <div className="reveal mt-9 border-l-4 border-yellow pl-5">
            <p className="font-display text-2xl font-semibold text-graphite">
              {block.title}
            </p>
            <div className="mt-3 leading-relaxed text-slate">
              {block.content}
            </div>
          </div>
        )
      }
      return (
        <div className="reveal mt-9 rounded-2xl bg-softblue/40 p-7">
          <p className="font-display text-2xl font-semibold text-graphite">
            {block.title}
          </p>
          <div className="mt-3 leading-relaxed text-slate">{block.content}</div>
        </div>
      )
    }

    case "image":
      return (
        <figure className="reveal my-14 overflow-hidden rounded-2xl">
          <img
            src={block.src}
            alt={block.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-x border-b border-graphite/10 bg-offwhite px-5 py-3 text-sm leading-relaxed text-slate">
            {block.caption}
          </figcaption>
        </figure>
      )

    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-yellow pl-6 font-display text-3xl font-semibold leading-snug text-graphite">
          {block.content}
        </blockquote>
      )

    case "table": {
      const cols = block.head.length
      const template =
        cols === 2
          ? "grid-cols-[1.2fr_1fr]"
          : cols === 3
            ? "grid-cols-[1.2fr_1fr_1fr]"
            : "grid-cols-4"
      return (
        <div className="mt-10">
          <div className="overflow-x-auto border-t border-graphite/15">
            <div className={cols > 2 ? "min-w-[600px]" : ""}>
              <div
                className={`grid ${template} gap-5 border-b border-graphite/15 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-greengray`}
              >
                {block.head.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              {block.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid ${template} gap-5 border-b border-graphite/10 py-5`}
                >
                  {row.map((cell, cellIndex) => (
                    <span
                      key={cellIndex}
                      className={
                        cellIndex === 0
                          ? "font-semibold text-graphite"
                          : block.highlightLast && cellIndex === row.length - 1
                            ? "font-semibold text-amber"
                            : "text-slate"
                      }
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {block.note && (
            <p className="mt-5 text-sm leading-relaxed text-slate">
              {block.note}
            </p>
          )}
        </div>
      )
    }

    case "inlineCta":
      return (
        <div className="reveal my-16 border-y border-graphite/15 py-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {block.eyebrow}
              </p>
              <p className="mt-2 max-w-xl font-display text-2xl font-semibold text-graphite">
                {block.title}
              </p>
            </div>
            <a
              href={HEYFLOW_URL}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
            >
              {block.button} <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )
  }
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

function ArticleHero({ article }: { article: TopicArticle }) {
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
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate">
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
          <span className="text-amber">Aktuelle Themen</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              {article.label}
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.02em] text-graphite sm:text-6xl md:text-[4.2rem]">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate">
              {article.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
              <span>Aktualisiert: {article.updated}</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>{article.readTime} Lesezeit</span>
              <span className="h-1 w-1 rounded-full bg-amber" />
              <span>Mit Quellenangaben</span>
            </div>
          </div>

          <aside className="reveal overflow-hidden rounded-2xl bg-ink text-offwhite shadow-2xl shadow-graphite/10">
            <div className="border-b border-offwhite/10 px-7 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                {article.heroBox.eyebrow}
              </p>
            </div>
            <div className="p-7">
              <p className="font-display text-5xl font-semibold text-yellow">
                {article.heroBox.value}
              </p>
              <p className="mt-2 text-sm text-offwhite/60">
                {article.heroBox.valueNote}
              </p>
              <ul className="mt-7 space-y-3 border-t border-offwhite/10 pt-6 text-sm text-offwhite/80">
                {article.heroBox.rows.map((row) => (
                  <li key={row.label} className="flex justify-between gap-4">
                    <span>{row.label}</span>
                    <strong
                      className={
                        row.highlight
                          ? "text-right text-yellow"
                          : "text-right text-offwhite"
                      }
                    >
                      {row.value}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ArticleNavigation({ article }: { article: TopicArticle }) {
  const contents: [string, string][] = [
    ...article.sections.map((s): [string, string] => [s.id, s.nav]),
    ...(article.faqs.length > 0
      ? ([["faq", "Häufige Fragen"]] as [string, string][])
      : []),
    ["quellen", "Quellen"],
  ]

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="border-t border-graphite/15 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
          In diesem Artikel
        </p>
        <nav className="mt-4">
          {contents.map(([id, label], index) => (
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
          {article.navCta}
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </aside>
  )
}

function Section({
  section,
  index,
}: {
  section: ArticleSection
  index: number
}) {
  return (
    <section
      id={section.id}
      className={`scroll-mt-28 ${index === 0 ? "" : "pt-24"}`}
    >
      <SectionHeading
        number={String(index + 1).padStart(2, "0")}
        eyebrow={section.eyebrow}
      >
        {section.heading}
      </SectionHeading>
      {section.blocks.map((block, blockIndex) => (
        <Block key={blockIndex} block={block} />
      ))}
    </section>
  )
}

function Faq({ article }: { article: TopicArticle }) {
  if (article.faqs.length === 0) return null
  return (
    <section id="faq" className="scroll-mt-28 pt-24">
      <SectionHeading eyebrow="Häufige Fragen">
        Fragen &amp; Antworten
      </SectionHeading>
      <div className="mt-10 border-t border-graphite/15">
        {article.faqs.map((item) => (
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

function ClosingCta({ article }: { article: TopicArticle }) {
  return (
    <div className="reveal mt-24 overflow-hidden rounded-2xl bg-ink text-offwhite">
      <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
            H&amp;S Energiesysteme · Willich, Köln &amp; Solingen
          </p>
          <p className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight">
            {article.closing.title}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-offwhite/70">
            {article.closing.text}
          </p>
        </div>
        <a
          href={HEYFLOW_URL}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30 md:self-end"
        >
          {article.closing.button} <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function Sources({ article }: { article: TopicArticle }) {
  return (
    <section id="quellen" className="scroll-mt-28 pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
        Quellen &amp; Stand
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        Stand der Angaben: {article.updated}. Gesetze, Förderbedingungen und
        Preise ändern sich – maßgeblich sind immer die zum Zeitpunkt Ihrer
        Entscheidung gültigen Regeln.
      </p>
      <ul className="mt-5 space-y-2 border-t border-graphite/10 pt-5 text-sm">
        {article.sources.map((source) => (
          <li key={source.href} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <a
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate underline decoration-graphite/20 underline-offset-4 transition-colors hover:text-graphite hover:decoration-yellow"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function RelatedArticles({ article }: { article: TopicArticle }) {
  return (
    <section className="border-t border-graphite/10 bg-softblue/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Weiterlesen
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-graphite md:text-5xl">
            Passende Ratgeber.
          </h2>
        </div>
        <div className="knowledge-stagger mt-10 grid gap-5 md:grid-cols-3">
          {article.related.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="reveal group flex min-h-64 flex-col rounded-2xl border border-graphite/10 bg-offwhite p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {item.label}
              </span>
              <h3 className="mt-auto pt-12 font-display text-2xl font-semibold leading-tight text-graphite">
                {item.title}
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

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-36 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
        Aktuelle Themen
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-graphite md:text-5xl">
        Dieser Artikel wurde nicht gefunden.
      </h1>
      <ul className="mt-10 border-t border-graphite/15">
        {ARTICLES.map((a) => (
          <li key={a.slug} className="border-b border-graphite/10">
            <Link
              to={`/aktuelle-themen/${a.slug}`}
              className="group flex items-center justify-between gap-4 py-4 font-semibold text-graphite"
            >
              {a.title}
              <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function TopicArticlePage({ slug }: { slug: string }) {
  const article = ARTICLES.find((a) => a.slug === slug)

  useEffect(() => {
    const previousTitle = document.title
    document.title = article
      ? article.metaTitle
      : "Aktuelle Themen | H&S Energiesysteme"
    return () => {
      document.title = previousTitle
    }
  }, [article])

  if (!article) return <NotFound />

  return (
    <>
      <ArticleHero article={article} />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
        <ArticleNavigation article={article} />
        <article className="min-w-0 max-w-3xl">
          {article.sections.map((section, index) => (
            <Section key={section.id} section={section} index={index} />
          ))}
          <Faq article={article} />
          <ClosingCta article={article} />
          <Sources article={article} />
        </article>
      </div>
      <RelatedArticles article={article} />
    </>
  )
}
