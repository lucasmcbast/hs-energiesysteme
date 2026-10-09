import { Link } from "react-router"
import type { TopicArticle } from "../TopicArticlePage"
import foerderberatung from "../imports/waermepumpe-foerderberatung.webp"

const linkClass =
  "font-semibold text-graphite underline decoration-yellow decoration-2 underline-offset-4"

const KFW_URL =
  "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-(458)/"

const foerderung: TopicArticle = {
  slug: "neue-forderungen-fur-warmepumpen",
  title: "Neue Förderung für Wärmepumpen: Was seit Juli 2026 gilt",
  metaTitle: "Neue Förderung für Wärmepumpen 2026: KfW 458 kompakt | H&S",
  teaser:
    "Die KfW-Heizungsförderung wurde im Juli 2026 angepasst: 28.000 € förderfähige Kosten, 16 % Klimabonus, neue Einkommensstaffeln. Die wichtigsten Änderungen kompakt.",
  label: "Förderung",
  readTime: "6 Min.",
  updated: "09.10.2026",
  image: foerderberatung,
  imageAlt:
    "H&S-Fachberater bespricht mit einem Hauseigentümer Förderunterlagen für eine Wärmepumpe",
  heroIntro:
    "Die KfW hat die Heizungsförderung (Programm 458) neu ausgerichtet. Hier finden Sie die wichtigsten Änderungen nach den seit 21.07.2026 ausgewiesenen Konditionen – kompakt zusammengefasst.",
  heroBox: {
    eyebrow: "Aktuelle Förderlogik",
    value: "30–80 %",
    valueNote: "Zuschuss abhängig von Nutzung, alter Heizung und Einkommen",
    rows: [
      { label: "Förderfähige Kosten (EFH)", value: "bis 28.000 €" },
      { label: "Grundförderung", value: "30 %" },
      { label: "Maximaler Zuschuss", value: "22.400 €", highlight: true },
    ],
  },
  navCta: "Förderung prüfen",
  sections: [
    {
      id: "kurzfassung",
      nav: "Das Wichtigste in Kürze",
      eyebrow: "Überblick",
      heading: "Die Wärmepumpen-Förderung 2026 in Kürze",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Die Förderung für Wärmepumpen läuft über die KfW (Programm 458,
              Heizungsförderung für Privatpersonen). Sie setzt sich aus einer
              Grundförderung und möglichen Boni zusammen. Dieser Artikel fasst
              die aktuellen Regeln zusammen – alle Details, Rechenwege und
              Voraussetzungen finden Sie in unserem ausführlichen Ratgeber{" "}
              <Link to="/kosten/foerderung-waermepumpe" className={linkClass}>
                Förderung für Wärmepumpen
              </Link>
              .
            </>
          ),
        },
        {
          type: "rows",
          items: [
            {
              value: "30 %",
              title: "Grundförderung",
              text: "Für private Eigentümer einer bestehenden Wohnimmobilie beim Einbau einer förderfähigen Wärmepumpe.",
            },
            {
              value: "+ 16 %",
              title: "Klimageschwindigkeitsbonus",
              text: "Für selbstnutzende Eigentümer beim Austausch bestimmter funktionsfähiger alter Heizungen.",
            },
            {
              value: "+ 10–40 %",
              title: "Einkommensbonus",
              text: "Gestaffelt nach dem zu versteuernden Haushaltsjahreseinkommen der Selbstnutzer.",
            },
          ],
        },
        {
          type: "callout",
          tone: "yellow",
          title: "Maximal 80 % beziehungsweise 22.400 Euro",
          content:
            "Beim Einfamilienhaus berücksichtigt die KfW bis zu 28.000 Euro förderfähige Kosten. Der Zuschuss ist grundsätzlich auf 70 Prozent begrenzt; unter den ausgewiesenen besonderen Einkommens- beziehungsweise Familienbedingungen sind bis zu 80 Prozent möglich.",
        },
      ],
    },
    {
      id: "aenderungen",
      nav: "Was sich geändert hat",
      eyebrow: "Neu seit Juli 2026",
      heading: "Was sich gegenüber 2024 geändert hat",
      blocks: [
        {
          type: "lead",
          content:
            "Viele Förderangaben, die seit 2024 im Umlauf sind – auch in der früheren Fassung dieses Artikels –, sind nicht mehr aktuell. Die wichtigsten Unterschiede:",
        },
        {
          type: "table",
          head: ["Baustein", "Bisher (2024)", "Aktuell (seit 21.07.2026)"],
          rows: [
            ["Förderfähige Kosten, 1. Wohneinheit", "30.000 €", "28.000 €"],
            ["Klimageschwindigkeitsbonus", "20 %", "16 %"],
            ["Einkommensbonus", "30 % bis 40.000 € Einkommen", "10–40 %, gestaffelt bis 60.000 €"],
            ["Effizienzbonus", "5 %", "nicht mehr als eigener Baustein ausgewiesen"],
            ["Höchstfördersatz", "70 %", "70 %, mit besonderen Bedingungen 80 %"],
            ["Maximaler Zuschuss (EFH)", "21.000 €", "22.400 €"],
          ],
          highlightLast: true,
          note: "Unverändert: Antrag bei der KfW vor Beginn der Arbeiten, Vertrag mit Förderbedingung, 15.000 € förderfähige Kosten je weiterer Wohneinheit (2. bis 6.) und 8.000 € ab der 7. Wohneinheit.",
        },
        {
          type: "callout",
          tone: "line",
          title: "Übergangsregeln von 2024 sind ausgelaufen",
          content:
            "Die Möglichkeit, eine bereits eingebaute Heizung nachträglich fördern zu lassen, galt nur im Übergangszeitraum 2024. Heute gilt ohne Ausnahme: Erst Förderzusage, dann Umsetzung.",
        },
      ],
    },
    {
      id: "antrag",
      nav: "So läuft der Antrag",
      eyebrow: "Antragsprozess",
      heading: "So läuft der Förderantrag ab",
      blocks: [
        {
          type: "lead",
          content:
            "Der Förderantrag beginnt vor dem Einbau. Wir begleiten Sie durch jeden Schritt.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Fachunternehmen beauftragen",
              text: "Sie benötigen eine Planung und einen Lieferungs- oder Leistungsvertrag mit Fördervorbehalt (aufschiebende oder auflösende Bedingung) und geplantem Umsetzungsdatum.",
            },
            {
              title: "BzA erstellen lassen",
              text: "Wir als Fachunternehmen erstellen die Bestätigung zum Antrag mit Anlage, Kosten und technischen Angaben.",
            },
            {
              title: "Antrag selbst stellen",
              text: "Mit der BzA-ID beantragen Sie den Zuschuss vor Vorhabenbeginn im Kundenportal „Meine KfW“.",
            },
            {
              title: "Zusage abwarten und umsetzen",
              text: "Nach der Förderzusage startet der Einbau. Das Vorhaben muss innerhalb des Bewilligungszeitraums abgeschlossen werden.",
            },
            {
              title: "Nachweise einreichen",
              text: "Nach Abschluss erstellen wir die Bestätigung nach Durchführung (BnD). Rechnungen und Nachweise laden Sie im Portal hoch.",
            },
          ],
        },
        {
          type: "image",
          src: foerderberatung,
          alt: "H&S-Fachberater bespricht mit einem Hauseigentümer Förderunterlagen für eine Wärmepumpe",
          caption:
            "Angebot, förderfähige Kosten und Umsetzungstermin klären wir vor der Antragstellung gemeinsam mit Ihnen.",
        },
      ],
    },
    {
      id: "einkommen",
      nav: "Einkommensbonus",
      eyebrow: "Haushaltseinkommen",
      heading: "Einkommensbonus und Familienzuschlag",
      blocks: [
        {
          type: "lead",
          content:
            "Für die selbstgenutzte Haupt- oder alleinige Wohneinheit wird der Einkommensbonus nach dem durchschnittlichen zu versteuernden Haushaltsjahreseinkommen gestaffelt. Mit mindestens einem kindergeldberechtigten Kind unter 18 Jahren erhöhen sich die Einkommensgrenzen einmalig um 10.000 Euro.",
        },
        {
          type: "table",
          head: ["Haushaltseinkommen", "Ohne Kind", "Mit berechtigtem Kind"],
          rows: [
            ["bis 30.000 €", "40 %", "40 %"],
            ["30.001–40.000 €", "30 %", "40 %"],
            ["40.001–50.000 €", "10 %", "30 %"],
            ["50.001–60.000 €", "—", "10 %"],
            ["ab 60.001 €", "—", "—"],
          ],
          highlightLast: true,
          note: "Maßgeblich ist das zu versteuernde Haushaltseinkommen nach den KfW-Vorgaben und den Einkommensteuerbescheiden – nicht das Bruttoeinkommen.",
        },
      ],
    },
    {
      id: "beispiele",
      nav: "Drei Beispiele",
      eyebrow: "Neu gerechnet",
      heading: "Drei Beispiele nach den neuen Regeln",
      blocks: [
        {
          type: "lead",
          content:
            "Die Beispiele aus unserer früheren Fassung basierten auf den Regeln von 2024. Neu gerechnet für ein Einfamilienhaus mit mindestens 28.000 Euro förderfähigen Kosten:",
        },
        {
          type: "table",
          head: ["Situation", "Fördersatz", "Zuschuss"],
          rows: [
            ["Vermietetes Einfamilienhaus", "30 %", "8.400 €"],
            ["Selbstnutzer, Heizungstausch, Einkommen 45.000 €", "30 + 16 + 10 = 56 %", "15.680 €"],
            ["Selbstnutzer, Heizungstausch, Einkommen 28.000 €", "86 % → gedeckelt auf 80 %", "22.400 €"],
          ],
          highlightLast: true,
          note: "Vereinfachte Beispiele. Die tatsächliche Förderhöhe hängt vom Einzelfall und der Prüfung durch die KfW ab.",
        },
        {
          type: "p",
          content:
            "Bei Häusern mit mehreren Wohneinheiten – etwa mit Einliegerwohnung – steigen die förderfähigen Kosten um 15.000 Euro je weiterer Wohneinheit. Wie sich Boni für selbstgenutzte und vermietete Einheiten verteilen, prüfen wir im Einzelfall.",
        },
      ],
    },
    {
      id: "gefoerdert",
      nav: "Was gefördert wird",
      eyebrow: "Förderfähige Kosten",
      heading: "Was gefördert wird – und was die KfW verlangt",
      blocks: [
        {
          type: "lead",
          content:
            "Gefördert wird nicht nur das Gerät, sondern auch notwendige Umfeldmaßnahmen, die unmittelbar mit der Wärmepumpe zusammenhängen.",
        },
        {
          type: "list",
          items: [
            "Wärmepumpe und Speicher, Montage und Inbetriebnahme",
            "Demontage und Entsorgung der alten Heizung",
            "Notwendige Elektroarbeiten",
            "Hydraulischer Abgleich und erforderliche Heizkörperanpassungen",
            "Planung, Baubegleitung und unmittelbare Wiederherstellung",
          ],
        },
        {
          type: "h3",
          content: "Technische Anforderungen",
        },
        {
          type: "list",
          items: [
            "Hydraulischer Abgleich beziehungsweise Anpassung der Luftvolumenströme",
            "Einhaltung der technischen Mindestanforderungen des Förderprogramms",
            "Fachgerechte Demontage der ersetzten Heizung bei Nutzung des Klimageschwindigkeitsbonus",
            "Nachweis der ordnungsgemäßen Durchführung durch die BnD",
          ],
        },
        {
          type: "callout",
          title: "Wenn der Eigenanteil trotzdem zu hoch ist",
          content:
            "Laut KfW lässt sich der Zuschuss mit einem Ergänzungskredit (358/359) kombinieren. Der Antrag läuft über einen Finanzierungspartner; Konditionen und Voraussetzungen sollten tagesaktuell geprüft werden. Sprechen Sie uns gern auf Ihre Finanzierung an.",
        },
        {
          type: "inlineCta",
          eyebrow: "Förderung für Ihr Haus",
          title:
            "Wir prüfen, welche Förderbausteine bei Ihnen greifen, und erstellen die BzA.",
          button: "Förderung prüfen",
        },
      ],
    },
    {
      id: "rahmen",
      nav: "Gesetzlicher Rahmen",
      eyebrow: "Gesetzeslage 2026",
      heading: "Förderung und neues Gebäude\u00admodernisierungs\u00adgesetz",
      blocks: [
        {
          type: "lead",
          content: (
            <>
              Parallel zur Förderung hat sich 2026 auch der gesetzliche Rahmen
              geändert: Mit dem Gebäudemodernisierungsgesetz ist die
              65-Prozent-Regel für neue Heizungen entfallen. Die Hinweise aus
              unserer früheren Fassung zu Beratungspflicht, Übergangsfristen
              und Biomasse-Anteilen nach dem alten Gebäudeenergiegesetz sind
              damit überholt. Was heute gilt, lesen Sie im Artikel{" "}
              <Link
                to="/aktuelle-themen/gasheizung-in-2024---macht-das-sinn"
                className={linkClass}
              >
                Gasheizung 2026: Macht das noch Sinn?
              </Link>
            </>
          ),
        },
        {
          type: "p",
          content:
            "Für die Förderung gilt: Maßgeblich sind immer die KfW-Bedingungen am Tag der Antragstellung. Vor jeder Beauftragung prüfen wir die dann gültigen Konditionen erneut.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Wie hoch ist die Förderung für eine Wärmepumpe 2026?",
      a: "Die KfW weist 30 Prozent Grundförderung aus. Selbstnutzende Eigentümer können abhängig von alter Heizung und Einkommen Boni erhalten. Maximal sind 70 Prozent möglich, unter besonderen Einkommens- beziehungsweise Familienbedingungen 80 Prozent.",
    },
    {
      q: "Gibt es den 5-Prozent-Effizienzbonus noch?",
      a: "Auf der aktuellen KfW-458-Produktseite ist der frühere pauschale 5-Prozent-Effizienzbonus nicht mehr als eigener Förderbaustein aufgeführt.",
    },
    {
      q: "Kann ich die Förderung nachträglich beantragen?",
      a: "Nein. Vor Beginn der Arbeiten muss grundsätzlich eine Förderzusage vorliegen. Für den Antrag brauchen Sie bereits einen Lieferungs- oder Leistungsvertrag mit aufschiebender oder auflösender Förderbedingung.",
    },
    {
      q: "Läuft die Förderung über BAFA oder KfW?",
      a: "Die Heizungsförderung für Wärmepumpen in Wohngebäuden läuft über die KfW (Programm 458). Den Antrag stellen Sie selbst im Portal „Meine KfW“; wir erstellen als Fachbetrieb die Bestätigung zum Antrag.",
    },
  ],
  closing: {
    title: "Förderung sichern, bevor Sie beauftragen.",
    text: "Wir planen Ihre Wärmepumpe, prüfen die Förderbausteine und begleiten Sie durch den KfW-Antrag – in Willich, Köln, Solingen und Umgebung.",
    button: "Förderung prüfen",
  },
  related: [
    {
      label: "Förderung",
      title: "Förderung für Wärmepumpen: der ausführliche Ratgeber",
      href: "/kosten/foerderung-waermepumpe",
    },
    {
      label: "Kosten",
      title: "Was kostet eine Wärmepumpe mit Einbau?",
      href: "/kosten/waermepumpen-kosten",
    },
    {
      label: "Heizungsvergleich",
      title: "Gasheizung 2026: Macht das noch Sinn?",
      href: "/aktuelle-themen/gasheizung-in-2024---macht-das-sinn",
    },
  ],
  sources: [
    {
      label: "KfW: Heizungsförderung für Privatpersonen – Wohngebäude (458)",
      href: KFW_URL,
    },
    {
      label: "Bundesregierung: Gebäudemodernisierungsgesetz",
      href: "https://www.bundesregierung.de/breg-de/aktuelles/neues-gebaeudemodernisierungsgesetz-2430284",
    },
  ],
}

export default foerderung
