// Sorting

// Bubble Sort
// Repeatedly compare adjacent elements and swap if they are in the wrong order. Largest element “bubbles” to the end.
// Time Complexity:
// Best: O(n)
// Average: O(n²)
// Worst: O(n²)
// Where to apply: Small datasets, When simplicity matters more than performance
// Simple but inefficient
// Example:
// Array: [5, 4, 3, 2]
// Pass 1:
// Compare 5 & 4 → swap → [4, 5, 3, 2]
// Compare 5 & 3 → swap → [4, 3, 5, 2]
// Compare 5 & 2 → swap → [4, 3, 2, 5]
// Pass 2:
// Compare 4 & 3 → swap → [3, 4, 2, 5]
// Compare 4 & 2 → swap → [3, 2, 4, 5]
// Compare 4 & 5 → swap → [3, 2, 4, 5] (we can skip this as 5 is already in place)
// Pass 3:
// Compare 3 & 2 → swap → [3, 2, 4, 5]
// Compare 3 & 4 → swap → [2, 3, 4, 5] (we can skip this as 4 is already in place)
// Compare 4 & 5 → swap → [2, 3, 4, 5] (we can skip this as 5 is already in place)

// Note: Loop will run n-1 times, and skip comparisons for last i elements as they are already sorted.
// Sorted

// Selection Sort
// Selects the minimum element and places it at the correct position
// Time Complexity:
// Best: O(n²)
// Average: O(n²)
// Worst: O(n²)
// Where to apply: When memory writes are costly (fewer swaps than bubble sort)
// Small datasets
// Example:
// Array: [5, 4, 3, 2]
// Pass 1 (i = 0)
// Find minimum in [5, 4, 3, 2] by traversing the array → 2
// Swap with first element (i=0, 5)
// [2, 4, 3, 5]
// Pass 2 (i = 1)
// Find minimum in [4, 3, 5] → 3
// Swap with 4
// [2, 3, 4, 5]
// Pass 3 (i = 2)
// Find minimum in [4, 5] → already 4
// No swap needed
// [2, 3, 4, 5]
// Pass 4 (i = 3)
// Only one element left → already sorted

// Insertion Sort
// Build the sorted array one element at a time by inserting each element into its correct position.
// Efficient for small datasets
// Time Complexity:
// Best: O(n)
// Average: O(n²)
// Worst: O(n²)
// Where to apply: Small or nearly sorted arrays, Real-time data insertion
// Example:
// Array: [5, 4, 3, 2]
// Pass 1 (Insert 4)
// Compare 4 with 5 → 4 < 5 → shift 5 right
// Insert 4 at correct position
// [4, 5, 3, 2]
// Pass 2 (Insert 3)
// Compare 3 with 5 → shift
// Compare 3 with 4 → shift
// Insert 3 at beginning
// [3, 4, 5, 2]
// Pass 3 (Insert 2)ß
// Compare 2 with 5 → shift
// Compare 2 with 4 → shift
// Compare 2 with 3 → shift
// Insert 2 at beginning
// [2, 3, 4, 5]


// Merge Sort
// Divide array into halves, sort each half, then merge them.

// Time Complexity:
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n log n)
// Where to apply: Large datasets, When stable sorting is needed, Linked lists
// Example:
// Array: [5, 3, 2, 4]
// Divide:
// [5, 3] and [2, 4]
// Sort:
// [3, 5] and [2, 4]
// Merge:
// [2, 3, 4, 5]

// Quick Sort
// Very fast in practice, but worst case O(n²)
// Pick a pivot, partition array into:
// Elements smaller than pivot
// Elements greater than pivot
// Then recursively sort partitions.
// Time Complexity:
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n²) (bad pivot)
// Where to apply: General-purpose sorting, Faster in practice than merge sort
// Used in many libraries
// Example:
// Array: [5, 3, 2, 4], pivot = 4
// Left: [3, 2]
// Right: [5]
// Sort both:
// [2, 3], [5]
// Result:
// [2, 3, 4, 5]

// Heap Sort
// Convert array into a heap (max heap), then repeatedly extract the largest element and rebuild heap.
// Time Complexity:
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n log n)
// Where to apply: When guaranteed O(n log n) is required, When memory usage must be minimal (in-place sorting)
// Example:
// Array: [5, 3, 2]
// Build max heap → [5, 3, 2]
// Remove max (5), place at end → [2, 3, 5]
// Heapify remaining → already sorted
