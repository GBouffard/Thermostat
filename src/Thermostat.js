function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.up = function() {
  this.temperature ++
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
  	return this.temperature --
  };
};