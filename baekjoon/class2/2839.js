/**
 * 
 
N킬로그램
3킬로그램 봉지와 5킬로그램 봉지
최대한 적은 봉지

예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

 */

/** POINT: 나누지말고 빼라! */

const oneLine = require('../common/oneLine');

function solution(input) {
  let kilogram = Number(input);
  let count = 0;

  do {
    if (kilogram % 5 === 0) {
      count = count + parseInt(kilogram / 5);
      kilogram = kilogram % 5;
      break;
    }

    kilogram = kilogram - 3;
    count = count + 1;
  } while (kilogram > 1);

  return kilogram !== 0 ? -1 : count;
}

const dp = [];

// return 5000 이면 -1 출력.
function solutionDp(input) {
  const number = Number(input);

  if (number === 3 || number === 5) {
    dp[number] = 1;
  }

  if (dp[number] === undefined) dp[number] = 5000;

  if (number > 5) {
    dp[number] = Math.min(
      solutionDp(number - 3) + 1,
      solutionDp(number - 5) + 1,
    );
  }

  return dp[number];
}

oneLine(solution);
