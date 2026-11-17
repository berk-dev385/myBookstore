# Bookstore 385

Mein Bookstore-Projekt aus dem JavaScript-Modul der Developer Akademie.

In diesem Projekt übe ich den Umgang mit JavaScript-Arrays, Objekten, Funktionen, Schleifen und der DOM-Manipulation. Ziel ist es, eine einfache Buchübersicht zu erstellen, in der Bücher angezeigt, geliked und kommentiert werden können.

## Projektbeschreibung

Die Anwendung enthält neun Bücher aus den Bereichen Logistik, Management, Aviation und Projektmanagement.

Die Buchtitel, Autoren und vorhandenen Kommentare sind frei erfundene Beispieldaten.

Die Daten liegen in einem JavaScript-Array in der Datei `db.js`.

## Aktueller Entwicklungsstand

- [x] Projektstruktur angelegt
- [x] HTML, CSS und JavaScript miteinander verbunden
- [x] Bootstrap eingebunden
- [x] Alle neun Bücher dynamisch anzeigen
- [x] Buchtitel, Autor, Genre, Jahr und Preis ausgeben
- [x] Vorhandene Kommentare mit Namen anzeigen
- [x] Like- und Unlike-Funktion umgesetzt
- [x] Like-Anzahl direkt aktualisieren
- [x] Neue Kommentare hinzufügen
- [x] Kommentare dem richtigen Buch zuordnen
- [x] Eingabefelder nach dem Hinzufügen leeren
- [x] Leere Kommentare verhindern
- [x] Nur die betroffenen Bereiche der Webseite aktualisieren
- [ ] Eigenes CSS und Layout gestalten
- [ ] Responsive Darstellung umsetzen
- [ ] Abschließende Funktionstests durchführen
- [ ] Optional: Daten mit `localStorage` speichern

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.9
- Git und GitHub
- Visual Studio Code

## Projektstruktur

```text
myBookstore/
├── index.html
├── db.js
├── script.js
├── style.css
└── readme.md
```

## Funktionsweise

**Bücher anzeigen**

Die Funktion `renderBooks()` durchläuft das Array `books` und erstellt über `getBookTemplate(index)` die einzelnen Buchkarten.

**Kommentare anzeigen**

Mit `renderComments(index)` werden die vorhandenen Kommentare eines Buchs ausgelesen und in den passenden HTML-Container eingefügt.

**Like-Funktion**

Die Funktion `toggleLike(index)` verändert die Like-Anzahl und den Zustand `liked` des ausgewählten Buchs. Anschließend werden die Like-Anzeige und die Button-Beschriftung aktualisiert.

**Neue Kommentare hinzufügen**

Über `addComment(index)` werden der eingegebene Name und Kommentartext ausgelesen, geprüft und als neues Objekt zum Kommentar-Array des entsprechenden Buchs hinzugefügt.

Danach wird nur der betreffende Kommentar-Bereich aktualisiert und die Eingabefelder werden geleert.

## Projekt starten

1. Projektordner in Visual Studio Code öffnen.
2. Die Datei `index.html` über Live Server starten.
3. Die Buchübersicht im Browser öffnen.
4. Like-Buttons und Kommentarfunktion testen.

## Nächste Schritte

Die grundlegenden JavaScript-Funktionen sind umgesetzt.

Als Nächstes möchte ich die Darstellung mit eigenem CSS verbessern, das Layout für verschiedene Bildschirmgrößen anpassen und anschließend die gesamte Anwendung testen.

Eine dauerhafte Speicherung über `localStorage` ist als mögliche Erweiterung vorgesehen.

**Hinweis:** Aktuell werden Änderungen nur während der laufenden Sitzung im JavaScript-Array gehalten. Nach einem Neuladen der Webseite werden die ursprünglichen Daten aus `db.js` verwendet.
