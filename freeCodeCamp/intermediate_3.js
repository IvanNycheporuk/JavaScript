// Intermediate Algorithm Scripting: Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
    // Remove all the values
    var args = Array.from(arguments).slice(1);
    
    var filteredArr = arr.filter(item => {
        return !args.includes(item)
    })

    return filteredArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);