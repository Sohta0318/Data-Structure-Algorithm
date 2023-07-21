function countUniqueValues(arr){
  if(!arr.length) return 0
let first = 0
let next = 1
while(next < arr.length){
if(arr[first] !== arr[next]){
first++
arr[first] = arr[next]
}
next++
}
return first + 1


}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));