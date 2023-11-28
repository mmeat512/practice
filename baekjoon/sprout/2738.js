const manyLine = require('../common/manyLine');

function solution(input) {
  const [rowOfRows] = input;
  const [row, column] = rowOfRows.split(' ').map(Number);
  const firstRow = [];
  const secondRow = [];
  const str = [];

  for (let i = 1; i < input.length; i++) {
    const sell = input[i].split(' ').map(Number);
    if (i <= row) firstRow.push(sell);
    if (i > row) secondRow.push(sell);
  }

  for (let i = 0; i < row; i++) {
    let s = [];
    for (let j = 0; j < column; j++) {
      s.push(firstRow[i][j] + secondRow[i][j]);
    }
    str.push(s.join(' '));
  }

  return str.join('\n');
}

manyLine(solution);
