const apiUrl = 'http://localhost/5678/appi/works'; // Remplacez par l'URL réelle de l'API

// Fonction pour récupérer les projets
const fetchArchitectProjects = async () => {
try {
// Faire un appel à l'API
const response = await fetch(apiUrl);

// Vérifier si la réponse est correcte
if (!response.ok) {
throw new Error('Erreur lors de la récupération des données');
}

// Convertir la réponse en JSON
const projects = await response.json();

// Ajouter les projets à la galerie
addProjectsToGallery(projects);
} catch (error) {
console.error('Erreur:', error);
}
};

// Fonction pour ajouter les projets à la galerie
const addProjectsToGallery = (projects) => {
const gallery = document.getElementById('figurine'); // Assurez-vous d'avoir un élément avec cet ID

// Parcourir chaque projet et créer un élément d'affichage
projects.forEach(project => {
const projectElement = document.createElement('div');
projectElement.className = 'project'; // Classe CSS pour le style, à définir dans votre CSS

// Ajouter une image
const image = document.createElement('img');
image.src = project.imageUrl; // Remplacez par la propriété appropriée de l'objet projet
image.alt = project.title; // Assurez-vous d'avoir une propriété titre

// Ajouter un titre de projet
const title = document.createElement('h3');
title.textContent = project.title; // Remplacez par la propriété appropriée

// Ajouter les éléments à l'élément projet
projectElement.appendChild(image);
projectElement.appendChild(title);

// Ajouter le projet à la galerie
gallery.appendChild(projectElement);
});
};

// Appel de la fonction pour activer le processus
fetchArchitectProjects();