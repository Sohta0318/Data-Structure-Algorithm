const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]){
min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }

  // let a = array[0]
// let b = array[array.length  -1]
// b = array[1]
}

const a = {
  name: 'test'
}

// const b = a
// b.name = 'test3'

let aName = a.name
aName = 'test2'

console.log(a);
console.log(b);

// selectionSort(numbers);
// console.log(numbers);