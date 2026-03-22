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
// Array: [5, 3, 2]
// Pass 1:
// Compare 5 & 3 → swap → [3, 5, 2]
// Compare 5 & 2 → swap → [3, 2, 5]
// Pass 2:
// Compare 3 & 2 → swap → [2, 3, 5]
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
// Array: [5, 3, 2]
// Find min = 2 → swap with 5 → [2, 3, 5]
// Next min already correct

// Insertion Sort
// Build the sorted array one element at a time by inserting each element into its correct position.
// Efficient for small datasets
// Time Complexity:
// Best: O(n)
// Average: O(n²)
// Worst: O(n²)
// Where to apply: Small or nearly sorted arrays, Real-time data insertion
// Example:
// Array: [5, 3, 2]
// Start with [5]
// Insert 3 → [3, 5]
// Insert 2 → [2, 3, 5]

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
