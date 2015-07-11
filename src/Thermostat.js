function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  if (this.powerSaving === true && this.temperature < 25) { this.temperature ++; };
  if (this.powerSaving === false && this.temperature < 32) { this.temperature ++; };
  return this.temperature;
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature --;
  };
  return this.temperature;
};

Thermostat.prototype.togglePS = function(){
  return (this.powerSaving = !this.powerSaving);
};