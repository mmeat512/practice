const oneLine = require('../common/oneLine');

/**
 *
 * BFS
 *
 * @param {*} input
 */
function solution(input) {
  const [start, end] = input.split(' ').map(Number);
  let queue = [start];
  let time = 0;

  //   while (!queue.includes(end)) {
  //     time += 1;
  //     const arr = [];
  //     const length = queue.length;

  //     for (let i = 0; i < length; i++) {
  //       const num = queue.shift();
  //       arr.push(num - 1, num + 1, num * 2);
  //     }

  //     queue = queue.concat(arr);
  //   }

  const visit = [];
  const lastNumber = 100000;

  while (!visit[end]) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const num = queue.shift();

      const back = num - 1;
      const go = num + 1;
      const jump = num * 2;

      if (!visit[back] && back >= 0 && back <= lastNumber) {
        visit[back] = true;
        queue.push(back);
      }

      if (!visit[go] && go >= 0 && go <= lastNumber) {
        visit[go] = true;
        queue.push(go);
      }

      if (!visit[jump] && jump >= 0 && jump <= lastNumber) {
        visit[jump] = true;
        queue.push(jump);
      }
    }
    time += 1;
  }

  return time;
}

oneLine(solution);
