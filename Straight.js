/********************************************************************************
 *
 * Classe Straight
 * 2018-03-28
 * Description: Personnage qui se déplace seulement en une direction, 
 * qui est initialement sélectionnée aléatoirement.
 *
 ********************************************************************************/

/**
 * Constructeur par paramètres
 * @param {Number} i coordonnée verticale
 * @param {Number} j coordonnée horizontale
 * 
 */
var Straight = function (i, j) {
    this.i = i;
    this.j = j;
    this.ageReproduction = AGE_REPRODUCTION;//25
    this.tauxReproduction = PROB_REPRODUCTION;//0.2
    
    /**
     * Calcule valeur entière aléatoire pour initier le mouvement.
     * @returns nombre aléatoire entier entre 0 et 3.
     */
    this.vecteurDeplacement = function(){

        var nbreAleatoire = Math.floor(Math.random() * (Math.floor(4) - Math.ceil(0))) + Math.ceil(0);
        return nbreAleatoire;
    };

    /**
     * Calcul de l'âge de mort
     * @returns nombre aléatoire entier entre AGE_MORT_MIN et AGE_MORT_MAX
     */
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX) - Math.ceil(AGE_MORT_MIN)))//20-100
            + Math.ceil(AGE_MORT_MIN);
    };

};

/**
 * Calcul déplacement
 * @param {Number} vecteurDeplacement
 */
Straight.prototype.deplacement = function(vecteurDeplacement){

  switch (vecteurDeplacement){
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
              grille[this.i][this.j] = 'v';
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
              grille[this.i][this.j] = '^';
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
              grille[this.i][this.j] = '>';
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
              grille[this.i][this.j] = '<';
              grille[this.i+1][this.j] = ' ';
              break;
          }
      default:
          break;
  }


}
