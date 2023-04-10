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
    const dartResultList = dartResult.split('');
    const bonus = ['S', 'D', 'T'];
    const option = ['*', '#'];
    // console.log(dartResultList);
    /**
     * Math.pow()사용
     * 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
     *
     * 정규식 표현 참고
     * let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
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
        let n2 = +dartResultList[i - 1];
        if (+dartResultList[i - 2]) n2 = +dartResultList[i - 2] * 10 + n2;
        const num = Math.pow(n2, result === 'S' ? 1 : result === 'D' ? 2 : 3);
        prevResult.push(num);
      }
    }

    return prevResult.reduce((acc, cur) => (acc = acc + cur));
  }
  // result(solution16, '1S2D*3T');
  // result(solution16, '1D2S#10S');
  // result(solution16, '1D2S0T');
  // result(solution16, '1S*2T*3S');
  // result(solution16, '1D#2S*3S');
  // result(solution16, '1T2D3D#');
  // result(solution16, '1D2S3T*');

  /** 로또의 최고 순위와 최저 순위 */
  function solution17(lottos, win_nums) {
    let result = new Array(6).fill(false);
    for (let i = 0; i < lottos.length; i++) {
      if (win_nums.includes(lottos[i])) result[i] = true;
    }
    const length = result.filter((item) => item).length;
    const zeroLength = lottos.filter((item) => item === 0).length;
    const ranking = (length) => {
      switch (length) {
        case 6:
          return 1;
        case 5:
          return 2;
        case 4:
          return 3;
        case 3:
          return 4;
        case 2:
          return 5;
        default:
          return 6;
      }
    };
    return [ranking(length + zeroLength), ranking(length)];
    /**
     * 다른 사람 풀이 참고
     * 랭크 배열 : const rank = [6, 6, 5, 4, 3, 2, 1]; => 해당 배열을 나는 스위치 케이스 문으로 작성
     * let zeroCount = lottos.filter(v => !v).length; => 0일 경우를 !v (0은 false이기 때문에)로 작성하여 코드를 깔끔하게 작성
     * let minCount = lottos.filter(v => win_nums.includes(v)).length; => for문을 이용하여 result 배열을 만들었던 부분을 filter로 깔끔하게 사용
     *
     */
  }
  // result(solution17, [44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
  // result(solution17, [0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
  // result(solution17, [45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);

  /** 기사단원의 무기 */
  function solution18(number, limit, power) {
    var answer = 0;
    for (let i = 1; i <= number; i++) {
      let cnt = 0;
      /**
       * 약수 구하기 알고리즘 최적화
       * number의 약수가 1일 때 다른 약수는 number / 1이 되므로 다른 하나의 약수는 number가 된다.
       * 하나의 약수를 알면 다른 하나의 존재가 보장이 된다.
       */
      for (let j = 1; j * j <= i; j++) {
        if (j * j === i) cnt++;
        else if (i % j === 0) cnt += 2;
      }
      if (cnt > limit) cnt = power;
      answer += cnt;
    }
    return answer;
  }
  // result(solution18, 5, 3, 2);
  // result(solution18, 10, 3, 2);

  /** 덧칠하기 */
  function solution19(n, m, section) {
    var answer = 0;

    let paintNum = section[0];
    for (let i = 0; i < section.length; i++) {
      if (section[i] < paintNum) continue;
      if (paintNum > n) break;
      paintNum = section[i] + m;
      answer++;
    }
    return answer;

    /** 다른사람 풀이
     * var painted = 0;
     * for (var section of sections) {
     *  if (painted < section) {
     *    answer++;
     *    painted = section + m - 1;
     *  }
     * }
     */
  }
  // result(solution19, 8, 4, [2, 3, 6]);
  // result(solution19, 5, 4, [1, 3]);
  // result(solution19, 4, 1, [1, 2, 3, 4]);
  // result(solution19, 18, 4, [1, 2, 4, 16]);
  // result(solution19, 18, 4, [1, 2, 4, 12, 14, 16]);
  // result(solution19, 18, 18, [1, 2, 4, 16]);

  /** 카드 뭉치 */
  function solution20(cards1, cards2, goal) {
    var answer = 'Yes';
    let cardsOneIndex = 0;
    let cardsTwoIndex = 0;
    for (let i = 0; i < goal.length; i++) {
      if (goal[i] === cards1[cardsOneIndex]) cardsOneIndex++;
      else if (goal[i] === cards2[cardsTwoIndex]) cardsTwoIndex++;
      else answer = 'No';
    }
    /** shift() 사용해도 느리지 않음!
     * shift() 란?
     * 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다. 이때, 배열의 원본이 변경된다.
     * 참고자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     */
    return answer;
  }
  // result(
  //   solution20,
  //   ['i', 'drink', 'water'],
  //   ['want', 'to'],
  //   ['i', 'want', 'to', 'drink', 'water']
  // );
  // result(
  //   solution20,
  //   ['i', 'water', 'drink'],
  //   ['want', 'to'],
  //   ['i', 'want', 'to', 'drink', 'water']
  // );

  /** 추억 점수 */
  function solution21(name, yearning, photo) {
    var answer = new Array(photo.length).fill(0);
    for (let i = 0; i < photo.length; i++) {
      const picture = photo[i];
      for (let j = 0; j < name.length; j++) {
        if (picture.includes(name[j])) answer[i] += yearning[j];
      }
    }
    return answer;
  }
  // result(
  //   solution21,
  //   ['may', 'kein', 'kain', 'radi'],
  //   [5, 10, 1, 3],
  //   [
  //     ['may', 'kein', 'kain', 'radi'],
  //     ['may', 'kein', 'brin', 'deny'],
  //     ['kon', 'kain', 'may', 'coni'],
  //   ]
  // );
  // result(
  //   solution21,
  //   ['kali', 'mari', 'don'],
  //   [11, 1, 55],
  //   [
  //     ['kali', 'mari', 'don'],
  //     ['pony', 'tom', 'teddy'],
  //     ['con', 'mona', 'don'],
  //   ]
  // );
  // result(
  //   solution21,
  //   ['may', 'kein', 'kain', 'radi'],
  //   [5, 10, 1, 3],
  //   [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]
  // );

  /** 체육복 */
  function solution22(n, lost, reserve) {
    /** Greedy Algorithm
     * 현재상황에서 가장 좋은 것을 고르는 알고리즘
     */

    // lost 기준
    // let possibleReserve = reserve
    //   .filter((item) => !lost.includes(item))
    //   .sort((a, b) => a - b);
    // let possibleStudent = lost
    //   .filter((item) => !reserve.includes(item))
    //   .sort((a, b) => a - b);

    // for (let i = 0; i < lost.length; i++) {
    //   const prev = lost[i] - 1;
    //   const next = lost[i] + 1;
    //   let bool = true;

    //   if (possibleReserve.includes(prev)) {
    //     possibleReserve = possibleReserve.filter((item) => item != prev);
    //   } else if (possibleReserve.includes(next)) {
    //     possibleReserve = possibleReserve.filter((item) => item != next);
    //   } else bool = false;

    //   if (bool)
    //     possibleStudent = possibleStudent.filter((item) => item != lost[i]);
    // }
    // return n - possibleStudent.length;

    let possible = lost
      .sort((a, b) => a - b)
      .filter((item) => !reserve.includes(item));
    reserve = reserve
      .sort((a, b) => a - b)
      .filter((item) => !lost.includes(item));

    for (let i = 0; i < reserve.length; i++) {
      const prev = reserve[i] - 1;
      const next = reserve[i] + 1;
      if (possible.includes(prev))
        possible = possible.filter((item) => item != prev);
      else if (possible.includes(next))
        possible = possible.filter((item) => item != next);
    }

    return n - possible.length;
  }
  // result(solution22, 5, [2, 4], [1, 3, 5]);
  // result(solution22, 5, [2, 4], [3]);
  // result(solution22, 3, [3], [1]);
  // result(solution22, 5, [1, 2, 3], [1, 2, 5]);
  // result(solution22, 4, [1, 3], [1, 2]);
  // result(solution22, 5, [1, 2, 3, 4], [2, 3, 5]);
  // result(solution22, 5, [2], [5]);
  // result(solution22, 5, [1, 2, 3], [2, 3, 4]);
  // result(solution22, 5, [4, 2], [3, 5]);
  // result(solution22, 6, [4, 1, 5], [6, 5]);
  // 11명
  // result(
  //   solution22,
  //   13,
  //   [1, 2, 5, 6, 10, 12, 13],
  //   [2, 3, 4, 5, 7, 8, 9, 10, 11, 12]
  // );
  // result(solution22, 13, [1, 6, 13], [3, 4, 7, 8, 9, 11]);

  /** 숫자 짝궁 */
  function solution23(X, Y) {
    var answer = '';
    const mate = [];
    let mateIndex = {};
    const standard = X.length > Y.length ? Y : X;
    for (let i = 0; i < standard.length; i++) {
      const compare = standard === X ? Y : X;
      const value = standard[i];
      const index = mate.includes(value) ? mateIndex[value] : 0;
      if (compare.includes(value, index)) {
        mate.push(value);
        mateIndex[value] = compare.indexOf(value, index) + 1;
      }
    }
    mate.sort((a, b) => b - a);
    if (mate.length < 1) answer = '-1';
    else if (mate[0] === '0') answer = '0';
    else answer = mate.join('');
    return answer;
  }
  // result(solution23, '100', '2345');
  // result(solution23, '100', '203045');
  // result(solution23, '100', '123450');
  // result(solution23, '12321', '42531');
  // result(solution23, '5525', '1255');

  /** 완주하지 못한 선수 */
  function solution24(participant, completion) {
    var answer = '';
    const list = {};
    for (const name of participant) {
      list[name] = (list[name] || 0) + 1;
    }

    for (const name of completion) {
      if (list[name]) list[name]--;
    }

    for (const [key, value] of Object.entries(list)) {
      if (value === 1) {
        answer = key;
        break;
      }
    }
    /** 자바스크립트에서 배열은 객체이기 때문에 arr[key] = 'value' 로 작성해도 에러가 나지 않는다.
     * 또한 arr[key]를 출력해보면 'value' 값이 나올 것이다.
     *
     * 배열이라고 해서 key-value 값을 이용하지 못한다고 생각하지 말기.
     * 하지만 해당 값은 배열의 요소가 아니기 때문에 for문으로 값을 뽑아내지 못함. (배열의 속성)
     * ['leo', 'kiki', 'eden', eden: 1, kiki: 1]
     */

    return answer;
  }
  // result(solution24, ['leo', 'kiki', 'eden'], ['eden', 'kiki']);
  // result(
  //   solution24,
  //   ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  //   ['josipa', 'filipa', 'marina', 'nikola']
  // );
  // result(
  //   solution24,
  //   ['mislav', 'stanko', 'mislav', 'ana'],
  //   ['stanko', 'ana', 'mislav']
  // );

  /** 옹알이 */
  function solution25(babbling) {
    var answer = 0;
    const possibleWord = ['aya', 'ye', 'woo', 'ma'];
    for (let i = 0; i < babbling.length; i++) {
      let word = babbling[i];
      while (possibleWord.some((item) => word.includes(item))) {
        for (let j = 0; j < possibleWord.length; j++) {
          if (
            -1 !== word.indexOf(possibleWord[j]) &&
            +word[word.indexOf(possibleWord[j]) - 1] === j + 1
          ) {
            word = word.replace(possibleWord[j], 'x');
          } else if (word.includes(possibleWord[j])) {
            word = word.replace(possibleWord[j], j + 1);
          }
        }
      }
      if (+word) answer++;
    }

    /** 정규식 참고
     *  const regexp1 = /(aya|ye|woo|ma)\1+/;
     *  const regexp2 = /^(aya|ye|woo|ma)+$/;
     *
     * return babbling.reduce((ans, word) => (
     *  !regexp1.test(word) && regexp2.test(word) ? ++ans : ans), 0);
     */
    return answer;
  }
  // result(solution25, ['aya', 'yee', 'u', 'maa']);
  // result(solution25, ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']);
  // result(solution25, ['ayayeaya', 'ayayeye']);
  // result(solution25, ['ayayeayayeayaaya']);

  /** 키패드 누르기 */
  // function getDistance(number, thumb) {
  //   let returnValue = 0;
  //   switch (number) {
  //     case 2:
  //       if ('*' === thumb || '#' === thumb) returnValue = 4;
  //       else if (1 === thumb || 3 === thumb || 5 === thumb) returnValue = 1;
  //       else if (4 === thumb || 6 === thumb || 8 === thumb) returnValue = 2;
  //       else returnValue = 3;
  //       break;
  //     case 5:
  //       if ('*' === thumb || '#' === thumb) returnValue = 3;
  //       else if (2 === thumb || 4 === thumb || 6 === thumb || 8 === thumb)
  //         returnValue = 1;
  //       else returnValue = 2;
  //       break;
  //     case 8:
  //       if ('*' === thumb || '#' === thumb) returnValue = 2;
  //       else if (5 === thumb || 7 === thumb || 9 === thumb || 0 === thumb)
  //         returnValue = 1;
  //       else if (2 === thumb || 4 === thumb || 6 === thumb) returnValue = 2;
  //       else returnValue = 3;
  //       break;
  //     case 0:
  //       if ('*' === thumb || '#' === thumb) returnValue = 1;
  //       else if (8 === thumb) returnValue = 1;
  //       else if (1 === thumb || 3 === thumb) returnValue = 4;
  //       else if (2 === thumb || 4 === thumb || 6 === thumb) returnValue = 3;
  //       else returnValue = 2;
  //       break;
  //   }
  //   return returnValue;
  // }

  function getDistance(number, thumb) {}
  function solution26(numbers, hand) {
    var answer = '';
    let rightThumb = '#';
    let leftThumb = '*';
    const rightInputNumber = [3, 6, 9];
    const leftInputNumber = [1, 4, 7];
    for (let number of numbers) {
      if (rightInputNumber.includes(number)) {
        answer += 'R';
        rightThumb = number;
      } else if (leftInputNumber.includes(number)) {
        answer += 'L';
        leftThumb = number;
      } else {
        if (
          getDistance(number, rightThumb) === getDistance(number, leftThumb)
        ) {
          if ('right' === hand) {
            answer += 'R';
            rightThumb = number;
          } else {
            answer += 'L';
            leftThumb = number;
          }
        } else if (
          getDistance(number, rightThumb) < getDistance(number, leftThumb)
        ) {
          answer += 'R';
          rightThumb = number;
        } else {
          answer += 'L';
          leftThumb = number;
        }
      }
    }
    return answer;
  }

  result(solution26, [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
  result(solution26, [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
  result(solution26, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');

  /** 크레인 인형뽑기 */
  function solution27(board, moves) {
    var answer = 0;
    var result = [];
    moves.map((n) => {
      var bLen = board.length;
      for (var i = 0; i < bLen; i++) {
        if (board[i][n] !== 0) {
          result.push(board[i][n]);
          board[i][n] = 0;
          break;
        }
      }
    });

    return result;
  }
  // result(
  //   solution27,
  //   [
  //     [0, 0, 0, 0, 0],
  //     [0, 0, 1, 0, 3],
  //     [0, 2, 5, 0, 1],
  //     [4, 2, 4, 4, 2],
  //     [3, 5, 1, 3, 1],
  //   ],
  //   [1, 5, 3, 5, 1, 2, 1, 4]
  // );
})();
