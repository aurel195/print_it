const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// flèches slider
const precedent = document.querySelector(".arrow_left");
const suivant = document.querySelector(".arrow_right");

// banniere utilisée pour afficher les slides
const imageActive = document.querySelector(".banner-img");

// texte affiché sur les slides
const tagLineActive = document.querySelector("#banner p");

// conteneur parent des dots
const dotContainer = document.querySelector(".dots");

// Variable à modifier pour changer image + texte + dot affiché
let slideActive = 0

// ajout des dots en fonction de la longueur du tableau slides
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div")
	newDot.classList.add("dot")
	dotContainer.appendChild(newDot)
}
const dotActive = document.querySelectorAll(".dot");
dotActive[slideActive].classList.add("dot_selected");

function changerSlide(direction) {
    if (direction === 'precedent') {
        slideActive = (slideActive === 0) ? slides.length - 1 : slideActive - 1;
    } else {
        slideActive = (slideActive === slides.length - 1) ? 0 : slideActive + 1;
    }
    updateSlide();
}

// Fonction qui permet d'actualiser la valeur de slideActive dans les éléments concernés
function updateSlide() {
	imageActive.src = slides[slideActive].image
	tagLineActive.innerHTML = slides[slideActive].tagLine
	for (let i = 0; i < slides.length; i++) {
		dotActive[i].classList.remove("dot_selected")
	}
	dotActive[slideActive].classList.add("dot_selected")
}

precedent.addEventListener('click', () => changerSlide('precedent'));
suivant.addEventListener('click', () => changerSlide('suivant'));


