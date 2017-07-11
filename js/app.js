var latitude, longitude, apiKey, farenheitTemperature, celsiusTemperature;

function getWeatherData() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude =  position.coords.latitude 
    longitude = position.coords.longitude
    apiKey = "xxxxxxxxxxx";
 
    var url ="https://cors-anywhere.herokuapp.com/" + "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude;
    $.getJSON(url, function(json){
      farenheitTemperature = json.currently.temperature;
      $("#temperature").text(farenheitTemperature);
      $("#location").text(json.timezone);
      
      $('.celsius').click(function(){
        celsiusTemperature = ((farenheitTemperature - 32)/1.8);
        celsiusTemperature = Math.round(celsiusTemperature * 100) / 100
        $("#temperature").text(celsiusTemperature);     
      })

       $('.farenheit').click(function(){
        $("#temperature").text(farenheitTemperature);     
 
      })

    
      switch(json.currently.icon){
        case "partly-cloudy-day":
        case "cloudy":
           $('body').css('background-image', "url(../LocalWeatherApp/images/cloudy.jpg)");
           break;
        case "rain":
           $('body').css('background-image', "url(../LocalWeatherApp/images/rainy.jpg)");
           break;
        case "sunny":
           $('body').css('background-image', "url(../LocalWeatherApp/images/sunny.jpg)");
           break;
        default:
           $('body').css('background-image', "url(../LocalWeatherApp/images/sunny.jpg)");
       }
})
  });
}
}


$(document).ready(function(){
	getWeatherData();
   });


