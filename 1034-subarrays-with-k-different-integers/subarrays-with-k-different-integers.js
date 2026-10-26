/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    
   function atMost(nums,k){
      let left = 0
    let map = new Map()
    let totalSubarrayCount = 0

    for(let right = 0;right<nums.length;right++){
        map.set(nums[right],(map.get(nums[right]) || 0) +1) 

        while(map.size >k){
            if(map.get(nums[left]) > 1){
                map.set(nums[left],(map.get(nums[left]) - 1))
            }else map.delete(nums[left])

            left++
        }

        totalSubarrayCount += right - left + 1
    }

    return totalSubarrayCount
   }

   return atMost(nums,k) - atMost(nums,k - 1)
};