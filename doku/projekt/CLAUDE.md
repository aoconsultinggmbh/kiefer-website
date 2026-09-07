---
titel: CLAUDE.md — Projekt Kiefer-Webseite
kategorie: Steuerung
kurzbeschreibung: Einstiegspunkt für jede Session im Projekt „Neue Webseite S. Kiefer GmbH Dentallabor". Was das Projekt ist, wie der Ordner aufgebaut ist, welche Regeln gelten, wie das Agenten-Team arbeitet.
stand: 2026-08-11
version: 1.0
---

# Projekt: Neue Webseite für S. Kiefer GmbH Dentallabor

## Was ist das Projekt?

Die **S. Kiefer GmbH Dentallabor** (Im Hummelacker 13, 75180 Pforzheim-Büchenbronn, seit 1976, Tel. 07231 7798200) bekommt eine neue Unternehmenswebseite. Zielgruppe: **Zahnarztpraxen** (B2B) in Pforzheim und Region bis Stuttgart.

- **Die aktuelle Divi-Seite** (https://bdvsp.myrdbx.io/) gefällt nicht — sie liefert aber die **Textbasis** (Freigabe von Admir am 11.08.2026).
- **Design-Vorbild ist die Karriereseite** in `../dental-kiefer-karriere-website/` — deren Design-System (Farben, Fonts, Sektionen, CSS-Klassen) wird 1:1 übernommen. Der Kunde fand dieses Layout „richtig geil".
- **Technik: statisches HTML/CSS/JS** wie die Karriereseite. Kein Framework, kein Build-Schritt, kein Node — läuft per Doppelklick im Browser und auf jedem Hoster.
- **Deadline: Donnerstag, 13.08.2026** — Ovidiu präsentiert dem Kunden. Lokale Version reicht, muss aber als ZIP an Ovidiu verschickbar sein.

## Wo liegt was?

```
Projekt-Kiefer-Webseite/
├── 00_projekt/          ← Diese Datei · INDEX.md · status.md · stufenplan.md
├── 01_stufe-1_fundament-und-material/   ← Transkript, Bildauswahl, Textbasis
├── 02_stufe-2_design-und-startseite/
├── 03_stufe-3_leistungsseite-recht-formular/
├── 04_stufe-4_qualitaet-und-feinschliff/
├── 05_stufe-5_uebergabe-praesentation/
├── 06_stufe-6_seo-geo-ausbau/           ← nach Donnerstag
├── 99_archiv/
└── website/             ← DIE SEITE SELBST. index.html per Doppelklick öffnen.
```

Material außerhalb dieses Ordners (nur lesend):
- `../dental-kiefer-karriere-website/` — Design-Referenz (style.css, fonts.css, app.js, Impressum/Datenschutz-Muster)
- `../AO Consulting - Kiefer Dental-Labor/` — Fotoshooting, 384 Bilder (Hauptquelle)
- `../iwanartemjew_AO_Consulting_-_Dentallabor_Kiefer/` — zweites Shooting, 226 Bilder
- `../audio1651570172.m4a` — Beratungsgespräch (~40 min), transkribiert in Stufe 1

## Regeln

1. **Session-Start:** erst `CLAUDE.md` → `INDEX.md` → `status.md` lesen, dann an der laut status.md nächsten Stufe arbeiten.
2. **Session-Ende:** keine Session endet, bevor `INDEX.md` und `status.md` aktuell sind.
3. **Design-System nicht erfinden:** Farben, Typo und Komponenten kommen aus der Karriereseite. Neue Komponenten nur im selben Stil.
4. **Keine Zahl auf die Seite ohne Quelle.** Freigegebene Quellen: **Leistungsspektrum-Dokument von Sandra Kiefer** (in `01_stufe-1_fundament-und-material/input/`, maßgeblich für alle Leistungen; enthält auch: Teleskoparbeiten in 2 Sitzungen, 10 Jahre Garantie auf Friktion bei NEM-Teleskopen, Werkstoffliste inkl. Hochgold/PEEK/Multilayer, Hinweis „stark an Leuchtner Zahntechnik orientieren"), Karriereseite (seit 1976, 25+ Team, Ø 25 Jahre Zugehörigkeit, Standort seit 1999), Divi-Seite (Fahrdienst, Einzugsgebiet, Ablauf). Alles andere → nachfragen.
5. **Kontaktformular ist Demo:** öffnet das E-Mail-Programm (mailto), Ziel-Adresse ist noch offen. Vor Livegang klären.
6. **Karriere im Header:** nur Menüpunkt, ohne Link (Wunsch Admir, 11.08.2026).
7. **Keine Gedankenstriche („—") in sichtbaren Texten** (KI-Marker, Wunsch Admir, 11.08.2026). Bereichsangaben wie „Mo–Do 8–18" sind okay.
8. **Bei Personenbildern in Zuschnitten: keine abgeschnittenen Köpfe** (object-position setzen, siehe bildkatalog.md). Bilder vor Verwendung immer selbst ansehen.
9. **Kontaktformular fragt E-Mail UND Telefonnummer ab** (beides Pflicht, Wunsch Admir, 11.08.2026).
10. **Nichts geht live** ohne Datenschutz-Prüfung und Freigabe (Stufe 6 ff.).
11. **Andere Ordner auf dem Desktop nicht anfassen** — alles Neue entsteht in `Silvan Kiefer/`.

## Agenten-Team

**Teamleiter = stärkstes verfügbares Modell** (aktuell Claude Fable 5). Bei ihm bleiben: Planung, Architektur, alle HTML/CSS/JS-Arbeit an der Seite, alle Texte, Qualitätskontrolle, finale Entscheidungen.

**Subagenten (kleinere Modelle, z. B. Haiku)** übernehmen eng umrissene Fleißarbeit: Bilder sichten und beschreiben, Transkripte zusammenfassen, Recherche, Prüflisten. Jeder bekommt nur den nötigen Kontext, liefert komprimiert zurück, ändert nichts selbst. **Der Teamleiter prüft jedes Ergebnis** (z. B. Bildauswahl selbst ansehen), bevor es in die Seite kommt. Im Zweifel macht er es selbst.

Bewährt in Stufe 1: 5 Haiku-Agenten für Bildsichtung (Ergebnis in `01_.../output/bildkatalog.md`), 1 Agent für Transkript-Auswertung.
