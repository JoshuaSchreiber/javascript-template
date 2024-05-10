const myAge = 30

if (myAge > 19) {
    console.log("Ich bin kein Teenager mehr")
}

if (myAge > 29) {
    console.log("Ich bin auch kein Tweenager mehr")
}

console.log(4 > 2 && "a" != "b")
console.log(1 != 1 && 4 >= 4)
console.log(3 < 1 || 10 == 10)
console.log(4 == 5 || 5 == 6)

const age = 27
const isTeenager = age < 20

if (!isTeenager) {
    console.log("Kein Teenager mehr")
}

const year = 2025
const isSchaltjahr = year % 4 == 0

if (isSchaltjahr) {
    console.log("Schaltjahr")
} else {
    console.log("Kein Schaltjahr")
}

const ageX = 19

if (ageX < 17) {
    console.log("Darf gar kein Auto fahren")
} else if (ageX < 18) {
    console.log("Darf begleitet Auto fahren")
} else if (ageX < 21) {
    console.log("Darf alleine das eigene Auto fahren")
} else {
    console.log("Darf Mietwagen fahren")
}

/*
Schreibe folgendes Programm:

Lege eine Variable birthYear an, die dein Geburtsjahr als Zahl enthält
Lege eine Variable birthMonth an, die deinen Geburtstmonat als Zahl enthält (1 = Januar, 12 = Dezember)
Lege eine Variable birthDay an, die den Tag innerhalb des Monats deines Geburtstags als Zahl enthält (zB 17 für den 17. Oktober)
Lege eine Variable currentYear an, die das aktuelle Jahr als Zahl enthält
Lege eine Variable currentMonth an, die den aktuellen Monat als Zahl enthält
Lege eine Variable currentDay an, die den aktuellen Tag innerhalb des aktuellen Monats als Zahl enthält
Dein Programm soll nun die folgenden Informationen ausgeben, dynamisch von den oben genannten Variablen abhängig. 
Das heißt, dass das Programm weiterhin korrekte Angaben machen würde, wenn man nur die o.g. Variablen ändert:

Dein aktuelles Alter als ganze Zahl
In welchem Quartal du geboren bist (Q1 = Jan-Mär, Q2 = Apr-Jun, Q3 = Jul - Sep, Q4 = Okt - Dez)
Ob dieses Jahr sowohl die Fußball Europameisterschaft (seit 1960 alle 4 Jahre) als auch die Europawahl (seit 1979 alle 5 Jahre) stattfindet
Ob du heute Geschenke bekommst (wir definieren dafür, dass es an deinem Geburtstag und am 24. Dezember Geschenke gibt)
*/

let birthYear = 2005
let birthMonth = 9
let birthDay = 20
let currentYear = 2024
let currentMonth = 12
let currentDay = 23

console.log("-------------")
let myOwnAge = 0
if (currentDay >= birthDay && currentMonth >= birthMonth) {
    myOwnAge = currentYear - birthYear
} else {
    myOwnAge = currentYear - birthYear - 1
}
console.log("Age: ", myOwnAge)

let month = birthMonth
let quarter
if (month < 4) {
    quarter = "Q1"
} else if (month < 7) {
    quarter = "Q2"
} else if (month < 10) {
    quarter = "Q3"
} else if (month < 13) {
    quarter = "Q4"
} else {
    console.log("ErrorQuartal")
}
console.log("BirthQuartal: ", quarter)

console.log("Europermeisterschaft dieses Jahr? ", currentYear % 4 == 0)
console.log("Europawahl dieses Jahr? ", currentYear % 5 == 4)

console.log(
    "Heute Geschenke? ",
    currentMonth == 12 && (currentDay == 20 || currentDay == 24),
)
