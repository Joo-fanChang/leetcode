/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let cache = {};

  function inner(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n === 1 || n === 2) {
      return n;
    }
    return cache[n] = inner(n - 1) + inner(n - 2);
  }

  return inner(n);
};
