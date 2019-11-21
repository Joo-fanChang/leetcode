/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (35.90%)
 * Likes:    3306
 * Dislikes: 0
 * Total Accepted:    244.5K
 * Total Submissions: 680.5K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 *
 */

// @lc code=start
/* *
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class ListNode {
  int val;
  ListNode next;
  ListNode(int x) { val = x; }
}
class Solution {
  public static ListNode getDefault(ListNode l) {
    if (l == null) {
      ListNode noopNode = new ListNode(0);
      return noopNode;
    }
    return l;
  }

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int bit = 0;
    ListNode l = new ListNode(0);
    ListNode current = l;
    // ListNode tail = current;
    while(l1 != null || l2 != null) {
      l1 = getDefault(l1);
      l2 = getDefault(l2);
      int bitSum = l1.val + l2.val + bit;
      if (bitSum > 9) {
        bit = 1;
        bitSum -= 10;
      } else {
        bit = 0;
      }

      current.val = bitSum;
      current.next = new ListNode(0);
      current = current.next;
    }

    if (bit == 1) {
      current.val = 1;
    }

    return l;
  }
}
// @lc code=end
