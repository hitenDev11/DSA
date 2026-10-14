/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
   let left = 0
   let product = 1
   let count = 0

    if(k <= 1) return 0

   for(let right = 0;right<nums.length;right++){

      
        
         product *=  nums[right]

        while(product >= k){
            product = product / nums[left]
            left++
        }

        let windowLength = right - left + 1
        count = count + windowLength
   }
   return count
};