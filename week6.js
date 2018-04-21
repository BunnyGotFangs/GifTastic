
//need to have a function created now so that this can be called over and over again 
console.log("Making sure html is reaching file");
var topic = [];

//function searchGif(poisons) {
$("button").on("click", function() {
// desclared global, but reviewing back seems to need local so creting local = to global 
// know I need more local variables, not quite sure what they are yet, so will add as needed  

var apiKey = "Atz4BqbSfFySR78ltn4KnkbuESh3unL4";
var gifUrl = "https://api.giphy.com/v1/gifs/search?q="
  
var poisonInfo = $(this).attr("poison");

var localURL = gifUrl + posionInfo + "api_key=" + apiKey  + "&limit=10" ;
//((UGH Still not getting this to work))
console.log(localURL);
  // Performing an AJAX request with the queryURL
  $.ajax({
    url: localURL,
    method: "GET"
  })
// need to capture the information coming back from the website, so the first one is the function to capture info from API call
      .then(function(response) {
//figuring out if it reading my stuff      
      console.log(localURL);
//checking to see if I have any response ie is my API working?
      console.log(response);
//now defining  variables for specific data points
      var results = response.data;

//not quite sure if this is where my loop goes, but purpose is to go through the array to create buttons in the array      
      for (var i = 0; i < topic.length; i++) {
//now need to figure out how to add the buttons to the html page and want them and the attributes associated to the buttons to go to the selections division from the HTML page
// div      
      var poisonDiv = $("<div>");    

//naming of the results      
      var pCap = $("<p>").text("Caption: " + results[i].caption);      
      var pRat = $("<p>").text("Rating: " + results[i].rating);
   
//for the image/video being stored
      var poisonImage = $("<img>");
//trying to size the result so it looks ok on the page
      poisonImage.attr("src", results[i].images.fixed_height.url);
//now changing the index.html so the new buttons are visible and selectable
        poisonDiv.append(pCap, pRat);
        poisonDiv.append(poisonImage);
        $("#selection").prepend(poisonDiv);}
      
    });
});
// next section is to be able to add new button from the input poison
//assuming the about onclick was was working then need to add new buttons
//need another function to loop for an onclick event
//onclick event for the pick your posion button
//have to add prevent statement ... not exactly clear what it does but we use all the time
//need to capture the text as a variable
// create button
// give button an attribute
//give button a name from the aboce variable
//append the selection section so button appears there
// end this function



// lastly need to clear the results panel, when a new button is click before we load new images
  
// Now there needs to be a function created that we when the buttons are clicked that it will call the query, hit the results and publish them and this needs to be repeatable 

// next need to be able to be able to stop and start the giphy

// lastly need to clear the results panel, when a new button is click before we load new images
