const countUniqueValue = (arr) => {
  const unique = [];
  for (const value of arr) {
    const check = unique.indexOf(value);
    if (check === -1) {
      unique.push(value);
    }
  }
  return unique.length;
};
console.log(countUniqueValue([1, 1, 1, 4]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValue([]));

//* using multiple pointers
function countUniqueValues(array) {
  if (array.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}
