---
titel: Stufenplan — Webseite S. Kiefer GmbH Dentallabor
kategorie: Steuerung
kurzbeschreibung: 6 Stufen von Material bis SEO/GEO, mit Zwischenzielen, Arbeitsprompts, Inputs/Outputs und Start-/Abschluss-Prompts.
stand: 2026-08-11
version: 1.0
---

# Stufenplan

> Deadline-Logik: Stufen 1–5 bis **Mittwochabend 12.08.2026**, damit Donnerstag Puffer bleibt. Stufe 6 nach der Präsentation.

---

## Stufe 1 — Fundament & Material

**Zwischenziel (messbar):** Transkript der Aufnahme liegt als Datei vor + Auswertung mit Kernpunkten. Bildkatalog mit Kategorien und Empfehlungen existiert. Textbasis (Divi-Seite + dental-kiefer.de + Karriereseite) ist gesichert. Alle in `01_stufe-1_fundament-und-material/output/`.

**Arbeitsprompt:**
> Lies CLAUDE.md, INDEX.md, status.md in 00_projekt. Transkribiere die Aufnahme `../audio1651570172.m4a` (faster-whisper, Deutsch) nach `01_stufe-1_fundament-und-material/output/transkript-aufzeichnung-roh.md` und lass einen Subagenten die webseiten-relevanten Kernpunkte nach `transkript-auswertung.md` extrahieren. Lass Subagenten die Fotoordner sichten (Kategorie, Format, Hero-Eignung je Bild) und konsolidiere das als `bildkatalog.md`. Sichere die Texte der aktuellen Divi-Seite (https://bdvsp.myrdbx.io/) als `textbasis-divi.md`. Aktualisiere status.md und INDEX.md.

**Inputs:** Audio, 2 Fotoordner, Divi-Seite, Karriereseite. **Outputs:** transkript-aufzeichnung-roh.md, transkript-auswertung.md, bildkatalog.md, textbasis-divi.md.

---

## Stufe 2 — Design-System & Startseite

**Zwischenziel (messbar):** `website/index.html` öffnet per Doppelklick und zeigt: Header mit Logo/Nav/Karriere-Punkt (ohne Link), Hero mit Bildstapel, Kennzahlen-Zähler, 6 Leistungs-Karten, „Warum KIEFER"-Sektion (dunkel), Bilder-Laufband, Ablauf in 4 Schritten, Einzugsgebiet, FAQ, Kontaktformular (Demo-Modus), Footer. Optisch nicht von der Design-Sprache der Karriereseite zu unterscheiden. Responsiv (Handy-Breite geprüft).

**Arbeitsprompt:**
> Lies CLAUDE.md, status.md und die Stufe-1-Outputs. Kopiere aus `../dental-kiefer-karriere-website/assets/` die Dateien style.css, fonts.css und das Logo nach `website/assets/`. Übernimm app.js als Basis (Modal-Teil kann entfallen, Formular-Handling fürs Kontaktformular anpassen, Demo-Modus mailto). Wähle Bilder laut bildkatalog.md, prüfe jedes verwendete Bild selbst per Read, verkleinere mit sips nach `website/assets/img/`. Baue index.html mit den Sektionen aus dem Zwischenziel; Texte aus textbasis-divi.md verfeinern, Zahlen nur aus freigegebenen Quellen (CLAUDE.md Regel 4). Prüfe im Browser (Desktop + 375px) und korrigiere.

**Inputs:** Stufe-1-Outputs, Karriereseiten-Assets. **Outputs:** website/index.html, website/assets/* .

---

## Stufe 3 — Leistungsseite, Recht & Formular

**Zwischenziel (messbar):** Eine Leistungs-Unterseite (Digitale Zahntechnik) ist von der Startseite verlinkt und im selben Stil. impressum.html und datenschutz.html existieren (Basis: Karriereseite, angepasst auf Unternehmensseite + Kontaktformular). Formular validiert und öffnet E-Mail-Programm.

**Arbeitsprompt:**
> Lies CLAUDE.md, status.md. Baue `website/leistungen/digitale-zahntechnik.html` nach dem Muster der Stellen-Unterseiten der Karriereseite (Hero, Inhaltsspalte, Seitenspalte mit Kontakt-Karte, weitere Leistungen unten). Passe impressum.html/datenschutz.html von der Karriereseite an (Formular statt Bewerbung; Hinweis: Betreiberangaben vor Livegang verifizieren). Verlinke alles, prüfe alle Links.

**Inputs:** Stufe-2-Seite, Karriereseiten-Unterseiten als Muster. **Outputs:** leistungen/digitale-zahntechnik.html, impressum.html, datenschutz.html.

---

## Stufe 4 — Qualität & Feinschliff

**Zwischenziel (messbar):** Seite in Desktop- und Mobilbreite per Screenshot geprüft, keine Konsolen-Fehler, alle Bilder laden, alle internen Links funktionieren, Meta-Tags/OG/Schema.org auf jeder Seite, Ladegewicht der Startseite unter ~2,5 MB.

**Arbeitsprompt:**
> Lies CLAUDE.md, status.md. Öffne die Seite im Browser, mache Screenshots (Desktop 1280, Mobil 375), prüfe Konsole und Netzwerk auf Fehler und 404s. Prüfe jede Sektion gegen die Design-Referenz. Prüfe Schema.org (DentalLaboratory/Organization), Title/Description je Seite, alt-Texte. Behebe alles Gefundene. Dokumentiere in `04_.../output/pruefprotokoll.md`.

**Outputs:** pruefprotokoll.md, korrigierte Seite.

---

## Stufe 5 — Übergabe & Präsentation

**Zwischenziel (messbar):** `website-kiefer-vorschau.zip` liegt in `05_.../output/`, entpackt öffnet index.html fehlerfrei per Doppelklick. Eine Präsentationsnotiz für Ovidiu (was zeigen, was sagen, was noch offen) liegt daneben.

**Arbeitsprompt:**
> Lies CLAUDE.md, status.md. Packe den website/-Ordner als ZIP nach `05_stufe-5_uebergabe-praesentation/output/website-kiefer-vorschau.zip`. Teste: ZIP an anderen Ort entpacken, index.html öffnen, durchklicken. Schreibe `praesentationsnotiz.md`: Reihenfolge der Sektionen beim Zeigen, 3 Design-Argumente gegenüber der alten Divi-Seite, offene Punkte (E-Mail-Ziel des Formulars, weitere Leistungsseiten, Hosting/Domain, Karriere-Verlinkung). Aktualisiere status.md und INDEX.md.

**Outputs:** website-kiefer-vorschau.zip, praesentationsnotiz.md.

---

## Stufe 6 — SEO & GEO-Ausbau (nach Donnerstag)

**Zwischenziel (messbar):** Je Leistung eine eigene Unterseite (5 weitere), sitemap.xml, robots.txt, durchgängige interne Verlinkung, FAQ mit Schema.org-FAQPage, Standort-/Einzugsgebiet-Inhalte („Dentallabor Pforzheim" u. Umland), Ladezeit-Check. Erst nach Kundenfreigabe der Texte.

**Arbeitsprompt:**
> Lies CLAUDE.md, status.md und die Kundenfreigaben. Baue die 5 restlichen Leistungs-Unterseiten nach dem Muster von digitale-zahntechnik.html (Vollkeramik, Teleskoptechnik, Implantatprothetik, Kombitechnik, Reparaturen & Service), jeweils mit eigenem Title/Description, FAQ-Block und Schema.org. Ergänze sitemap.xml + robots.txt, prüfe Keyword-Abdeckung „Dentallabor Pforzheim" + Leistungsbegriffe, ohne Keyword-Stuffing. GEO: klare Fakten-Absätze (wer, was, wo, seit wann), zitierfähige FAQ-Antworten.

**Outputs:** 5 Leistungsseiten, sitemap.xml, robots.txt, seo-protokoll.md.

---

## Start-Prompt für jede neue Session

> Lies in „Silvan Kiefer/Projekt-Kiefer-Webseite/00_projekt/" die Dateien CLAUDE.md, INDEX.md und status.md. Arbeite dann an der laut status.md nächsten offenen Stufe nach deren Arbeitsprompt im stufenplan.md. Frag nach, bevor du etwas entscheidest, das die Seite prägt.

## Abschluss-Prompt für jede Stufe

> Schließe die aktuelle Stufe ab: Prüfe das Zwischenziel aus stufenplan.md Punkt für Punkt und benenne, was erfüllt ist und was nicht. Aktualisiere status.md (Stufe, Stand, nächster Schritt) und INDEX.md (neue Dateien). Schreibe in die notizen.md der Stufe, was eine künftige Session wissen muss.
