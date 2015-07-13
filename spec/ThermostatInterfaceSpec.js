describe('Thermostat interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('displays the temperature 20 by default', function(){
    expect($('#temperature')).toHaveText(20);
  });

  it('can increase the temperature by clicking the + button', function(){
    $('#up').click();
    expect($('#temperature')).toHaveText(21);
  });

  it('can decrease the temperature by clicking the - button', function(){
    $('#down').click();
    expect($('#temperature')).toHaveText(19);
  });

  it('displays the power saving as On by default', function(){
    expect($('#powerSave')).toHaveText('ON');
  });

  it('can toggle the power saving On and Off with the Power Saving Button', function(){
    $('#powersaveSwitch').click();
    expect($('#powerSave')).toHaveText('OFF');
    $('#powersaveSwitch').click();
    expect($('#powerSave')).toHaveText('ON');    
  });

  it('brings back the temperature to 20 when we press the Reset button', function(){
    $('#down').click();
    $('#down').click();
    $('#reset').click();
    expect($('#temperature')).toHaveText(20);
  });

  it('displays the temperature in Yellow by default', function(){
    expect($('#temperature')).toHaveCss({color: 'rgb(239, 247, 0)'});
  });

  it('displays the temperature in Green when the temperature is under 18 degrees', function(){
    $('#down').click();
    $('#down').click();
    $('#down').click();
    expect($('#temperature')).toHaveCss({color:'rgb(15, 152, 0)'});      
  });

  it('displays the temperature in Red when the temperature is over 25 degrees', function(){
    $('#powersaveSwitch').click();
    for(i=0;i<6;i++){
      $('#up').click();
    };
    expect($('#temperature')).toHaveCss({color:'rgb(210, 0, 0)'});
  });
});