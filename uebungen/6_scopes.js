/*
if (5 > 2) {
    // Ich bin in einem Scope
}

while (true) {
    // Ich bin auch in einem Scope (in einem anderen als oben)
}

const a = 10

if (a > 8) {
    // b wird im lokalen if Scope angelegt und ist nur hier exitent
    const b = a + 5
    console.log(b)
    // b hört hier auf zu existieren
}

// console.log(b) würde hier einen Fehler erzeugen, da b hier nicht mehr existiert

const target = 20

// Aktueller Kandidat, der prim sein könnte
let maybePrim = 2

// Wir wollen alle Zahlen bis target prüfen
while (num <= target) {
    // Lokale Variable (innerhalb des Scopes) die speichert, ob der aktuelle Kandidat (num) prim ist. Wir fangen mit der Annahme an, dass er prim ist.
    let isPrim = true
    // Lokale Variable (innerhalb des Scopes), speichert den aktuellen Kandidat für einen Teiler für num
    let maybeTeiler = 2

    // Wir schauen uns alle Zahlen unter num an
    while (maybeTeiler < num) {
        // Prüfen, ob die Zahl ein Teiler von num ist
        if (num % maybeTeiler == 0) {
            // Falls ja, ist num nicht prim...
            isPrim = false
            // ...und wir können aufhören nach weiteren Teilern zu suchen
            break
        }

        // Schaue den nächsten möglichen Teiler an
        maybeTeiler = maybeTeiler + 1
    }

    // Falls die Zahl prim ist (also kein Teiler gefunden wurde) geben wir sie als Primzahl in der Konsole aus
    if (isPrim) {
        console.log("Primzahl:")
        console.log(num)
    }

    // Schaue die nächste mögliche Primzahl an
    num = num + 1

    // Hier ist der Scope zu Ende - isPrim und maybeTeiler werden weggeworfen und im nächsten while-Durchlauf neu angelegt
}

export function helloWorld() {
    console.log("Hello World!")
}
*/
