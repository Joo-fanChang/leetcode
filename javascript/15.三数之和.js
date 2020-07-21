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

function duplicateRemoval(nums) {
  const map = {};
  nums.forEach(arr => map[arr.join('')] = arr);
  return Array.from(Object.values(map));
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 解法一：排序O(nlogn) + 双指针O(n^2)
 */
var threeSum1 = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  const hasCalc = {};
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (hasCalc[nums[i]]) {
      continue;
    }
    hasCalc[nums[i]] = true;
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

  return duplicateRemoval(result);
};

var twoSum = function(n, target, i) {
  const nums = [...n];
  nums.splice(i, 1);
  const result = [];
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[target - num] !== undefined) {
      if (target > num * 2) {
        result.push([num, target - num])
      } else {
        result.push([target - num, num])
      }
    } else {
      map[num] = i;
    }
  }
  return result;
};

/**
 * 解法二：转化成2数之和 a + b + c = 0 转化为 a + b = -c
 * FIXME: 应该是超时了，倒数第3个case 数组长度 3000
 */

var threeSum2 = function(nums) {
  const cache = {};
  const result = [];
  for (var i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache[num]) {
      continue;
    }
    cache[num] = true;
    const target = -num;
    const trs = twoSum(nums, target, i);
    if (trs.length) {
      for (var j = 0; j < trs.length; j++) {
        const tr = trs[j];
        console.log(num, tr)
        if (num >= tr[1]) {
          tr.push(num)
        } else if (num <= tr[0] ) {
          tr.unshift(num);
        } else {
          tr.splice(1, 0, num);
        }
        result.push(tr)
      }
    }
  }

  return duplicateRemoval(result);;
}

/**
 * 解法三：将所有数转成3个map 一个正数 一个0 一个负数
 */

function counter(o, n) {
  if (o[n]) {
    o[n] += 1;
  } else {
    o[n] = 1;
  }
}

function oneOnOne(po, ne, zero, result) {
  if (!zero[0]) {
    return;
  }

  let short = po;
  let long = ne;
  if (Object.keys(po).length > Object.keys(ne)) {
    short = ne;
    long = po;
  }

  for (const key of Object.keys(short)) {
    if (long[-key]) {
      result.push([+key, 0, -key]);
    }
  }
}

function towOnOne(tow, one, result) {
  const towKeys = Object.keys(tow)
  for (let i = 0; i < towKeys.length; i++) {
    const key = towKeys[i];
    const count = tow[key];

    // 如果有两个就特殊处理一下
    if (count > 1) {
      const matchedKey = -2 * key;
      if (one[matchedKey]) {
        result.push([+key, +key, +matchedKey])
      }
    }


    // 从两个中选两个
    for (let j = i + 1; j < towKeys.length; j++) {
      const jKey = towKeys[j];
      const matchKey = -1 * (Number(key) + Number(jKey));
      if (one[matchKey]) {
        result.push([+key, +jKey, +matchKey]);
      }
    }
  }
}

var threeSum = function(nums) {
  const result = [];
  const positive = {};
  const negative = {};
  const zero = {};
  for (let i  = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      counter(zero, 0);
    } else if (num > 0) {
      counter(positive, num);
    } else {
      counter(negative, num);
    }
  }
  // console.log(positive, negative, zero);

  // 单独判断0
  if (zero[0] > 2) {
    result.push([0, 0, 0]);
  }

  oneOnOne(positive, negative, zero, result);

  // 取 两个负数 一个正数
  towOnOne(negative, positive, result);

  // 取两个正数一个负数
  towOnOne(positive, negative, result);
  // console.log(result);
  return result;
}


// @lc code=end
