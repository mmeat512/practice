const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
 
function solution(str) {
  const num = Number(str[0]);
  let answer = 0;

  for (let i = 0; i < num; i++) {
    const s = str[i + 1];
    let bool = false;

    for (let j = 0; j < s.length; j++) {
      const w = s[j];
      const target = s.substring(j + 1);

      if (target.includes(w) && target.indexOf(w) !== 0) {
        bool = true;
        break;
      }
    }

    if (!bool) answer++;
  }

  return answer;
}

console.log(solution(input));