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
    let binaryMap = new Array(n).fill(0).map(() => new Array(n).fill(' '));
    /* jsbsdvtipy 이중배열 생성 시 다음과 같이 생성하면 같은 객체를 참조하기 때문에 이와 같은 방법으로 생성하면 안된다. */
    // const binaryMap = new Array(n).fill(new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
      let binary1 = arr1[i].toString(2);
      let binary2 = arr2[i].toString(2);
      for (let j = n - 1; j >= 0; j--) {
        if (binary1.charAt(j - (n - binary1.length)) === '1') {
          binaryMap[i][j] = '#';
        }
        if (binary2.charAt(j - (n - binary2.length)) === '1') {
          binaryMap[i][j] = '#';
        }
      }
    }

    return binaryMap.map((item) => item.join(''));
  }

  /** 과일장수 */
  function solution3(k, m, score) {
    var answer = 0;
    let boxIndex = 0;
    /* 
    1. score 오름차순 
    2. m개씩 자르기
    3. p원으로 계산 
    4. 이익 구하기 
    */

    score.sort((a, b) => b - a);
    /** 시간초과로 통과하지 못한 풀이 : splice 함수를 사용하여 나타난 현상 
      while (true) {
        if (score.length < m) break;
        const appleBox = score.splice(0, m);
        answer += Math.min(...appleBox) * m;
      }
    */

    while (boxIndex <= score.length) {
      /* slice 에서 두번째 인자가 array.length 보다 클 경우 배열 끝까지 추출한다. */
      /* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */
      const appleBox = score.slice(boxIndex, boxIndex + m);
      if (appleBox.length === m) {
        answer += Math.min(...appleBox) * m;
      }
      boxIndex += m;
    }

    return answer;
  }

  /** k번째수 */
  function solution4(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
      const newArray = array
        .slice(commands[i][0] - 1, commands[i][1])
        .sort((a, b) => a - b);
      answer.push(newArray[commands[i][2] - 1]);
    }
    return answer;
  }

  /** 두 개 뽑아서 더하기 */
  function solution5(numbers) {
    var answer = [];
    numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        const sumNumber = numbers[i] + numbers[j];
        if (!answer.includes(sumNumber)) answer.push(sumNumber);
      }
    }

    /** 정답 풀이 다른사람 코드 참고
     * Set 이란 ?
     * Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 하나의 Set 내 값은 한 번만 나타날 수 있습니다. 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.
     * 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
     *
     * const answer = [...new Set(temp)]
     */
    return answer.sort((a, b) => a - b);
  }
})();
