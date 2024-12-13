const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

/*
fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
*/

function solution(str) {
  const problem = str.split('\n');
  const length = Number(problem.shift());
  const result = [];
  const arr = [];
  arr[0] = [1, 0];
  arr[1] = [0, 1];

  for (let i = 0; i < length; i++) {
    const n = problem[i];
    fibonacci(n, arr);
    result.push(arr[n].join(' '));
  }
  return result.join('\n');
}

console.log(solution(input));

function fibonacci(n, arr) {
   if (n == 0) {
     return arr[0];
   } 
   if (n == 1) {
     return arr[1];
   }
   if (arr[n] === undefined) {
    arr[n] = [
      fibonacci(n - 1, arr)[0] + fibonacci(n - 2, arr)[0],
      fibonacci(n - 1, arr)[1] + fibonacci(n - 2, arr)[1],
    ];
  }

  return arr[n];
}
