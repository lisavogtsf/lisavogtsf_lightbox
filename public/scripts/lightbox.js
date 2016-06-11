// scripts for lightbox page dom interaction

function openLightbox (e) {

	// gather elements
	var main = document.querySelector('#main');
	var lightbox = document.querySelector('#lightbox');
	var viewer = document.querySelector('#viewer');
	var navTitle = document.querySelector('#viewer-frame nav h2');
	
	// gather thumbnail background/order
	var currentBackgroundImage = e.target.style.backgroundImage;
	var dataOrder = e.target.dataset.order;
	var title = e.target.dataset.title;

	// add target photo/order to viewer
	viewer.style.backgroundImage = currentBackgroundImage;
	viewer.dataset.order = dataOrder;
	navTitle.textContent = title;

	// show/hide articles
	lightbox.classList.remove('hide');
	main.classList.add('hide');
}

function closeLightbox () {

	// gather elements
	var main = document.querySelector('#main');
	var lightbox = document.querySelector('#lightbox');
	var viewer = document.querySelector('#viewer');
	var navTitle = document.querySelector('#viewer-frame nav h2');

	// clear out viewer
	viewer.style.backgroundImage = "";
	viewer.dataset.order = "";
	navTitle.textContent = "";

	// show/hide articles
	main.classList.remove('hide');
	lightbox.classList.add('hide');
}

function changePhoto (n) {

	// get elements to use
	var viewer = document.querySelector('#viewer');
	var thumbnails = document.querySelectorAll('.thumbnail');
	var thumbLength = thumbnails.length;
	var navTitle = document.querySelector('#viewer-frame nav h2');

	// get data order from current viewer and add n for prev/next, update
	var dataOrder = parseInt(viewer.dataset.order);
	dataOrder += parseInt(n);
	if (dataOrder < 0) {
		dataOrder += thumbLength;
	}
	dataOrder = dataOrder % thumbLength;
	viewer.dataset.order = dataOrder;

	// find the thumbnail with with that data order
	// get its background image, set it in the viewer, set its order 
	for (var i = 0; i < thumbLength; i++) {
		var thumb = thumbnails[i];
		if (parseInt(thumb.dataset.order) === dataOrder) {		
			viewer.style.backgroundImage = thumb.style.backgroundImage;
			navTitle.textContent = thumb.dataset.title;
			return;
		}
	}
	console.error("selected photo not found");
	return;
}