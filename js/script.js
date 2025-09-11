console.log("Bonjour depuis un fichier externe !");

let nom = "Nicolas";
let age = 28;
let estEtudiant = true;

console.log("Nom :", nom);
console.log("Âge :", age);
console.log("Est étudiant :", estEtudiant);

let texte = "Bonjour";
let nombre = 42;
let estVrai = true;
let vide = null;
let nonDefini;

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

