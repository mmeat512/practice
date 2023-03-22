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

  /** 크기가 작은 부분문자열 */
  function solution6(t, p) {
    const pLength = p.length;
    const arr = [];
    for (let i = 0; i < t.length; i++) {
      const sliceStr = t.slice(i, i + pLength);
      /**
       * String * 1 => Number
       * +String => Number
       * */
      if (sliceStr.length === pLength && sliceStr * 1 <= p * 1)
        arr.push(sliceStr);
    }
    return arr.length;
  }

  /** 콜라 문제 */
  function solution7(a, b, n) {
    var answer = 0;
    let cola = n;
    while (cola >= a) {
      answer += Math.floor(cola / a) * b;
      if (cola % a === 0) cola = Math.floor(cola / a) * b;
      else cola = Math.floor(cola / a) * b + (cola % a);
    }
    return answer;
  }
  // result(solution7, 2, 1, 20);
  // result(solution7, 3, 1, 20);

  /** 푸드 파이트 대회 */
  function solution8(food) {
    let answer = '';
    let reverse = '';
    for (let i = 0; i < food.length; i++) {
      const num = Math.floor(food[i] / 2);
      if (num > 0) {
        for (let j = 0; j < num; j++) {
          answer += i;
        }
      }
    }
    for (let k = answer.length; k >= 0; k--) {
      reverse += answer.charAt(k);
    }
    /** 다른사람 풀이 참고
     *  String.repeat() 함수 이용
     * 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    return answer + '0' + reverse;
  }
  // result(solution8, [1, 3, 4, 6]);
  // result(solution8, [1, 7, 1, 2]);

  /** 2016년 */
  function solution9(a, b) {
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < a - 1; i++) {
      b += days[i];
    }
    return day[b % day.length === 0 ? 6 : (b % day.length) - 1];

    /** Date 객체 사용 */
    // const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // const date = new Date(`2016-${a}-${b}`);
    // return day[date.getDay()];
  }
  // result(solution9, 5, 24);

  /** 가장 가까운 같은 글자 */
  function solution10(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++) {
      const aheadStr = s.slice(0, i);
      if (-1 !== aheadStr.lastIndexOf(s.charAt(i))) {
        answer.push(aheadStr.length - aheadStr.lastIndexOf(s.charAt(i)));
      } else {
        answer.push(aheadStr.lastIndexOf(s.charAt(i)));
      }
    }
    return answer;
  }
  // result(solution10, 'banana');
  // result(solution10, 'foobar');

  /** 폰켓몬 */
  function solution11(nums) {
    const select = [];
    for (let i = 0; i < nums.length; i++) {
      if (select.length === nums.length / 2) break;
      if (!select.includes(nums[i])) select.push(nums[i]);
    }

    /**
     * 다른사람 풀이
     * const arr = [...new Set(nums)];
     * Set은 어떤 값이 콜렉션 내에서 유일합니다.
     */
    return select.length;
  }
  // result(solution11, [3, 1, 2, 3]);
  // result(solution11, [3, 3, 3, 2, 2, 4]);
  // result(solution11, [3, 3, 3, 2, 2, 2]);

  /** 모의고사 */
  function solution12(answers) {
    const wayList = [
      {
        index: 1,
        way: [1, 2, 3, 4, 5],
        correct: 0,
      },
      {
        index: 2,
        way: [2, 1, 2, 3, 2, 4, 2, 5],
        correct: 0,
      },
      {
        index: 3,
        way: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
        correct: 0,
      },
    ];
    for (let i = 0; i < wayList.length; i++) {
      const way = wayList[i].way;
      for (let j = 0; j < answers.length; j++) {
        /**
         * index를 만들어 index라 way.length랑 같을 시 0으로 초기화하도록 만들었음.
         *  => 결국엔 j%way.length와 동일함.
         */
        if (way[j % way.length] === answers[j]) wayList[i].correct++;
      }
    }

    const highScore = Math.max(...wayList.map((item) => item.correct));

    return wayList
      .filter((item) => highScore === item.correct && 0 !== item.correct)
      .map((item) => item.index)
      .sort((a, b) => a - b);
  }
  // result(solution12, [1, 2, 3, 4, 5]);
  // result(solution12, [1, 3, 2, 4, 2]);

  /** 소수 만들기 */
  function checkPrimeNumer(num) {
    let a = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) a++;
    }
    return a === 2;
  }
  function solution13(nums) {
    var answer = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (checkPrimeNumer(nums[i] + nums[j] + nums[k])) answer++;
        }
      }
    }
    return answer;
  }
  // result(solution13, [1, 2, 3, 4]);
  // result(solution13, [1, 2, 7, 6, 4]);

  /** 실패율 */
  function solution14(N, stages) {
    var answer = [];
    let stage = stages.length;
    for (let i = 1; i <= N; i++) {
      const fail = stages.filter((item) => item === i).length;
      answer.push({
        fail: fail / stage,
        index: i - 0,
      });
      stage = stage - fail;
    }

    return answer.sort((a, b) => b.fail - a.fail).map((item) => item.index);
  }
  // result(solution14, 5, [2, 1, 2, 6, 2, 4, 3, 3]);
  // result(solution14, 4, [4, 4, 4, 4, 4]);

  /** 명예의 전당 (1) */
  function solution15(k, score) {
    var answer = [];
    let bestScore = [];
    for (let i = 0; i < score.length; i++) {
      bestScore.push(score[i]);
      if (bestScore.length === k + 1) {
        bestScore.sort((a, b) => b - a);
        bestScore.pop();
      }
      answer.push(Math.min(...bestScore));
    }
    return answer;
  }
  // result(solution15, 3, [10, 100, 20, 150, 1, 100, 200]);
  // result(solution15, 4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);

  /** [1차] 다트게임 */
  function solution16(dartResult) {
    var answer = 0;
    const dartResultList = dartResult.split('');
    const bonus = ['S', 'D', 'T'];
    const option = ['*', '#'];
    // console.log(dartResultList);
    /**
     * Math.pow()사용
     * 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
     */
    let prevResult = [];
    for (let i = 0; i < dartResultList.length; i++) {
      const result = dartResultList[i];
      if (option.includes(result)) {
        if (result === '*') {
          for (let j = prevResult.length - 1; j >= prevResult.length - 2; j--) {
            prevResult[j] = prevResult[j] * 2;
          }
        } else {
          prevResult[prevResult.length - 1] =
            prevResult[prevResult.length - 1] * -1;
        }
      } else if (bonus.includes(result)) {
        const num = Math.pow(
          +prevResult.pop(),
          result === 'S' ? 1 : result === 'D' ? 2 : 3
        );
        prevResult.push(num);
      } else if (typeof +result === 'number') {
        prevResult.push(result);
      }
    }
    console.log(prevResult);
    return prevResult.reduce((acc, cur) => (acc = acc + cur));
  }
  result(solution16, '1S2D*3T');
  result(solution16, '1D2S#10S');
  result(solution16, '1D2S0T');
  result(solution16, '1S*2T*3S');
  result(solution16, '1D#2S*3S');
  result(solution16, '1T2D3D#');
  result(solution16, '1D2S3T*');
})();
