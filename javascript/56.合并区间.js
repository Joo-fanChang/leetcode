/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (38.92%)
 * Likes:    210
 * Dislikes: 0
 * Total Accepted:    36.3K
 * Total Submissions: 92.9K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 *
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2:
 *
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 */

// @lc code=start
function isOverlap(arr1, arr2) {
  let [arr1Left, arr1Right] = arr1;
  let [arr2Left, arr2Right] = arr2;

  if (arr2Right < arr1Left || arr2Left > arr1Right) {
    return false;
  }
  return true;
}

function mergeArr(arr1, arr2) {
  let [arr1Left, arr1Right] = arr1;
  let [arr2Left, arr2Right] = arr2;
  return [Math.min(arr1Left, arr2Left), Math.max(arr1Right, arr2Right)];
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });

  const ret = [intervals[0]];

  for(let i = 1; i < intervals.length; i++) {
    const prev = ret.pop();
    const current = intervals[i];

    if (isOverlap(prev, current)) {
      const merged = mergeArr(prev, current);
      ret.push(merged);
    } else {
      ret.push(prev, current);
    }
  }

  return ret;
};
// @lc code=end
