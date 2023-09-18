let majors = [
    { id: "1", name: "Wirtschaftsinformatik" },
    { id: "2", name: "Informatik" },
    { id: "3", name: "Maschinenbau" },
    { id: "4", name: "Elektrotechnik" },
    { id: "5", name: "Medizin" },
    { id: "6", name: "Psychologie" },
    // Add more...
  ]


export default defineEventHandler(event => {
    return majors
})
