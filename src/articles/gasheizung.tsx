import { Link } from "react-router"
import type { TopicArticle } from "../TopicArticlePage"
import alteHeizungAustausch from "../imports/alte-heizung-austausch.webp"

const linkClass =
  "font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"

const gasheizung: TopicArticle = {
  // Live-Slug bewusst beibehalten (URL/Rankings), sichtbarer Titel aktualisiert
  slug: "gasheizung-in-2024---macht-das-sinn",
  title: "Gasheizung 2026: Macht das noch Sinn?",
  metaTitle: "Gasheizung 2026: Lohnt sich das noch? Gesetz, Kosten, Vergleich | H&S",
  teaser:
    "Das Heizungsgesetz wurde 2026 reformiert: Gasheizungen sind wieder erlaubt, aber mit Bio-Treppe ab 2029. Was das für Kosten, CO₂-Preis und Ihre Entscheidung bedeutet.",
  label: "Heizungsvergleich",
  readTime: "10 Min.",
  updated: "09.10.2026",
  image: alteHeizungAustausch,
  imageAlt:
    "Zwei Monteure demontieren einen alten Heizkessel im Heizungskeller",
  heroIntro:
    "Mit dem Gebäudemodernisierungsgesetz sind neue Gasheizungen wieder ohne 65-Prozent-Regel erlaubt. Ob sich eine Gasheizung 2026 noch rechnet, hängt aber von CO₂-Preis, Bio-Treppe, Förderung und Betriebskosten ab. Ein sachlicher Vergleich.",
  heroBox: {
    eyebrow: "Stand Oktober 2026",
    value: "10 % ab 2029",
    valueNote:
      "Pflichtanteil klimafreundlicher Brennstoffe für neu eingebaute Gasheizungen – steigend bis 60 % ab 2040",
    rows: [
      { label: "CO₂-Preis 2026", value: "55–65 €/t" },
      { label: "Ø Gaspreis Haushalte, 1. Hj. 2026", value: "11,58 ct/kWh" },
      { label: "Förderung Wärmepumpe", value: "30–80 %", highlight: true },
    ],
  },
  navCta: "Heizung vergleichen",
  sections: [
    {
      id: "rechtslage",
      nav: "Was jetzt gilt",
      eyebrow: "Rechtslage 2026",
      heading: "Die Gasheizung 2026: Was gilt jetzt?",
      blocks: [
        {
          type: "lead",
          content:
            "Neue Technologien, Energiepreise und Gesetze haben die Heizungsfrage in den letzten Jahren stark verändert. 2026 kam eine weitere Wende: Der Bundestag hat am 10. Juli 2026 das Gebäudemodernisierungsgesetz (GModG) beschlossen. Es ersetzt die bisherigen Heizungsregeln des Gebäudeenergiegesetzes; die Kernregeln gelten laut Bundesregierung seit dem 29. Juli 2026.",
        },
        {
          type: "rows",
          items: [
            {
              value: "65 %",
              title: "Die 65-Prozent-Regel ist entfallen",
              text: "Neue Heizungen müssen nicht mehr zu mindestens 65 Prozent mit erneuerbaren Energien betrieben werden. Das galt bisher für Neubauten und – gekoppelt an die kommunale Wärmeplanung – auch für Bestandsgebäude.",
            },
            {
              value: "Gas",
              title: "Neue Gas- und Ölheizungen sind wieder erlaubt",
              text: "Eigentümer können die Heizungsart grundsätzlich wieder frei wählen. Für neu eingebaute fossile Heizungen gilt aber ab 2029 die sogenannte Bio-Treppe (siehe nächster Abschnitt).",
            },
            {
              value: "Bestand",
              title: "Bestehende Heizungen laufen weiter",
              text: "Ihre vorhandene Gasheizung dürfen Sie weiter betreiben. Die bisherige pauschale Austauschpflicht für 30 Jahre alte Heizkessel ist nach dem neuen Gesetz entfallen.",
            },
          ],
        },
        {
          type: "callout",
          tone: "line",
          title: "Was aus den alten Regeln nicht mehr stimmt",
          content:
            "Ältere Ratgeber – auch unsere frühere Fassung dieses Artikels – nennen die 65-Prozent-Pflicht für Neubauten, die Austauschpflicht für 30 Jahre alte Kessel und Biomasse-Anteile von 15 Prozent ab 2029. Diese Angaben beziehen sich auf das alte Gebäudeenergiegesetz und sind überholt. Das Klimaziel der Klimaneutralität bis 2045 bleibt bestehen.",
        },
      ],
    },
    {
      id: "biotreppe",
      nav: "Die Bio-Treppe",
      eyebrow: "Pflichten für neue Gasheizungen",
      heading: "Die Bio-Treppe für neue Gas- und Ölheizungen",
      blocks: [
        {
          type: "lead",
          content:
            "Wer eine neue Gas- oder Ölheizung einbaut, muss ab 2029 einen steigenden Anteil klimafreundlicher Brennstoffe einsetzen – etwa Biomethan, Bioheizöl, biogenes Flüssiggas oder Wasserstoff.",
        },
        {
          type: "table",
          head: ["Ab dem Jahr", "Mindestanteil klimafreundlicher Brennstoffe"],
          rows: [
            ["2029", "10 %"],
            ["2030", "15 %"],
            ["2035", "30 %"],
            ["2040", "60 %"],
          ],
          highlightLast: true,
          note: "Stufen nach dem Gebäudemodernisierungsgesetz. Wie sich die Preise für Biomethan und andere klimafreundliche Brennstoffe entwickeln, lässt sich Stand Oktober 2026 nicht verlässlich vorhersagen.",
        },
        {
          type: "p",
          content:
            "Für Vermieter gilt zusätzlich: Wer eine neue fossile Heizung einbaut, beteiligt sich ab 2028 zur Hälfte an den CO₂-Kosten und bei Gas an den Netzentgelten, ab 2029 außerdem an den Mehrkosten der Bio-Brennstoffe. Für selbstnutzende Eigentümer bedeutet die Bio-Treppe vor allem eines: Die Brennstoffkosten einer neuen Gasheizung hängen künftig auch vom Preis klimafreundlicher Gase ab.",
        },
        {
          type: "image",
          src: alteHeizungAustausch,
          alt: "Zwei Monteure demontieren einen alten Heizkessel im Heizungskeller",
          caption:
            "Ob Gas oder Wärmepumpe: Beim Heizungstausch lohnt sich der Blick auf die Kosten über die gesamte Lebensdauer – nicht nur auf den Anschaffungspreis.",
        },
      ],
    },
    {
      id: "co2",
      nav: "CO₂-Preis & Gaspreis",
      eyebrow: "Energiepreise",
      heading: "CO₂-Preis und Gaspreis: Stand 2026",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Auf Erdgas und Heizöl wird in Deutschland ein CO₂-Preis erhoben.
              2026 werden die Zertifikate im nationalen Emissionshandel in
              einem{" "}
              <strong className="font-semibold text-graphite">
                Preiskorridor von 55 bis 65 Euro je Tonne
              </strong>{" "}
              versteigert. Bei der ersten Versteigerung am 1. Juli 2026 lag
              der Zuschlagspreis laut Deutscher Emissionshandelsstelle bei 65
              Euro.
            </>
          ),
        },
        {
          type: "facts",
          items: [
            { value: "55–65 €/t", label: "CO₂-Preiskorridor 2026" },
            { value: "≈ 1,1–1,3 ct", label: "CO₂-Anteil je kWh Erdgas, netto" },
            { value: "2028", label: "geplanter Start EU-Emissionshandel ETS 2" },
          ],
          note: "CO₂-Anteil je kWh: eigene Rechnung mit dem Standard-Emissionsfaktor für Erdgas von rund 0,2 kg CO₂ je kWh, zuzüglich Mehrwertsteuer.",
        },
        {
          type: "h3",
          content: "Wie geht es ab 2027 weiter?",
        },
        {
          type: "list",
          items: [
            "Die EU hat den Start des Emissionshandels für Gebäude und Verkehr (ETS 2) um ein Jahr auf den 1. Januar 2028 verschoben. Ab dann bildet sich der CO₂-Preis am europäischen Markt – eine verlässliche Prognose für dessen Höhe gibt es nicht.",
            "Für das Übergangsjahr 2027 hat das Bundeskabinett am 12. August 2026 einen Gesetzentwurf beschlossen, der den Korridor von 55 bis 65 Euro um ein Jahr verlängern soll. Der Entwurf befand sich im September 2026 im parlamentarischen Verfahren.",
          ],
        },
        {
          type: "h3",
          content: "Der Gaspreis",
        },
        {
          type: "p",
          content:
            "Private Haushalte zahlten im ersten Halbjahr 2026 laut Statistischem Bundesamt durchschnittlich 11,58 Cent je Kilowattstunde Erdgas – 5,3 Prozent weniger als im zweiten Halbjahr 2025. Ein Grund: Die Gasspeicherumlage wird seit 2026 aus dem Bundeshaushalt finanziert. Für neu abschließbare Tarife beobachtet der BDEW seit Jahresbeginn 2026 dagegen wieder steigende Preise. Wie sich der Gaspreis langfristig entwickelt, ist offen.",
        },
      ],
    },
    {
      id: "anschaffung",
      nav: "Anschaffung & Förderung",
      eyebrow: "Investition",
      heading: "Anschaffung: Gasheizung und Wärmepumpe im Vergleich",
      blocks: [
        {
          type: "lead",
          content:
            "In der Anschaffung ist eine neue Gas-Brennwertheizung in der Regel deutlich günstiger als eine Wärmepumpe. Der Unterschied schrumpft jedoch durch die Förderung: Eine reine Gasheizung ist in der KfW-Heizungsförderung kein förderfähiger Wärmeerzeuger, die Wärmepumpe dagegen wird mit 30 bis 80 Prozent bezuschusst.",
        },
        {
          type: "table",
          head: ["Beispiel Einfamilienhaus", "Wärmepumpe vor Förderung", "Eigenanteil nach Förderung"],
          rows: [
            ["Vermietet, nur Grundförderung (30 %)", "33.500–36.000 €", "ca. 25.100–27.600 €"],
            ["Selbstnutzer, Einkommen 45.000 € (56 %)", "33.500–36.000 €", "ca. 17.800–20.300 €"],
            ["Selbstnutzer, Einkommen 28.000 € (80 %)", "33.500–36.000 €", "ca. 11.100–13.600 €"],
          ],
          highlightLast: true,
          note: (
            <>
              Gesamtkosten nach unserem Ratgeber{" "}
              <Link to="/kosten/waermepumpen-kosten" className={linkClass}>
                Wärmepumpen-Kosten
              </Link>
              ; Zuschuss auf maximal 28.000 € förderfähige Kosten (8.400 €,
              15.680 € bzw. 22.400 €) nach den seit 21.07.2026 ausgewiesenen
              KfW-Konditionen. Details im Ratgeber{" "}
              <Link to="/kosten/foerderung-waermepumpe" className={linkClass}>
                Förderung Wärmepumpe
              </Link>
              .
            </>
          ),
        },
        {
          type: "p",
          content:
            "Den konkreten Preis für eine neue Gasheizung wie für eine Wärmepumpe nennen wir Ihnen nach der Besichtigung im Angebot – Leitungswege, Abgasanlage, Speicher und Heizflächen verändern die Kosten im Einzelfall deutlich.",
        },
      ],
    },
    {
      id: "betrieb",
      nav: "Betriebskosten",
      eyebrow: "Laufende Kosten",
      heading: "Betriebskosten: eine Beispielrechnung",
      blocks: [
        {
          type: "lead",
          content:
            "Über die Lebensdauer einer Heizung machen die Energiekosten den größten Posten aus. Eine vereinfachte Rechnung für ein Einfamilienhaus mit bisher 25.000 kWh Gasverbrauch pro Jahr:",
        },
        {
          type: "table",
          head: ["Annahme", "Gasheizung", "Wärmepumpe"],
          rows: [
            ["Energiebedarf", "25.000 kWh Gas", "≈ 6.430 kWh Strom"],
            ["Effizienz", "Nutzungsgrad 90 %", "Jahresarbeitszahl 3,5"],
            ["Energiepreis", "11,58 ct/kWh", "30 ct/kWh"],
            ["Energiekosten pro Jahr", "≈ 2.895 €", "≈ 1.930 €"],
          ],
          highlightLast: true,
          note: "Vereinfachte Modellrechnung: 25.000 kWh × 90 % = 22.500 kWh Wärme; ÷ 3,5 = rund 6.430 kWh Strom. Gaspreis = Durchschnitt privater Haushalte im 1. Halbjahr 2026 (Destatis), Strompreis = angenommener Wärmepumpentarif. Grundgebühren, Wartung und Schornsteinfeger sind nicht berücksichtigt.",
        },
        {
          type: "callout",
          tone: "dark",
          eyebrow: "Ergebnis der Beispielrechnung",
          title: "Rund 965 € weniger Energiekosten pro Jahr",
          content:
            "Bei gleichbleibenden Preisen ergibt das über 15 Jahre eine Differenz von rund 14.500 Euro zugunsten der Wärmepumpe. Nicht eingerechnet sind mögliche Mehrkosten durch den CO₂-Preis ab 2028 und durch die Bio-Treppe ab 2029 – beides ist in der Höhe noch nicht absehbar, wirkt aber nur auf der Gas-Seite.",
        },
        {
          type: "p",
          content: (
            <>
              Wie hoch der Stromverbrauch Ihrer Wärmepumpe tatsächlich wäre,
              hängt von Gebäude und Anlage ab. Mehr dazu im Ratgeber{" "}
              <Link to="/kosten/waermepumpe-stromverbrauch" className={linkClass}>
                Wärmepumpe Stromverbrauch
              </Link>
              . Mit eigenem Solarstrom lässt sich der Netzbezug zusätzlich
              senken.
            </>
          ),
        },
        {
          type: "inlineCta",
          eyebrow: "Für Ihr Haus gerechnet",
          title:
            "Wir vergleichen Gasheizung und Wärmepumpe mit Ihren echten Verbrauchswerten.",
          button: "Heizung vergleichen",
        },
      ],
    },
    {
      id: "vergleich",
      nav: "Der direkte Vergleich",
      eyebrow: "Gegenüberstellung",
      heading: "Gasheizung oder Wärmepumpe: der direkte Vergleich",
      blocks: [
        {
          type: "table",
          head: ["Kriterium", "Gas-Brennwertheizung", "Wärmepumpe"],
          rows: [
            ["Anschaffung", "günstiger", "teurer, aber stark gefördert"],
            ["KfW-Förderung", "keine", "30–80 %"],
            ["Energiekosten", "abhängig von Gas- und CO₂-Preis", "abhängig vom Strompreis, PV möglich"],
            ["CO₂-Preis", "fällt an, ab 2028 Marktpreis", "fällt auf die Heizenergie nicht an"],
            ["Pflichten ab 2029", "Bio-Treppe 10–60 %", "keine Brennstoffpflichten"],
            ["Wartung", "Wartung und Schornsteinfeger", "Wartung, kein Schornsteinfeger"],
          ],
        },
        {
          type: "p",
          content:
            "Moderne Gas-Brennwertgeräte sind effizient, zuverlässig und schnell betriebsbereit – das bleibt richtig. Ihre Kosten hängen aber dauerhaft von Gaspreis, CO₂-Preis und künftig den Bio-Brennstoffen ab. Eine Wärmepumpe gewinnt den größten Teil ihrer Energie aus der Umgebung und benötigt keinen Schornsteinfeger.",
        },
      ],
    },
    {
      id: "fazit",
      nav: "Unsere Empfehlung",
      eyebrow: "Fazit",
      heading: "Unsere Empfehlung als Meisterbetrieb",
      blocks: [
        {
          type: "lead",
          content:
            "Eine Gasheizung ist 2026 wieder erlaubt – wirtschaftlich ist sie aber nicht automatisch die bessere Wahl. Wo eine Wärmepumpe technisch gut passt, empfehlen wir sie aus wirtschaftlichen und ökologischen Gründen: Förderung, niedrigere Energiekosten und keine Abhängigkeit von CO₂-Preis und Bio-Treppe.",
        },
        {
          type: "p",
          content:
            "Es gibt Situationen, in denen andere Lösungen sinnvoll sein können – etwa wenn ein Anschluss an ein Wärmenetz absehbar ist oder ein Gebäude für eine Wärmepumpe noch nicht vorbereitet ist. Genau das prüfen wir bei Ihnen vor Ort und beraten Sie ehrlich und herstellerunabhängig.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Darf ich meine bestehende Gasheizung weiter betreiben?",
      a: "Ja. Bestehende Gasheizungen dürfen weiter betrieben und repariert werden. Die bisherige pauschale Austauschpflicht für 30 Jahre alte Heizkessel ist mit dem Gebäudemodernisierungsgesetz entfallen.",
    },
    {
      q: "Darf ich 2026 noch eine neue Gasheizung einbauen?",
      a: "Ja. Die 65-Prozent-Regel ist entfallen. Für neu eingebaute Gas- und Ölheizungen gilt aber ab 2029 die Bio-Treppe: mindestens 10 Prozent klimafreundliche Brennstoffe, ab 2030 15, ab 2035 30 und ab 2040 60 Prozent.",
    },
    {
      q: "Wird eine neue Gasheizung gefördert?",
      a: "Eine reine Gas-Brennwertheizung ist in der KfW-Heizungsförderung kein förderfähiger Wärmeerzeuger. Wärmepumpen werden dagegen mit 30 bis maximal 80 Prozent bezuschusst.",
    },
    {
      q: "Wie hoch ist der CO₂-Preis 2026?",
      a: "2026 werden die Zertifikate im nationalen Emissionshandel in einem Korridor von 55 bis 65 Euro je Tonne CO₂ versteigert. Ab 2028 soll der europäische Emissionshandel ETS 2 starten, dessen Preis sich am Markt bildet.",
    },
    {
      q: "Was passiert, wenn meine Gasheizung kaputtgeht?",
      a: "Sie dürfen sie reparieren oder durch eine neue Heizung ersetzen. Nutzen Sie den Moment für einen Vergleich: Für eine Wärmepumpe muss die KfW-Förderung vor Beginn der Arbeiten beantragt werden – sprechen Sie uns frühzeitig an.",
    },
  ],
  closing: {
    title: "Gas oder Wärmepumpe? Wir rechnen es für Ihr Haus durch.",
    text: "Mit Ihren Verbrauchswerten, Ihrer Heizungsanlage und der aktuellen Förderung – transparent und ohne Verkaufsdruck.",
    button: "Beratung anfragen",
  },
  related: [
    {
      label: "Förderung",
      title: "Welche Förderung gibt es für Wärmepumpen?",
      href: "/kosten/foerderung-waermepumpe",
    },
    {
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
    {
      label: "Betriebskosten",
      title: "Wie viel Strom verbraucht eine Wärmepumpe?",
      href: "/kosten/waermepumpe-stromverbrauch",
    },
  ],
  sources: [
    {
      label: "Bundesregierung: Gebäudemodernisierungsgesetz",
      href: "https://www.bundesregierung.de/breg-de/aktuelles/neues-gebaeudemodernisierungsgesetz-2430284",
    },
    {
      label: "Deutscher Bundestag: Bundestag beschließt Heizungsgesetz-Novelle (10.07.2026)",
      href: "https://www.bundestag.de/dokumente/textarchiv/2026/kw28-de-heizungsgesetz-1194534",
    },
    {
      label: "Verbraucherzentrale: GModG – Was steht im Gebäudemodernisierungsgesetz?",
      href: "https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/gmodg-was-steht-im-gebaeudemodernisierungsgesetz-13886",
    },
    {
      label: "DEHSt: Verkauf und Versteigerung im nationalen Emissionshandel",
      href: "https://www.dehst.de/DE/Themen/nEHS/Verkauf-Versteigerung/verkauf-versteigerung_node.html",
    },
    {
      label: "DEHSt: Verschiebung des Starts der Regelphase des EU-ETS 2",
      href: "https://www.dehst.de/SharedDocs/news/DE/euets2-verschiebung.html",
    },
    {
      label: "Deutscher Bundestag: BEHG-Änderung – CO₂-Preis soll 2027 stabil bleiben",
      href: "https://www.bundestag.de/presse/hib/kurzmeldungen-1210950",
    },
    {
      label: "Destatis: Strom- und Gaspreise für Haushalte im 1. Halbjahr 2026 gesunken",
      href: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_345_61243.html",
    },
    {
      label: "BDEW: Gaspreisanalyse",
      href: "https://www.bdew.de/service/daten-und-grafiken/bdew-gaspreisanalyse/",
    },
  ],
}

export default gasheizung
