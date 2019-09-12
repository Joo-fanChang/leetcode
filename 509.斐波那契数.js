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

const fib = createFib();

/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 */
// function fib(n, prev = 0, next = 1) {
//   if (n === 0) {
//     return prev;
//   }

//   if (n === 1) {
//     return next;
//   }

//   return fib(n - 1, next, prev + next);
// }
