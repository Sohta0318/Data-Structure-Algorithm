// function same(arr1, arr2){
// if(arr1.length !== arr2.length){
//   return false
// }
// for (let index = 0; index < arr1.length; index++) {
//   const has = arr2.indexOf(arr1[index] * arr1[index])
//   if(has < 0){
// return false
//   }
//   arr2.splice(has,1)
// }
// return true
// }

// console.log(same([1,2,3],[4,1,9])); // true
// console.log(same([1,2,3],[1,9])); // false
// console.log(same([1,2,1],[4,4,1])); // false

function refactorSame(arr1, arr2){
  if(arr1.length !== arr2.length){
  return false
}
const arr2Obj = {}
for(const a of arr2){
  arr2Obj[a] = arr2Obj[a] ? arr2Obj[a]++ : 1
}
for(const b of arr1){
  arr2Obj[b * b] = arr2Obj[b * b] -1
}

for(const a in arr2Obj){
  if(arr2Obj[a] !== 0){
    return false
  }
}

return true
}

console.log(refactorSame([1,2,3],[4,1,9])); // true
console.log(refactorSame([1,2,3],[1,9])); // false
console.log(refactorSame([1,2,1],[4,4,1])); // false