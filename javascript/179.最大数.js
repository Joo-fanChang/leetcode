/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (34.16%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    14.2K
 * Total Submissions: 41.3K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 *
 * 示例 1:
 *
 * 输入: [10,2]
 * 输出: 210
 *
 * 示例 2:
 *
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 *
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return nums
    .sort((prev, next) => {
      let case1 = Number.parseInt(`${prev}${next}`);
      let case2 = Number.parseInt(`${next}${prev}`);
      if (case1 > case2) {
        return -1;
      }
      return 1;
    })
    .reduce((prev, next) => prev + next, '')
    .replace(/^0+$/, '0');
};
// @lc code=end
