var pagesContainer = document.getElementById("pagesContainer");
var pages = document.getElementsByClassName("page");
var images = document.getElementsByClassName("image");
var arrowRight = document.getElementsByClassName("right")[0];
var arrowLeft = document.getElementsByClassName("left")[0];
var index = 0;

for (i = 0; i < images.length; i++) {
	pagesContainer.innerHTML += '<div class="page"></div>';
}

for (i = 0; i < pages.length; i++) {
	var page = pages[i];
	var image = images[i];
	if (i == 0) {
		image.classList.add("selected");
		page.classList.add("selected");
	}
	page.addEventListener("click", function change() {select(this)});
}

arrowRight.addEventListener("click", function change() {select(pages[(index+1)%pages.length])});
arrowLeft.addEventListener("click", function change() {select(pages[(index+pages.length-1)%pages.length])});


function select(p) {
	for (i = 0; i < pages.length; i++) {
		var page = pages[i];
		var image = images[i];
		page.classList.remove("selected");
		image.classList.remove("selected");
	}
	p.classList.add("selected");
	for (i = 0; i < pages.length; i++) {
		page = pages[i];
		if (page === p) {
			images[i].classList.add("selected");
			index = i;
			break;
		}
	}
}
