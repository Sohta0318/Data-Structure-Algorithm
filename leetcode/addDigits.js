// /**
//  * @param {number} num
//  * @return {number}
//  */
// var addDigits = function(num) {
//   let [first, second] = separate(num);
//   let sum = (+first) + (+second);
// if(separate(sum).length > 1){
//   return addDigits(sum)
// }
//   return sum
// };

// function separate(num){
//   return num + ''.split('')
// }

var addDigits = function(num) {
  let sum = num
  while(Math.floor(sum / 10) > 0){
    const first = Math.floor(sum / 10)
    const second = sum % 10
    sum = first + second
  }
  return sum
};

console.log(addDigits(38));

// addDigits(1)

