// on sélectionne ttes les case
const cases = Array.from(document.querySelectorAll(".case"));

// on place les pions au démarrage du jeu
function demarragePlacePions() {
    // les pions noirs
    cases[0].innerHTML = "&#9820";
    cases[1].innerHTML = "&#9822";
    cases[2].innerHTML = "&#9821";
    cases[3].innerHTML = "&#9818";
    cases[4].innerHTML = "&#9819";
    cases[5].innerHTML = "&#9821";
    cases[6].innerHTML = "&#9822";
    cases[7].innerHTML = "&#9820";
    cases[8].innerHTML = "&#9823";
    cases[9].innerHTML = "&#9823";
    cases[10].innerHTML = "&#9823";
    cases[11].innerHTML = "&#9823";
    cases[12].innerHTML = "&#9823";
    cases[13].innerHTML = "&#9823";
    cases[14].innerHTML = "&#9823";
    cases[15].innerHTML = "&#9823";
    // les cases blancs
    cases[63].innerHTML = "&#9814";
    cases[62].innerHTML = "&#9816";
    cases[61].innerHTML = "&#9815";
    cases[60].innerHTML = "&#9813";
    cases[59].innerHTML = "&#9812";
    cases[58].innerHTML = "&#9815";
    cases[57].innerHTML = "&#9816";
    cases[56].innerHTML = "&#9814";
    cases[55].innerHTML = "&#9817";
    cases[54].innerHTML = "&#9817";
    cases[53].innerHTML = "&#9817";
    cases[52].innerHTML = "&#9817";
    cases[51].innerHTML = "&#9817";
    cases[50].innerHTML = "&#9817";
    cases[49].innerHTML = "&#9817";
    cases[48].innerHTML = "&#9817";
}
demarragePlacePions();

function colorie(){
    for(let i = 0; i < 8; i++) {
        if(i%2 === 0) {
            cases[i].style.backgroundColor = "rgb(228, 217, 217)";
        } else {
            cases[i].style.backgroundColor = "rgb(155, 74, 74)";
        }
    }
    for(let j = 8; j < 16; j++) {
        if(j%2 === 0) {
            cases[j].style.backgroundColor = "rgb(155, 74, 74)";
        } else {
            cases[j].style.backgroundColor = "rgb(228, 217, 217)";
        }
    }
    for(let k = 16; k < 24; k++) {
        if(k%2 === 0) {
            cases[k].style.backgroundColor = "rgb(228, 217, 217)";  
        } else {
            cases[k].style.backgroundColor = "rgb(119, 49, 49)";
        }
    }
    for (let l = 24; l < 32; l++) {
        if(l%2 === 0) {
            cases[l].style.backgroundColor = "rgb(119, 49, 49)"; 
        } else {
            cases[l].style.backgroundColor = "rgb(228, 217, 217)";
        }
    }
    for(let m = 32; m < 40; m++) {
        if(m%2 === 0) {
            cases[m].style.backgroundColor = "rgb(228, 217, 217)";
        } else {
            cases[m].style.backgroundColor = "rgb(119, 49, 49)";
        }
    }
    for(let n = 40; n < 48; n++) {
        if(n%2 === 0) {
            cases[n].style.backgroundColor = "rgb(119, 49, 49)";
        } else {
            cases[n].style.backgroundColor = "rgb(228, 217, 217)";
        }
    }
    for(let o = 48; o < 56; o++) {
        if(o%2 === 0) {
            cases[o].style.backgroundColor = "rgb(228, 217, 217)";
        } else {
            cases[o].style.backgroundColor = "rgb(119, 49, 49)";
        }
    }
    for(let p = 56; p < 64; p++) {
        if(p%2 === 0) {
            cases[p].style.backgroundColor = "rgb(119, 49, 49)";
        } else {
            cases[p].style.backgroundColor = "rgb(228, 217, 217)"; 
        }
    }
}
colorie();

// un compteur pour savoir si on est au premier click ou au deuxième
let compteurClickUn = 0;
let compteurClickDeux = 0;
let compteurClick = 0;

// récupère le pion sélectionné du premier click
let pionSelectionneClickUn = "";
//récupère la case ou le pion sélectionné au click 2
let pionSelectionneClickDeux = "";

// récupère la position du premier click
let positionClickUn = 0;
// récupère la position du deuxième click
let positionClickDeux = 0;

// compteur pour savoir à qui le tour
let compteurJoueur = 0;



function joue(event) {
    cases[cases.indexOf(event.target)].style.backgroundColor = "grey";
    if (compteurClick %2 === 0) {
        pionSelectionneClickUn = this.innerHTML;
        compteurClickUn++;
        compteurClick++;
        positionClickUn = cases.indexOf(event.target);
    } else if (compteurClick %2 !== 0){
        pionSelectionneClickDeux = this.innerHTML;
        compteurClickDeux++;
        compteurClick++;
        positionClickDeux = cases.indexOf(event.target);
        colorie();
        controleSelection();
    }
}

// on vérifie les 2 clicks
function controleSelection() { 
    if(compteurClickUn === compteurClickDeux) {
        if (positionClickUn === positionClickDeux) { // si premier click = au deuxieme click le joueur rejoue
            if(compteurJoueur %2 === 0) {
                alert("le joueur blanc rejoue");
            } else {
                alert("le joueur noir rejoue");
            }
    } // si joueur blanc veut bouger un pion noir
    else if ((compteurJoueur %2 === 0 && pionSelectionneClickUn === "♚")
    || (compteurJoueur%2 === 0 && pionSelectionneClickUn === "♛")
    || (compteurJoueur%2 === 0 && pionSelectionneClickUn === "♜")
    || (compteurJoueur%2 === 0 && pionSelectionneClickUn === "♝")
    || (compteurJoueur%2 === 0 && pionSelectionneClickUn === "♞")
    || (compteurJoueur%2 === 0 && pionSelectionneClickUn === "♟")) {
        alert("ce pion est à l'adversaire");
    } // si joueur noir veur bouger un pion blanc
    else if ((compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♔")
    || (compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♕")
    || (compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♗")
    || (compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♘")
    || (compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♖")
    || (compteurJoueur %2 !== 0 && pionSelectionneClickUn === "♙")) {
        alert("ce pion est à l'adversaire");
    } else {
        controleDeplacement();
    } 
    } 
}

function controleDeplacement() { // on contrôle le bon déplacement pion par pion
    // pour les blancs
    if (compteurJoueur %2 === 0) {
        // pour les pions
            // pour le déplacement de 2 cases au début
        if ((pionSelectionneClickUn === "♙" && positionClickUn === 55 && positionClickDeux === 39 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 54 && positionClickDeux === 38 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♙" && positionClickUn === 53 && positionClickDeux === 37 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 52 && positionClickDeux === 36 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 51 && positionClickDeux === 35 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 50 && positionClickDeux === 34 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 49 && positionClickDeux === 33 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♙" && positionClickUn === 48 && positionClickDeux === 32 && pionSelectionneClickDeux === "")
            // pour le déplacement de une case 
        || (pionSelectionneClickUn === "♙" &&  positionClickDeux === positionClickUn - 8 && pionSelectionneClickDeux === "")
            // pour la prise
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -7   && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♙" && positionClickDeux === positionClickUn -9   && pionSelectionneClickDeux === "♚")){
            deplacement();
        } // pour les cavaliers
        else if((pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♘" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♚")
        ){
            deplacement();
        } // pour les fous
        else if((pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♚" && (positionClickUn - positionClickDeux)%9 === 0)){
            diagonalesNeuf();
        }
        else if((pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♗" && pionSelectionneClickDeux === "♚" && (positionClickUn - positionClickDeux)%7 === 0)) {
            diagonalesSept();
        } // pour les tours
            // déplacement vertical
        else if ((pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♖" && pionSelectionneClickDeux === "♚" && (positionClickUn - positionClickDeux)%8 === 0)) {
            verticale();
        }   // déplacement horizontal
        else if ((pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♜")        
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♖" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♚")) {
            deplacementHorizontal();
        } // pour la reine
            // déplacement en diagonale
        else if((pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%9 === 0)){
            diagonalesNeuf();
        }
        else if((pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♚" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%7 === 0)) {
            diagonalesSept();            
        }   // déplacement vertical
        else if ((pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♟" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♜" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♞" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♝" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♛" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♕" && pionSelectionneClickDeux === "♚" && (positionClickUn - positionClickDeux)%8 === 0)) {
            verticale();
        }   // déplacement horizontal
        else if ((pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♜")        
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♜")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♕" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♚")) {
            deplacementHorizontal();
        } // pour le roi
        else if ((pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♟")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♞")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♝")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♛")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♚")
        || (pionSelectionneClickUn === "♔" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "")
        ) {
            deplacement();
        }
        else {
            alert("déplacement non conforme");
        }
    // si joueur noir    
    } else { 
        // pour les pions
            // pour le déplacement de 2 cases au début
        if ((pionSelectionneClickUn === "♟" && positionClickUn === 8 && positionClickDeux === 24 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 9 && positionClickDeux === 25 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♟" && positionClickUn === 10 && positionClickDeux === 26 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 11 && positionClickDeux === 27 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 12 && positionClickDeux === 28 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 13 && positionClickDeux === 29 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 14 && positionClickDeux === 30 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♟" && positionClickUn === 15 && positionClickDeux === 31 && pionSelectionneClickDeux === "")
            // pour le déplacement de une case 
        || (pionSelectionneClickUn === "♟" &&  positionClickDeux === positionClickUn + 8 && pionSelectionneClickDeux === "")
            // pour la prise
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +7   && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♟" && positionClickDeux === positionClickUn +9   && pionSelectionneClickDeux === "♔")){
            deplacement(); 
        } // pour les cavaliers
        else if((pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 15 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 17 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 10 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn - 6 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 6 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 10 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 15 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♞" &&  positionClickDeux === positionClickUn + 17 && pionSelectionneClickDeux === "♔")
        ){
            deplacement();
        } // pour les fous
        else if((pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%9 === 0)){
            diagonalesNeuf();
        }
        else if((pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♝" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%7 === 0)) {
            diagonalesSept();
        } // pour les tours
            // deplacement vertical
        else if ((pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♜" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%8 === 0)) {
            verticale();
        }   // deplacement horizontal
        else if ((pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♖")        
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♜" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♔")) {
            deplacementHorizontal();
        } // pour la reine
            // deplacement en diagonale
        else if((pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%9 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%9 === 0)){
            diagonalesNeuf();
        }
        else if((pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%7 === 0)){
            diagonalesSept();
        } // déplacement vertical
        else if ((pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♙" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♖" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♘" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♗" && (positionClickUn - positionClickDeux)%8 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♕" && (positionClickUn - positionClickDeux)%7 === 0)
        || (pionSelectionneClickUn === "♛" && pionSelectionneClickDeux === "♔" && (positionClickUn - positionClickDeux)%8 === 0)) {
            verticale();
        } // déplacement horizontal
        else if ((pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "") 
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 64 && positionClickUn > 55 && positionClickDeux < 64 && positionClickDeux > 55 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 56 && positionClickUn > 47 && positionClickDeux < 56 && positionClickDeux > 47 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 48 && positionClickUn > 39 && positionClickDeux < 48 && positionClickDeux > 39 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 40 && positionClickUn > 31 && positionClickDeux < 40 && positionClickDeux > 31 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♖")        
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 32 && positionClickUn > 23 && positionClickDeux < 32 && positionClickDeux > 23 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 24 && positionClickUn > 15 && positionClickDeux < 24 && positionClickDeux > 15 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 16 && positionClickUn > 7 && positionClickDeux < 16 && positionClickDeux > 7 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♛" && positionClickUn < 8 && positionClickUn >= 0 && positionClickDeux < 8 && positionClickDeux >= 0 && pionSelectionneClickDeux === "♔")) {
            deplacementHorizontal();
        } // pour les rois
        else if ((pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +1 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -1 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -8 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn -9 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +7 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +8 && pionSelectionneClickDeux === "")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♙")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♘")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♖")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♗")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♕")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "♔")
        || (pionSelectionneClickUn === "♚" && positionClickDeux === positionClickUn +9 && pionSelectionneClickDeux === "")
        ) {
            deplacement();
        } else {
            alert('déplacement non conforme');
        }
    }
}

// vérifie la présence d'un pion ds trajectoire horizontale de tour ou reine
function deplacementHorizontal() {
    let compteurFaute = 0;
    if(positionClickDeux < positionClickUn) {
        for(let i = positionClickUn - 1; i > positionClickDeux; i--) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            }
        }
    } else if (positionClickDeux > positionClickUn) {
        for (let i = positionClickUn + 1; i < positionClickDeux; i++) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    }
    if (compteurFaute === 0){
        deplacement();
    }
}

// vérifie la présence d'un pion dans trajectoire verticale de tour ou reine
function verticale() {
    let compteurFaute = 0;
    if(positionClickDeux < positionClickUn) {
        for(let i = positionClickUn - 8; i > positionClickDeux; i = i-8) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    } else if (positionClickDeux > positionClickUn) {
        for (let i = positionClickUn + 8; i < positionClickDeux; i = i+8) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    }
    if (compteurFaute === 0) {
        deplacement();
    }
}

// vérifie la présence d'un pion dans trajectoire du fou ou reine
function diagonalesNeuf() {
    let compteurFaute = 0;
    if(positionClickDeux < positionClickUn) {
        for(let i = positionClickUn - 9; i > positionClickDeux; i = i-9) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    } else if (positionClickDeux > positionClickUn) {
        for (let i = positionClickUn + 9; i < positionClickDeux; i = i+9) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    }
    if (compteurFaute === 0) {
        deplacement();
    } 
}

function diagonalesSept() {
    let compteurFaute = 0;
    if(positionClickDeux < positionClickUn) {
        for(let i = positionClickUn - 7; i > positionClickDeux; i = i-7) {
            if(cases[i].innerHTML === "♙" || cases[i].innerHTML === "♖" || cases[i].innerHTML === "♘"  || cases[i].innerHTML === "♗"  || cases[i].innerHTML === "♕" ||
            cases[i].innerHTML === "♔" || cases[i].innerHTML === "♟" || cases[i].innerHTML === "♜" || cases[i].innerHTML === "♞" || cases[i].innerHTML === "♝" ||
            cases[i].innerHTML === "♛" || cases[i].innerHTML === "♚") {
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    } else if (positionClickDeux > positionClickUn) {
        for (let i = positionClickUn + 7; i < positionClickDeux; i = i+7) {
            if(cases[i].innerHTML !== "" ) {
                cases[i].style.backgroundColor = "green";
                compteurFaute++;
                return alert("il y a un pion sur la trajectoire");
            } 
        }
    }
    if (compteurFaute === 0) {
        deplacement();
    } 
    compteurFaute = 0;
}

let tabSavePion = [];

function deplacement() { 
    if (compteurClickUn === compteurClickDeux) {
        tabSavePion.push(cases[positionClickUn].innerHTML);
        tabSavePion.push(cases[positionClickDeux].innerHTML);
        cases[positionClickDeux].innerHTML = pionSelectionneClickUn;
        cases[positionClickUn].innerHTML = "";
        verifieRoi();
         
    }
}

function verifieRoi() {
    compteurJoueur++;
     // si roi blanc en échec
        for (let i = 0; i < cases.length; i++) {
            if(cases[i].innerHTML === "♔") {
                 // vérifie pion
                 for (let j = 8; j <= 56; j=j+8) {
                     if(cases[j].innerHTML === "♔" && cases[j-7].innerHTML === "♟") {
                         verifieMat(2);
                     }
                 } for (let b = 15; b <= 63; b=b+8) {
                    if(cases[b].innerHTML === "♔" && cases[b-9].innerHTML === "♟") {
                        verifieMat(2);
                    }
                 }if (i < 63 && i !== 56 && i !== 55 && i !== 48 && i !== 47 && i !== 40 && i !== 39 && i !== 32
                    && i !== 31 && i !== 24 && i !== 23 && i !== 16 && i !== 15 && i !== 8 && i !== 7 && i !== 0){
                        if (cases[i-7].innerHTML === "♟" || cases[i-9].innerHTML === "♟") {
                            verifieMat(2);
                        } 
                }// vérifie fou ou reine
                if (i > 14) {
                    for(let k = i-7; k >= moinsSept(i); k = k-7){ // vérifie fou ou reine
                        if (cases[k].innerHTML === "♝" || cases[k].innerHTML ==="♛") {
                            let compteurPiece = 0;
                            for(let l = i-7; l > k; l=l-7) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                verifieMat(2);
                            }
                            compteurPiece = 0;
                        }
                }
                } if (i > 18) {
                    for(let k = i - 9; k >= moinsNeuf(i); k = k-9){
                        if (cases[k].innerHTML === "♝" || cases[k].innerHTML ==="♛") {
                            let compteurPiece = 0;
                            for(let l = i-9; l > k; l=l-9) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                return verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if (i < 45) {
                    for(let k = i + 9; k <= plusNeuf(i); k = k+9){
                        if (cases[k].innerHTML === "♝" || cases[k].innerHTML ==="♛") {
                            let compteurPiece = 0;
                            for(let l = i+9; l < k; l=l+9) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }for(let k = i + 7; k <= plusSept(i); k = k+7){
                        if (cases[k].innerHTML === "♝" || cases[k].innerHTML ==="♛") {
                            let compteurPiece = 0;
                            for(let l = i+7; l < k; l=l+7) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                }// vérifie les cavaliers
                if (i === 0) {
                    if(cases[17].innerHTML === "♞" || cases[10].innerHTML === "♞") {
                        verifieMat(2);
                    }
                }
                if (i < 6 && i > 0) {
                    if (cases[i+6].innerHTML === "♞" || cases[i+10].innerHTML === "♞" || cases[i+15].innerHTML === "♞" || cases[i+17].innerHTML === "♞") {
                        verifieMat(2);
                    }
                }
                if (i === 7) {
                    if (cases[13].innerHTML === "♞" || cases[22].innerHTML === "♞") {
                        verifieMat(2);
                    }
                }
                if (i > 7 && i < 55) {
                    if(cases[i-6].innerHTML === "♞" || cases[i-10].innerHTML === "♞" || cases[i-15].innerHTML === "♞" || cases[i-17].innerHTML === "♞" 
                    || cases[i+6].innerHTML === "♞" || cases[i+10].innerHTML === "♞" || cases[i+15].innerHTML === "♞" || cases[i+17].innerHTML === "♞"){
                        verifieMat(2);
                    }
                }
                if (i === 56) {
                    if (cases[41].innerHTML === "♞" || cases[50].innerHTML === "♞") {
                        verifieMat(2);
                    } 
                }
                if (i > 56 && i < 63) {
                    if(cases[i-6].innerHTML === "♞" || cases[i-10].innerHTML === "♞" || cases[i-15].innerHTML === "♞" || cases[i-17].innerHTML === "♞") {
                        verifieMat(2);
                    }
                }
                if (i ===63) {
                    if (cases[46].innerHTML === "♞" || cases[53].innerHTML === "♞") {
                        verifieMat(2);
                    }
                }
                // vérifie tour ou reine en vertical
                if (i < 55) {
                    for(let j = i+8; j < cases.length; j=j+8) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            for(let k = i+8; k < j; k=k+8){
                                if(cases[k].innerHTML !== "") {
                                    compteurPiece++;
                                }
                            }
                            if(compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                }
                if (i > 7) {
                    for(let j = i-8; j > 0; j=j-8) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            for(let k = i-8; k < j; k=k-8){
                                if(cases[k].innerHTML !== "") {
                                    compteurPiece++;
                                }
                            }
                            if(compteurPiece !== 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } // on verifie tour ou reine horizontal
                if(i >= 0 && i < 8) {
                    for(let j = 0; j < 8; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 8 && i < 16) {
                    for(let j = 8; j < 16; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 16 && i < 24) {
                    for(let j = 16; j < 24; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 24 && i < 32) {
                    for(let j = 24; j < 32; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 32 && i < 40) {
                    for(let j = 32; j < 40; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 40 && i < 48) {
                    for(let j = 40; j < 48; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 48 && i < 56) {
                    for(let j = 48; j < 56; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 56 && i < 64) {
                    for(let j = 58; j < 64; j++) {
                        if(cases[j].innerHTML === "♜" || cases[j].innerHTML === "♛") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat(2);
                            }
                            compteurPiece =0;
                        }
                    }
                }// vérifie roi
                if (i === 0) {
                    if (cases[i+1].innerHTML === "♚" || cases[i+8].innerHTML === "♚" || cases[i+9].innerHTML === "♚") {
                        verifieMat(2);
                    }
                }
                if (i < 7 && i > 0) {
                    if(cases[i-1].innerHTML === "♚" || cases[i+1].innerHTML === "♚" || cases[i+8].innerHTML === "♚" || cases[i+7].innerHTML === "♚"
                     || cases[i+9].innerHTML === "♚") {
                        verifieMat(2);
                     }
                }if (i === 7) {
                    if (cases[6].innerHTML === "♚" || cases[14].innerHTML === "♚" || cases[15].innerHTML === "♚") {
                        verifieMat(2);
                    } 
                } if (i > 7 && i < 56) {
                    if (cases[48].innerHTML === "♚" || cases[49].innerHTML === "♚" || cases[57].innerHTML === "♚") {
                        verifieMat(2);
                    }
                }
                 if (i > 56 && i < 63) {
                    if(cases[i-1] === "♚" || cases[i+1] === "♚" || cases[i-8] === "♚" || cases[i-7] === "♚" ||
                    cases[i-9] === "♚") {
                        verifieMat(2);
                    }
                }
                if (i === 63) {
                    if (cases[62].innerHTML === "♚" || cases[55].innerHTML === "♚" || cases[54].innerHTML) {
                        verifieMat(2);
                    }
                }
            }
        }
    // si roi noir en échec
        for (let i = 0; i < cases.length; i++) {
            if(cases[i].innerHTML === "♚") {
                 // vérifie pion
                 for (let j = 0; j <= 48; j=j+8) {
                     if(cases[j].innerHTML ==="♚" && cases[j+9].innerHTML === "♙") {
                         verifieMat("3");
                     }
                 } for (let b = 7; b <= 55; b=b+8) {
                    if(cases[b].innerHTML === "♚" && cases[b+7].innerHTML === "♙") {
                        verifieMat("3");
                    }
                 }if (i < 63 && i !== 56 && i !== 55 && i !== 48 && i !== 47 && i !== 40 && i !== 39 && i !== 32
                    && i !== 31 && i !== 24 && i !== 23 && i !== 16 && i !== 15 && i !== 8 && i !== 7 && i !== 0){
                        if (cases[i+7].innerHTML === "♙" || cases[i+9].innerHTML === "♙") {
                            verifieMat("3");
                        } 
                }
                // vérifie fou ou reine
                if (i > 14) {
                    for(let k = i-7; k >= moinsSept(i); k = k-7){ 
                        if (cases[k].innerHTML === "♗" || cases[k].innerHTML ==="♕") {
                            let compteurPiece = 0;
                            for(let l = i-7; l > k; l=l-7) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                verifieMat("3");
                            }
                            compteurPiece = 0;
                        }
                    }
                } if (i > 18) {
                    for(let k = i - 9; k >= moinsNeuf(i); k = k-9){
                        if (cases[k].innerHTML === "♗" || cases[k].innerHTML ==="♕") {
                            let compteurPiece = 0;
                            for(let l = i-9; l > k; l=l-9) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                return verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if (i < 45) {
                    for(let k = i + 9; k <= plusNeuf(i); k = k+9){
                        if (cases[k].innerHTML === "♗" || cases[k].innerHTML ==="♕") {
                            let compteurPiece = 0;
                            for(let l = i+9; l < k; l=l+9) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }for(let k = i + 7; k <= plusSept(i); k = k+7){
                        if (cases[k].innerHTML === "♗" || cases[k].innerHTML ==="♕") {
                            let compteurPiece = 0;
                            for(let l = i+7; l < k; l=l+7) {
                                if(cases[l].innerHTML !== ""){
                                    compteurPiece++;
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                }// vérifie les cavaliers
                if (i === 0) {
                    if(cases[17].innerHTML === "♘" || cases[10].innerHTML === "♘") {
                        verifieMat("3");
                    }
                }
                if (i < 6 && i > 0) {
                    if (cases[i+6].innerHTML === "♘" || cases[i+10].innerHTML === "♘" || cases[i+15].innerHTML === "♘" || cases[i+17].innerHTML === "♘") {
                        verifieMat("3");
                    }
                }
                if (i === 7) {
                    if (cases[13].innerHTML === "♘" || cases[22].innerHTML === "♘") {
                        verifieMat("3");
                    }
                }
                if (i > 7 && i < 55) {
                    if(cases[i-6].innerHTML === "♘" || cases[i-10].innerHTML === "♘" || cases[i-15].innerHTML === "♘" || cases[i-17].innerHTML === "♘" 
                    || cases[i+6].innerHTML === "♘" || cases[i+10].innerHTML === "♘" || cases[i+15].innerHTML === "♘" || cases[i+17].innerHTML === "♘"){
                        verifieMat("3");
                    }
                }
                if (i === 56) {
                    if (cases[41].innerHTML === "♘" || cases[50].innerHTML === "♘") {
                        verifieMat("3");
                    } 
                }
                if (i > 56 && i < 63) {
                    if(cases[i-6].innerHTML === "♘" || cases[i-10].innerHTML === "♘" || cases[i-15].innerHTML === "♘" || cases[i-17].innerHTML === "♘") {
                        verifieMat("3");
                    }
                }
                if (i ===63) {
                    if (cases[46].innerHTML === "♘" || cases[53].innerHTML === "♘") {
                        verifieMat("3");
                    }
                }
                // vérifie tour ou reine en vertical
                if (i < 55) {
                    for(let j = i+8; j < cases.length; j=j+8) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            for(let k = i+8; k < j; k=k+8){
                                if(cases[k].innerHTML !== "") {
                                    compteurPiece++;
                                }
                            }
                            if(compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                }
                if (i > 7) {
                    for(let j = i-8; j > 0; j=j-8) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            for(let k = i-8; k < j; k=k-8){
                                if(cases[k].innerHTML !== "") {
                                    compteurPiece++;
                                }
                            }
                            if(compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } // on verifie tour ou reine horizontal
                if(i >= 0 && i < 8) {
                    for(let j = 0; j < 8; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 8 && i < 16) {
                    for(let j = 8; j < 16; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 16 && i < 24) {
                    for(let j = 16; j < 24; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 24 && i < 32) {
                    for(let j = 24; j < 32; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 32 && i < 40) {
                    for(let j = 32; j < 40; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 40 && i < 48) {
                    for(let j = 40; j < 48; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 48 && i < 56) {
                    for(let j = 48; j < 56; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                } if(i >= 56 && i < 64) {
                    for(let j = 58; j < 64; j++) {
                        if(cases[j].innerHTML === "♖" || cases[j].innerHTML === "♕") {
                            let compteurPiece = 0;
                            if(i < j) {
                                for(k = i + 1; k < j; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            } else if (i > j) {
                                for(k = j + 1; k < i; k++){
                                    if(cases[k].innerHTML !== "") {
                                        compteurPiece++;
                                    }
                                }
                            }
                            if (compteurPiece === 0) {
                                compteurPiece =0;
                                verifieMat("3");
                            }
                            compteurPiece =0;
                        }
                    }
                }// vérifie roi
                if (i === 0) {
                    if (cases[i+1].innerHTML === "♔" || cases[i+8].innerHTML === "♔" || cases[i+9].innerHTML === "♔") {
                        verifieMat("3");
                    }
                }
                if (i < 7 && i > 0) {
                    if(cases[i-1].innerHTML === "♔" || cases[i+1].innerHTML === "♔" || cases[i+8].innerHTML === "♔" || cases[i+7].innerHTML === "♔"
                     || cases[i+9].innerHTML === "♔") {
                        verifieMat("3");
                     }
                }if (i === 7) {
                    if (cases[6].innerHTML === "♔" || cases[14].innerHTML === "♔" || cases[15].innerHTML === "♔") {
                        verifieMat("3");
                    } 
                } if (i > 7 && i < 56) {
                    if (cases[48].innerHTML === "♔" || cases[49].innerHTML === "♔" || cases[57].innerHTML === "♔") {
                        verifieMat("3");
                    }
                }
                 if (i > 56 && i < 63) {
                    if(cases[i-1] === "♔" || cases[i+1] === "♔" || cases[i-8] === "♔" || cases[i-7] === "♔" ||
                    cases[i-9] === "♔") {
                        verifieMat("3");
                    }
                }
                if (i === 63) {
                    if (cases[62].innerHTML === "♔" || cases[55].innerHTML === "♔" || cases[54].innerHTML) {
                        verifieMat("3");
                    }
                }
            }
        }
    
}

function verifieMat(x) {
    if (x*2 === 4 && compteurJoueur%2 !== 0) { // si roi blanc et au tour des blancs
        cases[positionClickUn].innerHTML = tabSavePion[compteurJoueur*2 - 2];
        cases[positionClickDeux].innerHTML = tabSavePion[compteurJoueur*2 -1];
        compteurJoueur--;
        tabSavePion.pop();
        tabSavePion.pop();
        alert("échec !!! les blancs rejouent");
    } else if (x*2 === 4 && compteurJoueur%2 === 0) {
        alert("échec !!!");
    } else if (x*2 === 6 && compteurJoueur%2 === 0) { // si roi noir et au tour des noirs
        cases[positionClickUn].innerHTML = tabSavePion[compteurJoueur*2 - 2];
        cases[positionClickDeux].innerHTML = tabSavePion[compteurJoueur*2 -1];
        compteurJoueur--;
        tabSavePion.pop();
        tabSavePion.pop();
        alert("échec !!! les noirs rejouent");
    } else if (x*2 === 6 && compteurJoueur%2 !== 0) {
        alert("échec !!!");
    }
}

// sélectionne une case
cases.forEach(el => el.addEventListener("click", joue));

// fonction pour stopper aux limites verticales
function moinsSept(x){
    for(let z = x-7; z > 0; z = z-7) {
        if (z === 55) {return 55;}
        else if(z === 47) {return 47;}
        else if(z === 39){return 39;}
        else if(z ===31){return 31;}
        else if(z ===23){return 23;}
        else if(z ===15){return 15;}
        else if(z ===7){return 7;}
    }
    return 0;
}
function moinsNeuf(x){
    for(let z = x-9; z > 0; z = z -9) {
        if (z === 56) {return 56;}
        else if(z === 48) {return 48;}
        else if(z=== 40){return 40;}
        else if(z=== 32){return 32;}
        else if(z=== 24){return 24;}
        else if(z=== 16){return 16;}
        else if(z=== 8){return 8;}
    }
    return 0;
}
function plusNeuf(x){
    for(let z = x+9; z < cases.length; z = z+9) {
        if (z === 7) {return 7;}
        else if(z === 15) {return 15;}
        else if(z ===23){return 23;}
        else if(z ===31){return 31;}
        else if(z ===39){return 39;}
        else if(z ===47){return 47;}
        else if(z ===55){return 55;}
    }
    return cases.length;
}
function plusSept(x){
    for(let z = x+7; z < cases.length; z = z+7) {
        if (z === 8) {return 8;}
        else if(z ===16) {return 16;}
        else if(z ===24){return 24;}
        else if(z ===32){return 32;}
        else if(z ===40){return 40;}
        else if(z ===48){return 48;}
        else if(z ===56){return 56;}
    }
    return cases.length;
}

