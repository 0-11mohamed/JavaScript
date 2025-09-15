/*console.log("Hello World");

function print(line) {
    const text = document.getElementById("text");
    text.textContent = line;
}

print("Hello World"); */

// Exercice 1 : Température
const celsius = 37;
const fahrenheit = celsius * 9 / 5 + 32;
document.getElementById("text1").textContent = "La température est de " + celsius + "°C = " + fahrenheit + "°F";

// Exercice 2 : Aire du rectangle
const largeur = 15;
const longueur = 40;
const aire = largeur * longueur;
document.getElementById("text2").textContent = "L'aire d'un rectangle de " + longueur + " par " + largeur + " est égale à " + aire;

// Exercice 3 : Nom et prénom
const nom = "DINATEUR";
const prenom = "Laure";
document.getElementById("text3").textContent = "Bonjour, je m'appelle " + prenom + " " + nom;

// Exercice 4 : Calcul TVA
const HT = 20;
const TVA = 0.2;
const TTC = HT + HT * TVA;
document.getElementById("text4").textContent = "Montant HT : " + HT + "€, montant de la TVA : " + (HT * TVA) + "€, montant TTC : " + TTC + "€";
