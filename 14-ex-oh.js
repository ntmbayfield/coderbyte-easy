// have the function ExOh(str) take the str parameter being
// passed and return the string true if there is an equal
// number of x's and o's, otherwise return the string false.
// Only these two letters will be entered in the string, no
// punctuation or numbers. For example: if str is "xooxxxxooxo"
// then the output should return false because there are
// 6 x's and 5 o's. 

// Correct Sample Output
// Input = "xooxxo"  ||  Output = "true"
// Input = "x"       ||  Output = "false"

function ExOh(str) { 
  var countOs = 0;
  var countXs = 0;
  var stringifiedXOs = str.split("");
  for ( var i = 0; i < stringifiedXOs.length; i++ ) {
    if ( stringifiedXOs[i] === "x" ) {
      countXs++;
    } else {
      countOs++;
    }
  }
  if ( countOs === countXs ) {
    return true;
  } else {
    return false;
  }
}