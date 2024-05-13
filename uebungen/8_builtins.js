/*
const name = "Jane"
const goodMorning = `Guten Morgen ${name}, ich hoffe, du hast gut geschlafen`

console.log(goodMorning)




name = "Mischa"
const birthYear = 1993
const currentYear = 2024

console.log(
    `${name} ist im Jahr ${birthYear} geboren und ist damit im Jahr ${currentYear} ${currentYear - birthYear} Jahre alt`,
)




console.log('Was ist grün und kreist um die Erde?\nEin "Salatelit".')





// Funktion die zurückgibt, ob beide übergebenen Heldennamen mit "Green" anfangen
function bothHeroesAreGreen(firstHero, secondHero) {
    const firstGreen = firstHero.startsWith("Green")
    const secondGreen = secondHero.startsWith("Green")

    return firstGreen & secondGreen
}

console.log(bothHeroesAreGreen("Green Lantern", "Green Hulk"))
console.log(bothHeroesAreGreen("Thor", "Green Hulk"))




console.log("Black Widow".startsWith("Black"))
console.log("Spider Man".startsWith("Ven"))

console.log("Thor".endsWith("or"))
console.log("Starlord".endsWith("Star"))

console.log("Loki".includes("ok"))
console.log("Groot".includes("or"))

console.log("Black Panther".indexOf("ack"))
console.log("Jessica Jones".includes("Jess"))
console.log("Captain Marvel".includes("asdf"))

console.log("Iron Man".substring(0, 4))
console.log("Wolverine".substring(2, 7))
console.log("Captain America".substring(6, 10))

console.log("Ant Man".length)
console.log("".length)
console.log("Hessische Schülerakademie".length)

*/

/*
Anrede kürzen
    Schreibe eine Funktion removeSalutation(name) und exportiere sie. Sie soll aus einem vollen Namen die Anrede wegkürzen und das Ergebnis returnen. 
    Das heißt, dass deine Funktion einen String bekommt und falls dieser mit "Hr. " oder "Fr. " anfängt, ssoll diese Anrede weggekürzt werden, 
    so dass nur der Name selbst übrig bleibt. Falls nicht, soll der String unberührt returnt werden. Deine Funktion sollte sich so verhalten:

    "Fr. Black Widow" wird zu "Black Widow"
    "Hr. Hulk" wird zu "Hulk"
    "Thor" wird zu "Thor"
Entfernen von beliebigem String
    Schreibe eine exportierte Funktion removeString(subject, needle), welche zwei Strings erwartet. Sie soll im ersten übergebenen 
    String alle Vorkommnisse des zweite übergebenen Strings entfernen und den resultierenden String zurückgeben. Benutze dabei nur 
    die auf dieser Seite beschriebenen builtins. Deine Funktion sollte sich folgendermaßen verhalten:

    ("FooBarFoo", "Foo") wird zu "Bar"
    ("Man darf auf der Akademie nicht Geschi sagen", "Geschi") wird zu "Man darf auf der Akademie nicht sagen"
    ("Info ist der beste Kurs", "Mathe") wird zu "Info ist der beste Kurs"
*/

export function removeSalutation(name) {
    let startString = name.substring(0, 3)
    if (startString == "Hr." || startString == "Fr.") {
        name = name.substring(4, name.length)
    }
    return name
}

export function removeString(subject, needle) {
    while (subject.includes(needle)) {
        let index = subject.indexOf(needle)
        let partOne = subject.substring(0, index)
        let partTwo = subject.substring(index + needle.length, subject.length)
        subject = partOne + partTwo
    }
    return subject
}
