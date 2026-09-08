/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   let set = new Set(nums)
   let currentLength = 1;
   let longestLength = 0;

   for(let current of set){
   
    if(!set.has(current - 1)){
        
        let next = current

        while(set.has(next + 1)){
            currentLength++
            next++
        }
    }

     if(currentLength > longestLength ) longestLength = currentLength

     currentLength = 1
   }

  

   return longestLength
};