/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (36.24%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    7K
 * Total Submissions: 19.2K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 *
 * 两个相邻元素间的距离为 1 。
 *
 * 示例 1:
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 示例 2:
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 1 1
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 2 1
 *
 *
 * 注意:
 *
 *
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 *
 *
 */

// @lc code=start

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} num
 */
function Node(x, y, num) {
  this.x = x;
  this.y = y;
  this.num = num;
}

/**
 *
 * @param {Node} node1
 * @param {Node} node2
 */
function calcDistance(node1, node2) {
  return Math.abs(node1.x - node2.x) + Math.abs(node1.y - node2.y);
}

/**
 *
 * @param {Node} node
 * @param {number[][]} matrix
 */
function getAroundNode(node, matrix, rows, cols) {
  const { x, y } = node;
  let top = null;
  let bottom = null;
  let left = null;
  let right = null;

  if (x !== 0) {
    top = new Node(x - 1, y, matrix[x - 1][y]);
  }
  if (left !== 0) {
    left = new Node(x, y - 1, matrix[x][ y - 1]);
  }

  if (x !== rows - 1) {
    bottom = new Node(x + 1, y, matrix[x + 1][y]);
  }
  if (y !== cols - 1) {
    right = new Node(x, y + 1, matrix[x][y + 1]);
  }

  return [top, right, bottom, left].filter(x => x);
}

/**
 *
 * @param {Node} node
 * @param {number[][]} matrix
 */
function getDistance(node, matrix, rows, cols) {
  let queue = getAroundNode(node, matrix, rows, cols);

  while(queue.length) {
    const head = queue.shift();
    if (head.num === 0) {
      return calcDistance(head, node);
    } else {
      queue = queue.concat(getAroundNode(head, matrix, rows, cols));
    }
  }
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const rows = matrix.length;
  if (rows === 0) {
    return [];
  }
  const cols = matrix[0].length;
  if (cols === 0) {
    return [[]];
  }

  const result = Array(rows).fill(0).map(() => Array(cols).fill(0));

  for(let x = 0; x < rows; x++) {
    for(let y = 0; y < cols; y++) {
      const num = matrix[x][y];
      if (num === 0) {
        continue;
      }
      const currentNode = new Node(x, y, num);
      const distance = getDistance(currentNode, matrix, rows, cols);
      result[x][y] = distance;
    }
  }
  matrix = null;
  return result;
};
// @lc code=end

// console.log(updateMatrix([[0,0,0],[0,1,0],[1,2,1]]))
