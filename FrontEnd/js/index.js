// je fais mon fetch et mon try/catch dans une fonction ? 

let works = [];
//je stockes tous les travaux dans un array vide

// je fais mon fetch
fetch('http://localhost:5678/api/works')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('There was a fetch issue');
    }
  })
  .then(res => {
    works = res;
    getWorks(works);
  })
  .catch(error => {
    console.error(error);
  });

async function getWorks() {
  const URL = "http://localhost:5678/api/works"; // Correction de l'URL

  try {
    const reponse = await fetch(URL);

    if (!reponse.ok) { // "Response" → "reponse", mauvais nom de variable
      throw new Error(`Réponse status : ${reponse.status}`); // Correction syntaxe interpolation
    }

    console.log('URL');

    const json = await reponse.json();
    console.log(json);
  } catch (error) {
    console.error(error.message); // "console error" → "console.error"
  }
}

function getWorks(works) {
  /* je cibles mon élément html*/
  const gallery = document.querySelector(".gallery");

  /* je fais une boucle for sur les works de ton array */
  for (let i = 0; i < works.length; i++) {
    /* je crée un élément figure */
    const figure = document.createElement("figure");
    /* je crée un élément img */
    const img = document.createElement("img");
    /* je crée l'élement figcaption */
    const figcaption = document.createElement("figcaption");
    /* j'associe les attributs requis du html */
    img.src = works[i].imageUrl;
    figcaption.innerHTML = works[i].title;
    /* je rattache les éléments aux parents pour structurer le html */
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  }
}
  
getWorks();

// Création d'une figure HTML
const figure = document.createElement("figure");
figure.innerHTML = `
  <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
  <figcaption>Abajour Tahina</figcaption>
`;

document.body.appendChild(figure); // Correction : append → appendChild */