function sumZero(arr){
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] + arr[j] === 0){
      return [arr[i],arr[j]]
    }
  }
}
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,4]));

function refactorSumZero(arr){
  const first = 0
let last = arr.length -1
while(first < last){
  if(arr[first] + arr[last] === 0){
    return [arr[first], arr[last]]
  }else if(arr[first] + arr[last] > 0){
    last -= 1
  }else if(arr[first] + arr[last] < 0){
    first += 1
  }
}
}

console.log(refactorSumZero([-4,-3,-2,-1,0,1,2,3,4]));
console.log(refactorSumZero([-3,-2,-1,0,1,2,3,4]));