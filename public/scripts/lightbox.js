// scripts for lightbox page dom interaction
console.log("lightbox.js");

function openLightbox (e, photoUrls) {

	// gather elements
	var viewerFrame = document.querySelector('#viewer-frame');
	var viewer = document.querySelector('#viewer');
	var thumbnailFrame = document.querySelector('#thumbnail-frame');
	
	// gather thumbnail background/order
	var thumbnailBackgroundImage = e.target.style.backgroundImage;
	var photoOrder = e.target.dataset.order;

	// give viewer correct thumbnail order and background
	viewer.style.backgroundImage = thumbnailBackgroundImage;
	viewer.dataset.order = photoOrder;

	// show whole frame
	console.log(thumbnailFrame.getBoundingClientRect());
	viewerFrame.style.height = thumbnailFrame.getBoundingClientRect().height + "px";
	viewerFrame.classList.remove('hide');
}

function closeLightbox () {

	// gather elements
	var viewerFrame = document.querySelector('#viewer-frame');
	var viewer = document.querySelector('#viewer');

	// hide whole frame
	viewerFrame.classList.add('hide');
	// clear out viewer
	viewer.style.backgroundImage = "";
	viewer.dataset.order = "";
}
