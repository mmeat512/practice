const manyLine = require('../common/manyLine');
function solution(input) {
  const str = [];

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    str.push(a + b);
  }

  return str.join('\n');
}

manyLine(solution);
