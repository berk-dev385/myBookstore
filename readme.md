# BPG Bookstore 385

Ein interaktives Bookstore-Projekt aus dem JavaScript-Modul der Developer Akademie.

Die Anwendung präsentiert neun fiktive Fachbücher aus den Bereichen Logistik, Supply Chain Management, Aviation, Führung und Projektmanagement. Das Projekt verbindet JavaScript-Grundlagen mit einer interaktiven Benutzeroberfläche im BPG-SlotPlan-Design.

## Projektfunktionen

- [x] Neun Bücher dynamisch aus einem JavaScript-Array darstellen
- [x] Titel, Autor, Genre, Erscheinungsjahr und Preis anzeigen
- [x] Vier Bilder pro Buch (36 Bilder insgesamt)
- [x] Unabhängiges Bild-Carousel für jedes Buch
- [x] Carousel-Navigation mit Pfeilen und vier Navigationspunkten
- [x] Hover-Zoom für die Buchbilder
- [x] Like- und Unlike-Funktion mit wechselnden Herz-Icons
- [x] Vorhandene Kommentare anzeigen
- [x] Neue Kommentare mit Name und Text hinzufügen
- [x] Leere Kommentare verhindern
- [x] Kommentare in einzelnen transparenten Kacheln darstellen
- [x] Likes und Kommentare über `localStorage` speichern
- [x] Gespeicherte Daten beim Seitenstart wiederherstellen
- [x] Responsive Darstellung für Smartphone, Tablet und Desktop
- [x] Funktions- und Responsivtests durchgeführt
- [x] HTML-Template in eine separate JavaScript-Datei ausgelagert

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5.3.9
- Browser `localStorage`
- Git und GitHub
- Visual Studio Code

## Projektstruktur

```text
myBookstore/
├── index.html
├── db.js
├── script.js
├── style.css
├── readme.md
├── scripts/
│   └── templates.js
└── assets/
    ├── icon/
    │   ├── heart-outline.png
    │   └── heart-filled.png
    └── img/
        ├── book-01.webp
        ├── book-01-page-01.webp
        ├── book-01-page-02.webp
        ├── book-01-back.webp
        └── ... weitere Bilder bis book-09
```

## JavaScript-Architektur

**`db.js` – Datenbasis**

Enthält das `books`-Array mit neun Buchobjekten, Buchinformationen, Like-Zuständen und Kommentaren.

**`scripts/templates.js` – HTML-Vorlage**

Die Funktion `getBookTemplate(index)` erzeugt die HTML-Struktur einer Buchkarte mit Bildergalerie, Buchinformationen, Like-Button und Kommentarbereich.

**`script.js` – Anwendungslogik**

- `renderBooks()` – Buchkarten erzeugen
- `showBookSlide()` – Gewünschtes Carousel-Bild anzeigen
- `changeBookSlide()` – Zwischen den Bildern wechseln
- `renderComments()` – Kommentare eines Buchs darstellen
- `toggleLike()` – Likes hinzufügen oder entfernen
- `addComment()` – Neue Kommentare hinzufügen
- `saveBooks()` – Buchdaten im Browser speichern
- `loadBooks()` – Gespeicherte Buchdaten laden

Die HTML-Vorlage ist von der Anwendungslogik getrennt.

## Design und Responsivität

Die Benutzeroberfläche orientiert sich am BPG SlotPlan:

- Dunkler Hintergrund
- Halbtransparente Glasflächen
- Cyanfarbene Konturen und Akzente
- Transparente Eingabefelder und Kommentar-Kacheln
- Individuelle Carousel-Navigation
- Hover-Effekte und responsives Layout

Die Darstellung wurde bei 320 px, 768 px und 1440 px Bildschirmbreite getestet.

## Datenspeicherung

Likes und neu hinzugefügte Kommentare werden als JSON im `localStorage` des Browsers gespeichert.

Beim erneuten Laden der Webseite werden die gespeicherten Daten wiederhergestellt. Sind keine gespeicherten Daten vorhanden, werden die Standardwerte aus `db.js` verwendet.

Die Speicherung erfolgt ausschließlich lokal im jeweiligen Browser. Es gibt keine zentrale Datenbank oder Synchronisierung zwischen verschiedenen Geräten.

## Projekt starten

1. Repository herunterladen oder klonen.
2. Projektordner in Visual Studio Code öffnen.
3. `index.html` mit Live Server starten.
4. Die neun Bücher im Browser betrachten.
5. Carousel, Likes und Kommentare ausprobieren.

Eine separate Installation von JavaScript-Paketen ist nicht erforderlich. Bootstrap wird über ein CDN eingebunden.

## Projektstatus

**Funktionsentwicklung und Carousel abgeschlossen.**

Die Kernfunktionen, das SlotPlan-Design und die responsive Darstellung wurden getestet. Die abschließende Projektdokumentation und GitHub-Sicherung sind Bestandteil der finalen Übergabe.

---

Entwickelt im Rahmen der Full-Stack-Weiterbildung an der Developer Akademie.
