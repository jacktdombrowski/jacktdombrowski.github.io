var squared = function(x) {
  var answer = x * x;
  return answer;
}

var plus10 = function(x) {
  var answer = x + 10;
  return answer;
}

// the object "numbers" below is a "Library" like D3 or jquery

var numbers = {
  "squared": squared,
  "plus10": plus10
};
