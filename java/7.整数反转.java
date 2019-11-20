/*
 * @lc app=leetcode.cn id=7 lang=java
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.16%)
 * Likes:    1415
 * Dislikes: 0
 * Total Accepted:    210.6K
 * Total Submissions: 634.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        boolean isNegative = x < 0;
        String s = x + "";
        if (isNegative == true) {
            s = s.substring(1);
        }
        char[] arr = new char[s.length()];
        for(int left = 0, right = s.length() - 1; left <= right; left++, right--) {
            arr[left] = s.charAt(right);
            arr[right] = s.charAt(left);
        }
        String reverseS = new String(arr);

        if (isNegative == true) {
            reverseS = "-" + reverseS;
        }
        long longX = Long.parseLong(reverseS);

        if (longX > Integer.MAX_VALUE || longX < Integer.MIN_VALUE) {
            return 0;
        }
        int reverseX = Integer.parseInt(reverseS);
        return reverseX;
    }
}
// @lc code=end

