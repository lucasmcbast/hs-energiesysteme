import { useState } from "react"
import logoDark from "./imports/H_S_logo_large-Dark.png"
import heroWaermepumpe from "./imports/L1090589-Edit.jpg"
import montageKupfer from "./imports/L1090437.jpg"
import serviceLuefter from "./imports/L1090463.jpg"
import montageTeam from "./imports/L1090512.jpg"

/* ------------------------------------------------------------------ */
/*  Druckhilfs-Styles (per @media print nur aktiver Flyer sichtbar)    */
/* ------------------------------------------------------------------ */
const PRINT_STYLE = `
  @media print {
    @page { size: A4 portrait; margin: 0; }
    body > * { display: none !important; }
    #flyer-print-root { display: block !important; position: fixed; inset: 0; z-index: 99999; }
    #flyer-print-root .flyer-sheet { transform: none !important; box-shadow: none !important; width: 210mm; height: 297mm; }
  }
`

/* ------------------------------------------------------------------ */
/*  Flyer 1: Wärmepumpen-Angebot (dunkel)                              */
/* ------------------------------------------------------------------ */
function FlyerWaermepumpen() {
  return (
    <div
      className="flyer-sheet relative overflow-hidden bg-[#1f1d1d]"
      style={{ width: 794, height: 1123, fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
    >
      {/* Amber accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#fca31d]" />

      {/* Hero photo */}
      <div className="absolute inset-0 top-2" style={{ height: 420 }}>
        <img src={heroWaermepumpe} alt="Wärmepumpen-Montage H&S" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1d1d]/30 via-transparent to-[#1f1d1d]" />
      </div>

      {/* Logo oben rechts */}
      <div className="absolute top-6 right-7">
        <img src={logoDark} alt="H&S Energiesysteme" className="h-10 invert brightness-200" />
      </div>

      {/* Meisterbetrieb Badge */}
      <div className="absolute top-6 left-7 flex items-center gap-2">
        <span
          className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#fca31d] border border-[#fca31d]/60 px-3 py-1"
        >
          Zertifizierter Meisterbetrieb
        </span>
      </div>

      {/* Headline Block */}
      <div className="absolute left-7 right-7" style={{ top: 340 }}>
        <p className="text-[#fca31d] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
          Jetzt umsteigen auf erneuerbare Energie
        </p>
        <h1
          style={{ fontFamily: "'Newsreader', Georgia, serif", lineHeight: 1.08 }}
          className="text-[#f9f6f6] text-[54px] font-semibold mb-4"
        >
          Ihre Wärme&shy;pumpe vom regionalen Profi.
        </h1>
        <div className="w-12 h-0.5 bg-[#fca31d] mb-6" />
        <p className="text-[#c1c8d0] text-[15px] leading-relaxed max-w-[500px]">
          H&amp;S Energiesysteme ist Ihr Fachbetrieb für Luft-Wasser- und Erdwärmepumpen in der Region Düsseldorf / Köln.
          Von der Beratung über die Planung bis zur schlüsselfertigen Installation – alles aus einer Hand.
        </p>
      </div>

      {/* USP Grid */}
      <div
        className="absolute left-7 right-7 grid grid-cols-3 gap-4"
        style={{ top: 610 }}
      >
        {[
          { icon: "★", label: "Förderung bis", value: "80 %*" },
          { icon: "⚡", label: "Bis zu", value: "75 % Ersparnis" },
          { icon: "✓", label: "Über", value: "200 Anlagen" },
        ].map(({ icon, label, value }) => (
          <div key={label} className="border border-[#4d5a64]/50 p-4 bg-[#2d353c]/40">
            <div className="text-[#fca31d] text-2xl mb-2 leading-none">{icon}</div>
            <div className="text-[#9dadae] text-[10px] tracking-widest uppercase mb-1">{label}</div>
            <div
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              className="text-[#f9f6f6] text-[26px] font-semibold leading-tight"
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Leistungen */}
      <div className="absolute left-7 right-7" style={{ top: 760 }}>
        <p className="text-[#fca31d] text-[10px] tracking-[0.2em] uppercase mb-4 font-semibold">
          Unsere Leistungen
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Luft-Wasser-Wärmepumpen",
            "Erdwärmepumpen",
            "Hybridanlagen",
            "Warmwassersysteme",
            "BAFA / KfW Förderantrag",
            "Hydraulischer Abgleich",
            "Jahreswartung & Service",
            "Störungshotline 24/7",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-[#c1c8d0] text-[12.5px] py-1 border-b border-[#4d5a64]/30">
              <span className="text-[#fca31d] text-xs">—</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div
        className="absolute left-0 right-0 bg-[#fca31d] flex items-center justify-between px-7"
        style={{ top: 990, height: 80 }}
      >
        <div>
          <p className="text-[#1f1d1d] text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5">Kostenloses Beratungsgespräch</p>
          <p
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            className="text-[#1f1d1d] text-[22px] font-semibold leading-none"
          >
            0800 / 123 456 789
          </p>
        </div>
        <div className="text-right">
          <p className="text-[#1f1d1d]/70 text-[11px] mb-0.5">oder online anfragen</p>
          <p className="text-[#1f1d1d] text-[13px] font-semibold">www.hs-energiesysteme.de</p>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute left-0 right-0 bg-[#1f1d1d] flex items-center justify-between px-7"
        style={{ top: 1070, height: 53 }}
      >
        <div className="flex items-center gap-6">
          {["Willich", "Köln", "Solingen"].map((ort) => (
            <span key={ort} className="text-[#9dadae] text-[10px] tracking-widest uppercase">{ort}</span>
          ))}
        </div>
        <p className="text-[#4d5a64] text-[9px] tracking-wider uppercase">
          Zertifiziert nach DIN EN 14825 · Innungsmitglied SHK NRW
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Flyer 2: Fördermittel 2026 (hell/amber)                            */
/* ------------------------------------------------------------------ */
function FlyerFoerdermittel() {
  return (
    <div
      className="flyer-sheet relative overflow-hidden bg-[#f9f6f6]"
      style={{ width: 794, height: 1123, fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
    >
      {/* Top amber band */}
      <div className="absolute top-0 left-0 right-0 bg-[#fca31d]" style={{ height: 320 }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #1f1d1d 0%, transparent 60%)" }} />
      </div>

      {/* Graphite accent bar */}
      <div className="absolute top-0 left-0 w-2 bg-[#1f1d1d]" style={{ height: 320 }} />

      {/* Logo */}
      <div className="absolute top-7 left-9">
        <img src={logoDark} alt="H&S Energiesysteme" className="h-9" />
      </div>

      {/* Jahr Badge */}
      <div className="absolute top-7 right-7 bg-[#1f1d1d] px-4 py-2">
        <span className="text-[#fca31d] text-[11px] font-semibold tracking-[0.2em] uppercase">Stand 2026</span>
      </div>

      {/* Headline */}
      <div className="absolute left-9 right-7" style={{ top: 90 }}>
        <p className="text-[#1f1d1d]/60 text-[10.5px] font-semibold tracking-[0.22em] uppercase mb-3">
          Staatliche Förderung für Wärmepumpen
        </p>
        <h1
          style={{ fontFamily: "'Newsreader', Georgia, serif", lineHeight: 1.06 }}
          className="text-[#1f1d1d] text-[52px] font-semibold"
        >
          Bis zu 80 % Förderung sichern.*
        </h1>
        <p className="text-[#1f1d1d]/75 text-[14px] mt-3 leading-snug">
          Nutzen Sie die KfW-Heizungsförderung optimal – wir erstellen die technischen Nachweise und begleiten Ihren Antrag.
        </p>
      </div>

      {/* Foto */}
      <div className="absolute right-0" style={{ top: 320, width: 300, height: 260 }}>
        <img src={montageTeam} alt="H&S Montage-Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f9f6f6]/80" />
      </div>

      {/* Förderungs-Bausteine */}
      <div className="absolute left-9" style={{ top: 340, right: 290 }}>
        <div className="space-y-4">
          {[
            {
              prog: "KfW 458",
              pct: "30 %",
              bonus: "+ 16 % Klima-Bonus",
              desc: "Grundförderung plus möglicher Bonus beim qualifizierenden Austausch einer alten Heizung.",
            },
            {
              prog: "Einkommens-Bonus",
              pct: "bis 40 %",
              bonus: "Gestaffelt nach Haushaltseinkommen",
              desc: "Für die selbstgenutzte Hauptwohnung; mit Kind gelten erhöhte Einkommensgrenzen.",
            },
            {
              prog: "Förderhöchstbetrag",
              pct: "28.000 €",
              bonus: "für die erste Wohneinheit",
              desc: "Maximal 22.400 € Zuschuss bei erfüllten besonderen Voraussetzungen.",
            },
          ].map(({ prog, pct, bonus, desc }) => (
            <div key={prog} className="flex gap-3">
              <div className="flex-shrink-0 w-16 text-right">
                <span
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  className="text-[28px] font-semibold text-[#fca31d] leading-none"
                >
                  {pct}
                </span>
              </div>
              <div className="flex-1 border-l-2 border-[#fca31d] pl-3 pb-1">
                <p className="text-[#1f1d1d] text-[11.5px] font-semibold mb-0.5">{prog}</p>
                <p className="text-[#4d5a64] text-[10px] mb-1">{bonus}</p>
                <p className="text-[#4d5a64] text-[10px] leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trennlinie */}
      <div className="absolute left-9 right-7 h-px bg-[#c1c8d0]" style={{ top: 600 }} />

      {/* Rechenbeispiel */}
      <div className="absolute left-9 right-7" style={{ top: 616 }}>
        <p className="text-[#1f1d1d] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
          Rechenbeispiel: Luft-Wasser-Wärmepumpe
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Förderfähige Kosten", val: "28.000 €" },
            { label: "Grundförderung (30 %)", val: "−8.400 €", highlight: true },
            { label: "Klima-Bonus (16 %)", val: "−4.480 €", highlight: true },
            { label: "Ihr Eigenanteil", val: "15.120 €", big: true },
          ].map(({ label, val, highlight, big }) => (
            <div
              key={label}
              className={`p-3 ${big ? "bg-[#1f1d1d]" : highlight ? "bg-[#fca31d]/15" : "bg-[#e3e7ef]/50"}`}
            >
              <p className={`text-[9.5px] leading-snug mb-2 ${big ? "text-[#9dadae]" : "text-[#4d5a64]"}`}>{label}</p>
              <p
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                className={`text-[18px] font-semibold leading-none ${big ? "text-[#fca31d]" : highlight ? "text-[#1f1d1d]" : "text-[#1f1d1d]"}`}
              >
                {val}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[#9dadae] text-[9px] mt-2">* Beispielrechnung bei qualifizierendem Austausch einer alten Heizung: 46 % Zuschuss. Bis zu 80 % gelten nur unter den besonderen Einkommens- beziehungsweise Familienbedingungen. KfW-Konditionen seit 21.07.2026; alle Angaben ohne Gewähr.</p>
      </div>

      {/* Prozess */}
      <div className="absolute left-9 right-7" style={{ top: 800 }}>
        <p className="text-[#1f1d1d] text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
          So läuft es ab – wir begleiten Ihren Antrag
        </p>
        <div className="flex items-start gap-0">
          {[
            { n: "01", label: "Kostenlose Beratung & Energiecheck vor Ort" },
            { n: "02", label: "Angebot, Fördercheck & BzA durch H&S" },
            { n: "03", label: "Eigener Antrag im Portal Meine KfW" },
            { n: "04", label: "Installation & Inbetriebnahme durch Meister" },
            { n: "05", label: "Auszahlung der Förderung auf Ihr Konto" },
          ].map(({ n, label }, i, arr) => (
            <div key={n} className="flex-1 flex flex-col items-center text-center relative">
              <div className="w-9 h-9 rounded-full bg-[#fca31d] flex items-center justify-center text-[#1f1d1d] text-[11px] font-bold mb-2 relative z-10">
                {n}
              </div>
              {i < arr.length - 1 && (
                <div className="absolute top-4.5 left-1/2 right-0 h-px bg-[#fca31d]/40" style={{ left: "calc(50% + 18px)", right: "calc(-50% + 18px)" }} />
              )}
              <p className="text-[#4d5a64] text-[9.5px] leading-tight px-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="absolute left-0 right-0 bg-[#1f1d1d] flex items-center justify-between px-9"
        style={{ top: 978, height: 90 }}
      >
        <div>
          <p className="text-[#9dadae] text-[10px] tracking-widest uppercase mb-1">Jetzt Fördercheck starten</p>
          <p
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            className="text-[#fca31d] text-[26px] font-semibold leading-none"
          >
            0800 / 123 456 789
          </p>
        </div>
        <div className="h-12 w-px bg-[#4d5a64]" />
        <div>
          <p className="text-[#9dadae] text-[10px] mb-1">Online-Rechner &amp; Terminbuchung</p>
          <p className="text-[#f9f6f6] text-[13px] font-semibold">www.hs-energiesysteme.de/foerderung</p>
        </div>
        <div>
          <img src={logoDark} alt="H&S" className="h-8 invert brightness-200" />
        </div>
      </div>

      {/* Standorte Footer */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between px-9"
        style={{ top: 1068, height: 55 }}
      >
        <div className="flex gap-6">
          {[
            { ort: "Willich", tel: "02154 / 123 456" },
            { ort: "Köln", tel: "0221 / 987 654" },
            { ort: "Solingen", tel: "0212 / 345 678" },
          ].map(({ ort, tel }) => (
            <div key={ort} className="flex items-center gap-2">
              <span className="text-[#fca31d] text-[9px]">■</span>
              <div>
                <p className="text-[#1f1d1d] text-[10px] font-semibold">{ort}</p>
                <p className="text-[#4d5a64] text-[9px]">{tel}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#9dadae] text-[8.5px]">H&amp;S Energiesysteme GmbH · Meisterbetrieb SHK · Mitglied im BWP</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Flyer 3: Service & Wartung (erdige Mitte)                          */
/* ------------------------------------------------------------------ */
function FlyerService() {
  return (
    <div
      className="flyer-sheet relative overflow-hidden bg-[#2d353c]"
      style={{ width: 794, height: 1123, fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
    >
      {/* Amber bar top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#fca31d]" />

      {/* Split layout: linke Spalte Inhalt, rechte Spalte Foto */}
      {/* Foto rechts oben */}
      <div className="absolute top-1.5 right-0" style={{ width: 340, height: 480 }}>
        <img src={serviceLuefter} alt="Wärmepumpe Außengerät" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d353c] via-[#2d353c]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2d353c]" />
      </div>

      {/* Logo */}
      <div className="absolute top-7 left-8">
        <img src={logoDark} alt="H&S Energiesysteme" className="h-9 invert brightness-200" />
      </div>

      {/* Eyebrow + Headline */}
      <div className="absolute left-8" style={{ top: 96, right: 360 }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-[#fca31d]/40" />
          <span className="text-[#fca31d] text-[9.5px] font-semibold tracking-[0.25em] uppercase">Jahresservice & Wartung</span>
        </div>
        <h1
          style={{ fontFamily: "'Newsreader', Georgia, serif", lineHeight: 1.1 }}
          className="text-[#f9f6f6] text-[46px] font-semibold mb-5"
        >
          Ihre Anlage läuft. Jahr für Jahr.
        </h1>
        <p className="text-[#9dadae] text-[13.5px] leading-relaxed">
          Regelmäßige Wartung schützt Ihre Investition, sichert die Herstellergarantie und hält die Anlage im energetischen Optimum.
        </p>
      </div>

      {/* Wartungs-Pakete */}
      <div className="absolute left-8 right-8" style={{ top: 410 }}>
        <p className="text-[#fca31d] text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">Unsere Wartungspakete</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              name: "Basic",
              price: "149",
              freq: "1× jährlich",
              items: ["Sichtprüfung", "Druckcheck", "Filterwechsel", "Protokoll"],
            },
            {
              name: "Komfort",
              price: "229",
              freq: "2× jährlich",
              items: ["Alles aus Basic", "Kältemittelanalyse", "Systemoptimierung", "Priorität-Hotline"],
              highlight: true,
            },
            {
              name: "Premium",
              price: "349",
              freq: "2× + Notfall",
              items: ["Alles aus Komfort", "24/7 Notfall-Prio", "Kostenlose Kleinteile", "Loaner-Gerät"],
            },
          ].map(({ name, price, freq, items, highlight }) => (
            <div
              key={name}
              className={`relative p-5 ${highlight ? "bg-[#fca31d]" : "bg-[#1f1d1d]/60 border border-[#4d5a64]/50"}`}
            >
              {highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#1f1d1d] px-3 py-0.5">
                  <span className="text-[#fca31d] text-[8px] font-bold tracking-widest uppercase">Empfohlen</span>
                </div>
              )}
              <p className={`text-[11px] font-semibold tracking-widest uppercase mb-1 ${highlight ? "text-[#1f1d1d]/60" : "text-[#9dadae]"}`}>{name}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  className={`text-[34px] font-semibold leading-none ${highlight ? "text-[#1f1d1d]" : "text-[#f9f6f6]"}`}
                >
                  {price} €
                </span>
              </div>
              <p className={`text-[9.5px] mb-4 ${highlight ? "text-[#1f1d1d]/60" : "text-[#4d5a64]"}`}>{freq}</p>
              <div className="space-y-1.5">
                {items.map((item) => (
                  <div key={item} className={`flex items-center gap-2 text-[10.5px] ${highlight ? "text-[#1f1d1d]" : "text-[#c1c8d0]"}`}>
                    <span className={highlight ? "text-[#1f1d1d]" : "text-[#fca31d]"}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Foto unten links + Checkliste */}
      <div className="absolute left-8" style={{ top: 730, right: 360, height: 200 }}>
        <img src={montageKupfer} alt="Kupferrohre Montage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2d353c]/50" />
        <div className="absolute inset-0 p-5">
          <p className="text-[#fca31d] text-[10px] font-semibold tracking-widest uppercase mb-3">Was wir prüfen</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {["Kältekreislauf", "Hydraulik", "Regelungstechnik", "Elektroanschlüsse", "Kältemitteldruck", "Wärmetauscher"].map((p) => (
              <div key={p} className="flex items-center gap-1.5 text-[#f9f6f6] text-[10px]">
                <span className="text-[#fca31d] text-[8px]">▸</span>{p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rechts unten: Service-Info */}
      <div className="absolute right-8" style={{ top: 745, width: 310 }}>
        <div className="space-y-4">
          {[
            { icon: "📞", title: "Störungshotline 24/7", text: "Bei Ausfall Ihrer Anlage sind wir auch nachts und am Wochenende erreichbar." },
            { icon: "📋", title: "Wartungsprotokoll digital", text: "Alle Prüfwerte werden digital erfasst und an Sie per E-Mail übermittelt." },
            { icon: "🛡", title: "Garantieverlängerung", text: "Regelmäßige Wartung durch uns sichert und verlängert die Herstellergarantie." },
          ].map(({ icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <div className="text-xl leading-none mt-0.5">{icon}</div>
              <div>
                <p className="text-[#f9f6f6] text-[11.5px] font-semibold mb-1">{title}</p>
                <p className="text-[#9dadae] text-[10px] leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="absolute left-0 right-0 bg-[#fca31d] flex items-center justify-between px-8"
        style={{ top: 993, height: 76 }}
      >
        <div>
          <p className="text-[#1f1d1d]/60 text-[9.5px] tracking-widest uppercase mb-0.5">Wartungsvertrag abschließen</p>
          <p
            style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            className="text-[#1f1d1d] text-[22px] font-semibold leading-none"
          >
            0800 / 123 456 789
          </p>
        </div>
        <div className="text-right">
          <p className="text-[#1f1d1d]/60 text-[10px] mb-0.5">Jetzt Termin buchen</p>
          <p className="text-[#1f1d1d] text-[13px] font-semibold">www.hs-energiesysteme.de/service</p>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute left-0 right-0 bg-[#1f1d1d] flex items-center justify-between px-8"
        style={{ top: 1069, height: 54 }}
      >
        <img src={logoDark} alt="H&S" className="h-7 invert brightness-200 opacity-70" />
        <div className="flex gap-5">
          {["Willich", "Köln", "Solingen"].map((ort) => (
            <span key={ort} className="text-[#4d5a64] text-[9.5px] tracking-widest uppercase">{ort}</span>
          ))}
        </div>
        <p className="text-[#4d5a64] text-[9px]">Meisterbetrieb SHK · Mitglied BWP</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Flyer-Definitionen                                                  */
/* ------------------------------------------------------------------ */
const FLYERS = [
  {
    id: "waermepumpen",
    label: "Wärmepumpen-Angebot",
    desc: "Dunkler Hero, Leistungsübersicht, Kontakt-Strip",
    Component: FlyerWaermepumpen,
  },
  {
    id: "foerdermittel",
    label: "Fördermittel 2026",
    desc: "BAFA/KfW Förderrechner, Prozessschritte, Beispielrechnung",
    Component: FlyerFoerdermittel,
  },
  {
    id: "service",
    label: "Service & Wartung",
    desc: "Wartungspakete, Leistungsumfang, 24/7 Hotline",
    Component: FlyerService,
  },
] as const

/* ------------------------------------------------------------------ */
/*  FlyerPage                                                           */
/* ------------------------------------------------------------------ */
export default function FlyerPage() {
  const [activeId, setActiveId] = useState<string>("waermepumpen")
  const active = FLYERS.find((f) => f.id === activeId)!
  const ActiveFlyer = active.Component

  function handlePrint() {
    window.print()
  }

  return (
    <>
      <style>{PRINT_STYLE}</style>

      {/* Screen UI */}
      <div className="min-h-screen bg-[#e3e7ef] py-12 px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[#4d5a64] text-[10px] tracking-[0.22em] uppercase font-semibold mb-2">H&amp;S Energiesysteme</p>
            <h1
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              className="text-[#1f1d1d] text-4xl font-semibold"
            >
              Flyer-Generator
            </h1>
            <p className="text-[#4d5a64] text-sm mt-1">Druckfertige A4-Vorlagen im Corporate Design</p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-3 bg-[#fca31d] hover:bg-[#f59e0b] text-[#1f1d1d] font-semibold text-sm px-6 py-3 transition-colors duration-150 cursor-pointer"
          >
            <span>⬇</span>
            Als PDF drucken
          </button>
        </div>

        {/* Flyer-Auswahl */}
        <div className="max-w-5xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {FLYERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              className={`text-left p-4 border-2 transition-all duration-150 cursor-pointer ${
                f.id === activeId
                  ? "border-[#fca31d] bg-white shadow-md"
                  : "border-transparent bg-white/60 hover:bg-white/90"
              }`}
            >
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${f.id === activeId ? "text-[#fca31d]" : "text-[#9dadae]"}`}>
                {f.id === activeId ? "● Aktiv" : "○ Vorlage"}
              </p>
              <p className="text-[#1f1d1d] text-[13px] font-semibold mb-0.5">{f.label}</p>
              <p className="text-[#4d5a64] text-[11px]">{f.desc}</p>
            </button>
          ))}
        </div>

        {/* Flyer Preview (skaliert auf Viewport) */}
        <div className="max-w-5xl mx-auto flex justify-center">
          <div style={{ transform: "scale(0.78)", transformOrigin: "top center", marginBottom: -240 }}>
            <div id="flyer-print-root" style={{ display: "block" }}>
              <div
                className="shadow-2xl"
                style={{ width: 794 }}
              >
                <ActiveFlyer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
