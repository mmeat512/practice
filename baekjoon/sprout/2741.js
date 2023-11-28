const oneLine = require('../common/oneLine');

function solution(a) {
  let i = 1;
  const str = [i];
  while (i < a) {
    i++;
    str.push('\n' + i);
  }
  return str.join('');
}

oneLine(solution);
