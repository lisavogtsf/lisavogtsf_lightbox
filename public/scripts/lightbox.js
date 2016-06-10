// scripts for lightbox page dom interaction
console.log("lightbox.js");

function openLightbox (e) {

	var thumbnailBackgroundImage = e.target.style.backgroundImage;
	var viewerFrame = document.querySelector('#viewer-frame');
	var photoOrder = e.target.dataset.order;
	viewerFrame.classList.remove('hide');
}

function closeLightbox () {
	console.log("closing");
	var viewerFrame = document.querySelector('#viewer-frame');
	viewerFrame.style.backgroundImage = url();
	viewerFrame.classList.add('hide');
}
