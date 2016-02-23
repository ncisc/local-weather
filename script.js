$(document).ready(function(){
  var lat;
  var long;
  var apiKey = '2865be2a7c26232b21eea6442d720290';
  var apiUrl;

  navigator.geolocation.getCurrentPosition(function(position) {
    lat = Math.round(position.coords.latitude);
    long = Math.round(position.coords.longitude);
    apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + '&units=metric' + '&APPID=' + apiKey;
    $.getJSON(apiUrl, function(json) {
      $('#city').text(json.name);
      $('#temperature').text(Math.round(json.main.temp));
      $('#comment').text(json.weather[0].main);
      $('#icon').attr('src', 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png');
    });
  });

  $('#unit').on('click', function(){
    if ($(this).text() == 'C') {
      $(this).text('F');
      $('#temperature').text(Math.round(+($('#temperature').text())*1.8 + 32));
    } else {
      $(this).text('C');
      $('#temperature').text(Math.round((+($('#temperature').text())-32)/1.8));
    }
  });
});
