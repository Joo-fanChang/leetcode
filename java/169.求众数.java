import java.util.HashMap;

/*
 * @lc app=leetcode.cn id=169 lang=java
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.29%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    73.6K
 * Total Submissions: 121.9K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 */

// @lc code=start
class Solution {
  public int majorityElement(int[] nums) {
    if (nums.length == 1) {
      return nums[0];
    }
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    int half = nums.length / 2;
    for(int i = 0; i < nums.length; i++) {
      int num = nums[i];
      if (map.get(num) == null) {
        map.put(num, 1);
      } else {
        int count = map.get(num);
        map.put(num, count + 1);
        if (count + 1 > half) {
          return num;
        }
      }
    }
    return 1;
  }
}
// @lc code=end
