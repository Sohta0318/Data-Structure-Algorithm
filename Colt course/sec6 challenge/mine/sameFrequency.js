// function sameFrequency(int1, int2){
//   // good luck. Add any arguments you deem necessary.
//   const st1 = int1.toString()
//   const st2 = int2.toString()
//   if(st1.length !== st2.length) return false
//   const st1Obj = {}
//   for(const val of st1){
//     st1Obj[val] = (st1Obj[val] || 0) +1
//   }
//   for(const val of st2){
//     const a = st1Obj[val]
//     if(!a){
//       return false
//     }
//     st1Obj[val] -= 1
//   }
//   return true
// }

function sameFrequency(int1, int2){
  // good luck. Add any arguments you deem necessary.
  const sort1 = int1.toString().split('').sort().join('')
  const sort2 = int2.toString().split('').sort().join('')
  // for(const)
  return sort1 === sort2
}



console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));
 // true
 // false
 // true
 // false