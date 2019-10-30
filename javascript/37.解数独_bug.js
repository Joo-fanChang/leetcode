/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (57.49%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    12.5K
 * Total Submissions: 21.8K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 *
 * 一个数独的解法需遵循如下规则：
 *
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 *
 * 空白格用 '.' 表示。
 *
 *
 *
 * 一个数独。
 *
 *
 *
 * 答案被标成红色。
 *
 * Note:
 *
 *
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 *
 *
 */

// @lc code=start
const board_text = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const NUMS = Array(9)
  .fill(0)
  .map((_, i) => `${i + 1}`);

function Grid(num, x, y, isFirstBlank) {
  this.x = x;
  this.y = y;
  this.num = num === '.' ? null : num;
  this.initNum = num !== '.';
  this.belongToPalace = this.getPalaceKey(x, y);
  this.availableNums = [];
  // 是否为第一个空
  this.isFirstBlank = isFirstBlank;
}

Grid.prototype.getPalaceKey = function(x, y) {
  const palaceKey = Math.floor(x / 3) * 3 + Math.floor(y / 3) + 1;
  return palaceKey;
};

Grid.prototype.fill = function(num) {
  this.num = num;
};

/**
 *
 * @param {character[][]} board
 */
function Game(board) {
  this.board = board;
  this.grids = null;
  this.init();
  this.fillBoard();
  this.fullBoard = this.getFullBoard();
}

Game.prototype.init = function() {
  this.grids = this.board.map((row, i) => {
    let isFirstBlank = true;
    return row.map((grid, j) => {
      if (isFirstBlank && Number.isNaN(+grid)) {
        isFirstBlank = false;
        return new Grid(grid, i, j, true);
      }
      return new Grid(grid, i, j, false);
    });
  });
};

Game.prototype.fillBoard = function(startX = 0, startY = 0) {
  for (let i = startX; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i === startX && j < startY) {
        continue;
      }
      if (i == 1 && j == 1) {
        debugger
      }
      let grid = this.grids[i][j];
      if (!grid.initNum) {
        const availableNums = this.getAvailableNums(grid);
        if (availableNums.length) {
          grid.availableNums = availableNums;
          grid.fill(availableNums.shift());
        } else {
          // 回溯
          return this.flashBack(grid);
        }
      }
    }
  }
};

/**
 * @param {Grid} grid
 */
Game.prototype.flashBack = function(grid) {
  const { y } = grid;
  if (grid.isFirstBlank || y === 0) {
    // y === 0的情况为按grid回溯时到头
    this.flashBackByRow(grid);
  } else {
    this.flashBackByGrid(grid);
  }
};

/**
 * @param {Grid} grid
 */
Game.prototype.flashBackByGrid = function(grid) {
  const { x, y, availableNums } = grid;

  const prevGrid = this.grids[x][y - 1];
  if (prevGrid.initNum) {
    this.flashBack(prevGrid);
  } else {
    if (prevGrid.availableNums.length) {
      prevGrid.fill(prevGrid.availableNums.shift());
      this.fillBoard(x, y);
    } else {
      prevGrid.num = null;
      prevGrid.availableNums = [];
      this.flashBack(prevGrid);
    }
  }
};

/**
 * @param {Grid} grid
 */
Game.prototype.flashBackByRow = function(grid) {
  const { x, y, availableNums } = grid;

  // x不可能为0
  const prevRow = this.grids[x - 1];
  if (!prevRow) {
    return;
    debugger
  }
  // 找到上一行第一个空
  const prevRowFirstBlank = prevRow.find(grid => grid.isFirstBlank);

  if (!prevRowFirstBlank) {
    // 极端情况，该行全被初始化,继续向上滚
    this.flashBack(prevRow[0]);
  } else {
    if (!prevRowFirstBlank.availableNums.length) {
      // 无可用数字，继续向上滚
      this.flashBack(prevRow[0]);
    } else {
      prevRowFirstBlank.fill(prevRowFirstBlank.availableNums.shift());
      // 清空后面的值
      for (let i = prevRowFirstBlank.y + 1; i < 9; i++) {
        if (!prevRow[i].initNum) {
          prevRow[i].num = null;
        }
      }
      this.fillBoard(prevRowFirstBlank.x, prevRowFirstBlank.y + 1);
    }
  }
};

Game.prototype.getFullBoard = function() {
  return this.grids.map(row => row.map(grid => grid.num));
};

/**
 * @param {Grid} grid
 */
Game.prototype.getAvailableNums = function({
  x: targetRowIdx,
  y: targetColIdx,
  belongToPalace: targetBelongToPalaca
}) {
  const occupiedRowNums = [];
  const occupiedColNums = [];
  const occupiedPalaceNums = [];
  this.grids.forEach(row => {
    row.forEach(grid => {
      const { x: rowIdx, y: colIdx, belongToPalace } = grid;
      if (!(rowIdx === targetRowIdx && colIdx === targetColIdx)) {
        if (grid['num']) {
          if (rowIdx === targetRowIdx) {
            occupiedRowNums.push(grid['num']);
          }
          if (colIdx === targetColIdx) {
            occupiedColNums.push(grid['num']);
          }
          if (belongToPalace === targetBelongToPalaca) {
            occupiedPalaceNums.push(grid['num']);
          }
        }
      }
    });
  });

  const occupiedNums = new Set([
    ...occupiedRowNums,
    ...occupiedColNums,
    ...occupiedPalaceNums
  ]);
  const allNums = new Set(NUMS);
  const availabelNums = [
    ...new Set([...allNums].filter(x => !occupiedNums.has(x)))
  ];

  for(let i = 0; i < availabelNums.length; i++) {
    let r = Math.ceil(Math.random() * availabelNums.length);
    [availabelNums[i], availabelNums[r]] = [availabelNums[r], availabelNums[i]];
  }

  return availabelNums;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let game = new Game(board_text);
  console.log(game.grids);
  console.log(game.fullBoard);
  return game.fullBoard;
};
// @lc code=end
