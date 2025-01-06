// 1. Mathematical formula: O(1) time, O(1) space
// Uses the arithmetic sequence formula: n * (n + 1) / 2
function sum_to_n_a(n: number): number {
  return (n * (n + 1)) / 2;
}

// 2. Iterative approach: O(n) time, O(1) space
// Simple loop accumulating sum
function sum_to_n_b(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 3. Recursive approach: O(n) time, O(n) space
// Demonstrates recursion but less efficient due to stack usage
function sum_to_n_c(n: number): number {
  if (n === 0) return 0;
  return n + sum_to_n_c(n - 1);
}
