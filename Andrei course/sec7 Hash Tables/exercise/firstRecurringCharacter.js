function firstRecurringCharacter(arr){
if(!arr.length) return undefined
// let i = 0
// let j = 1
// while(j < arr.length){

// }
let temp = Infinity
let num = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if(arr[i] === arr[j]){
      if(temp > j - i){
        temp = j-i
        num = arr[i]
      }
    }
  }
  
}
return num
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));