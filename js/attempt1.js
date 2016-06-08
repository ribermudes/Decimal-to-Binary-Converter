var number = 30;
var base = 10;

var digits = [];
for(var i=0; i < 10; i++) {
  digits.push(i.toString());
}
digits = digits.slice(0,base);

var replaceAt = function(string, index, newChar) {
  var beginning = string.slice(0, index);
  return beginning + newChar + string.slice(index+1, string.length);
}

var count = "0";
var soFar = 0;

var upByOne = function(index) {
  soFar ++;
  //alert(soFar +" "+count);
  if(soFar >= number) {return count;}
  if (count[index] != "9") {
    count = replaceAt(count, index, digits[digits.indexOf(count[index])+1]);
    alert(count);
    if(index < count.length-1) {
      upByOne(index+1);
    } else {
      upByOne(index);
    }
  } else {
    count = replaceAt(count, index, "0");
    alert(count);
    if(index === 0) {
      count = "0" + count;
      alert(count);
    }
    index++;
    upByOne(index-1);
  }
}

var answer = upByOne(0);
