/*
const fruits = ["Apfel", "Orange", "Banane"]
const ages = [22, 90, 18, 7, 45]
const heroes = ["Hulk", "Thor"]

console.log(fruits)
console.log(ages)
console.log(heroes)






const colors = ["Blau", "Grün", "Orange", "Violett"]

console.log(colors[2])
console.log(colors[0])





const drinks = ["Orangensaft", "Tee", "Kaffee"]
const drinksLength = 3

let index = 0

while (index < drinksLength) {
    const currentDrink = drinks[index]
    console.log(currentDrink)

    index = index + 1
}






let courses = ["Geschichte", "Germanistik", "Physik", "Mathematik"]

console.log(courses[1])

// Mit der selben Notation mit der auf ein Element zugegriffen wird, kann es mit = auch beschrieben werden
courses[1] = "Informatik"

console.log(courses[1])






const languages = ["Spanish", "Chinese", "Russian"]
languages.pop()
languages.unshift()

console.log(languages)





const names = ["Leo"]

names.push("Ryu")
names.unshift("Neela")

console.log(names)




const ticTacToe = [
    ["X", "O", " "],
    [" ", "X", "O"],
    [" ", "O", " "],
]

const middle = ticTacToe[1][1]

console.log(middle)
*/

/*
Schreibe eine exportierte Funktion filterStrings(arr), die einen Array aus Strings erwartet und einen neuen Array 
aus Strings zurückgibt. Dieser neue Array aus Strings soll alle Strings des übergebenen Arrays enthalten, 
die mindestens 5 Zeichen lang sind oder mit einem "S" starten - und zwar in umgedrehter Reihenfolge.

Beispiel: ["Kugelschreiber", "Salz", "Maus"] wird zu ["Salz", "Kugelschreiber"]
*/

export function filterStrings(arr) {
    let counter = 0
    let arrNew = []
    while (counter < arr.length) {
        if (arr[counter].length > 4 || arr[counter].startsWith("S")) {
            arrNew.unshift(arr[counter])
        }
        counter++
    }
    return arrNew
}

/*
const devices = ["Laptop", "Keyboard", "Mouse", "Headphones"]

for (const dev of devices) {
    console.log(dev)
}
*/
