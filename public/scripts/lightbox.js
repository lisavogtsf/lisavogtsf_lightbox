// scripts for lightbox page dom interaction
console.log("lightbox.js");

function openLightbox (e, photoUrls) {

	// gather elements
	var main = document.querySelector('#main');
	var lightbox = document.querySelector('#lightbox');

	// var viewerFrame = document.querySelector('#viewer-frame');
	var viewer = document.querySelector('#viewer');
	// var thumbnailFrame = document.querySelector('#thumbnail-frame');
	
	// gather thumbnail background/order
	var currentBackgroundImage = e.target.style.backgroundImage;
	var photoOrder = e.target.dataset.order;

	// add target photo/order to viewer
	viewer.style.backgroundImage = currentBackgroundImage;
	viewer.dataset.order = photoOrder;

	// show/hide articles
	lightbox.classList.remove('hide');
	main.classList.add('hide');
}

function closeLightbox () {

	// gather elements
	var main = document.querySelector('#main');
	var lightbox = document.querySelector('#lightbox');

	var viewerFrame = document.querySelector('#viewer-frame');
	var viewer = document.querySelector('#viewer');

	// clear out viewer
	viewer.style.backgroundImage = "";
	viewer.dataset.order = "";

	// show/hide articles
	main.classList.remove('hide');
	lightbox.classList.add('hide');
}

function previousPhoto (e) {

	// get data order from target

	// subtract 1

	// find the thumbnail with with that data order

	// get its background image, set it in the viewer, set its order 

}

function nextPhoto (e) {

}