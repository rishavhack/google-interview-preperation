function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  let obj1 = {};
  for (let key of str1) {
    obj[key] = (obj[key] || 0) + 1;
  }
  for (let key of str2) {
    obj1[key] = (obj1[key] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
