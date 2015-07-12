$( document ).ready(function() {
  var thermostat = new Thermostat();

  var displayTemperature = function(){
    $('#temperature').text(thermostat.temperature);
  };

  var powerSavingMode = function(){
    var onOrOff = function(){
      if (thermostat.powerSaving == true) return 'ON';
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
});