function LetterCapitalize(str) { 

  //splits string-sentence into stringified words wrapped in a container array
  var arrayify = str.split(" ");
  var outputArray = [];

  //for-loop passing along the length of the arrayified str
  for ( var i = 0; i < arrayify.length; i ++ ) {
    //capitalizes the first letter of each word along arrayify's length
    var firstLetter = arrayify[i].charAt(0).toUpperCase();
    //snips the rest of the 
    var restOfStringWord = arrayify[i].slice(1);

    outputArray[i] = firstLetter + restOfStringWord;
  }

  return outputArray.join(" "); 
         
}