const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1 === "" && str2 === "") {
    return true;
  }
  const a = str1.split("");
  const b = str2.split("");
  for (const char of a) {
    const check = b.indexOf(char);
    if (check === -1) {
      return false;
    }
    b.splice(check, 1);
  }
  return true;
};

console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
// anagram("aaz", "zza");
// console.log("zza".replace("a", ""));
