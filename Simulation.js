/********************************************************************************
 * 
 * Classe Simulation
 * 2018-03-28
 * Description:
 * 
 ********************************************************************************/

/*ON S\ATTEND A CONSTRUIRE UNE SIMULATION AVEC LES OBJETS ET DONNEES
 * SUIVANTES
 * 
 * SCHEMA LUNATICS
 * var lunatics = {
 * 		nb: Number,
 * 		reproduction: Number
 * 		minAge: Number,
 * 		maxAge: Number
 * }
 * 
 * SCHEMA STRAIGHT
 * var straights = {
 * 		nb: Number,
 * 		reproduction: Number,
 * 		minReproductionAge: Number
 * }
 * 
 * SCHEMA
 * var bads = {
 * 		nb: Number = 1
 * }
 * 
 * nbLignes: nombre de lignes de la grille
 * 
 * nbColonnes: nombre de colonnes de la grille
 * 
 * epoch: nombre de debut-fin DEFAULT = 1
 * 
 * verbose: nombre d<affichages apres chaque mouvement 
*/

// TODO Valeurs par defaut
var Simulation = function(lunatics, straights, bads, nbLignes, nbColonnes, epoch, verbose) {
	this.nbLignes = nbLignes;
	this.nbColonnes = nbColonnes;
	// TODO nbre personnages et type personnages doivent etre dans les parametres
}
