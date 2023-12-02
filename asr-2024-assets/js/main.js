// Trustploit review Custom JS carousel ///////////////////
const cards = document.querySelector(".cards");

let space = 0;
let numOfHiddenBlocks = cards.childElementCount / 2; // 3 x 2 cards in each block = 6 cards
let speed = 4000;

let intervalid = setInterval(nextUser, speed);
function nextUser() {
	clearInterval(intervalid);
	intervalid = setInterval(nextUser, speed);
	if (space !== 69.9 * numOfHiddenBlocks) {
		space += 69.9;
		cards.style.transform = "translateX(-" + space + "%)";
	}
	if (space === 69.9 * numOfHiddenBlocks) {
		space = 0;
		cards.style.transform = "translateX(-" + space + "%)";
	}
}
function previousUser() {
	clearInterval(intervalid);
	intervalid = setInterval(nextUser, speed);

	if (space < 69.9) {
		space = 69.9 * numOfHiddenBlocks;
	}
	space -= 69.9;
	cards.style.transform = "translateX(-" + space + "%)";
}

// the following function adds a copy of the first card to the end of the carousel
function addFirst() {
	const parentDiv = document.getElementById("cards");
	const firstThreeChildren = parentDiv.querySelectorAll(
		".trust-card:nth-child(-n+1)"
	);
	Array.from(firstThreeChildren).forEach((child) => {
		const copy = child.cloneNode(true);
		parentDiv.appendChild(copy);
	});
}
addFirst();

// ////////////////////////////////////////////////////////
// Latest Posts Custom JS carousel ////////////////////////
const posts = document.querySelector(".posts");

let postspace = 0;
let numOfHiddenPosts = 1; // 2 are visible + 1 hidden

function nextPost() {
	if (postspace !== 50 * numOfHiddenPosts) postspace += 50;
	posts.style.transform = "translateX(-" + postspace + "%)";
}
function prevPost() {
	if (postspace < 50) return;
	postspace -= 50;
	posts.style.transform = "translateX(-" + postspace + "%)";
}

// //////////////////////////////////////////////////////////////
// Pre-cart faq:
const tog1 = document.querySelector(".toggle1");
const tog2 = document.querySelector(".toggle2");
const tog3 = document.querySelector(".toggle3");
const tog4 = document.querySelector(".toggle4");
const tog5 = document.querySelector(".toggle5");
const tog6 = document.querySelector(".toggle6");
let visible = 1;

function setClose() {
	tog1.setAttribute("src", "./img/faq-plus.svg");
	tog2.setAttribute("src", "./img/faq-plus.svg");
	tog3.setAttribute("src", "./img/faq-plus.svg");
	tog4.setAttribute("src", "./img/faq-plus.svg");
	tog5.setAttribute("src", "./img/faq-plus.svg");
	tog6.setAttribute("src", "./img/faq-plus.svg");
}

function toggle(tog) {
	setClose();
	if (1 === tog) {
		if (visible === 1) {
			tog1.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog1.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	} else if (2 === tog) {
		if (visible === 2) {
			tog2.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog2.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	} else if (3 === tog) {
		if (visible === 3) {
			tog3.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog3.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	} else if (4 === tog) {
		if (visible === 4) {
			tog4.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog4.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	} else if (5 === tog) {
		if (visible === 5) {
			tog5.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog5.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	} else if (6 === tog) {
		if (visible === 6) {
			tog6.setAttribute("src", "./img/faq-plus.svg");
			visible = 0;
		} else {
			tog6.setAttribute("src", "./img/faq-x.svg");
			visible = tog;
		}
	}
}
