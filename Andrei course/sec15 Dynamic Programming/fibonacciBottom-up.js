// 0,1,1,2,3,5,8,13,21,34,55,89,144,233
let calculation = 0;

function fibonacciMaster2(n){
let answer = [0,1]
for(let i = 2; i <= n; i++){
answer.push(answer[i-2] + answer[i -1])
}
return answer.pop()
}

console.log("DP-bottomUp " + fibonacciMaster2(6));