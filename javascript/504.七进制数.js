/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 *
 * https://leetcode-cn.com/problems/base-7/description/
 *
 * algorithms
 * Easy (46.75%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    6.6K
 * Total Submissions: 14.1K
 * Testcase Example:  '100'
 *
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 *
 * 示例 1:
 *
 *
 * 输入: 100
 * 输出: "202"
 *
 *
 * 示例 2:
 *
 *
 * 输入: -7
 * 输出: "-10"
 *
 *
 * 注意: 输入范围是 [-1e7, 1e7] 。
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num < 7 && num > -6) {
    return `${num}`;
  }
  let negative = false;
  if (num < 0) {
    num = Math.abs(num);
    negative = true;
  }
  let stack = '';

  while(num >= 7) {
    const mol = num % 7;
    stack = mol + stack
    num = Math.floor(num / 7);
  }
  stack = num + stack;

  if (negative) {
    return '-' + stack;
  }
  return stack;
};
// @lc code=end

console.log(convertToBase7(100));


