const convertToCelsius = function(num) {
  numCelsius = (num - 32) / 1.8
  numCelsius = Math.round(numCelsius*10)/10
  return numCelsius
};

const convertToFahrenheit = function(num) {
  numFahrenheit = (1.8*num) + 32
  numFahrenheit = Math.round(numFahrenheit*10)/10
  return numFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
