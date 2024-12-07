function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      return false;
    }
    if (!arr2.includes(arr1[i] ** 2)) {
      return false;
    } else {
      obj[arr1[i]] = 1;
    }
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
