let slider = document.querySelector(".images");
let slides = document.getElementsByClassName("item");
let button = document.getElementsByClassName("button");

// Next and Previous images functionality...

let current = 0;
let prev = 6;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

let gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

let gotoNext = () => current < 6 ? gotoNum(current + 1) : gotoNum(0);

function gotoNum(number) {
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
	}

	if (next == 7) {
		next = 0;
	}

	if (prev == -1) {
		prev = 6;
	}

	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}

// Right/Left Arrow Key Events...

window.addEventListener("keyup", function(event) {
	if (event.keyCode === 37) {
		gotoPrev();
	} else if (event.keyCode === 39) {
		gotoNext();
	}
});

// Slideshow with Pause/Play...

let slideInterval = setInterval(gotoNext, 1500)
let playing = true;
let pauseButton = document.getElementById('Auto');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(gotoNext, 1500);
}

pauseButton.onclick = function(){
	if (playing) {
		pauseSlideshow();
    } else {
		playSlideshow(); 
	}
};