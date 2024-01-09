const oneLine = require('../common/oneLine');

function solution(input) {
  const [start, end] = input.split(' ').map(Number);
  const visit = Array(100001).fill(false);
  let queue = [[start, 0]];
  visit[start] = true;

  while (queue.length > 0) {
    const [number, time] = queue.shift();

    if (number === end) return time;

    for (next of [number + 1, number - 1, number * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[number] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}
oneLine(solution);
