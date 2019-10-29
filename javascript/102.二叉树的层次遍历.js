/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (58.29%)
 * Likes:    286
 * Dislikes: 0
 * Total Accepted:    47.5K
 * Total Submissions: 80.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) { return [] }
  let queue = [root];
  let result = [];
  while(queue.length) {
    let arr = [];
    let temp = [];

    while(queue.length) {
      let current = queue.shift();
      arr.push(current.val);
      if (current.left) {
        temp.push(current.left);
      }
      if (current.right) {
        temp.push(current.right);
      }
    }

    result.push(arr);
    queue = temp;
  }
  return result;
};
// @lc code=end

