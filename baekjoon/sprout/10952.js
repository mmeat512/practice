const manyLine = require('../common/manyLine');

function solution(input) {
  const str = [];

  for (let i = 0; i < input.length - 1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    str.push(a + b);
  }

  return str.join('\n');
}

manyLine(solution);
