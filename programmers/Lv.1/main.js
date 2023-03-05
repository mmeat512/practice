(() => {
  function log(val) {
    console.log(val);
  }
  function result(fnc, val) {
    log(fnc(val));
  }

  function solution1(number) {
    // 3개의 정수의 합이 0이 되는 경우의 수
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        for (let k = j + 1; k < number.length; k++) {
          if (number[i] + number[j] + number[k] === 0) {
            answer++;
            continue;
          }
        }
      }
    }
    return answer;
  }
  result(solution1, [-2, 3, 0, 2, -5]);
  result(solution1, [-3, -2, -1, 0, 1, 2, 3]);
  result(solution1, [-1, 1, -1, 1]);
  result(solution1, [-2, -2, -2, 2, 2, 2, 4]);
})();
