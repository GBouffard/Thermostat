describe('Thermostat interface', function() {

  var thermostat

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    thermostat = new Thermostat
  });
});