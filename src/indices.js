function findAllIndices(stringToCheck, specifiedValue) {
  var flag = false;
  indices = new Array();
  for (var i = 0; i < stringToCheck.length - specifiedValue.length + 1; i++) {
    if (stringToCheck.substring(i, specifiedValue.length + i) == specifiedValue) {
      indices.push(i);
    }
  }
  return indices;
}
module.exports = findAllIndices;
