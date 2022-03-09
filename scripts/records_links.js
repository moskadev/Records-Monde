// Par Maxime Moskalyk

// Définie les liens hypertextes en lien direct avec les différents records
// dans leur fichier respective (cf. categories_id.js)

const accueil = document.querySelector(".accueil");
const margeCategorie = document.querySelector(".marge_categorie");
const titles = margeCategorie.querySelectorAll("h3");
const lists = margeCategorie.getElementsByTagName("ul");

// en analysant le href de l'accueil, on peut vérifier où se trouve l'index.html
// et en déduire où se trouve l'utilisateur dans l'arborescence (racine ou pas)
const accueilHref = accueil.querySelector("a").href;
const subPath = accueilHref.substr(0, accueilHref.lastIndexOf("/") + 1); //supprime tout ce qui se trouve après le dernier slash tout en l'incluant

for (let i = 0; i < lists.length; i++) { // regarde pour chaque liste d'éléments
	let elements = lists[i].getElementsByTagName("li");
	for (let j = 0; j < elements.length; j++) { // regarde pour chaque élément de la liste
		let element = elements[j];

		if (element.querySelectorAll("a").length === 0) { // vérifie si un lien n'a pas déjà été attribué
			const titleHref = titles[i].querySelector("a").href.split("/"); // recupère le titre et son lien vers le fichier
			const categoryName = titleHref[titleHref.length - 1]; // récupère le dernière chaîne et ainsi le nom du fichier

			const elementText = element.textContent
				.toLowerCase()
				.replaceAll(/( :|:| : )/g, "") // remplace tout les caractères indésirables à la fin de la chaîne
				.replaceAll(/[\W_]+/g, " "); // retire tout les caractères non-alphanumériques

			let lastWords = [];
			const splitText = elementText.split(" ");

			// évite les conflits avec les différents titres sur les pages des records
			for (let wordOffset = splitText.length - 1; wordOffset >= 0; --wordOffset) {
				let word = splitText[wordOffset];
				if (lastWords.length >= 3) { // limité aux 3 derniers mots
					break;
				}
				lastWords.push(word);
			}
			lastWords.reverse(); // les mots doivent être remis dans le bon ordre

			element.innerHTML = '<a href="' + subPath + 'records/' + categoryName + '#record_' + lastWords.join("_") + '">' + element.textContent + '</a>';
		}
	}
}