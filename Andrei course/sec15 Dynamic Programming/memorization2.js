function addTo80(n){
  console.log('long time');
return n + 80;
}

function memorizedAddTo80(){
  let cache = {}
  return function(n){
if(n in cache){
  return cache[n]
}else{
  console.log('long time');
  cache[n] = n + 80
  return cache[n];
}
  }
}

const memorized = memorizedAddTo80()


console.log("1", memorized(5));
console.log("2", memorized(5));

// addTo80(5)
// addTo80(5)
// addTo80(5)