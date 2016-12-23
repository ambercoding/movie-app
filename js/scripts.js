
$(document).ready(function(){
	console.log('test');

	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imdbLink= 'http://www.imdb.com/title/';
	var findIMDB = 'https://api.themoviedb.org/3/find/tt';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	const nowPlayingUrl = apiBaseUrl + 'movie/now_playing?api_key='+ apiKey;
	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		console.log(nowPlayingData);
		var nowPlayingHTML = '';
		for(let i = 0; i < nowPlayingData.results.length; i++){
			var idNumber = nowPlayingData.results[i].id;
			

			var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
			nowPlayingHTML += '<div id="'+idNumber+'" class="col-sm-3 fill-div">';

			nowPlayingHTML += '<img src="'+poster+'">';
			
			nowPlayingHTML +='</div>';	
		}
		$('#movie-grid').html(nowPlayingHTML);
	});
	// $getJSON(findIMDB, function(idNumber){

	// });
	// 1. build divs
	// 	a. img onclick="m(idnumber)"
	// 2. function(idnumber)
	// $.getjson get imdb_id
	// get imdb id	
	// -google how to open a new window tab in js
	// -go to a link in js
	// -do this in your $.getjson
	// -fn build the imdb link


});
function findImdb(idNumber){
	var myLink = findIMDB+ idNumber+ '?api_key='+apiKey+'&external_source=imdb_id';
}