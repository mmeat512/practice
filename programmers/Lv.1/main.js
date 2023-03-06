(() => {
  function log(val) {
    console.log(val);
  }
  function result(fnc, ...val) {
    log(fnc(...val));
  }
  /** 삼총사 */
  function solution1(number) {
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
  /** [1차] 비밀지도 */
  function solution2(n, arr1, arr2) {
    var answer = [];
    let binaryMap = [[], []];
    for (let i = 0; i < n; i++) {
      let binary1 = arr1[i].toString(2);
      let binary2 = arr2[i].toString(2);
      if (binary1.length < n) {
        for (let j = 0; j < n - binary1.length; j++) {
          binary1 = '0' + binary1;
        }
      }
      if (binary2.length < n) {
        for (let j = 0; j < n - binary2.length; j++) {
          binary2 = '0' + binary2;
        }
      }
      binaryMap[0].push(binary1);
      binaryMap[1].push(binary2);
    }
    console.log(binaryMap);
    return answer;
  }
  result(solution2, 5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
  result(solution2, 6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
})();
