/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (67.57%)
 * Likes:    266
 * Dislikes: 0
 * Total Accepted:    37.3K
 * Total Submissions: 55.1K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// TODO: bug
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null;
  }
  const rootVal = nums.splice(Math.floor(nums.length / 2), 1)[0];
  const root = new TreeNode(rootVal);

  nums.forEach(num => {
    appendNode(root, num);
  })
  return root;
};

function appendNode(root, val) {
  let current = root;
  while(current) {
    if (val < current.val) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = new TreeNode(val);
        return;
      }
    } else if (val > current.val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new TreeNode(val);
        return;
      }
    }
  }
}
// @lc code=end

sortedArrayToBST([-10,-3,0,5,9])
