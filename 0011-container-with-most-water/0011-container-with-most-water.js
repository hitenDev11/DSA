/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
 let i =0
 let j = height.length - 1
 let maxWater = 0

 while(i<j){
    let total = Math.min(height[i],height[j]) * (j-i)

    if(total > maxWater) maxWater = total

    if(height[i] <height[j]){
        i++
    }else if(height[j] < height[i]){
        j--
    }else i++
 }

 return maxWater
};