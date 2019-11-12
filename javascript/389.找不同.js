/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (59.05%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 27K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 *
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *
 * 请找出在 t 中被添加的字母。
 *
 *
 *
 * 示例:
 *
 * 输入：
 * s = "abcd"
 * t = "abcde"
 *
 * 输出：
 * e
 *
 * 解释：
 * 'e' 是那个被添加的字母。
 *
 *
 */

// @lc code=start
function accumulation(str) {
  const o = {};
  for(let i = 0; i < str.length; i++) {
    if (o[str[i]]) {
      o[str[i]]++;
    } else {
      o[str[i]] = 1;
    }
  }
  return o;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const m1 = accumulation(s);
  const m2 = accumulation(t);
  for(const key of Object.keys(m2)) {
    if (m2[key] !== m1[key]) {
      return key;
    }
  }
};
// @lc code=end

