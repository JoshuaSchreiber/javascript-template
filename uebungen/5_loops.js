/*
let number = 1
while (number <= 100) {
    console.log(number)

    number = number + 1
}

number = 0
while (number < 100) {
    number = number + 1

    if (number > 3) {
        // break springt von hier...
        break
    }

    console.log(number)
}
// ...hierher
console.log("Fertig!")

number = 0
while (number < 10) {
    number = number + 1

    console.log(number)

    // Falls number gerade ist, spring zum nächsten Durchlauf
    if (number % 2 == 0) {
        continue
    }

    console.log("ist ungerade")
}
*/

/*
In der Mathematik gibt es die sogenannte Collatz-Folge. Um sie zu bilden, startet man mit einer beliebigen positiven ganzen Zahl. 
Dann wiederholt man die folgenden Schritte immer wieder:

Wenn die Zahl gerade ist, wird sie halbiert
Wenn die Zahl ungerade ist, wird sie verdreifacht und dann 1 addiert
Wen man zum Beispiel mit der Zahl 5 anfängt ergibt sich:

5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1,....

Sobald 1, 4 oder 2 erreicht sind, wiederholt sich die 4, 2, 1 Folge unendlich weiter.

Schreibe ein Programm, welches die Collatz-Folge angefangen mit der Zahl 123 ausgibt und aufhört, sobald die unendlich wiederholende 4, 2, 1 
Folge erreicht ist.
*/

console.log("-----")
number = 123
while (number != 1 && number != 2 && number != 4) {
    if (number % 2 == 0) {
        number = number / 2
    } else if (number % 2 == 1) {
        number = number * 3 + 1
    }
    console.log(number)
}
