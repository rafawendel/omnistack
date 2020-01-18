export default function parseStringAsArray(commaSeparatedValues) {
  return commaSeparatedValues.split(',').map(item => item.trim());
}
