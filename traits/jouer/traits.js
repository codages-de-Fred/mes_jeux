let canvas = document.getElementById("canvas");
let plateau = canvas.getContext("2d");

// variable des déplacements
let envoi;

// les coordonnees des points au départ
let xBleu = 50;
let yBleu = 300;
let xRouge = 1250;
let yRouge = 300;

// les compteurs de points
let pointsBleu = 0;
let pointsRouge = 0;

// les avances de traits
let xb = 1;
let yb = 0;
let xr = -1;
let yr = 0;

// on enregistre les coordonées des 2 joueurs
let bleuCoordonnees = [{x: xBleu, y: yBleu}];
let rougeCoordonnees = [{x: xRouge, y: yRouge}];

// on détecte les demandes de déplacements
document.addEventListener('keypress', modifieDeplacements);

// on déplace les traits
function modifieDeplacements(event) {
    // pour le trait rouge
    if (event.key === "8" && yRouge !== 0) {
        xr = 0;
        yr = -1;
    }if (event.key === "2" && yRouge !== 600-1) {
        xr = 0;
        yr = 1;
    }if (event.key === "4" && xRouge !== 0) {
        xr = -1;
        yr = 0;
    }if (event.key === "6" && xRouge !== 1300-1) {
        xr = 1;
        yr = 0;
    }if (event.key === "z" && yBleu !== 0) {
        xb = 0;
        yb = -1;
    }if (event.key === "x" && yBleu !== 600-1) {
        xb = 0;
        yb = 1;
    }if (event.key === "q" && xBleu !== 0) {
        xb = -1;
        yb = 0;
    }if (event.key === "d" && xBleu !== 1300-1) {
        xb = 1;
        yb = 0;
    }
}

function traitbleu() {
    plateau.beginPath();
    plateau.fillStyle = "blue";
    plateau.fillRect(xBleu, yBleu, 2, 2);
    bleuCoordonnees.push({x: xBleu, y: yBleu});
}

function traitRouge() {
    plateau.beginPath();
    plateau.fillStyle = "red";
    plateau.fillRect(xRouge, yRouge, 2, 2);
    rougeCoordonnees.push({x: xRouge, y: yRouge});
}

function bougeLesTraits() {
    xBleu += xb;
    yBleu += yb;
    xRouge += xr;
    yRouge += yr;
    verifieCollision();
    if (xBleu === 0 || xBleu === 1300-2) {
        xb = 0;
    }
    if (yBleu === 0 || yBleu === 600-2) {
        yb = 0;
    }
    if (xRouge === 0 || xRouge === 1300-2) {
        xr = 0;
    }
    if (yRouge === 0 || yRouge === 600-2) {
        yr = 0;
    }
    traitbleu();
    traitRouge();
    
}

let b = "bleu";
let r = "rouge";
function verifieCollision() {
    // si tête contre tête
    if (rougeCoordonnees[rougeCoordonnees.length-1].x === bleuCoordonnees[bleuCoordonnees.length-1].x &&
        rougeCoordonnees[rougeCoordonnees.length-1].y === bleuCoordonnees[bleuCoordonnees.length-1].y) {
            return afficheEgalite();
        }
    // si le bleu cogne le tracé rouge
    for(let i=0; i < rougeCoordonnees.length; i++) {
        if (bleuCoordonnees[bleuCoordonnees.length-1].x === rougeCoordonnees[i].x &&
            bleuCoordonnees[bleuCoordonnees.length-1].y === rougeCoordonnees[i].y) {
                pointsRouge++;
                return afficheVictoire(r);
            }
    }
    // si le rouge cogne le tracé bleu
    for(let i=0; i < bleuCoordonnees.length; i++) {
        if (rougeCoordonnees[rougeCoordonnees.length-1].x === bleuCoordonnees[i].x &&
            rougeCoordonnees[rougeCoordonnees.length-1].y === bleuCoordonnees[i].y) {
                pointsBleu++;
                return afficheVictoire(b);
            }
    }
    // si le bleu cogne son tracé
    for (let i=1; i < bleuCoordonnees.length-1; i++) {
        if (bleuCoordonnees[bleuCoordonnees.length-1].x === bleuCoordonnees[i].x &&
            bleuCoordonnees[bleuCoordonnees.length-1].y === bleuCoordonnees[i].y) {
                pointsRouge++;
                return afficheVictoire(r);
            }
    }
    // si le rouge cogne son tracé
    for (let i=1; i < rougeCoordonnees.length-1; i++) {
        if (rougeCoordonnees[rougeCoordonnees.length-1].x === rougeCoordonnees[i].x && 
            rougeCoordonnees[rougeCoordonnees.length-1].y === rougeCoordonnees[i].y) {
                pointsBleu++;
                return afficheVictoire(b);
            }

    }    
}

function afficheEgalite() {
    clearInterval(envoi);
    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 100px Helvetica";
    plateau.strokeText('EGALITE', 450, 300);
    return setTimeout(affichePoints, 1000);
}

function afficheVictoire(x) {
    clearInterval(envoi);
    if (x === "bleu") {
        plateau.beginPath();
        plateau.strokeStyle = "white";
        plateau.font = "bold 100px Helvetica";
        plateau.strokeText('Victoire bleu', 300, 300);
        setTimeout(affichePoints, 1000);
    } else if (x === "rouge") {
        plateau.beginPath();
        plateau.strokeStyle = "white";
        plateau.font = "bold 100px Helvetica";
        plateau.strokeText('Victoire rouge', 300, 300);
        setTimeout(affichePoints, 1000);
    }
}

function affichePoints() {
    plateau.clearRect(0,0,1300,600);
    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 50px Helvetica";
    plateau.strokeText("nombre de points bleu : "+pointsBleu+"", 100, 200);

    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 50px Helvetica";
    plateau.strokeText("nombre de points rouge : "+pointsRouge+"", 100, 400);

    setTimeout(demandeConfirme, 500);
}

function demandeConfirme() {
    let demande = confirm("Voulez-vous continuer ?");
    if (demande === true) {
        plateau.clearRect(0,0,1300,600);
        xBleu = 50;
        yBleu = 300;
        xRouge = 1250;
        yRouge = 300;
        xb = 1;
        yb = 0;
        xr = -1;
        yr = 0;
        bleuCoordonnees = [{x: xBleu, y: yBleu}];
        rougeCoordonnees = [{x: xRouge, y: yRouge}];
        decompteTrois();
    } else {
        alert("à bientôt");
    }
}

// demarre le jeu
function demarreLeJeu() {
    plateau.clearRect(0,0,1300,600);
    envoi = setInterval(bougeLesTraits, 10);
    envoi;
}

function decompteTrois() {
    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 300px Helvetica";
    plateau.strokeText("3", 600, 400);
    setTimeout(decompteDeux, 500);
}
function decompteDeux() {
    plateau.clearRect(0,0,1300,600);
    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 300px Helvetica";
    plateau.strokeText("2", 600, 400);
    setTimeout(decompteUn, 500);
}
function decompteUn() {
    plateau.clearRect(0,0,1300,600);
    plateau.beginPath();
    plateau.strokeStyle = "white";
    plateau.font = "bold 300px Helvetica";
    plateau.strokeText("1", 600, 400);
    setTimeout(demarreLeJeu, 500);
}
decompteTrois();