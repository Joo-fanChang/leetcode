/*
 * @lc app=leetcode.cn id=859 lang=java
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (27.18%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 26.6K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false
 * 。
 *
 *
 *
 * 示例 1：
 *
 * 输入： A = "ab", B = "ba"
 * 输出： true
 *
 *
 * 示例 2：
 *
 * 输入： A = "ab", B = "ab"
 * 输出： false
 *
 *
 * 示例 3:
 *
 * 输入： A = "aa", B = "aa"
 * 输出： true
 *
 *
 * 示例 4：
 *
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 *
 *
 * 示例 5：
 *
 * 输入： A = "", B = "aa"
 * 输出： false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A 和 B 仅由小写字母构成。
 *
 *
 */

// @lc code=start
class Solution {
    public boolean buddyStrings(String A, String B) {
      if (A.length() != B.length()) {
        return false;
      }

      if (A.equals(B)) {
        for(int i = 0; i < A.length(); i++) {
          char s = A.charAt(i);
          if (A.lastIndexOf(s) != i) {
            return true;
          }
        }
        return false;
      }

      char a1 = 'a';
      char a2 = 'a';
      char b1 = 'a';
      char b2 = 'a';
      int x = 0;
      for(int i = 0; i < A.length(); i++) {
        if (A.charAt(i) != B.charAt(i)) {
          x++;

          if (x == 1) {
            a1 = A.charAt(i);
            b1 = B.charAt(i);
          } else if (x == 2) {
            a2 = A.charAt(i);
            b2 = B.charAt(i);
            if (a1 != b2 || a2 != b1) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
      return true;
    }
}
// @lc code=end

