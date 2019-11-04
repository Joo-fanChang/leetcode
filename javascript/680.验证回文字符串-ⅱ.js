/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (33.58%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    8.4K
 * Total Submissions: 25K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 *
 * 示例 1:
 *
 *
 * 输入: "aba"
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 *
 *
 * 注意:
 *
 *
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let hasTry = false;

  function inner(leftStart, rightStart) {
    for(let left = leftStart, right = rightStart; left <= right; left++, right--) {
      let a = s[left];
      let b = s[right];
      if (a !== b) {
        return { left, right };
      }
    }
    return true;
  }

  const result = inner(0, s.length - 1);
  if (result === true) {
    return true;
  }
  const { left, right } = result;
  const result2 = inner(left + 1, right);
  if (result2 === true) {
    return true;
  }
  const result3 = inner(left, right - 1);
  if (result3 === true) {
    return true;
  }
  return false;
};
// @lc code=end



