
document.addEventListener('DOMContentLoaded', function () {

$.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=dog", function(response) { 
    console.log(response);
});

// photo source urls
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

"https://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+".jpg"

	// get thumbnail images from API and posted to screen
	var thumbnails = document.querySelector('#thumbnails');
	var newThumbnail;

	for (var i = 0; i < 20; i++) {
		newThumbnail = document.createElement("div");
		newThumbnail.classList.add('mini');
		thumbnails.appendChild(newThumbnail);
	}

	// set up an event listener for each thumbnail
		// to launch viewer

	// set up event listeners on viewer to look at next thumbnail, previous, close
});