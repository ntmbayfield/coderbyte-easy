// have the function SecondGreatLow(arr) take the array of
// numbers stored in arr and return the second lowest and
// second greatest numbers, respectively, separated by a
// space. For example: if arr contains [7, 7, 12, 98, 106]
// the output should be 12 98. The array will not be empty
// and will contain at least 2 numbers. It can get tricky
// if there's just two numbers! 

// Correct Sample Output
// Input = 1, 42, 42, 180  ||  Output = "42 42"
// Input = 4, 90           ||  Output = "90 4"

function SecondGreatLow(arr) { 

  //base case - if arr argument has only two elements
  if ( arr.length === 2 ) {
    return arr.join(" ");
  }

  var output = [];

  var sorted = arr.sort(function(a,b){return a-b});
  //==> sorted = [7,7,12,98,106];

  var firstGuy = sorted.shift();
  //==> firstGuy = 7

  if ( firstGuy === sorted[0] ) {
    output.push(sorted.slice(1,2));
  } else {
    output.push(sorted.slice(0,1));
  }
  //==> output = [12];

  var lastGuy = sorted.pop();

  if ( lastGuy === sorted[sorted.length-1] ) {
    output.push(sorted.slice(sorted.length-3, sorted.length-2));
  } else {
    output.push(sorted.pop());
  }
  return output.join(" ");
}