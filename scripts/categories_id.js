// Par Maxime Moskalyk
// Ce code permet de définir les identifiants pour chaque titre
// Ceci permet de faciliter le travail et la liaison entre chaque
// record (cf. record_links.js)

const recordsName = document.getElementsByTagName("h2");

for (let j = 0; j < recordsName.length; j++) {
	let element = recordsName[j];

	if (!element.getAttributeNames().includes("id")) { // vérifie si un id ne lui a pas déjà été attribué
		let elementText = element.textContent
			.toLowerCase()
			.replaceAll(/( :|:)/g, "") // remplace tout les caractères indésirables à la fin de la chaîne
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
		element.setAttribute('id', 'record_' + lastWords.join("_"));
	}
}
