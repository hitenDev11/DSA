/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let j = 0
    let i = 0
    let k = nums.length - 1

    while(i<=k){
        if(nums[i] === 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
            i++
        }else if(nums[i] === 2){
            let temp = nums[i]
            nums[i] = nums[k]
            nums[k] = temp
            k--
        }else{
            i++
        }
    }
};