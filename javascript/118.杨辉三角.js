/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (64.42%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    44.6K
 * Total Submissions: 69K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const pascalsTriangle = Array(numRows);
  if (numRows === 0) {
    return pascalsTriangle;
  }

  let rowIdx = 0;
  while(rowIdx < numRows) {
    let row = Array(rowIdx + 1).fill(1); // 第几行就有多少个元素

    if (rowIdx >= 2) {
      const prevRow = pascalsTriangle[rowIdx - 1];
      for(let i = 1; i <= row.length - 2; i++) {
        row[i] = prevRow[i - 1] + prevRow[i];
      }
    }
    pascalsTriangle[rowIdx++] = row;
  }
  return pascalsTriangle;
};
// @lc code=end

generate(10)

