describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a temperature of 22 when the up function is pressed twice', function(){
    thermostat.up();
    thermostat.up();
    expect(thermostat.temperature).toEqual(22);
  });

  it('has a temperature of 18 when the down function is pressed twice', function(){
    thermostat.down();
    thermostat.down();
    expect(thermostat.temperature).toEqual(18);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for(i=0; i<20; i++) {
      thermostat.down();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a power saving mode, that is on by default', function(){
    expect(thermostat.powerSaving).toBe(true);
  });


  it('has a toggle function to switch the power saving mode on and off', function(){
    thermostat.togglePS();
    expect(thermostat.powerSaving).toBe(false);
    thermostat.togglePS();
    expect(thermostat.powerSaving).toBe(true);
  });

  it('if the power saving mode is on, it has a maximum temperature of 25 degrees', function(){
    for(i=0;i<15;i++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it('if the power saving mode is off, it has a maximum temperature of 32 degrees', function(){
    thermostat.togglePS();
    for(i=0;i<15;i++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(32);
  });

  it('if the temperature is above 25 degrees and we switch power saving on, the temperature goes back to 25', function(){
    thermostat.togglePS();
    for(i=0;i<15;i++) {
      thermostat.up();
    };
    thermostat.togglePS();
    expect(thermostat.temperature).toEqual(25);
  });

  it('has a reset function to bring the temperature back to 20 degrees', function(){
    thermostat.up();
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('displays information in yellow at initial state', function(){
     expect(thermostat.displayColor()).toEqual('Yellow');
  });

  it('displays information in green when the temperature is under 18 degrees', function(){
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.displayColor()).toEqual('Green');
  });

  it('displays information in red when the temperature is over 25 degrees', function(){
    thermostat.togglePS();
    for(i=0;i<6;i++) {
      thermostat.up();
    };
    expect(thermostat.displayColor()).toEqual('Red');
  });
});
