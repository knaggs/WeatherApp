var feedURL = "https://www.metaweather.com/api/location/44418/";


$( document ).ready(function() {
    console.log( "ready!" );

document.addEventListener("offline", onOffline, false);

function onOffline() {
   new Android_Toast({content: 'Please connect to the internet!', duration: 6000, position: 'top'}); // Handle the offline event
}
    
});


$(document).on('pagecreate', '#feedPage', function(event) {
	
	
	// <!-- Use an HTML GET request to obtain data from a Yahoo Pipe
	// <!-- The Yahoo pipe currently parses the BBC News RSS feed  -->
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, true);
	xmlhttp.onreadystatechange = function() {
		var weather= JSON.parse(xmlhttp.responseText);
	
	
	// <!-- Define Ractive binding -->
	var ractive = new Ractive({
    	el: 'container', //<!-- where -->
    	template: '#myTemplate', //<!-- how -->
    	data: { weather : weather.consolidated_weather} //<!-- what - specify the list of news articles 'items' using dot notation-->
	});
	}
	xmlhttp.send();
		
});