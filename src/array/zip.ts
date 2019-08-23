export const zipWith = <X, Y, U, V>(
  f: (x: X, y: Y) => [U, V],
  xs: X[],
  ys: Y[]
): Array<[U, V]> =>
  xs.length <= ys.length
    ? xs.map((x, i) => f(x, ys[i]))
    : ys.map((y, i) => f(xs[i], y));

export const zip = <X, Y>(xs: X[], ys: Y[]): Array<[X, Y]> =>
  zipWith((x, y) => [x, y], xs, ys);
