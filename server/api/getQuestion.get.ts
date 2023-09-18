let questions = [
    { 
      id: "1", 
      question: "Welche der folgenden Programmiersprachen wird häufig für maschinelles Lernen und künstliche Intelligenz verwendet?", 
      possibilities: {
        1: "Java",
        2: "C++",
        3: "Python",
        4: "JavaScript"
      }, 
      correct: 3, 
      subject: 1
    },
    { 
      id: "2", 
      question: "Was ist eine SQL-Injection?", 
      possibilities: {
        1: "Eine Methode zur Verschlüsselung von Daten in einer Datenbank",
        2: "Ein Angriff, bei dem bösartiger SQL-Code in eine Eingabe eingeschleust wird, um die Datenbank zu manipulieren",
        3: "Eine SQL-Abfrage, die besonders effizient ist",
        4: "Eine Funktion zum Löschen von Tabellen in einer Datenbank"
      }, 
      correct: 2, 
      subject: 1
    },
    { 
      id: "3", 
      question: "Was beschreibt das Hookesche Gesetz im Bereich der Mechanik?", 
      possibilities: {
        1: "Die Berechnung der Fliehkraft in rotierenden Systemen",
        2: "Die Verformung eines elastischen Materials ist proportional zur aufgebrachten Kraft",
        3: "Die Berechnung der Strömungsgeschwindigkeit in Fluiden",
        4: "Die Energieerhaltung in geschlossenen Systemen"
      }, 
      correct: 2, 
      subject: 3
    },
    { 
      id: "4", 
      question: "Was ist die Einheit der elektrischen Spannung?", 
      possibilities: {
        1: "Ampere (A)",
        2: "Ohm (Ω)",
        3: "Volt (V)",
        4: "Watt (W)"
      }, 
      correct: 3, 
      subject: 4
    },
    { 
      id: "5", 
      question: "Welches Organ ist für die Filtration des Blutes und die Entfernung von Abfallprodukten verantwortlich?", 
      possibilities: {
        1: "Die Lunge",
        2: "Die Leber",
        3: "Das Herz",
        4: "Die Niere"
      }, 
      correct: 4, 
      subject: 5
    },
    { 
      id: "6", 
      question: "Was ist eine häufige Therapiemethode in der klinischen Psychologie zur Behandlung von Angststörungen?", 
      possibilities: {
        1: "Elektroschocktherapie",
        2: "Kognitive Verhaltenstherapie",
        3: "Hypnose",
        4: "Akupunktur"
      }, 
      correct: 2, 
      subject: 6
    },
    { 
        id: "7", 
        question: "Was versteht man unter dem Begriff 'Big-O Notation' in der Informatik?", 
        possibilities: {
          1: "Eine Schreibweise für große Buchstaben im Programmcode",
          2: "Eine Notation zur Beschreibung der Leistung und Laufzeit von Algorithmen",
          3: "Ein Codierungsstandard für Online-Shops",
          4: "Eine Methode zur Vergrößerung von Bildern"
        }, 
        correct: 2, 
        subject: 2
      },
      { 
        id: "8", 
        question: "Was ist ein Elektromagnet?", 
        possibilities: {
          1: "Ein spezielles Werkzeug zur Montage von Elektroinstallationen",
          2: "Ein elektrisches Bauteil, das durch den Stromfluss ein Magnetfeld erzeugt",
          3: "Ein Hochspannungskabel",
          4: "Ein Gerät zur drahtlosen Energieübertragung"
        }, 
        correct: 2, 
        subject: 4
      },
      { 
        id: "9", 
        question: "Was ist der Hauptzweck einer Marktforschung?", 
        possibilities: {
          1: "Die Entwicklung neuer Produkte",
          2: "Die Analyse des Wettbewerbs",
          3: "Die Identifizierung und Analyse von Marktchancen und Kundenbedürfnissen",
          4: "Die Reduzierung von Produktionskosten"
        }, 
        correct: 3, 
        subject: 1
      },
      { 
        id: "10", 
        question: "Welche anatomische Struktur verbindet das Gehirn mit dem Rückenmark?", 
        possibilities: {
          1: "Die Hypophyse",
          2: "Die Epiphyse",
          3: "Die Hirn-Blut-Schranke",
          4: "Der Hirnstamm"
        }, 
        correct: 4, 
        subject: 5
      },
      // Weitere Fragen hier
      { 
        id: "11", 
        question: "Was ist ein häufiges Symptom einer sozialen Angststörung?", 
        possibilities: {
          1: "Übermäßige Selbstsicherheit und Risikobereitschaft",
          2: "Angst vor sozialen Situationen und negativem Urteil anderer",
          3: "Verlust des Interesses an sozialen Aktivitäten",
          4: "Intensive Müdigkeit und Schlafprobleme"
        }, 
        correct: 2, 
        subject: 6
      },
      { 
        id: "12", 
        question: "Welche der folgenden Aussagen über die Planck-Konstante ist korrekt?", 
        possibilities: {
          1: "Sie beschreibt die Geschwindigkeit des Lichts im Vakuum",
          2: "Sie ist eine grundlegende Konstante in der Quantenphysik und beschreibt das Verhalten von Teilchen auf atomarer und subatomarer Ebene",
          3: "Sie wurde erstmals im 18. Jahrhundert von Isaac Newton entdeckt",
          4: "Sie beeinflusst die Gravitationskraft zwischen Massenobjekten"
        }, 
        correct: 2, 
        subject: 3
      },
    // Weitere Fragen hier hinzufügen
  ];
  


export default defineEventHandler(event => {
    return questions[Math.floor(Math.random() * questions.length)]
})