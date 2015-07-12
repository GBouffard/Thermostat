describe('Thermostat interface', function() {

  var thermostat

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    thermostat = new Thermostat
  });

  xit('displays the temperature at 20 by default', function(){
  });

  xit('can increase the temperature by clicking the + button', function(){
  });

  xit('can decrease the temperature by clicking the - button', function(){
  });

  xit('displays the power saving as On by default', function(){
  });

  xit('can toggle the power saving On and Off with the Power Saving Button', function(){
  });

  xit('brings back the temperature to 20 when we press the Reset button', function(){
  });

  xit('displays the temperature in Yellow by default', function(){
  });

  xit('displays the temperature in Green when the temperature is under 18 degrees', function(){
  });

  xit('displays the temperature in Red when the temperature is over 25 degrees', function(){
  });
});