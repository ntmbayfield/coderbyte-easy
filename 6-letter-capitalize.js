function LetterCapitalize(str) { 

  //splits string-sentence into stringified words wrapped in a container array
  var arrayify = str.split(" ");
  var outputArray = [];

  //for-loop passing along the length of arrayify
  for ( var i = 0; i < arrayify.length; i ++ ) {
    //capitalizes the first letter of each word along arrayify's length
    var firstLetter = arrayify[i].charAt(0).toUpperCase();
    //snips the rest of each word along arrayify's length
    var restOfStringWord = arrayify[i].slice(1);

    //puts capitalized first letter and rest of word together into output array
    outputArray[i] = firstLetter + restOfStringWord;
  }

  //turns outputArray into one string -- output now has same form as input
  return outputArray.join(" "); 
         
}