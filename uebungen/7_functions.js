/*


function warn() {
    console.log("Achtung!")
    console.log("Raubtier entdeckt")
}

const animal = "Katze"

if (animal == "Katze") {
    warn()
} else if (animal == "Hund") {
    warn()
} else if (animal == "Wolf") {
    warn()
} else {
    console.log("Kein Raubier")
}






function sayHello() {
    console.log("Hallo")
    console.log("Ich bin in einer Funktion")
}

sayHello()
sayHello()
sayHello()





function sayIfAdult(age) {
    console.log(age)

    if (age < 18) {
        console.log("^ in diesem Alter ist man noch minderjährig")
    } else {
        console.log("^ in diesem Alter ist man bereits volljährig")
    }
}

sayIfAdult(12)
sayIfAdult(27)
sayIfAdult(48)
sayIfAdult(8)
sayIfAdult(18)







function saySum(x, y) {
    const sum = x + y

    console.log("x + y = ")
    console.log(sum)
}

saySum(10, 15)
saySum(2, 18)
saySum(499, 1)





function saySquare(number) {
    // number wird beim Funktionsaufruf gesetzt und verhält sich wie eine lokale Variable

    // squared ist eine lokale Variable
    const squared = number * number

    console.log("Das Quadrat dieser Zahl ist")
    console.log(squared)

    // number und squared hören hier auf zu existieren
}

saySquare(2)
saySquare(7)





function isTeenager(age) {
    const oldEnough = age > 12
    const youngEnough = age < 20

    return oldEnough && youngEnough
}

const janeAge = 19
const daveAge = 17

if (isTeenager(janeAge) && isTeenager(daveAge)) {
    console.log("Jane und Dave sind beide Teenager")
}





// Funktion die für eine Zahl (number) rausfindet, ob sie prim ist (returnt einen boolean, true = prim, false = nicht prim)
function isPrime(number) {
    let maybeTeiler = 2

    while (maybeTeiler < number) {
        if (number % maybeTeiler == 0) {
            // Wenn ein Teiler gefunen wird, ist die Zahl nicht prim und die Funktion kann sofort returnen
            return false
        }

        maybeTeiler = maybeTeiler + 1
    }

    return true
}

// Funktion die alle Primzahlen bis zu einer Zahl (target) in der Konsole ausgibt, returnt nichts
function findPrimesBelow(target) {
    let maybePrime = 2

    while (maybePrim <= target) {
        // Hier wird die isPrime Funktion von oben benutzt
        if (isPrime(maybePrime)) {
            console.log(num)
        }

        maybePrime = maybePrime + 1
    }
}

findPrimesBelow(20)

*/

/*
Wir schauen uns jetzt eine etwas größere Aufgabe an um zu üben, Dinge in Funktionen zu unterteilen. 
Wir beziehen uns dabei auf vorherige Übungsaufgaben und bauen aus ihnen eine größere chaotische Aufgabe zusammen.

Schreibe eine Funktion getMagicNumber(startYear, age) und exportiere sie. Die Funktion erwartet ein Startjahr (Zahl) 
und das Alter einer Person in diesem Startjahr (Zahl) als Parameter. Sie soll folgendes tun:

Suche ab dem Startjahr nach dem nächsten Jahr, in dem sowohl die Fußbal EM als auch die Europawahl stattfindet

Stelle fest, wie alt die Person in diesem Jahr wäre Starte mit diesem Alter eine Collatz Folge und return die dritte 
Zahl dieser Folge (Beispiel: 24 als Start wird zu 24, 12, 6 - 6 ist die dritte Zahl)

Rufe diese Funktion dreimal mit folgenden Parametern auf:

2024, 30
2018, 18
2035, 5
Versuche diese Aufgabe zunächst auf einem Zettel in Einzelteile zu zerteilen, welche du als Funktionen implementieren kannst. 
Überlege dabei immer, welche Zwischenergebnisse bereits vorhanden sein müssen um einen Teilschritt zu erledigen 
- das sind dann die Parameter der Funktion dieses Teilschritts.
*/

export function getMagicNumber(startYear, age) {
    console.log(startYear)
    let emYear = naechstYearWithEMandEUW(startYear)
    console.log(emYear)
    let ageAtEm = age + emYear - startYear
    console.log(ageAtEm)
    let afterCollatzfolge = collatzFolge(ageAtEm, 3)
    console.log(afterCollatzfolge)
    return ageAtEm
}

function naechstYearWithEMandEUW(startYear) {
    let emYear = startYear
    let searchOngoing = true
    while (searchOngoing) {
        if (emYear % 4 == 0 && emYear % 5 == 0) {
            break
        }
        emYear++
    }
    return emYear
}

function collatzFolge(number, loopsNumber) {
    let counter = 0
    while (loopsNumber > counter) {
        counter++
        if (number % 2 == 0) {
            number = number / 2
        } else if (number % 2 == 1) {
            number = number * 3 + 1
        }
    }

    return number
}

console.log(getMagicNumber(2024, 30)) // 46
console.log(getMagicNumber(2018, 18)) // 20
console.log(getMagicNumber(2035, 5)) // 10
