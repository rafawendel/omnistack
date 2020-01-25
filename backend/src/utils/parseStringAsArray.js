module.exports = function parseStringAsArray(commaSeparatedValues) {
  return commaSeparatedValues.split(',').map(item => item.trim());
};
