let subjects = [
    { id: 1, name: "Programmieren mit Python", majors: [1, 2] },
    { id: 2, name: "Datenbankmanagement", majors: [1, 2] },
    { id: 3, name: "Webentwicklung", majors: [1, 2] },
    { id: 4, name: "Algorithmen und Datenstrukturen", majors: [2] },
    { id: 5, name: "Betriebswirtschaftslehre", majors: [1] },
    { id: 6, name: "Marketing", majors: [1] },
    { id: 7, name: "Physik", majors: [3] },
    { id: 8, name: "Technische Mechanik", majors: [3] },
    { id: 9, name: "Elektromagnetismus", majors: [4] },
    { id: 10, name: "Schaltungstechnik", majors: [4] },
    { id: 11, name: "Anatomie", majors: [5] },
    { id: 12, name: "Biochemie", majors: [5] },
    { id: 13, name: "Klinische Psychologie", majors: [6] },
    { id: 14, name: "Entwicklungspsychologie", majors: [6] },
    // Add more
  ];


export default defineEventHandler(event => {
    let req:{major: string} = getQuery(event)
    let answer:any[] = []

    console.log(req)

    subjects.forEach(subject => {
      if(subject.majors.includes(parseInt(req.major))){
        answer.push(subject)
      }
    })
    return answer;
})
