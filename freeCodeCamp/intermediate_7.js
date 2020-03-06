// Intermediate Algorithm Scripting: Search and ReplacePassed
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    var startArr = str.split(' ');     
    
    var test = startArr.map(item => {
        if (item === before) {      
            if (checkIfUpperase(item)) {
                after = toUpprecase(after);          
            }       
            
            item = after;
        }
      
        return item
    });
    
    return test.join(' ');
}
  
function checkIfUpperase(str) {
    return str[0] === str[0].toUpperCase();  
}
  
function toUpprecase(str) {
      return str[0].toUpperCase() + str.slice(1);
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");