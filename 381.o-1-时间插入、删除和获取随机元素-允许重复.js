/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.collection = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let res = !this.collection.includes(val);
  this.collection.push(val);
  return res;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  let idx = this.collection.indexOf(val);
  if (idx === -1) {
    return false;
  }
  return !!this.collection.splice(idx, 1);
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.collection[Math.ceil(Math.random() * this.collection.length - 1)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

