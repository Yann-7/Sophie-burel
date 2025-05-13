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

getWorks();

// Création d'une figure HTML
const figure = document.createElement("figure");
figure.innerHTML = `
  <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
  <figcaption>Abajour Tahina</figcaption>
`;

document.body.appendChild(figure); // Correction : append → appendChild