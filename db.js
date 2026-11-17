// Beispiel-Datensatz für das Bookstore-Lernprojekt.
// Buchtitel, Autorennamen und Rezensionen sind frei erfunden.
// Aufbau, Buchanzahl und vorhandene Zahlenwerte entsprechen der ursprünglichen db.js.
let books = [
  {
    name: "Logistikmanagement: Lieferketten strategisch steuern",
    author: "Miriam Falk",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Logistikmanagement",
    comments: [
      {
        name: "Leser123",
        comment:
          "Besonders hilfreich fand ich die Verbindung zwischen Lagerprozessen, Transportplanung und Unternehmenszielen.",
      },
      {
        name: "Bookworm84",
        comment:
          "Die Kennzahlen zur Lieferperformance werden verständlich und praxisnah erklärt.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Das Kapitel zu Engpässen zeigt gut, warum man die gesamte Lieferkette betrachten muss.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Interessant ist die Gegenüberstellung von kurzfristiger Disposition und langfristiger Netzwerkplanung.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein guter Einstieg für alle, die operative Logistik und strategisches Management verbinden möchten.",
      },
    ],
  },
  {
    name: "Agiles Management: Teams, Prozesse und Veränderung",
    author: "Leon Bergmann",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Agiles Management",
    comments: [],
  },
  {
    name: "Aviation Management: Airlines und Flughäfen führen",
    author: "Laura Winter",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Luftfahrtmanagement",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Beschreibung der Zusammenarbeit zwischen Flughafenbetrieb und Airline ist sehr anschaulich.",
      },
      {
        name: "BookLover21",
        comment:
          "Spannend fand ich die Beispiele zu Pünktlichkeit, Kapazitäten und Servicequalität.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Das Buch macht deutlich, wie viele Abläufe beim Turnaround ineinandergreifen.",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Abschnitte zu Sicherheitsanforderungen und operativem Risikomanagement sind gut strukturiert.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Eine verständliche Einführung in die wirtschaftlichen und operativen Herausforderungen der Luftfahrt.",
      },
    ],
  },
  {
    name: "Projektmanagement im militärischen Umfeld",
    author: "Alexander Becker",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Projektmanagement",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Die Beispiele zu Projektphasen, Verantwortlichkeiten und Dokumentationspflichten sind nachvollziehbar.",
      },
      {
        name: "LeseWurm",
        comment:
          "Besonders interessant ist die Abstimmung zwischen verschiedenen Organisationseinheiten bei komplexen Vorhaben.",
      },
    ],
  },
  {
    name: "Lean Management in Lager und Produktion",
    author: "Sabine Richter",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Lean Management",
    comments: [],
  },
  {
    name: "Supply Chain Resilience und Risikomanagement",
    author: "Philipp Neumann",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Supply Chain Management",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Das Buch erklärt gut, wie Lieferketten auf Störungen vorbereitet werden können.",
      },
      {
        name: "Leseratte",
        comment:
          "Die Verbindung von Risikoanalyse, Bestandsstrategien und Lieferantenmanagement ist gelungen.",
      },
    ],
  },
  {
    name: "Digitale Transformation in der Luftfahrtlogistik",
    author: "Oliver Stein",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Digitalisierung",
    comments: [
      {
        name: "Leser123",
        comment:
          "Besonders die Beispiele für digitale Prozessdaten und Schnittstellen zwischen Systemen fand ich hilfreich.",
      },
    ],
  },
  {
    name: "Change Management in Logistikorganisationen",
    author: "Elena Brandt",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Change Management",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Gut erklärt wird, warum Mitarbeitende frühzeitig in Veränderungsprozesse eingebunden werden sollten.",
      },
    ],
  },
  {
    name: "Programmmanagement in sicherheitskritischen Projekten",
    author: "Emilia Hartmann",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Programmmanagement",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Unterschiede zwischen Einzelprojekt und übergreifendem Programm werden deutlich.",
      },
      {
        name: "StorySeeker",
        comment:
          "Sehr hilfreich sind die Beispiele zu Meilensteinen, Abhängigkeiten und Berichtswegen.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Die Kapitel über Governance und das Nachhalten von Projektrisiken sind praxisnah.",
      },
    ],
  },
];
