
// Linear Search Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
// Where to apply: Unsorted arrays, Small datasets, When simplicity is preferred


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
const numbers = [10, 25, 30, 45, 50];
console.log(linearSearch(numbers, 30)); // Output: 2
console.log(linearSearch(numbers, 100)); // Output: -1