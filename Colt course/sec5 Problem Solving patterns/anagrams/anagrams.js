function anagrams(str1, str2){
if(str1.length !== str2.length){
  return false
}

const str1Obj = {}
for (let i = 0; i < str1.length; i++) {
  str1Obj[str1[i]] = (str1Obj[str1[i]] || 0) + 1
}
for(const a of str2){
  const has = str1Obj[a]
  if(!has){
return false
  }
  str1Obj[a] -= 1
}
return true
}

console.log(anagrams('', '')); // true
console.log(anagrams('aaz', 'zaa')); // true
console.log(anagrams('aaz', 'zza')); // false
console.log(anagrams('anagram', 'nagaram')); // true
console.log(anagrams('car', 'rat')); // false