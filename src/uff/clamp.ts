/**
 * Clamps `n` between `a` and `b` (inlcusive).
 */
export const clamp = (n: number, a: number, b: number) => {
  const low = Math.min(a, b);
  const high = Math.max(a, b);
  return Math.min(Math.max(n, low), high);
};