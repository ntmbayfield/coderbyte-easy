// have the function SwapCase(str) take the str
// parameter and swap the case of each character.
// For example: if str is "Hello World" the output
// should be hELLO wORLD. Let numbers and symbols
// stay the way they are.

// Correct Sample Output
// Input = "Hello-LOL"    ||  Output = "hELLO-lol"
// Input = "Sup DUDE!!?"  ||  Output = "sUP dude!!?"

function SwapCase(str) { 
  var caseSwapped = "";
  for ( var i = 0; i < str.length; i++ ) {
    if ( str[i] === str[i].toUpperCase() ) {
      caseSwapped += str[i].toLowerCase();
    } else if ( str[i] === str[i].toLowerCase() ) {
      caseSwapped += str[i].toUpperCase();
    } else {
      caseSwapped += str[i];
    }
  }
  return caseSwapped;     
}