let canvas = document.getElementById("canvas");
let jeu = canvas.getContext('2d');
document.addEventListener('keydown', deplaceBarre);
let bouton = document.addEventListener('click',demarre);
let nbBriquesCassees = document.getElementById("nbBriquesCassees");

let coordonneesBriques = []; // les coordonnées des briques
let coordonneesBalleX = 400;
let coordonneesBalleY = 150; 
let absisseBarre = 350;
let ordonneesBarre = 550;
let avanceX = 1;
let avanceY = 1;
let briquesCassees = 0;

nbBriquesCassees.innerHTML = briquesCassees;

function enregistreCoordonnées() {
    for (let i = 10; i < 110; i += 30) { // 4 colonnes
        for (let j = 10; j < 750; j += 65) { // 10 / ligne
            coordonneesBriques.push({ x: j, y: i, etat: 1});
        }
    }
}
enregistreCoordonnées();

// on dessine les briques
function dessineBriques() {
    for (let i = 0; i < coordonneesBriques.length; i++) {
        if (coordonneesBriques[i].etat === 1) {
            jeu.beginPath();
            jeu.fillStyle = "blue";
            jeu.fillRect(coordonneesBriques[i].x, coordonneesBriques[i].y, 55, 20);
            jeu.stroke();
        }
    }
}

function dessineBall() {
    jeu.beginPath();
    jeu.arc(coordonneesBalleX, coordonneesBalleY, 5, 0, Math.PI*2);
    jeu.fillStyle = "red";
    jeu.fill();
}

function dessineBarre() {
        jeu.beginPath();
        jeu.fillStyle = "grey";
        jeu.fillRect(absisseBarre, ordonneesBarre, 100, 10);
        jeu.stroke();
}
dessineBall();
dessineBarre();
dessineBriques();

function deplaceBarre(event) {
    if(event.code === "ArrowLeft") {
        absisseBarre += -20;
        if (absisseBarre < 0) {
            absisseBarre = 0;
        } 
        jeu.clearRect(0,0,800,600);
        dessineBriques();
        dessineBarre();
    } else if (event.code === "ArrowRight") {
        absisseBarre += 20;
        if (absisseBarre > 700) {
            absisseBarre = 700;
        }
        jeu.clearRect(0,0,800,600);
        dessineBriques();
        dessineBarre();
    }
}

function verifiePerdu() {
    if (coordonneesBalleY+5 === 600) {
        clearInterval(envoi);
        jeu.beginPath();
        jeu.fillRect(0,0,800,600);
        jeu.fillStyle = 'rgba(222),223,225,0.2)';
        jeu.strokeStyle = "red";
        jeu.font = "bold 200px Helvetica";
        jeu.strokeText('PERDU', 30, 400);
        return setTimeout(demandeConfirm, 100);
    }
}

function verifieGagne() {
    if (briquesCassees === 48) {
        clearInterval(envoi);
        jeu.beginPath();
        jeu.fillRect(0,0,800,600);
        jeu.fillStyle = "black";
        jeu.strokeStyle = "red";
        jeu.font = "bold 200px Helvetica";
        jeu.strokeText('GAGNE', 30, 400);
        return setTimeout(demandeConfirm, 100);
    }
}

function demandeConfirm() {
    let demande = confirm("voulez-vous réessayer ?");
        if (demande === true) {
            coordonneesBriques = [];
            coordonneesBalleX = 700;
            coordonneesBalleY = 150; 
            absisseBarre = 350;
            ordonneesBarre = 550;
            avanceX = 1;
            avanceY = 1;
            briquesCassees = 0;
            enregistreCoordonnées();
            return demarre();
        } else {
            return alert("A bientôt");
        }
}

let envoi;
function demarre() {
    envoi = setInterval(dessineTout, 7);
    envoi;
}
function dessineTout() {
    jeu.clearRect(0,0, 800, 600); // efface le canvas pour redessiner
    verifieCollision();
    dessineBriques();
    dessineBarre();
}

function verifieCollision() {
    coordonneesBalleX += avanceX;
    coordonneesBalleY += avanceY;
    verifiePerdu();
    dessineBall();
    if (coordonneesBalleY === 5) { // si touche le haut
        return avanceY = (-1)*avanceY;
    } else if (coordonneesBalleX-5 <= 0 || coordonneesBalleX+5 >= 795) { // si touche les côtés
        return avanceX = avanceX*(-1);
    } // pour les briques
    for (let i = 0; i < coordonneesBriques.length; i++) { // chaque brique
        if (coordonneesBalleX+5 >= coordonneesBriques[i].x && coordonneesBalleX-5 <= coordonneesBriques[i].x + 55
            && coordonneesBalleY+5 >= coordonneesBriques[i].y && coordonneesBalleY-5 <= coordonneesBriques[i].y +20) {
            // si la balle touche le haut ou le bas de la brique
            if (coordonneesBalleY+5 === coordonneesBriques[i].y || coordonneesBalleY-5 === coordonneesBriques[i].y+20) {
                if (coordonneesBriques[i].etat === 1) {
                    briquesCassees++;
                    nbBriquesCassees.innerHTML = briquesCassees;
                    coordonneesBriques[i].etat = 0;
                    verifieGagne();
                    return avanceY = (-1)*avanceY;
                }   
                // si la balle touche le côté de la brique
                } for (let j= 0; j < 5; j++) {
                    if (coordonneesBalleX+5 === coordonneesBriques[i].x+j || coordonneesBalleX-5 === coordonneesBriques[i].x+55-j) {
                        if (coordonneesBriques[i].etat === 1) {
                            briquesCassees++;
                            nbBriquesCassees.innerHTML = briquesCassees;
                            coordonneesBriques[i].etat = 0;
                            verifieGagne();
                            return avanceX = (-1)*avanceX;   
                        }
                    }
                }           
            }
        
    } // pour la barre
    if (coordonneesBalleX+5 >= absisseBarre && coordonneesBalleX-5 <= absisseBarre+100 
        && coordonneesBalleY+5 === ordonneesBarre) {
        avanceY = (-1)*avanceY;
        if (coordonneesBalleX <= absisseBarre+30) {
            return avanceX = -3;
        } else if (coordonneesBalleX <= absisseBarre+40) {
            return avanceX = -2;
        } else if (coordonneesBalleX <= absisseBarre+50) {
            return avanceX = -1;
        } else if (coordonneesBalleX < absisseBarre+60) {
            return avanceX = 1;
        } else if (coordonneesBalleX >= absisseBarre+60 && coordonneesBalleX <= absisseBarre+70) {
            return avanceX = 2;
        } else if (coordonneesBalleX > absisseBarre+70) {
            return avanceX = 3;
        }
            
    }
    
}
