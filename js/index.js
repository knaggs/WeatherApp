var feedURL = "https://www.metaweather.com/api/location/44418/";

function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "http://www.derekknaggs.com/star.png";
    var randomNum = Math.round(Math.random() * 10000);
     
    xhr.open('HEAD', file + "?rand=" + randomNum, false);
     
    try {
        xhr.send();
         
        if (xhr.status >= 200 && xhr.status < 304) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

if (doesConnectionExist() == true) {
			alert('Working..');
		} else {
			alert('Please connect to the internet!');
		}

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	console.log('OndeviceReady running');
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