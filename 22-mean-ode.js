// have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0
// if they don't equal each other (ie. [5, 3, 3, 3, 1] should
// return 1 because the mode (3) equals the mean (3)). The
// array will not be empty, will only contain positive integers,
// and will not contain more than one mode. 

// Correct Sample Output
// Input = 1, 2, 3         ||  Output = 0
// Input = 4, 4, 4, 6, 2   ||  Output = 1

function MeanMode(arr) { 
  
  var modeHolder = {};
  var modeCount = 0;
  var mode = 0;
  //calculates mean for arr argument
  var mean = arr.reduce(function(a,b){return a+b})/arr.length;
  
  for (var i = 0; i < arr.length; i++) {
    if(modeHolder[arr[i]]) {
      modeHolder[arr[i]]++;
    }
    else {
      modeHolder[arr[i]] = 1;
    }
  }
  
  for (var key in modeHolder) {
    if(modeHolder[key] > modeCount) {
      modeCount = modeHolder[key];
      mode = parseInt(key);
    }
  }
  
  if (mode === mean) return 1;
  else return 0;
}