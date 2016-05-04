var feedURL = "https://www.metaweather.com/api/location/44418/";

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	console.log('OndeviceReady running');
	document.addEventListener("onoffline", onOffline, false);
}

function onOffline() {
	console.log('onOffline running');
   	new Android_Toast({content: 'Please connect to the internet!', duration: 6000, position: 'top'}); // Handle the offline event
}
    

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}


$(document).on('pagecreate', '#feedPage', function(event) {
	
	
	// checkConnection();
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