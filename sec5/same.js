const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (const value of array1) {
    const doubled = value * value;
    const check = array2.indexOf(doubled);
    if (check === -1) {
      return false;
    }
    array2.splice(check, 1);
  }
  return true;
};
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [6, 1, 9]));
