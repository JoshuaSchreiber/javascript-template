/*
const person = {
    name: "Lara Smith",
    age: 42,
    height: 162,
}

console.log(person.name)





const lara = {
    age: 42,
    name: "Lara Smith",
    height: 162,
}
const john = {
    age: 37,
    name: "John Miller",
    height: 176,
}

function logPerson(person) {
    console.log(
        `${person.name} ist ${person.age} Jahre alt und ${person.height}cm groß`,
    )
}

logPerson(lara)
logPerson(john)





let pet = { name: "Ryu", age: 2 }

pet.age = 17
pet.kind = "Hund"

console.log(`${pet.name} ist ein ${pet.kind} und ist ${pet.age} Jahre alt`)





person = { name: "Taylor Swift" }
const foo = "age"

person[foo] = 34
person["job"] = "Musikerin"

console.log(
    `${person["name"]} ist ${person.age} Jahre alt und eine professionelle ${person.job}`,
)




const course = {
    teachers: [
        { name: "Hilmar", age: 30 },
        { name: "Bene", age: 29 },
        { name: "Hilmar", age: 28 },
        { name: "Toby", age: 24 },
    ],
    headTeachers: [
        { name: "Mischa", age: 30 },
        { name: "Leon", age: 30 },
    ],
    numberOfMembers: 11,
    topic: "Turn Based Game Development",
    isBestKurs: true,
    timespan: {
        from: "11.08.2024",
        to: "23.08.2024",
    },
}

console.log(
    `Der Kurs hat das Thema "${course.topic}", startet am ${course.timespan.from} und hat ${course.numberOfMembers} Schüler:innen.\nEr hat ${course.teachers.length} Betreuer und ${course.headTeachers.length} Kursleiter.`,
)
*/

/*
Schreibe eine exportierte Funkion analyzeGrades(report), welche einen Array aus Objekten, welche Schulfächer mit Noten auf einem Zeugnis repräsentiert, 
entgegennimmt und ein Objekt mit einer Zusammenfassung des Zeugnisses zurückgibt.

Nimm an, dass die Objekte im Array den die Funktion annimmt, folgendes Format haben:

{
    // String der das Fach angibt
    subject: "Deutsch",
    // Zahl die die Note angibt (2.3 = 2- , 1.7 = 2+ , 2.0 = 2)
    grade: 2.3,
}

Gib ein Objekt im folgenden Format zurück:

{
    // Durchschnittsnote aller Fächer
    averageGrade: 2.43,
    // Bestes Fach
    bestSubject: {
        subject: "Deutsch",
        grade: 1.7,
    },
}
*/

export function analyzeGrades(report) {
    let counter = 0
    let averageGrade = 0
    let bestGrade = report[0]
    while (counter < report.length) {
        averageGrade = averageGrade + report[counter].grade
        if (report[counter].grade < bestGrade.grade) {
            bestGrade = report[counter]
        }
        counter++
    }
    averageGrade = averageGrade / report.length
    let values = {
        averageGrade: averageGrade,
        bestSubject: bestGrade,
    }
    return values
}
