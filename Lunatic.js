/********************************************************************************
 * 
 * Classe Lunatic
 * 2018-03-28
 * Description:
 * 
 ********************************************************************************/

const AGE_REPRODUCTION = 18;
const PROB_REPRODUCTION = 0.1;

const AGE_MORT_MIN = 10;
const AGE_MORT_MAX = 110;

var Lunatic = function(x,y){
    this.x = x;
    this.y = y;
    this.ageReproduction = AGE_REPRODUCTION;
    this.tauxReproduction = PROB_REPRODUCTION;
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX) - Math.ceil(AGE_MORT_MIN)))
            + Math.ceil(AGE_MORT_MIN);
    };

}

//Test: Ce constructeur fonctionne: var lunatic = new Lunatic(4, 4);

//print(lunatic.ageMort());

// pour deplacement aleatoire: faire un switch case dans lequel il y aura des valeurs de 0-3, donc si 0: gauche, si...... 4: haut.
//Et: si personnage deja present dans une des cases, il ne peut se deplacer a cette case, on recommence.
//fn deplacement: parametre est la grille. Premiere etape on regartde pos initiale x,y.
