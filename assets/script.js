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
const precedent = document.querySelector(".arrow_left")
const suivant = document.querySelector(".arrow_right")

// image affichée sur la bannière
const imageActive = document.querySelector(".banner-img")

// texte affiché sur la bannière 
const tagLineActive = document.querySelector("#banner p");

// dot sélectionné sur la bannière
const dotActive = document.getElementsByClassName("dot")

// conteneur parent des dots
const dotContainer = document.querySelector(".dots")

// Variable à modifier pour changer image + texte + dot affiché
let slideActive = 0

// ajout des dots en fonction de la longueur du tableau slides
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div")
	newDot.classList.add("dot")
	dotContainer.appendChild(newDot)
}
dotActive[slideActive].classList.add("dot_selected")

// Évènement au clic sur la flèche précédent
precedent.addEventListener('click', function(){
	if (slideActive === 0) {
		slideActive = slides.length - 1
	}else {
		slideActive--
	}
	updateSlide()
})

// Évènement au clic sur la flèche suivant
suivant.addEventListener('click', function(){
	if (slideActive === slides.length - 1) {
		slideActive = 0
	}else {
		slideActive++
	}
	updateSlide()
})

// Fonction qui permet d'actualiser la valeur de slideActive dans les éléments concernés
function updateSlide() {
	imageActive.src = slides[slideActive].image
	tagLineActive.innerHTML = slides[slideActive].tagLine
	//boucle qui permet de supprimer la classe selected des dots
	for (let i = 0; i < slides.length; i++) {
		dotActive[i].classList.remove("dot_selected")
	}
	dotActive[slideActive].classList.add("dot_selected")
}