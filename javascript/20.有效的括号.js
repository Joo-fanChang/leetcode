/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.88%)
 * Likes:    1145
 * Dislikes: 0
 * Total Accepted:    145K
 * Total Submissions: 363.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let o = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c == '(' || c == '[' || c == '{') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let prev = stack.pop();
      if (o[c] !== prev) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// @lc code=end

isValid('{[]}')
