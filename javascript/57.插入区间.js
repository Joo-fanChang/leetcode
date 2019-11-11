/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (35.75%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    10.8K
 * Total Submissions: 30.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1:
 *
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 *
 *
 * 示例 2:
 *
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
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

/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  let baseIdx = 0;

  while(baseIdx < intervals.length) {
    let base = intervals[baseIdx];
    let anyOverlap = false;
    for(let i = 0; i < intervals.length; i++) {
      if (i !== baseIdx) {
        let current = intervals[i];
        if (isOverlap(base, current)) {
          anyOverlap = true;
          base = intervals[baseIdx] = mergeArr(current, base);
          intervals.splice(i, 1);
          i--;
          continue;
        }
      }
    }

    if (!anyOverlap) {
      baseIdx++;
    }
  }

  return intervals;
};
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  return merge([...intervals, newInterval]).sort((prev, next) => prev[0] - next[0])
};
// @lc code=end

