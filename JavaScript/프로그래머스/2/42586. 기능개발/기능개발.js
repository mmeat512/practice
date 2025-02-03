function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;

  let currentMax = Math.ceil((100 - progresses[0]) / speeds[0]);
  let count = 1; 

  for (let i = 1; i < n; i++) {
    const days = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (days <= currentMax) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      currentMax = days;
    }
  }
  answer.push(count);

  return answer;
}