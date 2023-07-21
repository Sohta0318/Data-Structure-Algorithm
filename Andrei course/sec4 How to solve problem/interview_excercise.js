// Given two arrays, create a function that let' a user know 8true/false9 whether these two arrays contain any common items
// For example
// const array1 = ['a', 'b', 'x']
// const array2 = ['z', 'y', 'i']
// should return false
//----------
// const array3 = ['a', 'b', 'c', 'x']
// const array4 = ['z', 'y', 'x']
// should return true

// function duplicateItem(arr1, arr2){
// const merged = arr1.concat(arr2)
// const findDuplicate = new Set(merged)
// if(findDuplicate.size === merged.length){
//   return false
// }
// return true
// }
function duplicateItem(arr1, arr2){
const merged = arr1.concat(arr2)
merged.sort()
for (let i = 0; i < merged.length; i++) {
  if(merged[i] === merged[i + 1]){
    return true
  }
}
return false
}

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object. 
  for (let j=0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false
}
function containsCommonItem2(arr1, arr2) {
  return arr1.some(item=> arr2.includes(item))
}

console.log(duplicateItem(['a', 'b', 'x'], ['z', 'y', 'i'])); // false
console.log(duplicateItem(['a', 'b', 'c', 'x'],['z', 'y', 'x'])); // true

