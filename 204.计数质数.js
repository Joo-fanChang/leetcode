/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) {
    return 0;
  }
  let arr = Array(n).fill(0).map((_, idx) => idx);
  arr[0] = arr[1] = null;

  for(let i = 2; i < n; i++) {
    for(let j = 2; i * j < n; j++) {
      arr[i * j] = null;
    }
  }

  arr = arr.filter(x => x);
  return arr.length;
};
// @lc code=end