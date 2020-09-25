var pagesContainer = document.getElementById("pagesContainer");
var pages = document.getElementsByClassName("page");
var images = document.getElementsByClassName("image");

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
	page.addEventListener("click", change);
}

function change() {
	for (i = 0; i < pages.length; i++) {
		var page = pages[i];
		var image = images[i];
		page.classList.remove("selected");
		image.classList.remove("selected");
	}
	this.classList.add("selected");
	for (i = 0; i < pages.length; i++) {
		page = pages[i];
		if (page === this) {
			images[i].classList.add("selected");
			break;
		}
	}
}
