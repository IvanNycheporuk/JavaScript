// Intermediate Algorithm Scripting: Sorted UnionPassed
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
    // case 1
    // let args = Array.from(arguments);

    // let sortedArr = [].concat(...args)
    // return [...new Set(sortedArr)]

    // case 2
    let uniqueArr = [];
    
    let argsArr = Array.from(arguments);
    
    for (var i = 0; i < argsArr.length; i++) {
    		for (var j = 0; j < argsArr[i].length; j++) {
        		if (!uniqueArr.includes(argsArr[i][j])) {
            		uniqueArr.push(argsArr[i][j]);
            }
        }
    }
    return uniqueArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  