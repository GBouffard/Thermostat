function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  this.temperature ++
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature --;
  };
  return this.temperature;
};