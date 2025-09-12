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
    
// La boucle 'for' :

// let i = 1 : Initialise la variable i à 1.
// i <= 5 : Continue la boucle tant que i est inférieur ou égal à 10.
// i++ : Incrémente i de 1 après chaque itération.

for (let i = 1; i <= 5; i++) {
    console.log("Itération :", i); // Affiche les nombres de 1 à 5
}

// La boucle 'while' :

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {       //'(i % 2 ===0)' affiche les nombres paires
    console.log(i);        // Résultat : 0 2 4 6 8 10 
  }
  i++;
}

// Les fonctions :

function saluer(nom) {
  console.log("Bonjour, " + nom + " !");     // fonction 'saluer' viens d'etre créé
}

saluer("nicolas");                           // permet dutiliser la fonction 'saluer'


const carre = x => x * x;

console.log(carre(5));                       // Affichera 25


      // Les tableaux (Arrays) : 

let animaux = ["lion", "tigre", "zebre"];     // declaration d'un tableau

console.log(animaux[0]);
console.log(animaux[1]);                      // acceder aux elements du tableau dans la console
console.log(animaux[2]);

animaux.push("elephant");                     // ajouter un nouvel element dans le tableau
console.log(animaux);


animaux.pop();
console.log(animaux);                         // supprimer le dernier element


       // les objets :

