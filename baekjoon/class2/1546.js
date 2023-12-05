const manyLine = require('../common/manyLine');

/**
 * 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
 */
function solution(input) {
  const [length, grades] = input;
  const numbers = grades.split(' ').map(Number);
  const M = Math.max(...numbers);
  const fakeGrades = [];

  for (let i = 0; i < length; i++) {
    fakeGrades.push((numbers[i] / M) * 100);
  }

  const sum = fakeGrades.reduce((acc, number) => acc + number);

  return sum / length;
}

manyLine(solution);
