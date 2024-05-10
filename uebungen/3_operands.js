const answer = 30 + 12

const cappucinoPrice = 4.5
const croissantPrice = 2
const totalPrice = cappucinoPrice + croissantPrice

console.log(4 + 2)
console.log(10 - 12)
console.log(5 * 7)
console.log(28 / 4)
console.log(43 % 10)
console.log(2 ** 3)

const secondsPerMinute = 60
const minutesPerHour = 60
const hoursPerDay = 24
const daysPerYear = 365

const secondsPerHour = secondsPerMinute * minutesPerHour
const secondsPerYear = secondsPerHour * hoursPerDay * daysPerYear

console.log(secondsPerHour)
console.log(secondsPerYear)

console.log(5 > 2)
console.log(2 > 10)
console.log(4 >= 4)
console.log(29 >= 100)
console.log(1 < 2)
console.log(3 < 2)
console.log(2 <= 2)
console.log(5 <= 3)
console.log("asdf" == "asdf")
console.log("Blau" == "Grün")
console.log(8.2 != 8)
console.log(10 != 10)

const year = 2024
const isSchaltjahr = 2024 % 4 == 0
console.log(isSchaltjahr)

/*
Deklariere eine Variable age an, die dein Alter enthält
Deklariere eine Variable isAdult die enthält, ob du volljährig bist oder nicht - abhängig von deinem Alter. Benutz dabei einen der Operatoren von oben.
Deklariere eine Variable ageInCenturies die als Kommazahl angibt, wieviele Jahrhunderte du alt bist - abhängig von deinem Alter.
Gib alle drei Variablen in der Konsole aus.
*/

let age = 18
let isAdult = age >= 18
let ageInCenturies = age * 0.01
console.log("-")
console.log(age, "  ,  ", isAdult, "  ,  ", ageInCenturies)
