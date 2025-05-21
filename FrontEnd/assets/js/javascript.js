/* Je récupère l'adresse de l'api en local. */
const worksApi = 'http://localhost:5678/api/works';
console.log(worksApi)
/* je déclare ma fonction asynchrone nommée getWorks*/
async function getWorks() {
    /* je  définit une variable constante appelée url*/
  const url = 'http://localhost:5678/api/works';
  /*je commence un bloc try, qui permet de tester du code susceptible de générer des erreurs.
Si une erreur survient dans le bloc, le code passe directement au bloc catch.*/
  try {
    /*J'utilise la méthode native fetch() pour envoyer une requête HTTP GET vers l’URL spécifiée.
le mot-clé await attend que la requête se termine avant de continuer.*/
    const response = await fetch(url);
/*JE vérifie si la réponse n’est pas réussie (response.ok est false pour des statuts comme 404 ou 500).
Si c’est le cas, on lance une erreur personnalisée avec throw new Error(...)*/

    if (!response.ok) {
      throw new Error("La réponse n'est pas OK");
    }

    /*Convertit le corps de la réponse en objet JavaScript via response.json() (car l'API retourne des données au format JSON).
Encore une fois, on utilise await car c’est une opération asynchrone*/

    const json = await response.json();
    console.log(json); // Pour voir les données récupérées
    setFigure(json)
  } catch (error) {/* je démarre un bloc catch qui attrape les erreurs survenues dans le try*/

    console.error("Un problème est survenu lors de la récupération :", error);
    /*Affiche un message d’erreur dans la console, suivi de l’objet d'erreur réel (error) pour aider au débogage.*/
  }
}
/*je déclarela fonction setFigure, qui prend mon argument data*/
function setFigure(data) {
/*je sélectionne dans le DOM l’élément avec la classe .gallery*/
  const gallery = document.querySelector(".gallery");
  /* vide le contenu précédent*/
  gallery.innerHTML = '';
/*boucle sur chaque élément de la liste data*/
  data.forEach(item => {
/* je crée dynamiquement une nouvelle balise*/

    const figure = document.createElement("figure");
/*Affichage de l'image et du titre*/
    figure.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}">
      <figcaption>${item.title}</figcaption>
    `;
/*Ajoute la <figure> à la fin de la section .gallery dans le HtML*/
  gallery.appendChild(figure);
  });

}
// Appel de la fonction
getWorks();












function retournerTravaux(prenom) {
    console.log('Bonjour')
    console.log(prenom)
}



let monprenom = "Alice"

retournerTravaux(monprenom)