$( document ).ready(function() {
  var thermostat = new Thermostat();

  var displayTemperature = function(){
    $('#temperature').text(thermostat.temperature);
  };

  var powerSavingMode = function(){
    var onOrOff = function(){
      if (thermostat.powerSaving == true) return 'ON';
      return 'OFF';
    };
    $('#powerSave').text(onOrOff)
  };

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
  });

  $('#reset').click(function(){
    thermostat.resetTemperature();
    displayTemperature();
  });
});