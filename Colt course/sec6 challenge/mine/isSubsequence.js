function isSubsequence(str1, str2){
  if(str1.length === str2.length){
    return str1===str2
  }
  let first = 0;
  let second = 0
  while(first < str1.length){
if(str1[first] === str2[second]){
  first++
  second++
}else if(str1[first] !== str2[second]){
  second++
}
if(second > str2.length ){
  return false
}
  }

  return true 
}
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('zadqwsxe', 'zdasw'));
console.log(isSubsequence('abc', 'acb'));

; // true
; // true
; // true
; // false (order matters)