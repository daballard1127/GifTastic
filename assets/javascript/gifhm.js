//Array for searched topics to be added
var topics = ["Dune", "Alien", "Star Wars", "The Matrix", "Metropolis", "Interstellar", "Inception", "Avatar", "Close Encounters", "District 9"];
// Initial array that contains list of scifi movies
//Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
//Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes

function createButtons() {
	for (var i = 0; i < topics.length; i++){
		console.log(topics[i]);
	
	var newBtn = $(`<button ${topics[i].newBtn}></button>`);
	newBtn.attr("data-scifimovie", topics[i]);
	newBtn.text(topics[i]);
	$("#createshowButtons").append(newBtn);
}
};
$('#submitBtn').on('click', function(event) {
    submitInput();
});

function submitInput(){

event.preventDefault();
            //Get input text value
            var inputVal = $('#userInput').val();
            //push user input to array
            topics.push(inputVal);
            createButtons();
            //Create new buttons
            //Testing
            console.log(inputVal);
            
            console.log(topics);
            

};

function displaySciFiShow() {


	var scifiMovie = $(this).data('mymovie');
	console.log($(this));
	console.log(scifiMovie);

	var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + scifiMovie + '&api_key=dc6zaTOxFJmzC&limit=10';

	console.log(queryURL);

	$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			var results = response.data;
			console.log(results);
			for (var i = 0; i < results.length; i++) {

				var showDiv = $("<div class='item'>");

				var rating = results[i].rating;

				var p = $("<p>").text("Rating: " + rating);
				var personImage = $("<img>");
				personImage.attr("src", results[i].images.fixed_height.url);

				showDiv.prepend(p);
				showDiv.prepend(personImage);

				$("#gifs-appear-here").prepend(showDiv);
			}
		});
};

$(document).ready(function() {
	createButtons();

});
displaySciFiShow();

	 
