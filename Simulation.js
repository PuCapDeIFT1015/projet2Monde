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
 * 		nb: 10,
 * 		reproduction: 0.4,
 * 		minAge: 30,
 * 		maxAge: 120
 * }
 * 
 * SCHEMA STRAIGHT
 * var straights = {
 * 		nb: 12,
 * 		reproduction: 0.2,
 * 		minReproductionAge: 30
 * }
 * 
 * SCHEMA
 * var bads = {
 * 		nb: 1
 * }
 * 
 * nbLignes: 10
 * 
 * nbColonnes: 15
 * 
 * epoch: 100
 * 
 * verbose: 1
*/

var Simulation = function(lunatics, straights, bads, nbLignes, nbColonnes, epoch, verbose) {
	this.nbLignes = nbLignes;
	this.nbColonnes = nbColonnes;
	this.epoch = epoch;
	this.verbose = verbose;
	this.lunatics = lunatics;
	this.straights = straights;
	this.bads = bads;
}

//valeurs par défaut pour lunatics, straights, bad
var Lunatics = function (x, y){
	Lunatics.prototype = new Simulation ();
	this.nb = 10;
	this.reproduction = 0.1;
	this.minAge = 10;
	this.maxAge = 110;
	this.minReproductionAge = 18;
	this.valeurLimite = Math.floor(Math.random () * (this.maxAge - this.minAge)) + this.minAge;
	this.positionX = x;
	this.positionY = y;
};

var Straights = function (x, y){
	Straights.prototype = new Simulation ();
	this.nb = 12;
	this.reproduction = 0.2;
	this.minAge = 20;
	this.maxAge = 100;
	this.minReproductionAge = 25;
	this.valeurLimite = Math.floor(Math.random () * (this.maxAge - this.minAge)) + this.minAge;
	this.positionX = x;
	this.positionY = y;
};

var Bad = function (x, y){
	Bad.prototype = new Simulation ();
	this.nb = 1;
	this.minAge = 30;
	this.maxAge = 80;
	this.voisinage = 5;
	this.valeurLimite = Math.floor(Math.random () * (this.maxAge - this.minAge)) + this.minAge;
	this.positionX = x;
	this.positionY = y;
};

//valeurs par défaut paramètres grille
var nbLignes = 5;
var nbColonnes = 10;
var epoch = 1;
var verbose = 0;

//commandes pour valeur verbose
//monde de départ et d'arrivée sont affichés
do {
	while (Simulation.prototype.epoch = 0){
		print("Départ:" + "/n" + Simulation);
	}

	While (Simulation.prototype.epoch) {
		print("Arrivé" + "/n" + Simulation);
	}
} while (verbose >= 1)

//après chaque epoch le monde doit être affiché ainsi que les infos sur les personnages
do{
	for (i=0; i <= Simulation.prototype.epoch; i++){
		print(Simulation);
	};
	stats();
} while (verbose >= 2)

//déplacement de chaque personnage est tracé et les conséquences aussi
do {
	//**NO FUCKING CLUE JE SUIS SO DONE**!!!!!!!!!!!
} while (verbose >= 3)

//mettre les personnages aléatoirement sur la grille
Simulation.prototype.positionInitiale = function() {
//random ligne
var positionX = Math.floor(Math.random () * (5 - 1)) + 1;
//random colonne
var positionY = Math.floor(Math.random () * (10 - 1)) + 1;
//si la case comporte déjà un personnage il faut choisir une autre case aléatoire A FAIRE!!!!!!!!!!

//s'il n'y a plus de case il faut décider de l'action à prendre A FAIRE!!!!!!!!!!!!!!

};

//évolution âge et mort lorsque age limite dépassé
Simulation.prototype.evolutionAge = function() {
	for (i=0; i < Simulation.epoch; i++){
		Lunatics.prototype.age = i;
		Straights.prototype.age = i;
		Bad.prototype.age = i;
	}

};

Simulation.prototype.mort = function() {
	if (Lunatics.prototype.age > Lunatics.prototype.valeurLimite) {
		Lunatics.prototype.nb --;
		Lunatics.prototype.reproduction = 0; //mort donc ne peut plus se reproduire
	}
	if (Straights.prototype.age > Straights.prototype.valeurLimite) {
		Straights.prototype.nb --;
		Straights.prototype.reproduction = 0; //mort donc ne peut plus se reproduire
	}
	if (Bad.prototype.age > Bad.prototype.valeurLimite) {
		Bad.prototype.nb = 0; //il existe seulement un méchant
	}
	
	//si tous les personnages meurent avant la dernière epoch alors la simulation arrête
	//affichage des stats quand tout est fini
	if (Lunatics.prototype.nb = 0 && Straights.prototype.nb = 0 && Bad.prototype.nb = 0){
		pause();
		stats();
	}
};

//À FAIREEE !!!!!!!!!!!!!!!
Simulation.prototype.stats = function (){
//nombre de naissances, nombre de morts, nombre total
//le nombre d'epoch pour la simulation
}

