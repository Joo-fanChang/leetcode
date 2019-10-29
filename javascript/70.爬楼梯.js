function createFib() {
  let cache = {};

  return function inner(N) {
    if (cache[N]) {
      return cache[N];
    }
    if (N === 1 || N === 2) {
      return N;
    }
    return cache[N] = inner(N - 1) + inner(N - 2);
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = createFib();
