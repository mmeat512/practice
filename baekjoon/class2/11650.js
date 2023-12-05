const manyLine = require('../common/manyLine');

/**
 * 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 */

function solution(input) {
  const [length] = input;
  const stack = [];

  for (let i = 1; i <= length; i++) {
    stack.push(input[i].split(' ').map(Number));
  }

  return stack
    .sort((a, b) => {
      const [aFirst, aSecond] = a;
      const [bFirst, bSecond] = b;

      if (aFirst === bFirst) return aSecond - bSecond;

      return aFirst - bFirst;
    })
    .map(numbers => numbers.join(' '))
    .join('\n');
}

manyLine(solution);
