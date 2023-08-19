const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// use for loop inside while loop until loop array.length
function bubbleSort(array) {
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if(array[j] > array[j +1]){
      const a = array[j]
array[j] = array[j + 1]
array[j + 1] = a
    }
    
  }
  
}
}

bubbleSort(numbers);
console.log(numbers);