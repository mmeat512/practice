const manyLine = require('../common/manyLine');

function solution(input) {
  const [length] = input;
  const str = [];

  for (let i = 1; i <= length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    str.push(a + b);
  }

  return str.join('\n');
}

manyLine(solution);
