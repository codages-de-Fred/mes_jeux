// on récupère les cases et les colonnes demandées
const pions = Array.from(document.querySelectorAll(".cercles"));
const choixColonne = Array.from(document.querySelectorAll(".colonnes"));
const jauneCpteur = document.getElementById("jaune");
const rougeCpteur = document.getElementById("rouge");
const nomJoueur = document.getElementById("nomJoueur");
document.getElementById("barre").style.cursor = "pointer";
const ordi = document.getElementById("ordi");

// on demande le nom du joueur
let nom = prompt('entrez votre nom');

// on insère le nom du joueur
nomJoueur.innerHTML = nom;
nomJoueur.style.color = "red";
ordi.style.color = "yellow";

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
    console.log("jeu");
    if (compteurJoueur%2 === 0) {
        for(let i = (42 - 7 + x); i >= 0 ;i=i-7) { 
            if (pions[i].style.backgroundColor === "white") {
                compteurJoueur++;
                pions[i].style.backgroundColor = "red";
                verifie();
                return setTimeout(ordiJoue, 200);
            }
        }
    }
}
// on vérifie s'il y a un gagnant
function verifie() {
    console.log("verifie");
    // les lignes
    console.log("verifLignes");
    for(let i = 6; i > 0; i--) {
        for(let j = 4; j > 0; j--) {           
            if(pions[i*7-j].style.backgroundColor !== "white" && pions[i*7-j].style.backgroundColor === pions[i*7-j-1].style.backgroundColor
             && pions[i*7-j].style.backgroundColor === pions[i*7-j-2].style.backgroundColor 
             && pions[i*7-j].style.backgroundColor === pions[i*7-j-3].style.backgroundColor) {
                console.log("lignes");
                if( compteurJoueur%2 === 0) {
                    nbVictoiresJaunes++;
                } else {
                    nbVictoiresRouges++;
                }
                return setTimeout(affiche, 100);
            }
        }
    } // les colonnes
    console.log("verifColonnes");
    for(let i = 41; i > 21; i--) {       
        if(pions[i].style.backgroundColor !== "white" && pions[i].style.backgroundColor === pions[i-(7*1)].style.backgroundColor
        && pions[i].style.backgroundColor === pions[i-(7*2)].style.backgroundColor 
        && pions[i].style.backgroundColor === pions[i-(7*3)].style.backgroundColor) {
            console.log("colonnes");   
                if( compteurJoueur%2 === 0) {
                    nbVictoiresJaunes++;
                } else {
                    nbVictoiresRouges++;
                }
                return setTimeout(affiche, 100);    
        }
    }// les diagonales
    console.log("verifDiag1");
    for(let i = 0; i < 16; i=i+7) {
        for(let j = 0; j < 4; j++) {           
            if(pions[i+j].style.backgroundColor !== "white" && pions[i+j].style.backgroundColor === pions[i+j+8].style.backgroundColor
             && pions[i+j].style.backgroundColor === pions[i+j+16].style.backgroundColor 
             && pions[i+j].style.backgroundColor === pions[i+j+24].style.backgroundColor) {
                console.log("diagonales1");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    return setTimeout(affiche, 100);
             }
        }
    } console.log("verifDiag2"); 
    for(let i = 3; i < 20; i=i+7) {
        for(let j = 0; j < 4; j++) {           
            if(pions[i+j].style.backgroundColor !== "white" && pions[i+j].style.backgroundColor === pions[i+j+6].style.backgroundColor
             && pions[i+j].style.backgroundColor === pions[i+j+12].style.backgroundColor 
             && pions[i+j].style.backgroundColor === pions[i+j+18].style.backgroundColor) {
                    console.log("diagonales2");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    return setTimeout(affiche, 100);
             }
        }
    }console.log("verifDiag3"); 
    for(let i = 20; i < 36; i=i+7) {
        for(let j = 0; j < 4; j++) {           
            if(pions[i+j].style.backgroundColor !== "white" && pions[i+j].style.backgroundColor === pions[i+j-6].style.backgroundColor
             && pions[i+j].style.backgroundColor === pions[i+j-12].style.backgroundColor 
             && pions[i+j].style.backgroundColor === pions[i+j-18].style.backgroundColor) {
                    console.log("diagonales3");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    return setTimeout(affiche, 100);
             }
        }
    }console.log("verifDiag4"); 
    for(let i = 23; i < 39; i=i+7) {
        for(let j = 0; j < 4; j++) {          
            if(pions[i+j].style.backgroundColor !== "white" && pions[i+j].style.backgroundColor === pions[i+j-8].style.backgroundColor
             && pions[i+j].style.backgroundColor === pions[i+j-16].style.backgroundColor 
             && pions[i+j].style.backgroundColor === pions[i+j-24].style.backgroundColor) {
                    console.log("diagonales4");
                    if( compteurJoueur%2 === 0) {
                        nbVictoiresJaunes++;
                    } else {
                        nbVictoiresRouges++;
                    }
                    return setTimeout(affiche, 100);
             }
        }
    }
    verifieEgalite();
}

// le jeu de l'ordinateur
function ordiJoue() {
    console.log("OrdiJoue");
    // les lignes
    console.log("ordiLignes");
    for(let i = 6; i > 0; i--) {
        for(let j = 4; j > 0; j--) {
            for(let k=0; k < 4; k++) {               
                let compteurCouleurJaune = 0;
                let compteurCouleurRouge = 0;
                for(let m = 0; m < 4; m++) {
                    if (pions[i*7-7+k+m].style.backgroundColor === "yellow") {
                        compteurCouleurJaune++;
                    }
                    if (compteurCouleurJaune === 3) {
                        for (let l = 0; l < 4 ; l++) {
                            if (pions[i*7-7+k+l].style.backgroundColor === "white") {
                                if (i === 6) {
                                    console.log("lignesJ1");
                                    pions[i*7-7+k+l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                } else {
                                    if (pions[i*7-7+k+l+7].style.backgroundColor !== "white") {
                                        console.log("lignesJ2");
                                        pions[i*7-7+k+l].style.backgroundColor = "yellow";
                                        compteurJoueur++;
                                        return verifie();
                                    }
                                }
                            }
                        }
                    }
                    if (pions[i*7-7+k+m].style.backgroundColor === "red") {
                        compteurCouleurRouge++;
                    }
                    if (compteurCouleurRouge === 3) {
                        for (let l= 0; l < 4; l++) {
                            if (pions[i*7-7+k+l].style.backgroundColor === "white") {
                                if (i === 6) {
                                    console.log("lignesR1");
                                    pions[i*7-7+k+l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                } else if (i < 6){
                                    if (pions[i*7-7+k+l+7].style.backgroundColor !== "white") {
                                        console.log("lignesR2");
                                        pions[i*7-7+k+l].style.backgroundColor = "yellow";
                                        compteurJoueur++;
                                        return verifie();
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
        }
    } // les colonnes
    console.log("ordiColonnes");
    for (let i = 42; i > 21; i--) {       
        let compteurCouleurRouge = 0;
        let compteurCouleurJaune = 0;
        for (let j = 0; j < 3; j++) {
            if(pions[i-7*j-1].style.backgroundColor === "yellow") {
                compteurCouleurJaune++;
            }
            if (compteurCouleurJaune === 3) {
                if(pions[i-7*3-1].style.backgroundColor === "white") {
                    console.log("colonnesJ");
                    pions[i-7*3-1].style.backgroundColor = "yellow";
                    compteurJoueur++;
                    return verifie();
                }
            }
            if(pions[i-7*j-1].style.backgroundColor === "red") {
                compteurCouleurRouge++;
            }
            if (compteurCouleurRouge === 3) {
                if (pions[i-7*3-1].style.backgroundColor === "white") {
                    console.log("colonnesR");
                    pions[i-7*3-1].style.backgroundColor = "yellow";
                    compteurJoueur++;
                    return verifie();
                }
            }
        }
    }
    // les diagonales
    // diagonales descendantes droite
    console.log("ordiDiag1");
    for (let i = 0; i < 15; i=i+7) {
        for(let j = 0; j < 4; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge = 0;
            for (let k = 0; k < 4; k++) {
                if(pions[i+j+7*k+1*k].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                }
                if (compteurCouleurJaune === 3) {
                    for (let l = 0; l < 4; l++) {
                        if(pions[i+j+7*l+1*l].style.backgroundColor === "white") {
                            if ((i+j+7*l+1*l) < 35) {
                                if(pions[i+j+7*l+1*l+7].style.backgroundColor !== "white") {
                                    console.log("diagJ11");
                                    pions[i+j+7*l+1*l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                }
                            } else if ((i+j+7*l+1*l) > 34) {
                                console.log("diagJ12");
                                pions[i+j+7*l+1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
                if(pions[i+j+7*k+1*k].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 3) {
                    for (let l = 0; l < 4; l++) {
                        if(pions[i+j+7*l+1*l].style.backgroundColor === "white") {
                            if ((i+j+7*l+1*l) < 35) {
                                if (pions[i+j+7*l+1*l+7].style.backgroundColor !== "white") {
                                    console.log("diagR11");
                                    pions[i+j+7*l+1*l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                }
                            } else if ((i+j+7*l+1*l) > 34) {
                                console.log("diagR12");
                                pions[i+j+7*l+1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
            }
        }
    }
    // diagonales montantes gauche
    console.log("ordiDiag2");
    for (let i = 41; i > 26; i=i-7) {
        for (let j = 0; j < 4; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge = 0;
            for (let k = 0; k < 4; k++) {
                if (pions[i-j-7*k-1*k].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                }
                if (compteurCouleurJaune === 3) {
                    for(let l = 0; l < 4; l++) {
                        if(pions[i-j-7*l-1*l].style.backgroundColor === "white") {
                            if(pions[i-j-7*l-1*l+7].style.backgroundColor !== "white") {
                                console.log("diagJ21");
                                pions[i-j-7*l-1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
                if (pions[i-j-7*k-1*k].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 3) {
                    for(let l = 0; l < 4; l++) {
                        if(pions[i-j-7*l-1*l].style.backgroundColor === "white") {
                            if (pions[i-j-7*l-1*l+7].style.backgroundColor !== "white") {
                                console.log("diagR21");
                                pions[i-j-7*l-1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
            }
        }
    }
    // diagonale descendantes gauche
    console.log("ordiDiag3");
    for (let i = 6; i < 21; i=i+7) {
        for (let j = 0; j < 4; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge = 0;
            for (let k = 0; k < 4; k++) {
                if(pions[i-j+7*k-1*k].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                }
                if (compteurCouleurJaune === 3) {
                    for (let l = 0; l < 4; l++) {
                        if (pions[i-j+7*l-1*l].style.backgroundColor === "white") {
                            if ((i-j+7*l-1*l) < 35) {
                                if (pions[i-j+7*l-1*l+7].style.backgroundColor !== "white") {
                                    console.log("diagJ31");
                                    pions[i-j+7*l-1*l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                }
                            } else if ((i-j+7*l-1*l) > 34) {
                                console.log("diagJ32");
                                pions[i-j+7*l-1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            } 
                        }
                    }
                }
                if(pions[i-j+7*k-1*k].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 3) {
                    for (let l = 0; l < 4; l++) {
                        if (pions[i-j+7*l-1*l].style.backgroundColor === "white") {
                            if ((i-j+7*l-1*l) > 34) {
                                console.log("diagR31");
                                pions[i-j+7*l-1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            } else if ((i-j+7*l-1*l) < 35) {
                                if (pions[i-j+7*l-1*l].style.backgroundColor !== "white") {
                                    console.log("diagR32");
                                    pions[i-j+7*l-1*l].style.backgroundColor = "yellow";
                                    compteurJoueur++;
                                    return verifie();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // diagonale montante droite
    console.log("ordiDiag4");
    for(let i = 35; i > 20; i=i-7) {
        for (let j = 0; j < 4; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge = 0;
            for (let k = 0; k < 4; k++) {
                if(pions[i+j-7*k+1*k].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                }
                if (compteurCouleurJaune === 3) {
                    for (let l = 0; l < 4; l++) {
                        if (pions[i+j-7*l+1*l].style.backgroundColor === "white") {
                            if (pions[i+j-7*l+1*l+7].style.backgroundColor !== "white") {
                                console.log("diagJ4");
                                pions[i+j-7*l+1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
                if(pions[i+j-7*k+1*k].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 3) {
                    for (let l = 0; l < 4; l++) {
                        if (pions[i+j-7*l+1*l].style.backgroundColor === "white") {
                            if (pions[i+j-7*l+1*l+7].style.backgroundColor !== "white") {
                                console.log("diagR5");
                                pions[i+j-7*l+1*l].style.backgroundColor = "yellow";
                                compteurJoueur++;
                                return verifie();
                            }
                        }
                    }
                }
            }
        }
    }
    // sinon l'ordi joue
    deuxPions();
    
}

// s'il ne bloque pas les 3 pions, il colle 2 pions
function deuxPions() {
    console.log("ordi2Pions");
    // sur diagonale
    console.log("ordi2PDiag1");
    for (let i = 6; i > 2; i--) {
        for (let j = 1; j < 5; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge =0;
            for (let k = 0; k < 2; k++) {
                if (pions[i*7-j-k*8].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                } else if (pions[i*7-j-k*8].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 2 || compteurCouleurJaune === 2) {
                    if (pions[i*7-j-8-1].style.backgroundColor !== "white" 
                    && pions[i*7-j-16].style.backgroundColor === "white") {
                        console.log("2diag1");
                        pions[i*7-j-16].style.backgroundColor = "yellow";
                        compteurJoueur++;
                        return verifieEgalite();
                    }
                }
            }
        }
    }
    console.log("ordi2PDiag2");
    for (let i = 6; i > 2; i--) {
        for (let j = 4; j < 8; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge =0;
            for (let k = 0; k < 2; k++) {
                if (pions[i*7-j-k*6].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                } else if (pions[i*7-j-k*6].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurRouge === 2 || compteurCouleurJaune === 2) {
                    if (pions[i*7-j-6+1].style.backgroundColor !== "white" 
                    && pions[i*7-j-12].style.backgroundColor === "white") {
                        console.log("2diag2");
                        pions[i*7-j-12].style.backgroundColor = "yellow";
                        compteurJoueur++;
                        return verifieEgalite();
                    }
                }
            }
        }
    }
    // sur ligne
    console.log("ordi2PLignes");
    for (let i = 6; i > 0; i--) {
        for (let j = 1; j < 6; j++) {
            let compteurCouleurJaune = 0;
            let compteurCouleurRouge = 0;
            for (let k = 0; k < 2; k++) {
                if (pions[i*7-1-j-k].style.backgroundColor === "yellow") {
                    compteurCouleurJaune++;
                }else if (pions[i*7-1-j-k].style.backgroundColor === "red") {
                    compteurCouleurRouge++;
                }
                if (compteurCouleurJaune === 2 || compteurCouleurRouge === 2) {
                    if (i === 6){
                        if (pions[i*7-1-j+1].style.backgroundColor === "white"){
                            console.log("2ligne1");
                            pions[i*7-1-j+1].style.backgroundColor = "yellow";
                            compteurJoueur ++;
                            return verifieEgalite();
                        }
                    } else if (i < 6) {
                        if(pions[i*7-1-j+1+7].style.backgroundColor !== "white" && pions[i*7-1-j+1].style.backgroundColor === "white"){
                            console.log("2lignes2");
                            pions[i*7-1-j+1].style.backgroundColor = "yellow";
                            compteurJoueur++;
                            return verifieEgalite();
                        }
                    }
                }
            }
        }
    }
    unPion();
}

// sinon on place un pion à côté d'un rouge
function unPion() {
    console.log("ordi1pion1");
    for (let i = 41; i > 5; i=i-7) {
        for (let j = 1; j < 5; j++) {
            if (pions[i-j].style.backgroundColor === "red" && pions[i-j-1].style.backgroundColor === "white") {
                if (i === 41) {
                    console.log("pion11");
                    pions[i-j-1].style.backgroundColor = "yellow";
                    compteurJoueur++;
                    return verifieEgalite();
                } else if (i < 41) {
                    if (pions[i-j-1+7].style.backgroundColor !== "white") {
                        console.log("pion12");
                        pions[i-j-1].style.backgroundColor = "yellow";
                        compteurJoueur++;
                        return verifieEgalite();
                    }
                }
            }
        }
    }
    console.log("ordi1pion2");
    for (let i = 40; i > 5; i=i-7) {
        for (let j = 0; j < 7; j++) {
            if (pions[i-j].style.backgroundColor === "red" && pions[i-j+1].style.backgroundColor === "white") {
                if (i === 40) {
                    console.log("pions21");
                    pions[i-j+1].style.backgroundColor = "yellow";
                    compteurJoueur++;
                    return verifieEgalite();
                } else if (i < 40) {
                    if (pions[i-j+1+7].style.backgroundColor !== "white") {
                        console.log("pions22");
                        pions[i-j+1].style.backgroundColor = "yellow";
                        compteurJoueur++;
                        return verifieEgalite();
                    }
                }
            }
        }
    }
    // sinon on place un pion
    console.log("ordi1pionHazard1");
    for (let i = 41; i > 0; i--) {
        if (pions[i].style.backgroundColor === "white") {
            if (i > 34) {
                console.log("pionhazard11");
                pions[i].style.backgroundColor = "yellow";
                compteurJoueur++;
                return verifieEgalite();
            } else if (i < 35) {
                if (pions[i].style.backgroundColor === "white" && pions[i+7].style.backgroundColor !== "white") {
                    console.log("pionhazard12");
                    pions[i].style.backgroundColor = "yellow";
                    compteurJoueur++;
                    return verifieEgalite();
                }
            }
        }
    }
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

function affiche() {
    alert("puissance 4 !!!");
    colorie();
}
