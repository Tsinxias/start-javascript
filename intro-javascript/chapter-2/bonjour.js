
let prenom = prompt("Entrez votre prénom :");
let nom = prompt("Entrez votre nom")
alert("Bonjour, " + prenom + ' ' + nom);

let a = 2;
a = a - 1;
a++;
let b = 8;
b += 2;
let c = a + b * b;
let d = a * b + b;
let e = a * (b + b);
let f = a * b / a;
let g = b / a * a;

let prixHTVA = 100;
let tva = 19.6/100

console.log('Le prix TTC est de ' + (prixHTVA + prixHTVA*tva) + ' euros.')

let celsius = 37.1;
let calcul = celsius *9/5+32;

console.log(celsius + ' °C = ' + calcul + ' °F.')


let nombre1 = 5;
let nombre2 = 3;

let number1 = nombre1;
nombre1 = nombre2;
nombre2 = number1;

console.log(nombre1);
console.log(nombre2);


// let saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
// let nb = Number(saisie); // nb est de type nombre
//
// let nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
