// have the function NumberSearch(str) take the str
// parameter, search for all the numbers in the string,
// add them together, then return that final number. For
// example: if str is "88Hello 3World!" the output should
// be 91. You will have to differentiate between single
// digit numbers and multiple digit numbers like in the
// example above. So "55Hello" and "5Hello 5" should return
// two different answers. Each string will contain at least
// one letter or symbol. 

// Correct Sample Output
// Input = "75Number9"           ||  Output = 84
// Input = "10 2One Number*1*"   ||  Output = 13

function NumberAddition(str) {
  var summableArray = [];
  var replacer = str.replace(/\D/g, " ");
  var splitter = replacer.split(" ");
  var filtered = splitter.filter(Boolean);
  for ( var i = 0; i < filtered.length; i++ ) {
    summableArray.push(Number(filtered[i]));
  }
  var sum = summableArray.reduce(function(a,b){ return a+b});
  return sum;
}