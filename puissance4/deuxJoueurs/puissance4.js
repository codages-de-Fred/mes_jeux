// on récupère les cases et les colonnes demandées
const pions = Array.from(document.querySelectorAll(".cercles"));
const choixColonne = Array.from(document.querySelectorAll(".colonnes"));
const jauneCpteur = document.getElementById("jaune");
const rougeCpteur = document.getElementById("rouge");
document.getElementById("barre").style.cursor = "pointer";
const joueurUn = document.getElementById("joueurUn");
const joueurDeux = document.getElementById("joueurDeux");

// on demande les noms des joueurs
let nomUn = prompt('entrez le nom du premier joueur');
let nomDeux = prompt('entrez le nom du deuxième joueur');

// on insère les noms
joueurUn.innerHTML = nomUn;
joueurUn.style.color = "red";
joueurDeux.innerHTML = nomDeux;
joueurDeux.style.color = "yellow";

// on définit les variables
let compteurJoueur = 0; // à qui le tour
let nbVictoiresRouges = 0;
let nbVictoiresJaunes = 0;
jauneCpteur.style.color = "yellow";
rougeCpteur.style.color = "red";

function colorie() {
    for (let i = 0; i < pions.length; i++){ // il faut définir la couleur des pions à vide
        pions[i].style.backgroundColor = "white";
    }
    if (compteurJoueur%2 === 0) {
        alert("les rouges commencent");
    } else {
        alert("les jaunes commencent");
    } 
    jauneCpteur.innerHTML = nbVictoiresJaunes;
    rougeCpteur.innerHTML= nbVictoiresRouges;

}
colorie();

for(let i= 0; i < choixColonne.length; i++) { // on insert les flèches (pour que le click reste sur les choixColonne)
    choixColonne[i].innerHTML = "&#x21E9";
}


// on clique la colonne pour insérer un pion
choixColonne.forEach(el => el.addEventListener("click",choisi));

function choisi(event) {
    let selection = choixColonne.indexOf(event.target); // on récupère l'index de la colonne sélectionnée
    tour(selection);
}



// suivant à qui le tour
function tour(x) {
    if (compteurJoueur%2 === 0) {
        for(let i = (42 - 7 + x); i >= 0 ;i=i-7) { 
            if (pions[i].style.backgroundColor === "white") {
                compteurJoueur++;
               return pions[i].style.backgroundColor = "red", verifie();
            }
        }
    } else {
        for(let i = (42-7+x); i >= 0; i=i-7) {
            if(pions[i].style.backgroundColor === "white") {
                compteurJoueur++;
                return pions[i].style.backgroundColor = "yellow", verifie();
            }
        }
    }
}
// on vérifie s'il y a un gagnant
function verifie() {
    // les lignes
    for(let i = 6; i > 0; i--) {
        for(let j = 4; j > 0; j--) {
            if(pions[i*7-j].style.backgroundColor !== "white" && pions[i*7-j].style.backgroundColor === pions[i*7-j-1].style.backgroundColor
             && pions[i*7-j].style.backgroundColor === pions[i*7-j-2].style.backgroundColor 
             && pions[i*7-j].style.backgroundColor === pions[i*7-j-3].style.backgroundColor) {
                alert("puissance 4 !!!");
                if( compteurJoueur%2 === 0) {
                    nbVictoiresJaunes++;
                } else {
                    nbVictoiresRouges++;
                }
                colorie();
            }
        }
    } // les colonnes
    for(let i = 41; i > 21; i--) {
        if(pions[i].style.backgroundColor !== "white" && pions[i].style.backgroundColor === pions[i-(7*1)].style.backgroundColor
        && pions[i].style.backgroundColor === pions[i-(7*2)].style.backgroundColor 
        && pions[i].style.backgroundColor === pions[i-(7*3)].style.backgroundColor) {
                alert("puissance 4 !!!");
                if( compteurJoueur%2 === 0) {
                    nbVictoiresJaunes++;
                } else {
                    nbVictoiresRouges++;
                }
                colorie();     
        }
    }// les diagonales
    for(let i = 1; i < 16; i=i+7) {
        for(let j = 0; j < 4; j++) {
            if(pions[i+j -1].style.backgroundColor !== "white" && pions[i+j-1].style.backgroundColor === pions[i+j-1+8].style.backgroundColor
             && pions[i+j-1].style.backgroundColor === pions[i+j-1+16].style.backgroundColor 
             && pions[i+j-1].style.backgroundColor === pions[i+j-1+24].style.backgroundColor) {
                    alert("puissance 4 !!!");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    colorie();
             }
        }
    } for(let i = 4; i < 20; i=i+7) {
        for(let j = 0; j < 4; j++) {
            if(pions[i+j -1].style.backgroundColor !== "white" && pions[i+j-1].style.backgroundColor === pions[i+j-1+6].style.backgroundColor
             && pions[i+j-1].style.backgroundColor === pions[i+j-1+12].style.backgroundColor 
             && pions[i+j -1].style.backgroundColor === pions[i+j-1+18].style.backgroundColor) {
                    alert("puissance 4 !!!");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    colorie();
             }
        }
    } for(let i = 21; i < 36; i=i+7) {
        for(let j = 0; j < 4; j++) {
            if(pions[i+j -1].style.backgroundColor !== "white" && pions[i+j-1].style.backgroundColor === pions[i+j-1-6].style.backgroundColor
             && pions[i+j-1].style.backgroundColor === pions[i+j-1-12].style.backgroundColor 
             && pions[i+j -1].style.backgroundColor === pions[i+j-1-18].style.backgroundColor) {
                    alert("puissance 4 !!!");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    colorie();
             }
        }
    } for(let i = 24; i < 39; i=i+7) {
        for(let j = 0; j < 4; j++) {
            if(pions[i+j -1].style.backgroundColor !== "white" && pions[i+j-1].style.backgroundColor === pions[i+j-1-8].style.backgroundColor
             && pions[i+j-1].style.backgroundColor === pions[i+j-1-16].style.backgroundColor 
             && pions[i+j -1].style.backgroundColor === pions[i+j-1-24].style.backgroundColor) {
                    alert("puissance 4 !!!");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    colorie();
             }
        }
    }
    verifieEgalite();
}

function verifieEgalite() {
    let white = 0;
    for(let i= 0; i < 42; i++) {
        if (pions[i].style.backgroundColor === "white") {
            white++;
        }
    }
    if (white === 0) {
        alert("égalité");
        return colorie();
    }
}
