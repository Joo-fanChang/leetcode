/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for(let i = 0; i < height.length - 1; i++) {
    let base = height[i];
    for(let j = i + 1; j < height.length; j++) {
      let current = height[j];
      let value = (j - i) * Math.min(base, current);
      if (value > max) {
        max = value
      }
    }
  }
  return max;
};

