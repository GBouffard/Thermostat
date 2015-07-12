$( document ).ready(function() {
  var thermostat = new Thermostat();

  var displayTemperature = function(){
    $( "#temperature" ).text(thermostat.temperature);
  };

  displayTemperature();

});