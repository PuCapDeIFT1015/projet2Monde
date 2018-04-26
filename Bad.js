/********************************************************************************
 *
 * Classe Bad
 * 2018-03-28
 * Description:
 *
 ********************************************************************************/


var Bad = function (i, j) {
    this.i = i;
    this.j = j;
    this.vision = 5;
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX) - Math.ceil(AGE_MORT_MIN)))//30-80
            + Math.ceil(AGE_MORT_MIN);
    };

};

//Pour les deplacements, il va regarder dans toutes les directions d'une unité.
//S'Il y a un personnage, il va dans cette direction et néglige les autres directions.
/* Dans le case, il nous faut des variables temporaires qui vont sauvegarder le nouveau i et j
et seront remplacés à la fin du case.

Detecter en cercle pour scanner les gens a attraper. Rayon max = vision*/

Bad.prototype.deplacementAleatoire = function(grille) {
  var nbreAleatoire = Math.floor(Math.random() * (Math.floor(4) - Math.ceil(0))) + Math.ceil(0);
  //Deplacement aleatoire avant qu'il ne détecte des ennemis.
  switch (nbreAleatoire){
      case 0:// aller en bas
          //verifier si cette place est libre
          if (grille[this.i][this.j + 1] !== '|') {
              this.j = this.j + 1;
              grille[this.i][this.j] = 'B';
              grille[this.i][this.j-1] = ' ';
              break;
          }

      case 1:// aller en haut
          //verifier si cette place est libre
              if (grille[this.i][this.j -1] !== '|') {
              this.j = this.j - 1;
              grille[this.i][this.j] = 'B';
              grille[this.i][this.j+1] = ' ';
              break;
              }
      case 2:// aller a droite
          //verifier si cette place est libre
              if (grille[this.i +1][this.j] !== '|') {
              this.i = this.i + 1;
              grille[this.i][this.j] = 'B';
              grille[this.i-1][this.j] = ' ';
              break;
              }
      case 3: // aller a gauche
          //verifier si cette place est libre
          if (grille[this.i -1][this.j] !== '|') {
              this.i = this.i - 1;
              grille[this.i][this.j] = 'B';
              grille[this.i+1][this.j] = ' ';
              break;
          }
      default:
          break;
  }
}

Bad.prototype.deplacer = function(grille){
  // TODO: update du b dans l\interface
  var positionInitiale = [this.i,this.j];
  var isEnemyDetected = false;
  for (var i = 1; i < this.vision; ++i) {
    // regarder autour du bad et mettre le bool a true si detecte
    //Deplacement tour a tour
    //  regarder en haut de +i
    if (grille[this.i - i,this.j] !== ' ' || '|' ) {
      // Cest un ennemi
      isEnemyDetected = true;
      //forcer deplacement vers ennemis
      this.i = this.i-i;
      grille[this.i + i][this.j] = ' ';
      break;
    }
    // TODO regarder a droite de +i
    if (grille[this.i,this.j - i] !== ' ' || '|' ) {
      // Cest un ennemi
        isEnemyDetected = true;
        this.j = this.j-i;
        grille[this.i][this.j + i] = ' ';
        break;
    }
    // TODO regarder en bas de +i
    if (grille[this.i + i,this.j] !== ' ' || '|' ) {
      // Cest un ennemi
        isEnemyDetected = true;
        this.i = this.i+i;
        grille[this.i - i][this.j] = ' ';
        break;
    }
    // TODO: regarder a gauche de +i
    if (grille[this.i,this.j + i] !== ' ' || '|' ) {
      // Cest un ennemi
        isEnemyDetected = true;
        this.j = this.j+i;
        grille[this.i][this.j - i] = ' ';
        break;
    }
  }
  if (!isEnemyDetected) {
    this.deplacementAleatoire(grille);
  }
}
