// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

function sameFrequency(str1, str2) {
  str1 = String(str1);
  str2 = String(str2);
  let obj1 = {};
  let obj2 = {};
  for (let x of str1) {
    obj1[x] = (obj1[x] || 0) + 1;
  }
  for (let x of str2) {
    obj2[x] = (obj2[x] || 0) + 1;
  }
  for (let xyz in obj1) {
    if (obj1[xyz] !== obj2[xyz]) {
      return false;
    }
  }
  return true;
}
