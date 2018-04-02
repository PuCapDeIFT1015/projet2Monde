load("Lunatic.js");
/**
 * Cette fonction permet de contruire la grille (version code) où
 * les personnages vont se promener.
 */
var creerGrille = function(width, heigth) {
	 
	// On Crée les rangées.
	var rows = new Array(heigth);

	// On crée une série de colonnes et on les ajoute à la rangée <i>.
	for (var i = 0; i < heigth; i++) {

		// On insère les colonnes dans la <i>ème rangée.
		rows[i] = new Array(width);

		// Mettre à null toute la rangée.
		for (var j = 0; j < width; j++) {
			rows[i][j] = null;
		}
	}

	// On retourne une grille vide.
	return rows;
};


/**
 * Retourne un chaîne de caractères qui contiennent l'affichage
 * de la grille du monde impitoyable.
 */
var dessinerGrille = function(grille, l, h){

	// Cette variable sera utilisée pour stocker tous les 
	// caractères qui seront affichés pour visualiser la grille.
	var sortie;

	// Cette fonction nous aidera à afficher chaque case du tableau.  
	function dessinerCase(c){
		
		// On ajoute le bon caractère qui correspondant au personnage 
		// présent dans la case courante.
		var caseCourante = "";
		if (c != null)
		{	
			if 		(c instanceof Lunatic) caseCourante += "L";
			else if (c instanceof Bad) 	   caseCourante += "B";
			else {
				switch(c.direction){
					case 0: caseCourante += "^"; break;
					case 1: caseCourante += ">"; break;
					case 2: caseCourante += "v"; break;
					default:caseCourante += "<";
				}
			}

			// On ajoute l'âge et les espaces appropriés pour
			// que les cases aient toutes la même largeur.
			return caseCourante + "(" + c.age + ")"
				+ " ".repeat(c.age<10 ? 2 
					: c.age<100 ? 1 
						: 0 ) + "|";
		}

		// Retourner une case vide, s'il n'y a aucun personnage à cette case.
		else return "      |";
	}

	// Contruire la première rangée.
	sortie = "      ";
	for (var i = 0; i < l; i++) {
		sortie 
			+= "  " + i
			+ " ".repeat(i<10 ? 4 
				: i<100 ? 3 
					: i<1000 ? 2 
						: i<10000 ? 1 : 0);
	}

	// Construire les rangées une à une.
	for (var i=0; i<h; i++) 
	{
		// On construit la première case d'une rangée.
		sortie += "\n" + i + " ".repeat(i<10 ? 4 
				: i<100 ? 3 
					: i<1000 ? 2 
						: i<10000 ? 1 : 0) + " |";

		// Puis les cases une à une.
		for (var  j=0; j<l; j++) 
			sortie += dessinerCase(grille[i][j]);
	}

	// Retourne la chaîne de caractère représentant notre grille.
	return sortie;
};

//--------------------------------------------------------------------
// Utilisation ...

// Juste pour faire une démonstration, créons une largeur et une hauteur.
var largeur = 5;
var hauteur = 8;

// On créer notre grille vide.
var grille = creerGrille(largeur, hauteur);

// On écrit du code magique pour peupler notre grille.
// ...

// On affiche la grille et son contenu.
print(dessinerGrille(grille, largeur, hauteur));