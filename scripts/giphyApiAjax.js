 // https://shellmonger.com/2015/03/24/promises-and-ajax-in-ecmascript-6/
function ajaxGet(url) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function() {
      if (req.status === 200) {
          resolve(req.response);
      } else {
          reject(new Error(req.statusText));
      }
    };

    req.onerror = function() {
        reject(new Error("Network error"));
    };

    req.send();
  });
}

// use search string to query
function queryGiphyApi (searchString) {
  // console.log("searchString", searchString);
  // process.env.GIPHY_PUBLIC_BETA_KEY;
  let searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + searchString;
  searchUrl += '&api_key=dc6zaTOxFJmzC';
  console.log("searchUrl", searchUrl);

  let ajaxPromise = ajaxGet(searchUrl);
  ajaxPromise.then(function (response) {

    let responseArr = JSON.parse(response).data;

    if (responseArr && responseArr[0].images) {
      console.log(responseArr[0].images.fixed_height_small_still.url);
    }
  })
  .catch(function (err) {
    console.log('reject', err);
  });
}