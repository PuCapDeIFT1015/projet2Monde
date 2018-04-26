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

var Lunatic = function(i,j){
    this.i = i;
    this.j = j;
    this.ageReproduction = AGE_REPRODUCTION;
    this.tauxReproduction = PROB_REPRODUCTION;
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX+1) - Math.ceil(AGE_MORT_MIN)))
            + Math.ceil(AGE_MORT_MIN);
    };

}

Lunatic.prototype.deplacement = function(grille) {
    // On connait avec this.x et this.y la position du luatic dans la grille des parametres
    // On veut generer un nombre random entre 0 et 3 qui sera switch pour la prochaine position
    // Si un obstacle se trouve a la position ou doit aller le lunatic
    //      prendre le case suivant
    // finalement: modifier la position du lunatic
    var positionInitiale = [this.i,this.j];
    var nbreAleatoire = Math.floor(Math.random() * (Math.floor(4) - Math.ceil(0))) + Math.ceil(0);
    switch (nbreAleatoire){
        case 0:// aller en bas
            //verifier si cette place est libre
            if (grille[this.i][this.j + 1] !== '|'
                || grille[this.i][this.j + 1] !== 'B'
                || grille[this.i][this.j + 1] !== '<'
                || grille[this.i][this.j + 1] !== '>'
                || grille[this.i][this.j + 1] !== '^'
                || grille[this.i][this.j + 1] !== 'v'
                || grille[this.i][this.j + 1] !== 'L'
            ) {
                this.j = this.j + 1;
                grille[this.i][this.j] = 'L';
                grille[this.i][this.j-1] = ' ';

                break;
            }

        case 1:// aller en haut
            //verifier si cette place est libre
                if (grille[this.i][this.j -1] !== '|'
                || grille[this.i][this.j -1] !== 'B'
                || grille[this.i][this.j -1] !== '<'
                || grille[this.i][this.j -1] !== '>'
                || grille[this.i][this.j -1] !== '^'
                || grille[this.i][this.j -1] !== 'v'
                || grille[this.i][this.j -1] !== 'L'
            ) {
                this.j = this.j - 1;
                grille[this.i][this.j] = 'L';
                grille[this.i][this.j+1] = ' ';
                break;
                }
        case 2:// aller a droite
            //verifier si cette place est libre
                if (grille[this.i +1][this.j] !== '|'
                || grille[this.i +1][this.j] !== 'B'
                || grille[this.i +1][this.j] !== '<'
                || grille[this.i +1][this.j] !== '>'
                || grille[this.i +1][this.j] !== '^'
                || grille[this.i +1][this.j] !== 'v'
                || grille[this.i +1][this.j] !== 'L'
            ) {
                this.i = this.i + 1;
                grille[this.i][this.j] = 'L';
                grille[this.i-1][this.j] = ' ';
                break;
                }
        case 3: // aller a gauche
            //verifier si cette place est libre
            if (grille[this.i -1][this.j] !== '|'
                || grille[this.i -1][this.j] !== 'B'
                || grille[this.i -1][this.j] !== '<'
                || grille[this.i -1][this.j] !== '>'
                || grille[this.i -1][this.j] !== '^'
                || grille[this.i -1][this.j] !== 'v'
                || grille[this.i -1][this.j] !== 'L'
            ) {
                this.i = this.i - 1;
                grille[this.i][this.j] = 'L';
                grille[this.i+1][this.j] = ' ';
                break;
            }
        default:
            break;
    }
};
