package java;

/*
 * @lc app=leetcode.cn id=74 lang=java
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
class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {

    int top = 0;
    int bottom = matrix.length - 1;

    while(top <= bottom) {
        int midIdx = (int)Math.floor((top + bottom) / 2);
        int[] midArr = matrix[midIdx];

        if (midArr.length == 0) {
          return false;
        }

        if (midArr[0] == target) { // 在数组的第1项找到，不需要再进行查找
            return true;
        } else if(midArr[0] > target) {
            bottom = midIdx - 1;
        } else {
            if (midIdx == matrix.length - 1) {
                return binarySearch(midArr, target) != -1;
            } else if (matrix[midIdx + 1][0] > target) {
                return binarySearch(midArr, target) != -1;
            } else {
                top = midIdx + 1;
            }
        }
    }

    return false;
  }

  public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
      int midIdx = (int) Math.floor((left + right) / 2);
      if (arr[midIdx] == target) {
        return midIdx;
      } else if (arr[midIdx] > target) {
        right = midIdx - 1;
      } else if (arr[midIdx] < target) {
        left = midIdx + 1;
      }
    }

    return -1;
  }
}
// @lc code=end
