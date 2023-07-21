function maxSubarraySum(arr,n){
  if(arr.length < n) return null;
  let max = 0
  for (let i = 0; i < n; i++) {
  max += arr[i]  
  }
  for (let i = n; i < arr.length; i++) {
    if(arr[i] > arr[i-n]){
      max = max - arr[i - n] + arr[i]
      console.log(max);
    }
  }
  // return max
  
}
console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2) );
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3], 3));

// 700
// 39 
// 5
// 5
// null