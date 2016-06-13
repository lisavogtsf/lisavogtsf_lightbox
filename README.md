#lisavogtsf lightbox

This is a Javascript/HTML/CSS/LESS-only lightbox, viewable online at <https://lisavogtsf-lightbox.herokuapp.com/>

To run the lightbox locally,

1. clone or copy the repository
* install node modules using `$ npm install`
* set up environment variables locally using your Flickr API key and secret. 
	* create a new '.env' file in the top level of the lisavogtsf_lightbox directory `$ touch .env`
	* copy the contents of '.dot-env' into that new '.env' file
	* add your own flickr key and secret to the '.env' file
	`FLICKR_KEY=<your flickr key>`
	`FLICKR_SECRET=<your flickr secret>`
* run the express server `$npm start`
* go to `http://localhost:3000/` in a web browser to view the page


As per the assignment, this submission is: a web page that shows a grid of photo thumbnails; when a thumbnail is clicked [or tabbed to and 'enter' key is hit], the photo should be displayed in a lightbox view, with the ability to move to the next / previous photos and display the photo title. 

I used the Flickr API showing search results for 'cats.'

My submission:

* A URL where the working lightbox can be seen: <https://lisavogtsf-lightbox.herokuapp.com/>
* My source code as a zipped Git repository (create a local repo for your code and commit your files as you normally would; when the exercise is complete, zip your main directory, including the .git directory, and send it to us).