/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.69%)
 * Likes:    1404
 * Dislikes: 0
 * Total Accepted:    100.4K
 * Total Submissions: 417.5K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// TODO: bug
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for(let i = 0; i < nums.length; i++) {
    // if (nums[i] >= 0) {
    //   break;
    // }
    let leftIdx = i + 1;
    let rightIdx = nums.length - 1;

    while(leftIdx < rightIdx) {
      const sum = nums[i] + nums[leftIdx] + nums[rightIdx];
      if (sum === 0) {
        result.push([nums[i], nums[leftIdx++], nums[rightIdx--]]);
      } else if (sum < 0) {
        leftIdx++;
      } else {
        rightIdx--;
      }
    }
  }

  const map ={};
  result.forEach(arr => map[arr.join('')] = arr);

  return Array.from(Object.values(map));
};
// @lc code=end
