function reverse(str){
  if(!str) return ''
  let reverseStr = ''
  for(let i = str.length -1 ; i >= 0; i--){
reverseStr+=str[i]
  }
  return reverseStr
}

console.log(reverse('hello'));