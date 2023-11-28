const manyLine = require('../common/manyLine');

function solution(input) {
  const [a, b] = input.map(Number);

  if (a < 0 && b > 0) return 2;
  if (a > 0 && b > 0) return 1;
  if (a < 0 && b < 0) return 3;
  if (a > 0 && b < 0) return 4;
}

manyLine(solution);
