//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
let reversSt = ''
if(str === ''){
  return ''
}
reversSt +=str[0]
reverseString(str.slice(0,-1))
console.log(str);
return reversSt
}

reverseString('yoyo mastery')
// console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'