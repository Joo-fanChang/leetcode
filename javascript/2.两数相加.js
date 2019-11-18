/*
 * @lc app=leetcode.cn id=2 lang=javascript
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
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
   this.val = val;
   this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1current = l1;
  let l2current = l2;
  let l3head = new ListNode();
  let l3current = l3head;
  let bit = 0;

  function getDefault(node) {
    if (node) {
      return node;
    }
    return new ListNode(0);
  }

  while(l1current || l2current) {

    l1current = getDefault(l1current);
    l2current = getDefault(l2current);

    let bitSum = l1current.val + l2current.val + bit;

    if (bitSum > 9) {
      bit = 1;
      bitSum -= 10;
    } else {
      bit = 0;
    }

    let newNode = new ListNode(bitSum);
    l3current.next = newNode;
    l3current = l3current.next;
    l1current = l1current.next;
    l2current = l2current.next;
  }

  if (bit) {
    l3current.next = new ListNode(1);
  }

  return l3head.next;
};
// @lc code=end

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(val) {
  let addedNode = new ListNode(val);
  if (!this.head) {
    this.head = addedNode;
    return;
  }
  let current = this.head;
  while(current.next) {
    current = current.next;
  }
  current.next = addedNode;
}

let l1 = new LinkedList();
let l2 = new LinkedList();

[2, 4, 3].forEach(num => l1.add(num));
[5, 6, 4].forEach(num => l2.add(num));


const result = addTwoNumbers(l1.head, l2.head);
console.log(result);
