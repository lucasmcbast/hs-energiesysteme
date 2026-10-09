import LandingPage, {
  CheckIcon,
  FAQS,
  ImagePlaceholder,
  INSTALLATIONS,
  LP_NRW,
  Microcopy,
  Ph,
  PrimaryCta,
  REVIEWS,
  useFunnelLink,
  useLp,
  type LpConfig,
} from "./LandingPage"
import fotoVaillant from "./imports/installation-15.webp"

/* ------------------------------------------------------------------ */
/*  Paid-Landingpage: Vaillant Wärmepumpe, Standort Solingen           */
/*  Alles mit <Ph> / ImagePlaceholder ist noch zu liefern.             */
/* ------------------------------------------------------------------ */

/* Vaillant-Fakten nur aus öffentlich belegten Angaben: Hauptsitz Remscheid
   (gegr. 1874), aroTHERM plus mit R290, bis 75 °C Vorlauf, myVAILLANT App. */
const VAILLANT_REASONS = [
  {
    title: "Aus dem Bergischen Land",
    text: "Vaillant wurde 1874 in Remscheid gegründet und hat dort bis heute seinen Hauptsitz — gleich nebenan.",
  },
  {
    title: "Natürliches Kältemittel R290",
    text: "Die aroTHERM plus arbeitet mit Propan (R290) — einem natürlichen Kältemittel mit sehr geringem Treibhauspotenzial.",
  },
  {
    title: "Bis zu 75 °C Vorlauf",
    text: "Damit lassen sich auch ältere Häuser mit klassischen Heizkörpern versorgen — wir prüfen das per Heizlastberechnung.",
  },
  {
    title: "Leiser Betrieb",
    text: "Mit leisem Nachtbetrieb — den Aufstellort planen wir zusätzlich so, dass Sie und Ihre Nachbarn ungestört bleiben.",
  },
  {
    title: "Steuerung per App",
    text: "Mit der myVAILLANT App behalten Sie Temperaturen, Verbrauch und Einstellungen im Blick.",
  },
  {
    title: "Garantie",
    text: <Ph>Garantiebedingungen Vaillant / H&amp;S, z. B. verlängerte Garantie mit Wartungsvertrag</Ph>,
  },
]

const MODELS = [
  {
    name: "aroTHERM plus",
    type: "Luft-Wasser · Monoblock",
    text: "Unser Standard für Ein- und Zweifamilienhäuser: kompletter Kältekreis in der Außeneinheit, angebunden über Heizungswasser.",
    facts: ["R290", "bis 75 °C Vorlauf", <Ph key="kw">Leistungsgrößen in kW</Ph>],
    price: <Ph>ab X € inkl. Montage</Ph>,
  },
  {
    name: <Ph>aroTHERM Split</Ph>,
    type: "Luft-Wasser · Split",
    text: <Ph>Nur aufnehmen, wenn H&amp;S die Split-Variante verbaut — sonst Karte entfernen oder durch flexoTHERM ersetzen.</Ph>,
    facts: [<Ph key="f">Eckdaten</Ph>],
    price: <Ph>ab X € inkl. Montage</Ph>,
  },
]

function VaillantSection() {
  const lp = useLp()
  const funnel = useFunnelLink(lp.funnelParams)
  return (
    <section className="border-y border-graphite/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Warum Vaillant</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Deutsche Markentechnik — installiert vom Meisterbetrieb nebenan.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Wir sind <Ph>offizieller Vaillant-Partner / genaues Siegel</Ph> und
              bauen die Vaillant aroTHERM plus in Solingen und Umgebung ein — mit
              eigenem Montageteam und festem Ansprechpartner.
            </p>
          </div>
          <ImagePlaceholder
            brief="Vaillant aroTHERM plus vor einem Einfamilienhaus im Bergischen Land, H&S-Monteur prüft das Gerät — Querformat, mind. 1600 px"
            className="reveal aspect-[4/3] w-full"
          />
        </div>

        <div className="knowledge-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VAILLANT_REASONS.map((r) => (
            <div key={r.title} className="reveal rounded-2xl border border-graphite/10 bg-offwhite p-6">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-graphite">
                <CheckIcon /> {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Modelle</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-graphite md:text-4xl">
            Welche Vaillant passt zu Ihrem Haus?
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {MODELS.map((m, i) => (
              <article key={i} className="reveal flex flex-col rounded-3xl border border-graphite/10 bg-offwhite p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">{m.type}</p>
                <h4 className="mt-2 font-display text-3xl font-semibold text-graphite">{m.name}</h4>
                <p className="mt-3 flex-1 leading-relaxed text-slate">{m.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {m.facts.map((f, j) => (
                    <li key={j} className="rounded-full border border-graphite/15 px-3 py-1 text-sm font-medium text-graphite">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-graphite/10 pt-5">
                  <p className="font-display text-2xl font-semibold text-graphite">{m.price}</p>
                  <a
                    href={funnel({ cta: `modell-${i}` })}
                    data-cta={`modell-${i}`}
                    className="text-sm font-semibold text-graphite underline decoration-yellow decoration-4 underline-offset-4"
                  >
                    Angebot anfragen
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate">
            Die passende Leistungsgröße ermitteln wir mit einer Heizlastberechnung vor Ort.
          </p>
        </div>

        <div className="mt-10 text-center">
          <PrimaryCta href={funnel({ cta: "vaillant" })} cta="vaillant">
            Vaillant-Angebot anfragen
          </PrimaryCta>
          <Microcopy />
        </div>
      </div>
    </section>
  )
}

const vaillantFaqs = [
  {
    q: "Was kostet eine Vaillant Wärmepumpe mit Einbau?",
    a: (
      <>
        <Ph>Preisrahmen aroTHERM plus inkl. Montage im Einfamilienhaus</Ph>. Mit
        Grundförderung und Klimageschwindigkeitsbonus (46 %) sinkt Ihr
        Eigenanteil um bis zu 12.880 €. Das genaue Angebot erstellen wir nach
        einem kurzen Termin vor Ort.
      </>
    ),
  },
  {
    q: "Ist die aroTHERM plus auch für den Altbau geeignet?",
    a: "Mit bis zu 75 °C Vorlauftemperatur kann die aroTHERM plus auch Häuser mit klassischen Heizkörpern versorgen. Ob das bei Ihnen effizient ist, prüfen wir mit einer Heizlastberechnung vor Ort.",
  },
  {
    q: "Welche Garantie gibt es auf die Vaillant Wärmepumpe?",
    a: <Ph>Garantiebedingungen Hersteller + H&amp;S</Ph>,
  },
  ...FAQS.filter((f) => !/Hersteller|Gebiet/.test(f.q)),
  {
    q: "Wo sind Sie in Solingen?",
    a: (
      <>
        Unser Standort: <Ph>Adresse Solingen</Ph>. Von dort sind wir im Umkreis
        von rund 50 km für Sie da — u. a. Wuppertal, Remscheid, Haan, Hilden,
        Leichlingen, Langenfeld und Leverkusen.
      </>
    ),
  },
]

export const LP_VAILLANT_SOLINGEN: LpConfig = {
  ...LP_NRW,
  documentTitle: "Vaillant Wärmepumpe in Solingen – kostenloses Angebot vom Meisterbetrieb | H&S",
  funnelParams: { hersteller: "vaillant", standort: "solingen" },
  // TODO: Solinger Rufnummer, sobald vorhanden
  phone: LP_NRW.phone,
  heroTitle: { before: "Ihre Vaillant Wärmepumpe vom", marker: "Meisterbetrieb aus Solingen." },
  heroText:
    "Beratung, Förderantrag und Installation der Vaillant aroTHERM plus aus einer Hand — von Ihrem H&S-Team in Solingen.",
  heroBullets: [
    "Vaillant aroTHERM plus mit natürlichem Kältemittel R290",
    "Bis 75 °C Vorlauf — auch für Heizkörper im Altbau",
    "Bis zu 70 % Förderung — wir begleiten den Antrag",
    "Installation in 4–5 Werktagen",
  ],
  heroImage: {
    src: fotoVaillant,
    alt: "Von H&S installierte Vaillant aroTHERM Wärmepumpe an einem Wohnhaus",
  },
  heroBadge: (
    <span className="inline-flex items-center rounded-full border border-dashed border-amber/70 bg-yellow/15 px-3.5 py-1.5 text-[13px] font-semibold text-slate">
      <Ph>Vaillant-Partnersiegel</Ph>
    </span>
  ),
  calculatorTitle: "Was kostet Ihre Vaillant Wärmepumpe?",
  showLogoStrip: false,
  brand: <VaillantSection />,
  installations: [
    ...INSTALLATIONS.filter((i) => i.brand === "Vaillant"),
    { where: "Außen", placeholder: "Vaillant aroTHERM plus, Außeneinheit — echte Installation in Solingen/Umgebung (hochkant 3:4)" },
    { where: "Innen", placeholder: "Vaillant Inneneinheit / uniTOWER im Technikraum (hochkant 3:4)" },
    { where: "Außen", placeholder: "Vaillant aroTHERM plus im Garten eines Reihenhauses (hochkant 3:4)" },
  ],
  // TODO: Bewertungen aus Solingen / mit Vaillant-Anlage, sobald vorhanden
  reviews: REVIEWS,
  region: {
    text: (
      <>
        Von unserem Standort in Solingen (<Ph>Adresse</Ph>) sind wir im Umkreis
        von rund 50 km für Sie da — schnell vor Ort, mit festem Ansprechpartner.
      </>
    ),
    cities: ["Solingen", "Wuppertal", "Remscheid", "Haan", "Hilden", "Leichlingen", "Langenfeld", "Leverkusen", "Mettmann", "Düsseldorf"],
  },
  faqs: vaillantFaqs,
  finalTitle: "Jetzt kostenloses Angebot für Ihre Vaillant Wärmepumpe sichern.",
}

export default function LandingPageVaillantSolingen() {
  return <LandingPage config={LP_VAILLANT_SOLINGEN} />
}
