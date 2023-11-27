const fs = require('fs');
let input = fs.readFileSync('./question.txt').toString();

// {
const num = Number(input);
const dp = Array.of(num + 1);
dp[0] = dp[1] = 0;

/*
  정수 X 를 1로 만드는 방법.
  1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
  2. X가 2로 나누어 떨어지면, 2로 나눈다.
  3. 1을 뺀다. 

  최솟값을 구하여라.
*/

function solution(num) {
  /**
   * 문제 풀이
   */
  // count 이기 때문에 +1 해주기!
  if (dp[num] === undefined) {
    if (num % 6 === 0) {
      dp[num] =
        Math.min(
          Math.min(solution(num / 2), solution(num / 3)),
          solution(num - 1)
        ) + 1;
    } else if (num % 3 === 0) {
      dp[num] = Math.min(solution(num / 3), solution(num - 1)) + 1;
    } else if (num % 2 === 0) {
      dp[num] = Math.min(solution(num / 2), solution(num - 1)) + 1;
    } else {
      dp[num] = solution(num - 1) + 1;
    }
  }
  return dp[num];
}

console.log(solution(num));
// }
