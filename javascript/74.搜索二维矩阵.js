/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (35.96%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    19.9K
 * Total Submissions: 55.1K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 *
 *
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 *
 *
 * 示例 1:
 *
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx <= rightIdx) {
    let mid = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[mid];
    if (midVal === target) {
      return true;
    } else if (midVal > target) {
      rightIdx = mid - 1;
    } else {
      leftIdx = mid + 1;
    }
  }
  return false;
}

function findRowIdx(matrix, target, colNums) {
  let top = 0;
  let bottom = matrix.length - 1;
  // 这里的头都都不可能相等
  while(top <= bottom) {
    let mid = Math.floor((top + bottom) / 2);
    let firstNum = matrix[mid][0];
    let lastNum = matrix[mid][colNums - 1];
    if (firstNum === target || lastNum === target) {
      return true;
    }

    if (firstNum > target) {
      bottom = mid - 1;
    } else {
      if (target < lastNum) {
        return mid;
      }
      top = mid + 1;
    }
  }
  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) {
    return false;
  }
  if (!matrix[0].length) {
    return false;
  }
  const rowNums = matrix.length;
  const colNums = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[rowNums - 1][colNums - 1]) {
    return false;
  }

  const targetRowIdx = findRowIdx(matrix, target, colNums);
  if (typeof targetRowIdx === 'boolean') {
    return targetRowIdx;
  }
  return binarySearch(matrix[targetRowIdx], target);

  return false;
};
// @lc code=end

