// on sélectionne ttes les cases
const cases = document.querySelectorAll(".case"); 
console.log(cases);

alert("les X commencent");

// on récupère l'id pour cpter les pts
const pointsX = document.getElementById("x");
let nbPointsX = 0;
const pointsO = document.getElementById("o");
let nbPointsO = 0;

function affichePoints(point) { // fct renvoie le nb de pts
    pointsX.innerHTML = nbPointsX;
    pointsO.innerHTML = nbPointsO;
}
affichePoints(nbPointsX); // affiche 0 au début

// on définit chq tour pour changer de joueur
let i = 0;
function tour() {
    i++;
    if (i%2 === 0) { // si impair
        return "O";
    } else {
        return "X";
    }
}

function afficheGagnant(gagnant) {
    alert(`${gagnant} a gagné !!`); // affiche en alert le gagnant
    cases.forEach(el => el.innerHTML = ""); // vide ttes les cases
    if (i%2 === 0) { // pour dire quel joueur débute
        alert("les X commencent");
    } else {
        alert("les O commencent");
    }
    if (gagnant === "X") { // augmente de 1 le cpte de X
        nbPointsX++;
        affichePoints(nbPointsX);
    } else if (gagnant === "O") { // augmente de  le cpte de O
        nbPointsO++;
        affichePoints(nbPointsO);
    }
}

function egalite(){
    alert(`égalité !!`);
    cases.forEach(el => el.innerHTML = "");
    if (i%2 === 0) {
        alert("les X commencent");
    } else {
        alert("les O commencent");
    }
}

function estGagner(){
    // si la case remplie est...
    if ((cases[0].innerHTML !== "") && (cases[0].innerHTML === cases[1].innerHTML) && (cases[1].innerHTML === cases[2].innerHTML)) {
        afficheGagnant(cases[0].innerHTML); // pour la première ligne
    } else if ((cases[3].innerHTML !== "") && (cases[3].innerHTML === cases[4].innerHTML) && (cases[4].innerHTML === cases[5].innerHTML)) {
        afficheGagnant(cases[3].innerHTML); // pour la deuxième ligne
    } else if ((cases[6].innerHTML !== "") && (cases[6].innerHTML === cases[7].innerHTML) && (cases[7].innerHTML === cases[8].innerHTML)) {
        afficheGagnant(cases[6].innerHTML); // pour la troisième ligne
    } else if ((cases[0].innerHTML !== "") && (cases[0].innerHTML === cases[3].innerHTML) && (cases[3].innerHTML === cases[6].innerHTML)) {
        afficheGagnant(cases[0].innerHTML); // pour la première colonne
    } else if ((cases[1].innerHTML !== "") && (cases[1].innerHTML === cases[4].innerHTML) && (cases[4].innerHTML === cases[7].innerHTML)) {
        afficheGagnant(cases[1].innerHTML); // pour la deuxième colonne
    } else if ((cases[2].innerHTML !== "") && (cases[2].innerHTML === cases[5].innerHTML) && (cases[5].innerHTML === cases[8].innerHTML)) {
        afficheGagnant(cases[2].innerHTML); // pour la troisième colonne
    } else if ((cases[0].innerHTML !== "") && (cases[0].innerHTML === cases[4].innerHTML) && (cases[4].innerHTML === cases[8].innerHTML)) {
        afficheGagnant(cases[0].innerHTML); // pour la première daigonale
    } else if ((cases[2].innerHTML !== "") && (cases[2].innerHTML === cases[4].innerHTML) && (cases[4].innerHTML === cases[6].innerHTML)) {
        afficheGagnant(cases[2].innerHTML); // pour la deuxième colonne
    } else if ((cases[0].innerHTML !== "") && (cases[1].innerHTML !== "") && (cases[2].innerHTML !== "") && (cases[3].innerHTML !== "") && (cases[4].innerHTML !== "") && (cases[5].innerHTML !== "") && (cases[6].innerHTML !== "") && (cases[7].innerHTML !== "") && (cases[8].innerHTML !== "")) {
        egalite();
    }
}


function jouer() {
    if (!this.innerHTML) { // si la case est vide
        this.innerHTML = tour(); // la case cliquée sera soit O ou X
    /* pour cet élément (qu'on a cliqué)
    voir la fct en dessous 
    innerHtml ajoute une écriture */
        estGagner(); // à chq click on vérifie si il y a un vainqueur après l'apparition de la nouvelle valeur
    }
}

// pour chacune des cases
cases.forEach(el => el.addEventListener('click', jouer)); // pour chq élément si cliqué en applique la fct jouer
/*         chq élément action applique jouer à chq click */
