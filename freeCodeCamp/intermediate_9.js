// Intermediate Algorithm Scripting: Missing lettersPassed
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    var fullStr = String.fromCharCode(...[...Array(str[str.length-1].charCodeAt(0) - str[0].charCodeAt(0) + 1).keys()].map(i => i + str[0].charCodeAt(0)));
  
    var difference = fullStr.split('').filter(x => !str.split('').includes(x));

    if (difference.length !== 0) {
        return difference.join('');
    }  
}
  
fearNotLetter("abcde");