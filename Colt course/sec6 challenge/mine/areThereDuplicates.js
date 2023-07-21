// function areThereDuplicates(...a) {
//   if(!a.length){
//     return false
//   }
//   const test = {}
// a.forEach(element => {
// if(test.hasOwnProperty(element)){
// test[element] += 1
// }else{
// test[element] = 1
// }
// })
// for(const key in test){
// if(test[key] > 1){
//   return true
// }
// }
// return false
// }

function areThereDuplicates(...a) {
  if(!a.length){
    return false
  }
  a.sort()
  let first = 0
  let second = 1

  while(second < a.length){
    if(a[first] === a[second]) return true

    first++
    second++
  }
  return false
}