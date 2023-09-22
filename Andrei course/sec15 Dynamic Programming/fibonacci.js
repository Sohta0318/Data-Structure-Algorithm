// 0,1,1,2,3,5,8,13,21,34,55,89,144,233
let calculation = 0;
function fibonacci(n){
  calculation++;
  if(n <2) {
    return n
  }
  const a = fibonacci(n-1) + fibonacci(n-2)
  return a
}

console.log(fibonacci(6));
console.log(calculation);