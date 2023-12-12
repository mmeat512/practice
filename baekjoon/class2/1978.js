const manyLine = require('../common/manyLine');

/**
 * 
 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오. 

 */
function solution(input) {
  const [length, sNumbers] = input;
  const numbers = sNumbers.split(' ');
  let count = 0;

  for (let i = 0; i < length; i++) {
    const number = numbers[i];
    let divideNumber = 0;

    for (let j = 1; j <= number; j++) {
      if (0 === number % j) divideNumber += 1;
    }

    if (2 === divideNumber) count += 1;
  }

  return count;
}

manyLine(solution);
