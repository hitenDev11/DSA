
var RandomizedSet = function() {
    this.arr = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }else {
        this.map.set(val,this.arr.length)
        this.arr.push(val)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
       let index = this.map.get(val)
       this.arr[index] = this.arr[this.arr.length - 1]
       this.map.set(this.arr[this.arr.length - 1],index)
       this.arr.pop()
       this.map.delete(val)

        return true
    }else return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.arr.length)
    let number = this.arr[randomIndex]

    return number
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */