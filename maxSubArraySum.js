const maxSubArraySum = (arr, n) => {
  if (arr.length < n) return null;
  const sortedArray = arr.sort();
  const max = sortedArray.splice(-n);
  return max.reduce((a, b) => a + b, 0);
};
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

const maxSubArray = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
