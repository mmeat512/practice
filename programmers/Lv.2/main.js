(() => {
  function log(val) {
    console.log(val);
  }
  function result(fnc, ...val) {
    log(fnc(...val));
  }

  /** 귤 고르기 */
  function solution1(k, tangerine) {
    var answer = 0;
    const obj = [];
    for (let i = 0; i < tangerine.length; i++) {
      const num = tangerine[i] - 1;
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }

    /**
     * Object 함수 사용 방법
     * Object.values(obj)
     */

    const map = obj.sort((a, b) => b - a);

    let cnt = 0;
    for (let i = 0; i < map.length; i++) {
      if (cnt >= k) break;
      map[i] >= k ? (cnt = k) : (cnt = cnt + map[i]);
      answer++;
    }
    return answer;
  }
  result(solution1, 6, [1, 3, 2, 5, 4, 5, 2, 3]);
  result(solution1, 4, [1, 3, 2, 5, 4, 5, 2, 3]);
  result(solution1, 2, [1, 1, 1, 1, 2, 2, 2, 3]);
})();
