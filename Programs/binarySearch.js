// Binary Search Algorithm
// Time Complexity: O(log n)
// Space Complexity: O(1) for iterative version, O(log n) for recursive version
// Where to apply: Sorted arrays, Large datasets, When fast search is required

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7));  // Output: 3
console.log(binarySearch(sortedArray, 6));  // Output: -1