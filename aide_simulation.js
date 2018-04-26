// Il faut importer les différents constructeurs et fonctions utiles
// nécessaires au bon fonctionnement de votre code. En gros nous
// devons importer les fichiers qui contiennent le code que nous
// voulons.
load('lunatic.js');
load('straight.js');
load('bad.js');
load('grille.js'); 	// Nous avons ici les fonctions <creerGrille>, <dessinerGrille> et autres.

/**
 * Pour une question de simplicité, gardons la grille au niveau global.
 * Ceci nous permettra d'y avoir accès partout dans notre code! :)
 */
var grille;

/**
 * Vous pourriez aussi mettre au niveau global le nombre de
 * lunatics/straights/bads morts/vivants/etc. Ces variables seront
 * disponibles partout.
 */
var aRempir1 = 0;
var aRempir2 = 0;
// ...

/**
 * Créons le constructeur de la Simulation.
 * Ce constructeur nous permettra de préparer toutes les données
 * nécessaire au bon fonctionnement de la simulation.
 */
function Simulation( lunatics, straights, bads, nbLigne, nbCol, epoch, verbose ) {

	// Sauvegardons le contenu du paramètre <lunatics> en prenant
	// soin de vérifier si toutes les données sont fournies. Sinon,
	// utilisons les paramètres par défaut. Exemple :
	this.lunatics = {
		nb: lunatics.nb || 1,					// Si <lunatics.nb> n'est pas définit, alors prend la valeur 1
		reproduction: lunatics.reproduction || 0.1,		// Si <lunatics.reproduction> n'est pas définit, alors prend la valeur 0.1
		minAge: lunatics.minAge || 10, 				// ...
		maxAge: lunatics.maxAge || 110,				// ...
		minAgeReproduction: lunatics.minAgeRep || 18,		// ...
	}

	// À compléter
	this.straights = {

	}

	// À compléter
	this.bads = {

	}

	// À compléter
	this.nbLigne;
	this.nbCol;
	this.epoch;
	this.verbose;

	// Créons la grille.
	grille = creerGrille( ...parametres );

	// Une fois notre Simulation bien configurée, ajoutons les
	// personnages dans notre grille.
	this.ajouterPersonnages();
}

/**
 * Ajoute tous les personnages dans la grille.
 */
Simulation.prototype.ajouterPersonnages = function() {

	// Les lunatics
	for (var i = 0; i < this.lunatics.nb; i++) {
		// magie
	}

	// Les straights
	for (var i = 0; i < this.straights.nb; i++) {
		// magie
	}

	// Les bads
	for (var i = 0; i < this.bads.nb; i++) {
		// magie
	}
};

/**
 * Maintenant que tout est en place, cette fonction nous permettra
 * d'effectuer notre simulation.
 */
Simulation.prototype.stats = function() {

	// On passe à travers chaque époque.
	for (var i = 0; i < this.epoch; i++) {

		// Pour une question de simplicité, nous pouvons directement
		// gérer l'affichage de verbose ici.
		switch(this.verbose) {
			case 0:
				// le plus simple :)
				break;
			case 1:
				// À remplir
				break;
			case 2:
				// À remplir
				break;
			case 3:
				// Pas obligatoire! :)
				break;
		}
	}
};

//--------------------------------------------------------------
// Si vous êtes rendu à cette partie c'est que vous êtes prêt à
// tester. Le code qui suit permet de personnaliser la Simulation et
// d'écraser les paramètres par défaut de chaque constructeurs.

/*
 *  Configuration de la smulation.
 */
var epoch = 100;
var nbLigne = 10;
var nbCol = 15;
var verbose = 1;

/*
 *  Configuration des personnages.
 */
var lunatics = {
    nb:10,
    reproduction: 0.4,
    minAge:30,
    maxAge:120
};

var straights = {
    nb:12,
    reproduction: 0.2,
    minReproductionAge: 30
};

var bads = {
    nb:1
};

/*
 *  On roule la simulation avec la configuration ci-haut.
 */
var game = new Simulation(
    lunatics,
    straights,
    bads,
    nbLigne,
    nbCol,
    epoch,
    verbose
);

game.stats();

///********************************************************************************
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
} */
