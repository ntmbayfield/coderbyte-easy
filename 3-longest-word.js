//This is my old solution -- passes 4/5 tests
// function LongestWord(sen) { 
//   var individualWords = sen.split(" ");
//   var longest = 0;
//   var word = null;
//   for ( var i = 0; i < individualWords.length; i++ ) {
//     if ( longest < individualWords[i].length ) {
//       longest = individualWords[i].length;
//       word = individualWords[i];
//     }
//   }
//   return word;
// }

function LongestWord(sen) { 
  //splits the sentence string into an array containing each individual word as a string
  var individualWords = sen.split(" ");
  for ( var i = 0; i < individualWords.length; i++ ) {
    //removes all characters NOT in the Latin alphabet, an integer, or the underscore
    individualWords[i] = individualWords[i].replace(/\W/g, "");
  }
  //sorts the elements in the individualWords array by longest string to shortest
  individualWords = individualWords.sort(function(a,b){return b.length-a.length});
  //returns the first string in the array
  return individualWords[0];
}