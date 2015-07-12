$( document ).ready(function() {
  var thermostat = new Thermostat();
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'

  var displayTemperature = function(){
    $('#temperature').text(thermostat.temperature);
    colorDisplay(thermostat.temperature);
  };

  var colorDisplay = function(temp){
    if (temp < 18) { $('#temperature').css('color', 'rgb(15, 152, 0)') 
    } else if (temp > 25) { $('#temperature').css('color', 'rgb(210, 0, 0)')
    } else { $('#temperature').css('color', 'rgb(239, 247, 0)') };
  };

  var powerSavingMode = function(){
    $('#powerSave').text(onOrOff())
  };

  var onOrOff = function(){
    if (thermostat.powerSaving == true) return 'ON';
    return 'OFF';
  };

  $.getJSON(api, function(data) {
    var averageTemp = (data.main.temp -273.15).toFixed(1);
    $('#averageInLondon').html(averageTemp);
    var maxTemp = (data.main.temp_max -273.15).toFixed(1);
    $('#maxInLondon').html(maxTemp);
    var minTemp = (data.main.temp_min -273.15).toFixed(1);
    $('#minInLondon').html(minTemp);
  });

  displayTemperature();
  powerSavingMode();

  $('#up').click(function(){
    thermostat.up();
    displayTemperature();
  });

  $('#down').click(function(){
    thermostat.down();
    displayTemperature();
  });

  $('#powersaveSwitch').click(function(){
    thermostat.togglePS();
    powerSavingMode();
    displayTemperature();
  });

  $('#reset').click(function(){
    thermostat.resetTemperature();
    displayTemperature();
  });
});