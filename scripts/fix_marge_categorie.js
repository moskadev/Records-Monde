// Par Maxime Moskalyk

// là vient le hack, la hauteur d'"article" peut souvent varier
// j'ai essayé de comprendre pourquoi et il semblarait que le chargement
// de la page html prend plus de temps par rapport aux feuilles de style
// due au nombreux images et vidéos (de toute qualité) présentes,
// "height: auto/100%" ne fonctionne pas car la valeur est faussé

// le seul moyen que j'ai trouvé est de créer ce script, attendre que la
// page ait complètement fini de charger et ainsi récupérer la bonne taille
// et l'appliquer à la marge en ajoutant un petit espacement à la fin
window.onload = function () {
	const categorie = document.querySelector(".marge_categorie");
	const articleHeight = document.querySelector("article").offsetHeight;
	const offsetBottom = 150; // ajoute un espace vide à la fin pour épurer la page

	// permet d'avoir une petite transition sympatoche
	categorie.style.opacity = "1";
	categorie.style.animation = "fadein 1s";

	// modifie sa hauteur (maximale)
	categorie.style.height = categorie.style.maxHeight = articleHeight + offsetBottom + "px";
}
