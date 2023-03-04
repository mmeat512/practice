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
      // 0 1
      for (let j = i + 1; j < number.length; j++) {
        // 1 2 3 4
        for (let k = j + 1; k < number.length; k++) {
          if (k === number.length) break;
          // 2 3 4 5
          if (number[i] + number[j] + number[k] === 0) {
            // [-2, 3, 0, 2, -5]
            // (0, 1, 2) (0, 1, 3) (0, 1, 4)
            // (0, 2, 3) (0, 2, 4)
            // (0, 3, 4)
            // (1, 2, 3) (1, 2, 4)
            // (1, 3, 4)
            // (3, 4, 5)
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
