// function averagePair(arr, n){
//   if(arr.length < 2 ){
//     return false
//   }
//   const average = n * 2
//   for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[i] + arr[j] === average){
//           return true
//       }
//     }
//   }
//   return false
// }

function averagePair(arr, n){
  if(arr.length < 2 ){
    return false
  }
let first = 0
let last = arr.length -1
const average = n *2
while(first < last){
  const total = arr[first] + arr[last]
  if(total === average){
    return true
  }else if(total > average){
  last--
  }else if(total < average){
    first++
  }
}
return false
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));
 // true
 // true
 // false
 // false