// have the function LetterCountI(str) take the str parameter
// being passed and return the first word with the greatest
// number of repeated letters. For example: "Today, is the
// greatest day ever!" should return greatest because it has
// 2 e's (and 2 t's) and it comes before ever which also has
// 2 e's. If there are no words with repeating letters return
// -1. Words will be separated by spaces. 

// Correct Sample Output
// Input = "Hello apple pie"  ||  Output = "Hello"
// Input = "No words"         ||  Output = -1

function LetterCountI(str) { 
  var arrayify = str.split(" ");
  //arrayify = ["Hello", "apple", "pie"];

  var wordSplit = arrayify[0].split("");
  // wordSplit = ["H", "e", "l", "l", "o"]
  
  // code goes here  
  return str; 
         
}