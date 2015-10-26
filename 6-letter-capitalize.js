function LetterCapitalize(str) { 

  var arrayed = str.split(" ");
  var outputArray = [];

  for ( var i = 0; i < arrayed.length; i ++ ) {
    var firstWord = arrayed[i].charAt(0).toUpperCase();
    var restOfString = arrayed[i].slice(1);

    outputArray[i] = firstWord + restOfString;
  }

  return outputArray.join(" "); 
         
}