// console.log("message") permet d'afficher un message dans console

console.log("Bonjour depuis un fichier externe !");

// Déclaration d'une variable modifiable

let nom = "Nicolas"; // Chaîne de caractères (String)
let age = 28;      // Nombre (Number)
let estEtudiant = true; // Booléen (Boolean)

// Affichage des variables dans la console:
console.log("Nom :", nom);
console.log("Âge :", age);
console.log("Est étudiant :", estEtudiant);

// Les principaux types de données en JavaScript sont :

let texte = "Bonjour";    // String : Chaîne de caractères (ex. "Bonjour")
let nombre = 42;          // Number : Nombre (ex. 42)
let estVrai = true;       // Boolean : Vrai ou faux (true ou false)
let vide = null;          // Null : Valeur vide
let nonDefini;            // Undefined : Variable non définie

console.log(texte, nombre, estVrai, vide, nonDefini);

    // Calcul entre deux variables:

let a = 10;
let b = 5;

console.log("Addition :", a + b);
console.log("Soustraction :", a - b);
console.log("Multiplication :", a * b);
console.log("Division :", a / b);

    // Les conditions: 

    // Saisie de la note entre 0 et 20:
    // && veux dire 'et' pour remplir deux conditions

   let note = 20;

        if (note >= 16 && note <= 20) {
            console.log("Très bien");
        } else if (note >= 12 && note <= 15) {
            console.log("Bien");
        } else if (note >= 10 && note <= 11) {
            console.log("Passable");
        } else if (note >= 0 && note < 10) {
            console.log("Échec");
        } else {
            console.log("Note invalide, veuillez saisir un nombre entre 0 et 20.");
        }
    
// Les boucles 'for' :

// let i = 1 : Initialise la variable i à 1.
// i <= 3 : Continue la boucle tant que i est inférieur ou égal à 3.
// i++ : Incrémente i de 1 après chaque itération.

for (let i = 1; i <= 3; i++) {
    console.log("Itération :", i); // Affiche les nombres de 1 à 3
}



