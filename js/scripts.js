var convertBase = function(number, base) {
  var remainders = ""
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  while(number > 0) {
    var remainder = number%base;
    if (remainder < 10) {
      remainders = (remainder).toString() + remainders;
    } else {
      remainders = letters[remainder-10] + remainders
    }
    number = Math.floor(number/base);
  }
  return remainders;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var n = parseInt($("#number").val());
    var b = parseInt($("#base").val());
    var result = convertBase(n, b);
    $("p").text(result);
  });
});
