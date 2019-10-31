/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (47.99%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 33.3K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *
 * 注意：
 *
 *
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  if (num1 === '0') {
    return num2;
  }
  if (num2 === '0') {
    return num1;
  }

  let idx1 = num1.length - 1;
  let idx2 = num2.length - 1;
  let result = [];
  let carryBit = 0;

  while(idx1 >= 0 || idx2 >= 0) {
    const n1 = idx1 < 0 ? 0 : +num1[idx1];
    const n2 = idx2 < 0 ? 0 : +num2[idx2];

    const bitSum = n1 + n2 + carryBit;
    carryBit = 0;

    if (bitSum > 9) {
      result.unshift(bitSum - 10);
      carryBit = 1;
    } else {
      result.unshift(bitSum);
    }

    idx1--;
    idx2--;
  }

  if (carryBit === 1) {
    result.unshift(1);
  }

  return result.join('');
};
// @lc code=end



