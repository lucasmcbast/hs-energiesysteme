import { Link } from "react-router"
import type { TopicArticle } from "../TopicArticlePage"
import aufstellortPlanung from "../imports/luft-wasser-aufstellort-planung.webp"

const linkClass =
  "font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"

const waermepumpenTrend: TopicArticle = {
  slug: "der-warmepumpen-trend-aktuell",
  title: "Der Wärmepumpen-Trend 2026: Zahlen, Gründe, Ausblick",
  metaTitle: "Wärmepumpen-Trend 2026: Absatzzahlen und Gründe | H&S",
  teaser:
    "2025 erstmals das meistverkaufte Heizsystem, 2026 weiter im Plus: was hinter dem Wärmepumpen-Trend steckt und was er für Ihre Heizungsentscheidung bedeutet.",
  label: "Markt & Trend",
  readTime: "7 Min.",
  updated: "09.10.2026",
  image: aufstellortPlanung,
  imageAlt:
    "H&S-Monteur misst den Aufstellort für eine Luft-Wasser-Wärmepumpe an einem Einfamilienhaus aus",
  heroIntro:
    "Die Wärmepumpe ist in Deutschland vom Nischenprodukt zum meistverkauften Heizsystem geworden. Wir ordnen die aktuellen Zahlen ein und erklären, warum immer mehr Eigentümer umsteigen.",
  heroBox: {
    eyebrow: "Der Trend in Zahlen",
    value: "299.000",
    valueNote:
      "Heizungswärmepumpen 2025 in Deutschland abgesetzt – ein Plus von 55 %",
    rows: [
      { label: "Anteil am Heizungsmarkt 2025", value: "knapp 50 %" },
      { label: "1. Halbjahr 2026", value: "194.500 (+40 %)" },
      { label: "Förderung 2026", value: "30–80 %", highlight: true },
    ],
  },
  navCta: "Beratung anfragen",
  sections: [
    {
      id: "zahlen",
      nav: "Der Trend in Zahlen",
      eyebrow: "Marktentwicklung",
      heading: "Wärmepumpen sind das meistverkaufte Heizsystem",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Laut der gemeinsamen Absatzstatistik des Bundesverbands der
              Deutschen Heizungsindustrie (BDH) und des Bundesverbands
              Wärmepumpe (BWP) wurden 2025 rund{" "}
              <strong className="font-semibold text-graphite">
                299.000 Heizungswärmepumpen
              </strong>{" "}
              verkauft – 55 Prozent mehr als im Vorjahr. Damit war die
              Wärmepumpe 2025 erstmals das am häufigsten verkaufte Heizsystem
              in Deutschland.
            </>
          ),
        },
        {
          type: "facts",
          items: [
            { value: "299.000", label: "Heizungswärmepumpen 2025 (+55 %)" },
            { value: "283.000", label: "davon Luft-Wasser-Geräte" },
            { value: "627.000", label: "Wärmeerzeuger insgesamt 2025" },
          ],
          note: "Quelle: BDH/BWP-Absatzstatistik 2025, veröffentlicht am 31.01.2026.",
        },
        {
          type: "p",
          content:
            "Der Gesamtmarkt für Heizungen ist 2025 dagegen um rund 12 Prozent geschrumpft. Gas-Brennwertgeräte verloren laut BDH deutlich an Absatz, Ölheizungen brachen noch stärker ein. Die Wärmepumpe kam damit auf knapp die Hälfte aller verkauften Wärmeerzeuger.",
        },
        {
          type: "h3",
          content: "2026: Das Wachstum hält an",
        },
        {
          type: "p",
          content: (
            <>
              Im ersten Halbjahr 2026 setzte die Branche nach BDH-Angaben rund
              352.000 Wärmeerzeuger ab, 19 Prozent mehr als im
              Vorjahreszeitraum. Mit{" "}
              <strong className="font-semibold text-graphite">
                194.500 Geräten (+40 %)
              </strong>{" "}
              stellten Wärmepumpen mehr als die Hälfte davon. Gasheizungen
              lagen mit 134.000 Geräten etwa auf Vorjahresniveau (+1 %),
              Ölheizungen gingen weiter zurück.
            </>
          ),
        },
        {
          type: "callout",
          tone: "line",
          title: "Vor allem im Bestand gefragt",
          content:
            "Nach Auswertung des BWP wurden rund acht von zehn der 2025 verkauften Wärmepumpen in bestehende Gebäude eingebaut. Die Wärmepumpe ist damit längst keine reine Neubau-Technik mehr, sondern die häufigste Wahl beim Heizungstausch.",
        },
      ],
    },
    {
      id: "grundlagen",
      nav: "Die Grundlagen",
      eyebrow: "Technik",
      heading: "Wärmepumpen: die Grundlagen",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Eine Wärmepumpe nutzt die Wärme aus der Umgebung – aus Luft,
              Erdreich oder Grundwasser – und hebt sie mit Hilfe von Strom auf
              ein Temperaturniveau, das zum Heizen und für Warmwasser reicht.
              Das Prinzip ähnelt einem Kühlschrank, nur in umgekehrter
              Richtung. Wie das im Detail funktioniert, erklären wir im
              Ratgeber{" "}
              <Link to="/wissen/wie-funktioniert-eine-warmepumpe" className={linkClass}>
                Wie funktioniert eine Wärmepumpe?
              </Link>
              .
            </>
          ),
        },
        {
          type: "p",
          content: (
            <>
              Eine gut geplante Anlage erzeugt typischerweise drei bis vier
              Kilowattstunden Wärme aus einer Kilowattstunde Strom
              (Jahresarbeitszahl 3 bis 4). Im Einfamilienhaus ist die{" "}
              <Link to="/typen/luft-wasser-warmepumpe" className={linkClass}>
                Luft-Wasser-Wärmepumpe
              </Link>{" "}
              die mit Abstand häufigste Bauart – 2025 entfielen rund 283.000
              der 299.000 verkauften Heizungswärmepumpen auf diesen Typ.
            </>
          ),
        },
        {
          type: "image",
          src: aufstellortPlanung,
          alt: "H&S-Monteur misst den Aufstellort für eine Luft-Wasser-Wärmepumpe an einem Einfamilienhaus aus",
          caption:
            "Aufstellort, Abstände und Schall werden vor Ort geplant – die Grundlage für einen effizienten und leisen Betrieb.",
        },
      ],
    },
    {
      id: "gruende",
      nav: "Gründe für den Trend",
      eyebrow: "Warum umsteigen?",
      heading: "Was den Wärmepumpen-Trend antreibt",
      blocks: [
        {
          type: "lead",
          content:
            "Hinter dem Wachstum stehen keine Modeerscheinungen, sondern handfeste Gründe – technisch, wirtschaftlich und ökologisch.",
        },
        {
          type: "rows",
          items: [
            {
              value: "3–4×",
              title: "Hohe Effizienz",
              text: "Aus einer Kilowattstunde Strom werden drei bis vier Kilowattstunden Wärme. Der größte Teil der Heizenergie stammt kostenlos aus der Umgebung.",
            },
            {
              value: "CO₂",
              title: "Kein CO₂-Preis auf die Heizenergie",
              text: (
                <>
                  Auf Erdgas und Heizöl wird 2026 ein CO₂-Preis von 55 bis 65
                  Euro je Tonne erhoben. Ab 2028 soll der europäische
                  Emissionshandel (ETS 2) für Gebäude starten, dessen Preis
                  sich am Markt bildet. Mehr dazu im Artikel{" "}
                  <Link
                    to="/aktuelle-themen/gasheizung-in-2024---macht-das-sinn"
                    className={linkClass}
                  >
                    Gasheizung 2026
                  </Link>
                  .
                </>
              ),
            },
            {
              value: "bis 80 %",
              title: "Staatliche Förderung",
              text: (
                <>
                  Die KfW-Heizungsförderung (Programm 458) bezuschusst den
                  Einbau mit 30 bis maximal 80 Prozent. Alle Details im
                  Ratgeber{" "}
                  <Link to="/kosten/foerderung-waermepumpe" className={linkClass}>
                    Förderung Wärmepumpe
                  </Link>
                  .
                </>
              ),
            },
            {
              value: "PV",
              title: "Eigener Solarstrom",
              text: (
                <>
                  Mit einer Photovoltaikanlage lässt sich ein Teil des
                  Wärmepumpenstroms selbst erzeugen – besonders für Warmwasser
                  im Sommer und in den Übergangsmonaten. Mehr im Artikel{" "}
                  <Link
                    to="/aktuelle-themen/pv-anlagen-und-ihre-vorteile"
                    className={linkClass}
                  >
                    PV-Anlage 2026
                  </Link>
                  .
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: "rahmen",
      nav: "Politischer Rahmen 2026",
      eyebrow: "Gesetzeslage",
      heading: "Was sich 2026 politisch geändert hat",
      blocks: [
        {
          type: "lead",
          content:
            "2026 hat sich der gesetzliche Rahmen deutlich verändert. Der Bundestag hat am 10. Juli 2026 das Gebäudemodernisierungsgesetz (GModG) beschlossen; die Kernregeln gelten laut Bundesregierung seit dem 29. Juli 2026.",
        },
        {
          type: "list",
          items: [
            "Die bisherige Pflicht, dass neue Heizungen zu mindestens 65 Prozent mit erneuerbaren Energien betrieben werden müssen, ist entfallen.",
            "Neue Gas- und Ölheizungen dürfen wieder eingebaut werden – müssen aber ab 2029 schrittweise steigende Anteile klimafreundlicher Brennstoffe nutzen („Bio-Treppe“: 10 % ab 2029 bis 60 % ab 2040).",
            "Bestehende Heizungen dürfen weiter betrieben werden.",
            "Die KfW-Heizungsförderung für Wärmepumpen gilt weiter; die seit 21.07.2026 ausgewiesenen Konditionen sehen eine Grundförderung von 30 Prozent und maximal 80 Prozent Zuschuss vor.",
          ],
        },
        {
          type: "p",
          content:
            "Die Heizungswahl liegt damit stärker bei Ihnen als Eigentümer. Entscheidend werden Anschaffungs- und Betriebskosten über die Lebensdauer, die Förderung und die Eignung Ihres Gebäudes – genau diese Punkte prüfen wir in der Beratung.",
        },
      ],
    },
    {
      id: "einsatz",
      nav: "Neubau und Bestand",
      eyebrow: "Einsatzbereiche",
      heading: "Vielseitig im Neubau und im Bestand",
      blocks: [
        {
          type: "lead",
          content:
            "Wärmepumpen gibt es in verschiedenen Bauarten, damit für nahezu jedes Gebäude eine passende Lösung gefunden werden kann.",
        },
        {
          type: "rows",
          items: [
            {
              value: "Luft",
              title: "Luft-Wasser-Wärmepumpe",
              text: "Nutzt die Außenluft, braucht keine Bohrung und ist die häufigste Lösung beim Heizungstausch im Einfamilienhaus.",
            },
            {
              value: "Erde",
              title: "Sole-Wasser-Wärmepumpe",
              text: "Nutzt die Wärme des Erdreichs über Sonden oder Kollektoren. Sehr effizient, aber mit höherem Erschließungsaufwand.",
            },
            {
              value: "Wasser",
              title: "Wasser-Wasser-Wärmepumpe",
              text: "Nutzt Grundwasser als Wärmequelle. Voraussetzung sind geeignete Brunnen und eine wasserrechtliche Genehmigung.",
            },
          ],
        },
        {
          type: "p",
          content: (
            <>
              Auch im Altbau ist eine Wärmepumpe häufig sinnvoll, wenn
              Heizlast, Vorlauftemperatur und Heizflächen zusammenpassen.
              Manchmal reichen einzelne größere Heizkörper statt einer
              Komplettsanierung. Was das kostet, zeigt unser Ratgeber{" "}
              <Link to="/kosten/waermepumpen-kosten" className={linkClass}>
                Wärmepumpen-Kosten
              </Link>
              .
            </>
          ),
        },
        {
          type: "inlineCta",
          eyebrow: "Für Ihr Zuhause geprüft",
          title:
            "Ob eine Wärmepumpe zu Ihrem Haus passt, klären wir bei einem Termin vor Ort.",
          button: "Beratung anfragen",
        },
      ],
    },
    {
      id: "fachbetrieb",
      nav: "Installation vom Fachbetrieb",
      eyebrow: "Planung & Service",
      heading: "Professionelle Planung, Installation und Wartung",
      blocks: [
        {
          type: "lead",
          content:
            "Wie effizient eine Wärmepumpe arbeitet, entscheidet sich bei der Planung. Als Meisterbetrieb mit Standorten in Willich, Köln und Solingen begleiten wir Sie von der ersten Prüfung bis zur Wartung.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Gebäude und Heizlast prüfen",
              text: "Wir ermitteln den Wärmebedarf, prüfen Heizflächen und Vorlauftemperaturen und wählen eine passend dimensionierte Anlage.",
            },
            {
              title: "Aufstellort und Schall planen",
              text: "Abstände, Schallschutz und Leitungswege werden so geplant, dass die Anlage effizient und nachbarschaftsverträglich läuft.",
            },
            {
              title: "Förderung vorbereiten",
              text: "Wir erstellen die Bestätigung zum Antrag (BzA) und unterstützen Sie beim KfW-Antrag – vor Beginn der Arbeiten.",
            },
            {
              title: "Installieren und einregulieren",
              text: "Montage, Inbetriebnahme, hydraulischer Abgleich und Einstellung der Heizkurve aus einer Hand.",
            },
            {
              title: "Wartung und Service",
              text: "Regelmäßige Wartung sichert Effizienz und Lebensdauer – auch nach dem Einbau bleiben wir Ihr Ansprechpartner.",
            },
          ],
        },
      ],
    },
    {
      id: "ausblick",
      nav: "Ausblick",
      eyebrow: "Zukunft des Heizens",
      heading: "Ausblick: Wie geht es weiter?",
      blocks: [
        {
          type: "lead",
          content:
            "Die Zahlen aus 2025 und dem ersten Halbjahr 2026 zeigen: Der Wärmepumpen-Trend ist kein kurzfristiger Ausschlag. Ob sich das Wachstum im zweiten Halbjahr 2026 fortsetzt, werden die Jahreszahlen der Verbände Anfang 2027 zeigen.",
        },
        {
          type: "p",
          content:
            "Offen ist, wie sich der CO₂-Preis für fossile Brennstoffe nach dem Start des europäischen Emissionshandels 2028 entwickelt – eine verlässliche Prognose gibt es dafür nicht. Unabhängig davon gilt: Eine Wärmepumpe, die zum Gebäude passt, macht Sie weitgehend unabhängig von Gas- und Ölpreisen und kann mit eigenem Solarstrom kombiniert werden.",
        },
        {
          type: "quote",
          content:
            "„Der beste Zeitpunkt für die Planung ist, bevor die alte Heizung ausfällt – dann bleibt Zeit für Förderantrag und saubere Auslegung.“",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Ist die Wärmepumpe nur ein vorübergehender Trend?",
      a: "Die Absatzzahlen sprechen dagegen: 2025 war die Wärmepumpe mit rund 299.000 verkauften Geräten erstmals das meistverkaufte Heizsystem in Deutschland, im ersten Halbjahr 2026 stieg der Absatz um weitere 40 Prozent.",
    },
    {
      q: "Funktioniert eine Wärmepumpe auch im Altbau?",
      a: "In vielen Fällen ja. Rund acht von zehn der 2025 verkauften Wärmepumpen wurden laut BWP in Bestandsgebäuden eingebaut. Entscheidend sind Heizlast, Vorlauftemperatur und Heizflächen – das prüfen wir vor Ort.",
    },
    {
      q: "Darf ich 2026 noch eine Gasheizung einbauen?",
      a: "Ja. Mit dem Gebäudemodernisierungsgesetz ist die 65-Prozent-Regel entfallen. Neu eingebaute Gas- und Ölheizungen müssen aber ab 2029 steigende Anteile klimafreundlicher Brennstoffe nutzen. Eine reine Gasheizung wird zudem nicht über die KfW-Heizungsförderung bezuschusst.",
    },
    {
      q: "Wie hoch ist die Förderung für eine Wärmepumpe aktuell?",
      a: "Nach den seit 21.07.2026 ausgewiesenen KfW-Konditionen gibt es 30 Prozent Grundförderung plus mögliche Boni. Gefördert werden beim Einfamilienhaus bis zu 28.000 Euro Kosten; der Zuschuss ist auf 70 Prozent beziehungsweise unter besonderen Einkommens- und Familienbedingungen auf 80 Prozent (maximal 22.400 Euro) begrenzt.",
    },
  ],
  closing: {
    title: "Sie überlegen, auf eine Wärmepumpe umzusteigen?",
    text: "Wir prüfen Ihr Gebäude, rechnen Kosten und Förderung transparent durch und planen eine Anlage, die zu Ihrem Zuhause passt.",
    button: "Kostenlose Erstberatung",
  },
  related: [
    {
      label: "Förderung",
      title: "Neue Förderung für Wärmepumpen: Was seit Juli 2026 gilt",
      href: "/aktuelle-themen/neue-forderungen-fur-warmepumpen",
    },
    {
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
    {
      label: "Wärmepumpen-Typen",
      title: "Die Luft-Wasser-Wärmepumpe im Überblick",
      href: "/typen/luft-wasser-warmepumpe",
    },
  ],
  sources: [
    {
      label: "BDH: Absatz Heizungen 2025 in Deutschland (31.01.2026, PDF)",
      href: "https://www.bdh-industrie.de/fileadmin/user_upload/Downloads/PresseMeldungen/Absatzzahlen_Heizungen_Deutschland_2025.pdf",
    },
    {
      label: "BWP: Wärmepumpe belegt erstmals Top-Position unter den verkauften Heizsystemen",
      href: "https://www.waermepumpe.de/presse/news/details/waermepumpe-belegt-erstmals-top-position-unter-den-verkauften-heizsystemen-verband-fordert-klarheit-ueber-zukuenftige-rahmenbedingungen/",
    },
    {
      label: "BDH: Heizungsmarkt legt zu – Wärmepumpen setzen positive Impulse (1. Halbjahr 2026)",
      href: "https://www.bdh-industrie.de/presse/pressemeldungen/artikel/heizungsmarkt-legt-zu-waermepumpen-setzen-positive-impulse",
    },
    {
      label: "BWP: Wärmepumpen-Absatz wächst im ersten Halbjahr auf 195.000 Anlagen",
      href: "https://www.waermepumpe.de/presse/pressemitteilungen/details/waermepumpen-absatz-waechst-im-ersten-halbjahr-auf-195000-anlagen/",
    },
    {
      label: "BWP: Branchenstudie 2026 (PDF)",
      href: "https://www.waermepumpe.de/fileadmin/user_upload/2026-03-30_BWP-Branchenstudie_2026_final.pdf",
    },
    {
      label: "Bundesregierung: Gebäudemodernisierungsgesetz",
      href: "https://www.bundesregierung.de/breg-de/aktuelles/neues-gebaeudemodernisierungsgesetz-2430284",
    },
    {
      label: "DEHSt: Verkauf und Versteigerung im nationalen Emissionshandel",
      href: "https://www.dehst.de/DE/Themen/nEHS/Verkauf-Versteigerung/verkauf-versteigerung_node.html",
    },
  ],
}

export default waermepumpenTrend
