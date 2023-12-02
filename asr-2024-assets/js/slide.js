const cir1 = document.querySelector(".cir1");
const cir2 = document.querySelector(".cir2");
const cir3 = document.querySelector(".cir3");
const cir4 = document.querySelector(".cir4");
const cir5 = document.querySelector(".cir5");
const mockup = document.querySelector(".mockup");

let currentMockup = 1;
let interCurrent = setInterval(goNextMock, 4000);

function showSlide(n) {
	clearInterval(interCurrent);
	interCurrent = setInterval(goNextMock, 4000);

	cir1.classList.remove("active");
	cir2.classList.remove("active");
	cir3.classList.remove("active");
	cir4.classList.remove("active");
	cir5.classList.remove("active");

	if (n === 1) {
		currentMockup = 1;
		cir1.classList.add("active");
		mockup.src = "./img/mockup-01.png";
	} else if (n === 2) {
		currentMockup = 2;
		cir2.classList.add("active");
		mockup.src = "./img/mockup-02.png";
	} else if (n === 3) {
		currentMockup = 3;
		cir3.classList.add("active");
		mockup.src = "./img/mockup-03.png";
	} else if (n === 4) {
		currentMockup = 4;
		cir4.classList.add("active");
		mockup.src = "./img/mockup-04.png";
	} else if (n === 5) {
		currentMockup = 5;
		cir5.classList.add("active");
		mockup.src = "./img/mockup-05.png";
	}
}

function goNextMock() {
	currentMockup += 1;
	if (currentMockup === 6) currentMockup = 1;
	showSlide(currentMockup);
}
