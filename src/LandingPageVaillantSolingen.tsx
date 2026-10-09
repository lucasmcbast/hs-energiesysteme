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
import logoVaillantPartner from "./imports/vaillant-kompetenzpartner.png"
import fotoLead from "./imports/andreas-sponsheimer.webp"
import vWarum from "./imports/vaillant-arotherm-plus-monteur-schieferhaus.webp"
import vSplitWand from "./imports/vaillant-split-wandkonsole-klinker.webp"
import vSplitWandQuer from "./imports/vaillant-split-wandkonsole-klinker-quer.webp"
import vTechnikraum from "./imports/vaillant-technikraum-speicher.webp"
import vInbetriebnahme from "./imports/vaillant-split-inbetriebnahme-tablet.webp"
import vKiesbett from "./imports/vaillant-split-kiesbett-einfamilienhaus.webp"
import vPlusQuer from "./imports/vaillant-arotherm-plus-putzfassade-quer.webp"
import vPlusHero from "./imports/vaillant-arotherm-plus-einfamilienhaus-garage.webp"
import vPlusSchiefer from "./imports/vaillant-arotherm-plus-schieferhaus-herbst.webp"
import vPlusKlinker from "./imports/vaillant-arotherm-plus-klinkerhaus.webp"
import vInnengeraet from "./imports/vaillant-innengeraet-technikraum-fenster.webp"
import vReihenhaus from "./imports/vaillant-split-reihenhaus-garten.webp"

const LEAD = {
  name: "Andreas Sponsheimer",
  role: "Standortleiter Solingen",
  photo: fotoLead,
  // TODO: Zitat von Andreas Sponsheimer einholen
  quote: <Ph>Kurzes Zitat des Standortleiters, z. B. warum H&amp;S auf Vaillant setzt</Ph>,
}

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
    name: "aroTHERM Split",
    type: "Luft-Wasser · Split",
    text: "Außen- und Inneneinheit sind über Kältemittelleitungen verbunden — die flexible Lösung bei engen oder langen Leitungswegen.",
    facts: ["schlanke Leitungen", <Ph key="f">Leistungsgrößen in kW</Ph>],
    price: <Ph>ab X € inkl. Montage</Ph>,
  },
]

function VaillantQuote() {
  return (
    <section className="bg-vaillant text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[auto_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-black/10">
          <img src={logoVaillantPartner} alt="Vaillant Kompetenzpartner. Ausgezeichnet." className="w-64 max-w-full" />
        </div>
        <figure>
          <span className="block h-10 font-display text-7xl leading-none text-yellow" aria-hidden="true">„</span>
          {/* TODO: nur ein freigegebenes Zitat von Vaillant verwenden (z. B. Gebietsverkaufsleitung) */}
          <blockquote className="mt-2 font-display text-3xl font-semibold leading-snug md:text-4xl">
            <Ph>Freigegebenes Zitat von Vaillant über die Zusammenarbeit mit H&amp;S</Ph>
          </blockquote>
          <figcaption className="mt-6 text-white/75">
            <Ph>Name</Ph>, <Ph>Funktion</Ph> · Vaillant Deutschland
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function VaillantSection() {
  const lp = useLp()
  const funnel = useFunnelLink(lp.funnelParams)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-vaillant">Warum Vaillant</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-graphite md:text-5xl">
              Deutsche Markentechnik — installiert vom Meisterbetrieb nebenan.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Als ausgezeichneter <strong className="text-vaillant">Vaillant Kompetenzpartner</strong> bauen
              wir die Vaillant aroTHERM plus und aroTHERM Split in Solingen und
              Umgebung ein — mit eigenem Montageteam und festem Ansprechpartner.
            </p>
          </div>
          <img
            src={vWarum}
            alt="Monteur prüft die Anschlüsse einer Vaillant aroTHERM plus an einem Schieferhaus im Bergischen Land"
            loading="lazy"
            className="reveal aspect-[4/3] w-full rounded-3xl object-cover shadow-xl shadow-graphite/10"
          />
        </div>

        <div className="knowledge-stagger mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VAILLANT_REASONS.map((r) => (
            <div key={r.title} className="reveal rounded-2xl border border-vaillant/20 bg-vaillant/[0.04] p-6">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-graphite">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vaillant text-[11px] font-bold text-white">✓</span>
                {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-vaillant">Modelle</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-graphite md:text-4xl">
            Welche Vaillant passt zu Ihrem Haus?
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {MODELS.map((m, i) => (
              <article key={i} className="reveal flex flex-col overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite">
                <img
                  src={i === 0 ? vPlusQuer : vSplitWandQuer}
                  alt={i === 0 ? "Vaillant aroTHERM Außeneinheit auf Betonfundament vor einer hellen Putzfassade" : "Vaillant aroTHERM Split plus an einer Wandkonsole an einem Klinkerhaus"}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vaillant">{m.type}</p>
                  <h4 className="mt-2 font-display text-3xl font-semibold text-graphite">{m.name}</h4>
                  <p className="mt-3 flex-1 leading-relaxed text-slate">{m.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.facts.map((f, j) => (
                      <li key={j} className="rounded-full border border-vaillant/25 px-3 py-1 text-sm font-medium text-graphite">
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

/* Standortleiter prominent: persönliches Gesicht für Solingen */
function LocationLead() {
  const lp = useLp()
  const funnel = useFunnelLink(lp.funnelParams)
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="reveal grid overflow-hidden rounded-3xl border border-graphite/10 bg-offwhite md:grid-cols-[0.8fr_1.2fr]">
        <img
          src={LEAD.photo}
          alt={`${LEAD.name}, ${LEAD.role} bei H&S Energiesysteme`}
          loading="lazy"
          className="aspect-square h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-vaillant">Ihr Ansprechpartner in Solingen</p>
          <p className="mt-4 font-display text-3xl font-semibold leading-snug text-graphite md:text-4xl">
            „{LEAD.quote}“
          </p>
          <p className="mt-6 font-semibold text-graphite">
            {LEAD.name}
            <span className="block text-sm font-medium text-slate">{LEAD.role} · H&amp;S Energiesysteme</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={funnel({ cta: "standortleiter" })}
              data-cta="standortleiter"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
            >
              Beratung in Solingen anfragen
            </a>
            <a
              href={lp.phone.href}
              data-cta="standortleiter-phone"
              className="inline-flex items-center rounded-full border border-graphite/20 px-6 py-3.5 font-semibold text-graphite transition-colors hover:bg-graphite hover:text-offwhite"
            >
              {lp.phone.display}
            </a>
          </div>
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
    src: vPlusHero,
    alt: "Vaillant aroTHERM plus Wärmepumpe vor einem Einfamilienhaus",
  },
  heroBadge: (
    <span className="inline-flex items-center rounded-xl border border-vaillant/30 bg-white px-3 py-1.5">
      <img src={logoVaillantPartner} alt="Vaillant Kompetenzpartner. Ausgezeichnet." className="h-10 w-auto md:h-11" />
    </span>
  ),
  heroCard: (
    <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-graphite/10 bg-offwhite p-4 shadow-xl shadow-graphite/10 sm:left-auto sm:right-[-1rem] sm:w-80">
      <img src={LEAD.photo} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-vaillant/30" />
      <span className="text-sm leading-snug">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-vaillant">Ihr Ansprechpartner</span>
        <span className="block font-semibold text-graphite">{LEAD.name}</span>
        <span className="block text-slate">{LEAD.role}</span>
      </span>
    </div>
  ),
  calculatorTitle: "Was kostet Ihre Vaillant Wärmepumpe?",
  showLogoStrip: false,
  brand: (
    <>
      <VaillantQuote />
      <VaillantSection />
      <LocationLead />
    </>
  ),
  installations: [
    ...INSTALLATIONS.filter((i) => i.brand === "Vaillant"),
    { src: vPlusKlinker, where: "Außen", brand: "Vaillant" },
    { src: vKiesbett, where: "Außen", brand: "Vaillant" },
    { src: vReihenhaus, where: "Außen", brand: "Vaillant" },
    { src: vTechnikraum, where: "Innen", brand: "Vaillant" },
    { src: vPlusSchiefer, where: "Außen", brand: "Vaillant" },
    { src: vInnengeraet, where: "Innen", brand: "Vaillant" },
    { src: vSplitWand, where: "Außen", brand: "Vaillant" },
    { src: vInbetriebnahme, where: "Außen", brand: "Vaillant" },
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
