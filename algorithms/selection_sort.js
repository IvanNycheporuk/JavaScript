// Find the smallest card. Swap it with the first card.
// Find the second-smallest card. Swap it with the second card.
// Find the third-smallest card. Swap it with the third card.
// Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.

function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function findMinimumIndex(arr, startIndex) {
    var minIndex = startIndex,
        minValue = arr[startIndex];
    
    for (var i = startIndex + 1; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i
        }
    }

    return minIndex;
}

function selectionSort(arr) {
    var minIndex;
    for (var i = 0; i < arr.length - 1; i++) {
        minIndex = findMinimumIndex(arr, i);

        if (arr[i] > arr[minIndex]) {
            swap(arr, i, minIndex);
        }
    }

    return arr;
}

var testArr = [22, 11, 99, 88, 9, 7, 42];
console.log(selectionSort(testArr));