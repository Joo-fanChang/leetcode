/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (67.72%)
 * Likes:    106
 * Dislikes: 0
 * Total Accepted:    23K
 * Total Submissions: 33.9K
 * Testcase Example:  '[3,1,2,4]'
 *
 * 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 * 
 * 你可以返回满足此条件的任何数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[3,1,2,4]
 * 输出：[2,4,3,1]
 * 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  if (A.length <= 1) {
    return A;
  }
  let leftIdx = 0;
  let rightIdx = A.length - 1;
  while(leftIdx < rightIdx) {
    
    while(leftIdx < rightIdx && A[leftIdx] % 2 === 0) {
      leftIdx++;
    }
    while(leftIdx < rightIdx && A[rightIdx] % 2 !== 0) {
      rightIdx--;
    }
    if (leftIdx < rightIdx) {
      let temp = A[leftIdx];
      A[leftIdx] = A[rightIdx];
      A[rightIdx] = temp;
      temp = null;
      // [A[leftIdx], A[rightIdx]] = [A[rightIdx], A[leftIdx]];
    }
  }
  return A;
};
// @lc code=end
