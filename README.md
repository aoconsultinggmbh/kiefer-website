# Webseite S. Kiefer GmbH Dentallabor (Pforzheim)

Dieses Projekt enthält die neue Webseite des **Dentallabors Kiefer** in Pforzheim
(Domain: `www.dental-kiefer.de`), betreut von **AO Consulting GmbH**.

Die Seite ist eine **statische Webseite**: nur HTML, CSS, Bilder und Schriften.
Kein WordPress, keine Datenbank, keine Plugins. Schriften sind direkt eingebettet,
es geht keine Anfrage an Google oder andere Dritte.

## So ist das Projekt aufgebaut

| Ordner / Datei | Was drin ist |
|---|---|
| `website/` | **Die eigentliche Webseite.** Alles hier wird veröffentlicht. |
| `website/index.html` | Startseite |
| `website/ueber-uns.html` | Über uns |
| `website/leistungen/` | Sechs Leistungsseiten |
| `website/impressum.html`, `website/datenschutz.html` | Rechtsseiten (**Entwürfe**, vor Livegang prüfen) |
| `website/assets/` | Design (`css/style.css`), Schriften (`fonts/fonts.css`), Bilder (`img/`), Skript (`js/app.js`) |
| `doku/livegang-anleitung.md` | Anleitung in leichter Sprache: Hoster, Automatik, Domain, Formular |
| `doku/onboarding-checkliste-mitarbeiter.md` | Checkliste zum Freischalten von Mitarbeitern |
| `doku/projekt/` | Projekt-Doku aus der Entwicklung: Stufenplan, Status, Kundenfeedback, Präsentationsnotiz |
| `.github/workflows/` | Die Automatik: Vorschau bei jeder Änderung, Livegang nach Freigabe |

## Wo die Seite zu sehen ist

- **Vorschau** (Zweig `main`, für Suchmaschinen gesperrt): **https://kiefer.vorschau.ao-consult.de/**
- **Echte Adresse** (Zweig `live`, nach dem Livegang): `https://www.dental-kiefer.de`

## So werden Änderungen gemacht

1. Kunde oder wir beschreiben die Änderung.
2. Claude bekommt den persönlichen GitHub-Schlüssel des Mitarbeiters und die Beschreibung:
   „Kiefer: bitte … ändern. Schlüssel: github_pat_…"
3. Claude ändert die Dateien in `website/` und lädt sie hoch. Nach 1–2 Minuten steht der
   neue Stand auf der **Vorschau**. Die echte Seite bleibt unverändert.
4. Prüfen, ggf. Kunde fragen. Wenn alles passt: **Freigabe** („Gib die Änderungen bei Kiefer frei").
   Claude übernimmt den Stand nach `live`, die Automatik lädt ihn auf den echten Server.

Jede Änderung steht unter **„Commits"** und kann rückgängig gemacht werden.

## Offene Punkte vor dem Livegang (Stand 04.09.2026)

- **Kontaktformular** öffnet aktuell nur das E-Mail-Programm (`mailto:`). Für den Livegang
  braucht es `kontakt.php` auf dem Hoster (siehe Livegang-Anleitung, Abschnitt 5).
- **Impressum und Datenschutz** sind Entwürfe: Angaben mit dem Kunden prüfen, Hoster eintragen,
  Formular-Abschnitt ergänzen, anwaltlich prüfen lassen.
- **Domain `dental-kiefer.de`**: Wo liegt sie, wer hostet die alte Seite? Vor der Umstellung klären.
- **Freigabe der Texte** durch Sandra Kiefer (Leistungsspektrum ist bereits eingearbeitet).
- Sprachnachricht von Sandra Kiefer vom 02.09.2026 (Transkript in `doku/projekt/05_uebergabe/`):
  prüfen, ob alle Punkte umgesetzt sind.

## Wichtige Regeln

- Keine externen Schriften, Skripte oder Einbettungen. Die Seite lädt ohne Fremdanfragen, das muss so bleiben.
- Neue Bilder als WebP + JPG mit sprechendem Dateinamen, `width`/`height` im HTML angeben.
- Impressum und Datenschutz nur nach Rücksprache mit dem Kunden ändern.
- Die Texte enthalten bewusst **keine Gedankenstriche** („—"), Kundenwunsch. Beim Schreiben beachten.
