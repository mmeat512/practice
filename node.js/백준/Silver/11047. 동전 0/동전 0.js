const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

/*
동전 N개, K원 
*/

function solution(str) {
  const problems = str.split('\n');
  const problem = problems.shift();
  const n = Number(problem.split(' ')[0]);
  let k = Number(problem.split(' ')[1]);
  const coins = problems.map(Number);
  let cnt = 0;

  for (let i = n - 1; i >= 0; i--) {
    const money = coins[i];
    if (k >= money) {
      cnt += Math.floor(k / money);
      k = k % money;
    }
  }
  return cnt;
}

console.log(solution(input));