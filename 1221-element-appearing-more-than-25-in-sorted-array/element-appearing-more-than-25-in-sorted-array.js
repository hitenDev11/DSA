/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let map = new Map()
    let percentage = arr.length * (25/100)

    for(let i =0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else map.set(arr[i],1)
    }

    for(let [key,value] of map){
        if(value > percentage) return key
    }
};