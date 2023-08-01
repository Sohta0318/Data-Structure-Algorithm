// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if(number === 1){
    return 1
  }
  console.log(number);
  return number * findFactorialRecursive(number -1);
}

function findFactorialIterative(number) {
  //code here
  let total = 1
  for(let i = number; i >= 1; i-- ){
total*=i
  };
  return total
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

