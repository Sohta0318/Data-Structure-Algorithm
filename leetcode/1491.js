/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = salary[0]
    let min = salary[0]
    for(let i = 1; i < salary.length; i++){
      if(max < salary[i]){
        max = salary[i]
      }
      if(min > salary[i]){
        min = salary[i]
      }
    }
    const a = salary.filter(num => num < max && num > min )

    return a.reduce(((prev, current)=> prev + current),0) / a.length
};

console.log(average([4000,3000,1000,2000]));
console.log(average([1000,2000,3000]));