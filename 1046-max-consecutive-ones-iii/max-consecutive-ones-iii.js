/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let windowSum = 0
    let count = 0
    let zeroCounts = 0
    let left = 0
    let right = 0
    let maxLength = 0

    for(let right = 0;right<nums.length;right++){

        if(nums[right] === 0){
            zeroCounts++
        }

        while(zeroCounts > k){
            if(nums[left] === 0){
                zeroCounts--
            }

            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};