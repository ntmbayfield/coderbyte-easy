// have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter
// is a palindrome, (the string is the same forward as it is
// backward) otherwise return the string false. For example:
// "racecar" is also "racecar" backwards. Punctuation and
// numbers will not be part of the string. 

// Correct Sample Output
// Input = "never odd or even"   ||  Output = "true"
// Input = "eye"                 ||  Output = "true"

function Palindrome(str) {
  //arrayifies and individually quote-wraps each letter in the string 
  var palindromize = str.split("")
  //reverses order of individual letters
                      .reverse()
  //rejoins individual letters into one string
                      .join("");

  //if palindromize is exactly equal to the initial str argument       
  if ( palindromize === str ) {
    //true
    return true;
  } else {
    //false
    return false;
  }
}