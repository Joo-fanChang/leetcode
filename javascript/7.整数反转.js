/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.16%)
 * Likes:    1415
 * Dislikes: 0
 * Total Accepted:    210.6K
 * Total Submissions: 634.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
  let s = x + '';
  if (isNegative) {
    s = s.slice(1);
  }
  const a = s.split('');
  for(let left = 0, right = a.length - 1; left < right; left++, right--) {
    [a[left], a[right]] = [a[right], a[left]];
  }
  s = a.join('');
  if (isNegative) {
    s = '-' + s;
  }
  s = Number.parseInt(s)
  if (s > Math.pow(2, 31) - 1 || s < -Math.pow(2, 31)) {
    return 0;
  }
  return s;
};
// @lc code=end

console.log(reverse(123));

