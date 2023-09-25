/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let total = nums[0]
    for(let i = 1; i <nums.length; i++){
      if(nums[i] === 0){
        return 0
      }
      total *= nums[i]
    }
    console.log(total);
    return total === 0 ? 0 : total > 0 ? 1 :-1 
};