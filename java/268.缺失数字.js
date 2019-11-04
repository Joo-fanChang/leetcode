/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (52.88%)
 * Likes:    182
 * Dislikes: 0
 * Total Accepted:    36.5K
 * Total Submissions: 69K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 *
 * 示例 1:
 *
 * 输入: [3,0,1]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 *
 *
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 1. map
  // const map = {};
  // for(let i = 0; i < nums.length; i++) {
  //   map[nums[i]] = true;
  // }
  // for(let j = 0; j < nums.length + 1; j++) {
  //   if (!map[j]) {
  //     return j;
  //   }
  // }

  // 2.
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  const sum = nums.reduce((prev, next) => prev + next, 0);
  return expectedSum - sum;
};
// @lc code=end

