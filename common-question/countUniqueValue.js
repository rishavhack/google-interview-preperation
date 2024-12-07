function countUniqueValue(arr) {
  if (!arr.length) {
    return 0;
  }
  let obj = {};
  for (let value of arr) {
    obj[value] = (obj[value] || 0) + 1;
  }
  return Object.keys(obj).length;
}
console.log(countUniqueValue([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));

function countUniqueValue(arr) {
  if (!arr.length) {
    return 0;
  }
  var i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValue([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1])); // 4
