# Bookstore 385

Das ist mein Bookstore-Projekt aus dem JavaScript-Modul der Developer Akademie. Ich baue die Anwendung Schritt für Schritt auf, um das Arbeiten mit Arrays, Objekten, Funktionen und dem DOM zu üben.

Als Beispieldaten verwende ich neun Bücher zu Logistik, agilem Management, Luftfahrt und Projektmanagement. Die Buchtitel, Autorennamen und Kommentare sind frei erfunden.

## Aktueller Stand (17.11.2026)

- [x] Projektdateien erstellt und miteinander verbunden
- [x] Buchdaten aus `db.js` eingebunden
- [x] Neun Bücher mit Titel, Autor, Genre, Erscheinungsjahr und Preis dargestellt
- [x] Buchkarten mit Bootstrap-Klassen aufgebaut
- [x] Vorhandene Kommentartexte für jedes Buch dargestellt
- [ ] Namen der Kommentierenden anzeigen
- [ ] Like- und Unlike-Funktion umsetzen
- [ ] Neue Kommentare hinzufügen
- [ ] Darstellung und Bedienbarkeit weiter gestalten und testen
- [ ] Optional: Änderungen mit `localStorage` speichern

## Verwendete Technik

- HTML und CSS
- JavaScript
- Bootstrap 5.3.9 (über CDN eingebunden)

## Projektdateien

| Datei        | Aufgabe                                                             |
| ------------ | ------------------------------------------------------------------- |
| `index.html` | Grundstruktur der Webseite und Einbindung der Dateien               |
| `db.js`      | Array `books` mit den Buchdaten und Kommentaren                     |
| `script.js`  | Funktionen zum Erstellen der Buchkarten und Anzeigen der Kommentare |
| `style.css`  | Eigene CSS-Gestaltung (bisher noch leer)                            |

## Projekt starten

1. Projektordner in VS Code öffnen.
2. `index.html` mit Live Server starten.
3. Im Browser die Buchkarten und Kommentare prüfen.

## So funktioniert der aktuelle Code

`renderBooks()` geht mit einer `for`-Schleife durch das Bücher-Array. `getBookTemplate(index)` erstellt die HTML-Vorlage für die jeweilige Buchkarte.

Danach wird für jedes Buch `renderComments(index)` aufgerufen. Diese Funktion liest das passende `comments`-Array aus und fügt die vorhandenen Kommentartexte in den jeweiligen HTML-Container ein. Bücher ohne Kommentare bleiben leer.

Die Like-Funktion, das Hinzufügen neuer Kommentare und das Speichern sind noch nicht umgesetzt.
