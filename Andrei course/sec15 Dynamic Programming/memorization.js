function addTo80(n){
  console.log('long time');
return n + 80;
}

let cache = {}
function memorizedAddTo80(n){
if(n in cache){
  return cache[n]
}else{
  console.log('long time');
  cache[n] = n + 80
  return cache[n];
}
}

console.log("1", memorizedAddTo80(5));
console.log("2", memorizedAddTo80(5));

// addTo80(5)
// addTo80(5)
// addTo80(5)