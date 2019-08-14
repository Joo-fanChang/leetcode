function createFib() {
  let cache = {};

  return function inner(N) {
    if (cache[N]) {
      return cache[N];
    }
    if (N === 0 || N === 1) {
      return N;
    }
    return cache[N] = inner(N - 1) + inner(N - 2);
  }
}

/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = createFib();

