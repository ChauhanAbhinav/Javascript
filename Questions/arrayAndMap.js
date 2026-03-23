// 1. Find the Maximum Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking maximum

function findMax(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-1, -5, -3, -9, -2])); // Output: -1

// 2. Find the Minimum Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking minimum

function findMin(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage
console.log(findMin([1, 5, 3, 9, 2])); // Output: 1
console.log(findMin([-1, -5, -3, -9, -2])); // Output: -9

// 3. Calculate the Sum of Elements in an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking sum

function calculateSum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

// Example usage
console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15
console.log(calculateSum([-1, -2, -3, -4, -5])); // Output: -15

// 4. Find the Average of Elements in an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking sum and count

function findAverage(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case
    const sum = calculateSum(arr);
    return sum / arr.length;
}

// Example usage
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findAverage([-1, -2, -3, -4, -5])); // Output: -3

// 5. Remove Duplicates from an Array
// Time Complexity: O(n)
// Space Complexity: O(n) - using a Set to track unique elements

function removeDuplicates(arr) {
    const uniqueElements = new Set();
    const result = [];
    for (let element of arr) {
        if (!uniqueElements.has(element)) {
            uniqueElements.add(element);
            result.push(element);
        }
    }
    return result;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]

// Example usage
console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates(['a', 'b', 'c', 'a', 'd'])); // Output: ['a', 'b', 'c', 'd']

// 6. Reverse an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - reversing in place

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap elements
        left++;
        right--;
    }
    return arr;
}

// Example usage
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd'])); // Output: ['d', 'c', 'b', 'a']

// 7. Rotate an Array to the Right by k Steps
// Time Complexity: O(n)
// Space Complexity: O(1) - rotating in place

function rotateRight(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    reverseArray(arr);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    return arr;
}

// Example usage
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateRight(['a', 'b', 'c', 'd'], 1)); // Output: ['d', 'a', 'b', 'c']

// 8. Rotate an Array to the Left by k Steps
// Time Complexity: O(n)
// Space Complexity: O(1) - rotating in place

function rotateLeft(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    reverseArray(arr);
    reverseArray(arr, 0, arr.length - k - 1);
    reverseArray(arr, arr.length - k, arr.length - 1);
    return arr;
}

// Example usage
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
console.log(rotateLeft(['a', 'b', 'c', 'd'], 1)); // Output: ['b', 'c', 'd', 'a'] 

// 9. Find the Second Largest Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking largest and second largest

function findSecondLargest(arr) {
    if (arr.length < 2) return undefined; // Handle case where there are less than 2 elements
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let element of arr) {
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        } else if (element > secondLargest && element < largest) {
            secondLargest = element;
        }
    }
    return secondLargest === -Infinity ? undefined : secondLargest; // Handle case where all elements are the same
}

// Example usage
console.log(findSecondLargest([1, 5, 3, 9, 2])); // Output: 5
console.log(findSecondLargest([5, 5, 5])); // Output: undefined

// 10. Count the Occurrences of Each Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(n) - using an object to track counts

function countOccurrences(arr) {
    const counts = {};
    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1;
    }
    return counts;
}

// Example usage
console.log(countOccurrences([1, 2, 2, 3, 4, 4])); // Output: { '1': 1, '2': 2, '3': 1, '4': 2 }
console.log(countOccurrences(['a', 'b', 'a', 'c'])); // Output: { 'a': 2, 'b': 1, 'c': 1 }

// 11. Two Sum Problem: Find Two Numbers that Add Up to a Target
// Two Sum Problem: Find Two Numbers that Add Up to a Target
// Time Complexity: O(n)
// Space Complexity: O(n) - using a Set to track seen numbers

function twoSum(arr, target) {
    const seen = new Set();
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null; // No pair found
}

// Example usage
console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: null

// 12. Find first non-repeating element in an array
// Time Complexity: O(n)
// Space Complexity: O(n) - using an object to track counts

function firstNonRepeating(arr) {
    const counts = {};
    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1;
    }
    for (let element of arr) {
        if (counts[element] === 1) {
            return element;
        }
    }
    return null; // No non-repeating element found
}

// Example usage
console.log(firstNonRepeating([1, 2, 3, 2, 1])); // Output: 3
console.log(firstNonRepeating(['a', 'b', 'a', 'c'])); // Output: 'b'

// 13. Find the duplicate elements in an array
// Time Complexity: O(n)
// Space Complexity: O(n) - using a Set to track seen numbers

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}

// Example usage
console.log(findDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2]
console.log(findDuplicates(['a', 'b', 'a', 'c'])); // Output: ['a']