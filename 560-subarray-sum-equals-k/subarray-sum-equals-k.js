/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let count = 0
    let prefixSum = 0
   

    for(let i = 0;i<nums.length;i++){
        prefixSum += nums[i]

        let required = prefixSum - k

        if(map.has(required)){
             count += map.get(required)
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1)    
    }

    return count

};