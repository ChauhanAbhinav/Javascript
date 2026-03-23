// 1. Reverse a String
// Time Complexity: O(n)
// Space Complexity: O(n) - due to the new array created for reversed string
let str = "Hello, World!";
let reverse = ""
let i = str.length - 1;
while (i >= 0) {
    reverse += str[i];
    i--;
}
console.log(reverse); // Output: !dlroW ,olleH

// Alternative method using built-in functions
function reverseString(str) {
  return str.split("").reverse().join(""); // reverse the array of characters and join them back into a string
}

// Example usage
const original = "Hello, World!";
const reversed = reverseString(original);
console.log(reversed); // Output: !dlroW ,olleH

// 2. Check if a String is a Palindrome
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
// Time Complexity: O(n)
// Space Complexity: O(1) - no additional space used

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    return true; // Is a palindrome
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false

// 3. Count Vowels in a String
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for counting

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countVowels("Hello, World!")); // Output: 3
console.log(countVowels("JavaScript"));     // Output: 3

// 4. Find the Longest Word in a String
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for tracking longest word

function findLongestWord(str) {
    const words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Example usage
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"

// 5. Remove Duplicates from a String
// Time Complexity: O(n)
// Space Complexity: O(n) - due to the new string created for unique characters

function removeDuplicates(str) {
    let unique = "";
    const seen = new Set();

    for (let char of str) {
        if (!seen.has(char)) {
            unique += char;
            seen.add(char);
        }
    }
    return unique;
}

// Example usage
console.log(removeDuplicates("hello world")); // Output: "helo wrd"
console.log(removeDuplicates("javascript"));   // Output: "javscript"   

// 6. Count Occurrences of a Character in a String
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for counting

function countOccurrences(str, char) {
    let count = 0;

    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countOccurrences("hello world", "o")); // Output: 2
console.log(countOccurrences("javascript", "a"));   // Output: 2

// 7. Check if Two Strings are Anagrams
// Anagrams are words or phrases made by rearranging the letters of another, such as "listen" and "silent".
// Time Complexity: O(n log n) - due to sorting the characters
// Space Complexity: O(n) - due to the new arrays created for sorted characters

function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    return normalize(str1) === normalize(str2);
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false

function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let map = {};

    for (let char of str1) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
}

console.log(checkAnagrams("aab", "abz")); // false

// 8. Count Words in a String
// Time Complexity: O(n)
// Space Complexity: O(1) - only a few variables used for counting

function countWords(str) {
    if (str.trim() === "") return 0; // Handle empty string case
    return str.trim().split(/\s+/).length; // Split by whitespace and count words
}

// Example usage
console.log(countWords("Hello, world!")); // Output: 2
console.log(countWords("   JavaScript is awesome   ")); // Output: 4   

// 9. Longest Substring Without Repeating Characters
// Time Complexity: O(n)
// Space Complexity: O(n) - due to the set used for tracking characters

function longestUniqueSubstring(str) {
    let longest = "";
    let current = "";
    const seen = new Set();

    for (let char of str) {
        while (seen.has(char)) {
            seen.delete(current[0]);
            current = current.slice(1);
        }
        current += char;
        seen.add(char);
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

// Example usage
console.log(longestUniqueSubstring("abcabcbb")); // Output: "abc"
console.log(longestUniqueSubstring("bbbbb"));    // Output: "b"
