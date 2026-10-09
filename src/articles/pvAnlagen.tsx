import { Link } from "react-router"
import type { TopicArticle } from "../TopicArticlePage"
import waermepumpePhotovoltaik from "../imports/waermepumpe-photovoltaik.webp"

const linkClass =
  "font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"

const pvAnlagen: TopicArticle = {
  slug: "pv-anlagen-und-ihre-vorteile",
  title: "PV-Anlage 2026: Vorteile, Kosten und neue Regeln",
  metaTitle: "PV-Anlage 2026: Vorteile, Einspeisevergütung & Kosten | H&S",
  teaser:
    "Eigenverbrauch statt Einspeisung: Was eine Photovoltaikanlage 2026 bringt, was sie kostet, wie hoch die Einspeisevergütung ist und was das Solarspitzengesetz verändert hat.",
  label: "Photovoltaik",
  readTime: "8 Min.",
  updated: "09.10.2026",
  image: waermepumpePhotovoltaik,
  imageAlt:
    "Einfamilienhaus mit Photovoltaikanlage auf dem Dach und Luft-Wasser-Wärmepumpe im Garten",
  heroIntro:
    "Photovoltaik bleibt eine der wirksamsten Möglichkeiten, Stromkosten zu senken – besonders in Kombination mit einer Wärmepumpe. Die Spielregeln haben sich aber geändert: Heute zählt vor allem der Eigenverbrauch.",
  heroBox: {
    eyebrow: "Stand Oktober 2026",
    value: "7,70 ct/kWh",
    valueNote:
      "Einspeisevergütung bei Teileinspeisung für neue Anlagen bis 10 kWp (Inbetriebnahme ab 01.08.2026)",
    rows: [
      { label: "Volleinspeisung bis 10 kWp", value: "12,22 ct/kWh" },
      { label: "Ø Haushaltsstrompreis, 1. Hj. 2026", value: "knapp 38 ct/kWh" },
      { label: "Mehrwertsteuer auf PV-Anlage", value: "0 %", highlight: true },
    ],
  },
  navCta: "PV-Beratung anfragen",
  sections: [
    {
      id: "grundlagen",
      nav: "Die Grundlagen",
      eyebrow: "Technik",
      heading: "Photovoltaik-Anlagen: die Grundlagen",
      blocks: [
        {
          type: "lead",
          content:
            "Eine Photovoltaikanlage besteht aus Solarmodulen, die Sonnenlicht in elektrischen Gleichstrom umwandeln. Ein Wechselrichter macht daraus haushaltsüblichen Wechselstrom, den Sie direkt im Haus nutzen, in einem Batteriespeicher zwischenspeichern oder ins öffentliche Netz einspeisen können.",
        },
        {
          type: "p",
          content:
            "PV-Anlagen lassen sich auf Dächern, an Fassaden oder auf Freiflächen installieren. Die passende Größe hängt von der Dachfläche, der Ausrichtung und Ihrem Stromverbrauch ab – mit Wärmepumpe oder Elektroauto lohnt sich meist eine größere Anlage.",
        },
      ],
    },
    {
      id: "vorteile",
      nav: "Die Vorteile",
      eyebrow: "Warum Photovoltaik?",
      heading: "Die Vorteile einer PV-Anlage",
      blocks: [
        {
          type: "rows",
          items: [
            {
              value: "€",
              title: "Stromkosten senken",
              text: "Jede selbst verbrauchte Kilowattstunde müssen Sie nicht zum Haushaltsstrompreis einkaufen. Private Haushalte zahlten im ersten Halbjahr 2026 laut Statistischem Bundesamt im Schnitt knapp 38 Cent je Kilowattstunde – ein Vielfaches der Einspeisevergütung.",
            },
            {
              value: "CO₂",
              title: "Klimafreundlicher Strom",
              text: "Solarstrom entsteht ohne Brennstoffe und ohne direkte CO₂-Emissionen. In Verbindung mit einer Wärmepumpe heizen Sie zum Teil mit Strom vom eigenen Dach.",
            },
            {
              value: "Eigen",
              title: "Unabhängiger von Strompreisen",
              text: "Je größer Ihr Eigenverbrauchsanteil, desto weniger betreffen Sie Preisschwankungen am Strommarkt. Wichtig: Ohne spezielle Notstrom- oder Ersatzstromfunktion schaltet sich eine PV-Anlage bei einem Netzausfall aus Sicherheitsgründen ab.",
            },
            {
              value: "Haus",
              title: "Attraktivere Immobilie",
              text: "Eine moderne PV-Anlage kann eine Immobilie für Käufer und Mieter attraktiver machen – vor allem in Kombination mit einer effizienten Heizung.",
            },
            {
              value: "20+",
              title: "Langlebig und wartungsarm",
              text: "PV-Module arbeiten viele Jahre zuverlässig und brauchen nur wenig Wartung. Die EEG-Vergütung wird für 20 Jahre plus das Jahr der Inbetriebnahme gezahlt.",
            },
          ],
        },
      ],
    },
    {
      id: "waermepumpe",
      nav: "PV und Wärmepumpe",
      eyebrow: "Kombination",
      heading: "PV-Anlage und Wärmepumpe: ein starkes Team",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Eine Wärmepumpe erhöht Ihren Stromverbrauch – und damit den
              Anteil des Solarstroms, den Sie selbst nutzen können. Besonders
              bei der Warmwasserbereitung im Sommer und in den Übergangsmonaten
              deckt die PV-Anlage einen spürbaren Teil des Bedarfs. Wie viel
              Strom eine Wärmepumpe braucht, erklären wir im Ratgeber{" "}
              <Link to="/kosten/waermepumpe-stromverbrauch" className={linkClass}>
                Wärmepumpe Stromverbrauch
              </Link>
              .
            </>
          ),
        },
        {
          type: "image",
          src: waermepumpePhotovoltaik,
          alt: "Einfamilienhaus mit Photovoltaikanlage auf dem Dach und Luft-Wasser-Wärmepumpe im Garten",
          caption:
            "Photovoltaik auf dem Dach, Luft-Wasser-Wärmepumpe im Garten: Beide Systeme lassen sich über ein Energiemanagement aufeinander abstimmen.",
        },
        {
          type: "p",
          content: (
            <>
              Realistisch bleiben: Im Winter, wenn die Wärmepumpe am meisten
              Strom braucht, liefert die PV-Anlage am wenigsten. Den
              Heizstrom im Januar ersetzt sie nicht vollständig – über das Jahr
              gerechnet senkt sie die Energiekosten aber deutlich. Mehr zur
              Wärmepumpe selbst lesen Sie im Ratgeber{" "}
              <Link to="/typen/luft-wasser-warmepumpe" className={linkClass}>
                Luft-Wasser-Wärmepumpe
              </Link>
              .
            </>
          ),
        },
      ],
    },
    {
      id: "verguetung",
      nav: "Einspeisevergütung 2026",
      eyebrow: "EEG",
      heading: "Einspeisevergütung 2026",
      blocks: [
        {
          type: "lead",
          content:
            "Für Strom, den Sie ins Netz einspeisen, erhalten Sie eine feste Vergütung nach dem Erneuerbare-Energien-Gesetz (EEG). Die Sätze sinken seit 2024 halbjährlich um 1 Prozent; maßgeblich ist der Monat der Inbetriebnahme.",
        },
        {
          type: "table",
          head: ["Anlage bis 10 kWp", "Vergütung ab 01.08.2026"],
          rows: [
            ["Teileinspeisung (mit Eigenverbrauch)", "7,70 ct/kWh"],
            ["Volleinspeisung", "12,22 ct/kWh"],
          ],
          highlightLast: true,
          note: "Gilt für Inbetriebnahmen ab 1. August 2026; die nächste planmäßige Absenkung erfolgt zum 1. Februar 2027. Für Anlagenteile über 10 kWp gelten niedrigere Sätze.",
        },
        {
          type: "callout",
          tone: "line",
          title: "Eigenverbrauch schlägt Einspeisung",
          content:
            "Bei 7,70 Cent Vergütung und einem Haushaltsstrompreis von deutlich über 30 Cent ist jede selbst genutzte Kilowattstunde mehrfach so viel wert wie eine eingespeiste. Deshalb planen wir PV-Anlagen heute vor allem auf hohen Eigenverbrauch – mit Wärmepumpe, Speicher oder Wallbox.",
        },
        {
          type: "p",
          content:
            "Stand Oktober 2026 wird politisch über eine Reform des EEG für Neuanlagen ab 2027 diskutiert. Beschlossen ist dazu noch nichts; für bereits laufende Anlagen gilt die bei Inbetriebnahme festgelegte Vergütung weiter. Jede neue Anlage muss innerhalb eines Monats nach Inbetriebnahme im Marktstammdatenregister der Bundesnetzagentur angemeldet werden.",
        },
      ],
    },
    {
      id: "solarspitzen",
      nav: "Solarspitzengesetz",
      eyebrow: "Neue Regeln seit 2025",
      heading: "Was das Solarspitzengesetz verändert hat",
      blocks: [
        {
          type: "lead",
          content:
            "Seit dem 25. Februar 2025 gelten für neue PV-Anlagen zusätzliche Regeln, die das Stromnetz an sonnigen Tagen entlasten sollen.",
        },
        {
          type: "rows",
          items: [
            {
              value: "0 ct",
              title: "Keine Vergütung bei negativen Strompreisen",
              text: "In Viertelstunden mit negativen Börsenstrompreisen erhalten neue Anlagen keine Einspeisevergütung. Der Vergütungszeitraum verlängert sich dafür entsprechend.",
            },
            {
              value: "60 %",
              title: "Einspeisebegrenzung ohne Smart Meter",
              text: "Solange kein intelligentes Messsystem mit Steuerbox eingebaut ist, darf eine neue Anlage höchstens 60 Prozent ihrer Modulleistung ins Netz einspeisen. Selbst verbrauchter Strom zählt nicht dazu.",
            },
            {
              value: "7 kWp",
              title: "Smart-Meter-Pflicht ab 7 kWp",
              text: "Neue Anlagen ab 7 kWp müssen mit intelligentem Messsystem und Steuerungseinrichtung ausgestattet werden. Darunter ist das freiwillig – ohne bleibt die 60-Prozent-Grenze.",
            },
          ],
        },
        {
          type: "p",
          content: (
            <>
              Ein Batteriespeicher hilft, mit diesen Regeln umzugehen: Er
              nimmt mittags Solarstrom auf, statt ihn ohne Vergütung oder
              gedrosselt einzuspeisen, und gibt ihn abends ab. Die
              Verbraucherzentrale weist darauf hin, dass die spätere
              Einspeisung aus dem Speicher normal vergütet wird, sofern er
              ausschließlich mit Solarstrom geladen wird.
            </>
          ),
        },
        {
          type: "inlineCta",
          eyebrow: "PV richtig dimensioniert",
          title:
            "Wir planen PV, Speicher und Wärmepumpe so, dass möglichst viel Solarstrom im Haus bleibt.",
          button: "PV-Beratung anfragen",
        },
      ],
    },
    {
      id: "kosten",
      nav: "Kosten 2026",
      eyebrow: "Investition",
      heading: "Was kostet eine PV-Anlage 2026?",
      blocks: [
        {
          type: "lead",
          content:
            "Die Preise hängen stark von der Anlagengröße ab: Je größer die Anlage, desto günstiger wird jedes Kilowatt Peak (kWp).",
        },
        {
          type: "facts",
          items: [
            { value: "≈ 2.090 €/kWp", label: "Ø bei den kleinsten Anlagen" },
            { value: "≈ 1.010 €/kWp", label: "Ø bei den größten Anlagen" },
            { value: "0 %", label: "Mehrwertsteuer auf Kauf und Installation" },
          ],
          note: "Durchschnittspreise aus einer Auswertung von 71 Angeboten (Januar 2025 bis August 2026) der Verbraucherzentrale NRW, reiner PV-Anlagenteil ohne Speicher und Zusatzarbeiten.",
        },
        {
          type: "p",
          content:
            "Für Batteriespeicher nennt dieselbe Auswertung Durchschnittspreise von rund 510 Euro je kWh Speicherkapazität bei 4 bis 6 kWh und rund 360 Euro je kWh bei 12 bis 16 kWh. Für Kauf und Installation von PV-Anlagen auf oder in der Nähe von Wohngebäuden fällt keine Mehrwertsteuer an.",
        },
        {
          type: "callout",
          title: "Vollständige Angebote vergleichen",
          content:
            "Achten Sie darauf, was im Preis enthalten ist: Gerüst, Zählerschrank, Smart-Meter-Vorbereitung, Anmeldung und Energiemanagement können je nach Anbieter extra berechnet werden.",
        },
      ],
    },
    {
      id: "fachbetrieb",
      nav: "Planung vom Fachbetrieb",
      eyebrow: "Planung & Installation",
      heading: "Professionelle Planung und Installation",
      blocks: [
        {
          type: "lead",
          content:
            "Eine PV-Anlage muss sicher installiert und sinnvoll ausgelegt sein. Als Meisterbetrieb aus Willich mit Standorten in Köln und Solingen planen wir Photovoltaik und Wärmepumpe aus einer Hand – abgestimmt auf Ihren Verbrauch.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Dach und Verbrauch analysieren",
              text: "Ausrichtung, Verschattung, Dachfläche und Ihr heutiger und künftiger Stromverbrauch – etwa durch Wärmepumpe oder E-Auto.",
            },
            {
              title: "Anlage und Speicher auslegen",
              text: "Modulfläche, Wechselrichter und gegebenenfalls Speicher werden auf hohen Eigenverbrauch und die aktuellen Netzregeln ausgelegt.",
            },
            {
              title: "Installation und Anmeldung",
              text: "Montage, Anschluss, Netzbetreiber-Anmeldung und Unterstützung bei der Registrierung im Marktstammdatenregister.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Lohnt sich eine PV-Anlage bei 7,70 Cent Einspeisevergütung noch?",
      a: "Ja, wenn ein großer Teil des Stroms selbst verbraucht wird. Jede selbst genutzte Kilowattstunde ersetzt Netzstrom, der im ersten Halbjahr 2026 im Schnitt knapp 38 Cent kostete. Die Einspeisung ist heute eher eine Ergänzung als das Hauptziel.",
    },
    {
      q: "Was passiert bei negativen Strompreisen?",
      a: "Neue Anlagen seit 25. Februar 2025 erhalten in Viertelstunden mit negativen Börsenstrompreisen keine Einspeisevergütung. Der Vergütungszeitraum verlängert sich entsprechend. Eigenverbrauch und Speicher sind davon nicht betroffen.",
    },
    {
      q: "Brauche ich einen Smart Meter?",
      a: "Für neue Anlagen ab 7 kWp ist ein intelligentes Messsystem mit Steuerbox Pflicht. Kleinere Anlagen dürfen ohne Smart Meter betrieben werden, speisen dann aber höchstens 60 Prozent ihrer Leistung ins Netz ein.",
    },
    {
      q: "Brauche ich einen Batteriespeicher?",
      a: "Nicht zwingend. Ein Speicher erhöht aber den Eigenverbrauch und hilft, Einspeisung zu Zeiten negativer Preise oder über der 60-Prozent-Grenze zu vermeiden. Ob er sich rechnet, hängt von Verbrauch und Speicherpreis ab.",
    },
  ],
  closing: {
    title: "Solarstrom vom eigenen Dach – passend zu Ihrer Wärmepumpe.",
    text: "Wir prüfen Ihr Dach, berechnen den möglichen Eigenverbrauch und planen PV, Speicher und Wärmepumpe als Gesamtsystem.",
    button: "PV-Beratung anfragen",
  },
  related: [
    {
      label: "Betriebskosten",
      title: "Wie viel Strom verbraucht eine Wärmepumpe?",
      href: "/kosten/waermepumpe-stromverbrauch",
    },
    {
      label: "Markt & Trend",
      title: "Der Wärmepumpen-Trend 2026: Zahlen, Gründe, Ausblick",
      href: "/aktuelle-themen/der-warmepumpen-trend-aktuell",
    },
    {
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
  ],
  sources: [
    {
      label: "Verbraucherzentrale: Was kostet eine Photovoltaikanlage?",
      href: "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/was-kostet-eine-photovoltaikanlage-49155",
    },
    {
      label: "Verbraucherzentrale: EEG 2023/24 – Was heute für Photovoltaik-Anlagen gilt",
      href: "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/eeg-202324-was-heute-fuer-photovoltaikanlagen-gilt-75401",
    },
    {
      label: "Verbraucherzentrale: Lohnen sich Batteriespeicher für Photovoltaik-Anlagen?",
      href: "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/lohnen-sich-batteriespeicher-fuer-photovoltaikanlagen-24589",
    },
    {
      label: "Bundesregierung: Änderungen im Energiewirtschaftsrecht (Solarspitzengesetz)",
      href: "https://www.bundesregierung.de/breg-de/aktuelles/energiewirtschaftsrecht-2320072",
    },
    {
      label: "Destatis: Strom- und Gaspreise für Haushalte im 1. Halbjahr 2026 gesunken",
      href: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_345_61243.html",
    },
  ],
}

export default pvAnlagen
