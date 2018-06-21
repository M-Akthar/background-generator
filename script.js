var h3 = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("generate");
// var colour1 = document.getElementsByClassName("colour1")[0];
// var colour2 = document.getElementsByClassName("colour2")[0];

h3.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

// console.log(h3);
// console.log(colour1);
// console.log(colour2);

function setGradient() {

	body.style.background = 
		"linear-gradient(to right, " 
		+ colour1.value 
		+ ", " 
		+ colour2.value 
		+ ")";

		h3.textContent = body.style.background + ";";
}

function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function randomRGB() {
	return 	"rgb(" 
		+ randomNumber() 
		+ ", " 
		+ randomNumber() 
		+ ", " 
		+ randomNumber() 
		+ ")";
}

function generateBackground() {
	// RandomRGB() can be called directly instead of the two variables below. 
	// I have left them in for readability.
	var leftColour = randomRGB();

	var rightColour = randomRGB();

	body.style.background = 
		"linear-gradient(to right, " 
		+ leftColour // These are the variables referenced in the comment above.
		+ ", " 
		+ rightColour
		+ ")";

		h3.textContent = body.style.background + ";";
}

colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);
randButton.addEventListener("click", generateBackground);