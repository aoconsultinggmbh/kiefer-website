---
titel: INDEX.md — Routing Projekt Kiefer-Webseite
kategorie: Steuerung
kurzbeschreibung: Eine Zeile pro Datei — was drin ist und wofür es gebraucht wird. Bei jeder Änderung sofort aktualisieren.
stand: 2026-08-11
---

# INDEX

| Pfad | Inhalt (Stichworte) | Wofür relevant |
|---|---|---|
| `00_projekt/CLAUDE.md` | Projektauftrag, Regeln, Agenten-Team, freigegebene Zahlenquellen | **Immer zuerst lesen** |
| `00_projekt/stufenplan.md` | 6 Stufen mit Zwischenzielen, Arbeitsprompts, Start-/Abschluss-Prompt | Was in welcher Stufe zu tun ist |
| `00_projekt/status.md` | Stand je Stufe, nächster Schritt, offene Entscheidungen | Wo weitermachen |
| `01_stufe-1_fundament-und-material/output/transkript-aufzeichnung-roh.md` | Whisper-Transkript des Beratungsgesprächs (~40 min), mit Zeitstempeln | O-Töne, Wünsche des Kunden |
| `01_stufe-1_fundament-und-material/output/transkript-auswertung.md` | Kernpunkte aus dem Transkript (Subagent) | Schnellzugriff statt Rohfassung |
| `01_stufe-1_fundament-und-material/output/bildkatalog.md` | ~160 gesichtete Fotos mit Kategorie/Format/Hero-Eignung, Empfehlungen je Sektion | Bildauswahl für alle Seiten |
| `01_stufe-1_fundament-und-material/output/textbasis-divi.md` | Texte der aktuellen Divi-Seite (bdvsp.myrdbx.io), von Admir als Basis freigegeben | Quelltexte für alle Sektionen |
| `01_stufe-1_fundament-und-material/input/Leistungsspektrum für neue Homepage[66].docx` | **Offizielles Leistungsspektrum von Sandra Kiefer** | Maßgebliche Quelle für alle Leistungen |
| `website/index.html` | Startseite (Onepager) | Das Produkt |
| `website/ueber-uns.html` | Über-uns-Seite: Geschichte, Werte, Team-Zitate, Porträts, Ganzteam-Foto. Hinweiskasten markiert offene Kundeninputs | In der Hauptnavigation |
| `website/leistungen/` | Alle 6 Leistungsseiten (digitale-zahntechnik, festsitzender-zahnersatz, herausnehmbarer-zahnersatz, schienen-kfo, provisorien, reparaturen-service), je mit FAQ + Schema.org | SEO/GEO, untereinander verlinkt |
| `website/impressum.html`, `website/datenschutz.html` | Rechtsseiten (Basis Karriereseite, vor Livegang verifizieren) | Pflichtseiten |
| `website/assets/css/style.css` | Design-System (Kopie Karriereseite + Ergänzungen am Dateiende) | Alle Seiten |
| `website/assets/fonts/fonts.css` | Fira Sans als data-URI (Kopie Karriereseite) | Alle Seiten |
| `website/assets/js/app.js` | Header, Reveal, Zähler, FAQ, Kontaktformular (Demo: mailto) | Alle Seiten |
| `website/assets/img/` | Optimierte Bilder (aus den Fotoordnern, per sips verkleinert) | Alle Seiten |
| `website/sitemap.xml`, `website/robots.txt` | SEO-Grundausstattung (Domain-Platzhalter www.dental-kiefer.de) | Livegang / Google |
| `05_stufe-5_uebergabe-praesentation/output/website-kiefer-vorschau.zip` | Aktuelle Version als ZIP (dunkler Hero, WhatsApp), mit START-HIER.html + LIESMICH.txt für Windows | Aktueller Stand zum Verschicken |
| `05_stufe-5_uebergabe-praesentation/output/website-kiefer-STAND-PRAESENTATION-13-08.zip` | Rekonstruierter Präsentations-Stand vom 13.08. (heller Hero, ohne WhatsApp), Windows-sicher verpackt | Feedback-Basis fürs Labor, am 19.08. an Sandra Kiefer geschickt |
| `05_stufe-5_uebergabe-praesentation/output/praesentationsnotiz.html` + `.pdf` | Gestaltete Präsentationsnotiz im KIEFER-Look (HTML im Browser öffnen oder PDF verschicken); `.md` ist die Rohfassung | **An Ovidiu schicken** / Vorbereitung Kundentermin Do. |

## Externe Quellen (nur lesend)
| Pfad | Inhalt | Wofür |
|---|---|---|
| `../dental-kiefer-karriere-website/` | Design-Referenz: style.css, app.js, Seitenmuster, Impressum/Datenschutz | Stil-Vorbild, Rechtstext-Basis |
| `../AO Consulting - Kiefer Dental-Labor/` | 384 Fotos Shooting (nummeriert „N - Kiefer_M.jpg") | Bildquelle |
| `../iwanartemjew_AO_Consulting_-_Dentallabor_Kiefer/` | 226 Fotos zweites Shooting | Bildquelle (wärmer, dokumentarischer) |
| `../audio1651570172.m4a` | Beratungsgespräch Audio | Bereits transkribiert |
