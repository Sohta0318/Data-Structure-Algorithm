function minSubArrayLen(arr, n){
for(const val of arr){
  if(val >= n){
    return 1
  }
}


}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));

 // 2 -> because [4,3] is the smallest subarray
 // 2 -> because [5,4] is the smallest subarray
 // 1 -> because [62] is greater than 52
 // 3
 // 5
 // 2
 //0
