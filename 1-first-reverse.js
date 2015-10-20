// Have the function FirstReverse(str) take the str parameter being passed
// and return the string in reversed order.

function FirstReverse(str) { 
  //wraps each of the string's letters in quotes	
  return str.split("")
    //reverses the indexes of each letter (front-to-back)
    .reverse()
    //removes the quotes around each individual letter
    .join("");       
         
}

