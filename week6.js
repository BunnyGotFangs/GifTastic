// desclaration of needed global variables including starting buttons, apikey, url
var poison = ["Hemlock","Belladonna","Textrodotoxin","Mercury","Cyanide"];
var apiKey = "Atz4BqbSfFySR78ltn4KnkbuESh3unL4";
var gifUrl = "https://api.giphy.com/v1/gifs/random";
var queryUrl = gifUrl + "?api_key=" + apiKey+"tag="; 

//connecting to giphy to get content

function gettingGiphys() {

  var gipghy = $(this).attr("results");
// desclared global, but reviewing back seems to need local so creting local = to global 
// know I need more local variables, not quite sure what they are yet, so will add as needed  
  var localUrl = queryUrl;

//creating the get statement decalaration so I can pull the need images need to link to a button name to input the tag variable UGH
  $.ajax({
    url: localUrl,
    method: "GET"
  }).then(function(response) {
      
)}