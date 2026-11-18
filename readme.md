# BPG 385-BOOKSTORE

**Wissen, an einem Ort.**

Ein interaktives Bookstore-Projekt, entwickelt im Rahmen des JavaScript-Moduls der Developer Akademie.

Das Projekt präsentiert neun fiktive Fachbücher aus den Bereichen Logistik, Supply Chain Management, Aviation, Führung und Projektmanagement.

Ziel der Anwendung ist es, grundlegende JavaScript-Konzepte praktisch umzusetzen und eine benutzerfreundliche, responsive Webseite zu entwickeln.

## Projektfunktionen

- [x] Neun Bücher dynamisch aus einem JavaScript-Array darstellen
- [x] Buchtitel, Autor, Genre, Erscheinungsjahr und Preis anzeigen
- [x] Vier Bilder pro Buch (insgesamt 36 WebP-Bilder)
- [x] Individuelles Bilder-Carousel für jedes Buch
- [x] Navigation über Pfeile und vier Navigationspunkte
- [x] Hover-Effekte für Buchbilder
- [x] Like- und Unlike-Funktion mit wechselnden Herzsymbolen
- [x] Vorhandene Kommentare anzeigen
- [x] Neue Kommentare mit Name und Text hinzufügen
- [x] Leere Kommentareingaben verhindern
- [x] Likes und Kommentare im localStorage speichern
- [x] Gespeicherte Daten beim erneuten Seitenaufruf laden
- [x] Responsives Layout für Smartphone, Tablet und Desktop
- [x] Eigenständiger Seitenheader mit Navigation zum Buchkatalog
- [x] Favicon und aussagekräftiger Seitentitel
- [x] HTML-Templates in eine separate JavaScript-Datei auslagern
- [x] JavaScript-Funktionen modular und übersichtlich strukturieren

## Verwendete Technologien

- HTML5 – Semantische Grundstruktur
- CSS3 – Design, Layout und responsive Darstellung
- JavaScript – Dynamische Inhalte und Benutzerinteraktionen
- Bootstrap 5.3.9 – CSS-Framework über CDN
- localStorage – Lokale Datenspeicherung
- WebP – Optimierte Buchbilder
- Git und GitHub – Versionsverwaltung
- Visual Studio Code – Entwicklungsumgebung

Es werden keine zusätzlichen JavaScript-Frameworks benötigt.

## Projektstruktur

```text
myBookstore/
├── index.html
├── style.css
├── db.js
├── script.js
├── readme.md
├── scripts/
│   └── templates.js
└── assets/
    ├── icon/
    │   ├── heart-filled.png
    │   └── heart-outline.png
    └── img/
        ├── book-01.webp
        ├── book-01-page-01.webp
        ├── book-01-page-02.webp
        ├── book-01-back.webp
        └── ... bis book-09
```

## JavaScript-Architektur

Die JavaScript-Anwendung ist in drei Bereiche aufgeteilt.

### db.js – Datenbasis

Die Datei enthält das Array `books` mit neun Buchobjekten.

Jedes Buch besitzt folgende Eigenschaften:

- `name` – Buchtitel
- `author` – Autor
- `likes` – Anzahl der Likes
- `liked` – Aktueller Like-Zustand
- `price` – Buchpreis
- `publishedYear` – Erscheinungsjahr
- `genre` – Buchgenre
- `comments` – Vorhandene Kommentare

Die Buchdaten dienen als Grundlage für die dynamische Darstellung.

### scripts/templates.js – HTML-Templates

Diese Datei enthält die Funktionen zur Erzeugung der HTML-Struktur.

Wichtige Funktionen:

- `escapeHtml()` – Sonderzeichen für HTML absichern
- `getBookSlide()` – Einzelnes Carousel-Bild erstellen
- `getBookHeader()` – Buchtitel erzeugen
- `getCarouselArrow()` – Navigationspfeil erstellen
- `getCarouselDot()` – Navigationspunkt erstellen
- `getCarouselNavigation()` – Carousel-Navigation zusammensetzen
- `getBookInfo()` – Buchinformationen darstellen
- `getBookActions()` – Preis und Like-Button darstellen
- `getBookComments()` – Kommentarbereich erstellen
- `getCommentForm()` – Kommentareingabe erstellen
- `getBookCarousel()` – Bildergalerie zusammensetzen
- `getBookCard()` – Vollständige Buchkarte erstellen
- `getBookTemplate()` – Buchdaten aufbereiten und HTML-Erstellung aufrufen

Die Aufteilung in kleinere Funktionen verbessert Übersichtlichkeit, Lesbarkeit und Wartbarkeit.

### script.js – Anwendungslogik

Diese Datei steuert die Interaktionen der Webseite.

Wichtige Funktionen:

- `renderBooks()` – Alle Buchkarten anzeigen
- `showBookSlide()` – Ausgewähltes Bild anzeigen
- `changeBookSlide()` – Zwischen Bildern wechseln
- `createCommentElement()` – Kommentar-Element erstellen
- `renderComments()` – Kommentare anzeigen
- `toggleLike()` – Like-Zustand wechseln
- `updateLikeState()` – Like-Zähler aktualisieren
- `updateLikeDisplay()` – Herzsymbol und Anzeige aktualisieren
- `addComment()` – Kommentar hinzufügen
- `isCommentValid()` – Kommentareingaben prüfen
- `saveBooks()` – Buchdaten speichern
- `isValidComment()` – Gespeicherte Kommentare validieren
- `isValidBook()` – Gespeicherte Buchdaten validieren
- `isValidBookList()` – Gesamten Datensatz validieren
- `loadBooks()` – Gespeicherte Daten laden

Die HTML-Erzeugung und die Anwendungslogik sind voneinander getrennt.

## Design und Benutzeroberfläche

Das Design orientiert sich an der visuellen Gestaltung der BPG-Projekte.

Gestaltungsmerkmale:

- Dunkler Hintergrund
- Cyanfarbene Akzente und Konturen
- Halbtransparente Oberflächen im Glass-Look
- Eigenständiger BPG-Seitenheader
- Direkte Navigation zum Buchkatalog
- Moderne Buchkarten
- Interaktive Bildgalerien
- Individuelle Like-Buttons
- Transparente Kommentarbereiche
- Hover-Effekte und responsive Elemente

Der Seitenheader enthält die Bezeichnung
"BPG · BERK PROCESS GROUP", den Titel
"385-BOOKSTORE" und den Leitsatz
"Wissen, an einem Ort."

## Responsives Design

Die Webseite wurde für unterschiedliche Bildschirmgrößen konzipiert.

Berücksichtigte Ansichten:

- Smartphone ab 320 px
- Tablet
- Desktop

Das Layout verwendet flexible Breiten und CSS-Anpassungen, um die Bedienbarkeit auf verschiedenen Geräten zu unterstützen.

## Datenspeicherung

Die Anwendung verwendet den localStorage des Browsers.

Gespeichert werden insbesondere:

- Like-Zustände
- Like-Anzahlen
- Neu hinzugefügte Kommentare
- Buchdaten

Die Speicherung erfolgt unter dem Schlüssel:

`bpg_bookstore_books`

Die Daten werden als JSON gespeichert und beim nächsten Seitenaufruf wieder geladen.

Vorhandene gespeicherte Daten werden vor der Übernahme auf ihre grundlegende Struktur geprüft.

Wenn keine gespeicherten Daten vorhanden sind, verwendet die Anwendung die ursprünglichen Buchdaten aus `db.js`.

Es existiert keine serverseitige Datenbank.

## Sicherheit und Validierung

Bei der Umsetzung wurden grundlegende Maßnahmen berücksichtigt:

- HTML-Sonderzeichen in Buchinformationen werden maskiert.
- Kommentare werden über `textContent` ausgegeben.
- Leere Kommentareingaben werden abgewiesen.
- Gespeicherte Daten werden vor ihrer Übernahme validiert.
- Fehler beim Speichern und Laden werden abgefangen.

Diese Maßnahmen dienen der grundlegenden Eingabe- und Datenverarbeitung innerhalb des Lernprojekts.

## Projekt lokal starten

1. Repository herunterladen oder klonen.
2. Projektordner in Visual Studio Code öffnen.
3. `index.html` mit Live Server starten.
4. Webseite im Browser öffnen.
5. Buchbilder, Likes und Kommentare ausprobieren.

Eine Installation über npm ist nicht erforderlich.

Hinweis: Bootstrap wird über ein CDN geladen. Dafür wird eine Internetverbindung benötigt.

## Lernziele

Mit diesem Projekt werden insbesondere folgende Kenntnisse angewendet:

- Arbeiten mit JavaScript-Arrays und Objekten
- Verwendung von Funktionen und Parametern
- Schleifen und Bedingungen
- Dynamische HTML-Erzeugung
- Manipulation des Document Object Model (DOM)
- Verarbeitung von Benutzerinteraktionen
- Umgang mit Events
- Datenvalidierung
- JSON und localStorage
- Modulare Strukturierung von JavaScript-Code
- Responsive Webdesign
- Versionsverwaltung mit Git

## Projektstatus

**Abgeschlossene Umsetzung des Bookstore-Lernprojekts.**

Die Kernfunktionen für Buchanzeige, Bildergalerien, Likes, Kommentare und lokale Datenspeicherung sind implementiert.

Die JavaScript-Struktur wurde in kleinere Funktionen unterteilt und die HTML-Templates wurden ausgelagert.

Das Projekt dient der praktischen Vertiefung der HTML-, CSS- und JavaScript-Grundlagen.

---

**BPG – BERK PROCESS GROUP**

Entwickelt im Rahmen der Full-Stack-Weiterbildung an der Developer Akademie.
