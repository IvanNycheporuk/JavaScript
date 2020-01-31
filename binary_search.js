// pseudo-code
// 1. Let min = 0 and max = n-1.
// 2. If max < min, then stop: target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess was too high. Set max = guess - 1.
// 7. Go back to step 2.

function binarySearch(arr, target) {
    var min = 0,
        max = arr.length - 1,
        avg;

    while (min <= max) {
        avg = Math.floor((min + max) / 2);

        if (arr[avg] === target) {
            return avg;
        }

        if (arr[avg] > target) {
            max = avg - 1;
        } else {
            min = avg + 1;
        }
    }

    return -1
}

var testArr = [1, 3, 4, 6, 8, 10, 11, 13, 15, 34, 38, 41, 85];

console.log(binarySearch(testArr, 10)); // 5
console.log(binarySearch(testArr, 14)); // -1