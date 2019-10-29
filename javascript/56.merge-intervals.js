
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



