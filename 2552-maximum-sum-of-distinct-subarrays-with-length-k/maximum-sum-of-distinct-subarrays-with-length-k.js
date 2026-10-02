/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map = new Map()
    let windowSum = 0
    let maxSum = 0

    for(let i = 0;i<k;i++){
        windowSum += nums[i]

        map.set(nums[i],(map.get(nums[i]) || 0)+1)
    }

    if(map.size === k) maxSum = windowSum

    for(let right = k; right<nums.length;right++){
        
        if(map.get(nums[right -k]) > 1){
            map.set(nums[right -k],map.get(nums[right - k]) - 1)
        }else {
            map.delete(nums[right -k])
        }
        map.set(nums[right],(map.get(nums[right]) || 0) + 1)

        windowSum = windowSum - nums[right - k] + nums[right]

        if(map.size === k){
            maxSum = Math.max(windowSum,maxSum)
        }
    }

    return maxSum
};