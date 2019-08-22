/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mid = nums.length / 2;
    let gather = {};

    for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if (gather[num]) {
        gather[num]++;
      } else {
        gather[num] = 1;
      }

      if (gather[num] > mid) {
        return num;
      }
    }
};

