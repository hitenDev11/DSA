/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let dq = []
  let result = []
  let head = 0

  for(let right = 0;right<nums.length;right++){

    if(head < dq.length && dq[head] <= right - k) head++

    while(head < dq.length && nums[dq[dq.length -1]] <= nums[right]){
        dq.pop()
    }

    dq.push(right)

    if(right >= k -1){
        result.push(nums[dq[head]])
    }
  }

  return result
};