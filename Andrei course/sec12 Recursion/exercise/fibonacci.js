// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let total = 0
  for (let i = 0; i < n; i++) {
    total =0
    total+=i + (i+1)
    console.log(total);
  }
  return total
  //code here;
}
console.log(fibonacciIterative(3));
// fibonacciIterative(3);

function fibonacciRecursive(n) {
  //code here;
}

fibonacciRecursive(3)