
document.addEventListener('DOMContentLoaded', function () {

	// get thumbnail images from API and posted to screen
	var thumbnails = document.querySelector('#thumbnails');
	var newThumbnail;

	for (var i = 0; i < 20; i++) {
		console.log("i?", i);
		newThumbnail = document.createElement("div");
		newThumbnail.classList.add('mini');
		thumbnails.appendChild(newThumbnail);
	}

	// set up an event listener for each thumbnail
		// to launch viewer

	// set up event listeners on viewer to look at next thumbnail, previous, close
});