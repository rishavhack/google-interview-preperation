function maxSubArraySum(arr, target) {
  if (!arr.length) {
    return null;
  }
  let max = 0;
  for (let i = 0; i < arr.length - target + 1; i++) {
    let tmp = 0;
    for (let j = i; j < i + target; j++) {
      tmp = tmp + arr[j];
    }
    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));

function maxSubArraySum(arr, target) {
  if (!arr.length) {
    return null;
  }
  let max = 0;
  let tmpSum = 0;
  for (let i = 0; i < target; i++) {
    tmpSum = tmpSum + arr[i];
  }
  max = tmpSum;
  for (let i = 1; i < arr.length - target + 1; i++) {
    tmpSum = tmpSum + arr[i + target - 1] - arr[i - 1];
    if (tmpSum > max) {
      max = tmpSum;
    }
  }
  return max;
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
