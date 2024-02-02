function isPalindrome(s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) return false;
  }
  return true;
}

// 다이나믹 프로그래밍이라던데..
function solution2(s) {
  var answer = 0;
  const len = s.length;
  let i = 0;

  while (i <= len) {
    const dp = [];
    for (let j = i; j < len; j++) {
      dp.push(s[j]);

      if (isPalindrome(dp.join(''))) {
        answer = Math.max(answer, dp.length);
      }
    }
    i++;
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return answer;
}

function solution(str) {
  let s = '';
  // #a#b#c#d#c#b#a#
  for (let i = 0; i < str.length; i++) {
    s += '#';
    s += str[i];
  }
  s += '#';

  let arr = manacher(s, s.length);
  let max = 0;
  for (let i of arr) {
    max = Math.max(max, i);
  }

  return max;
}

function manacher(s, len) {
  const a = Array(len).fill(0);
  let p = 0; // 가장 긴 팰린드롬의 중심 인덱스
  let r = 0; // 가장 긴 팰린드롬의 우측 끝 인덱스

  for (let i = 0; i < len; i++) {
    // 이미 팰린드롬이라고 정해져있는 인덱스에 속해있는지

    a[i] = i <= r ? Math.min(r - i, a[2 * p - i]) : a[i];

    // 팰린드롬 값 확인하기(가장 긴 팰린드롬 값 찾기)
    const isPalindrome = principle => {
      const min = i - principle - 1;
      const max = i + principle + 1;
      return min >= 0 && max < len && s[min] === s[max];
    };

    while (isPalindrome(a[i])) {
      a[i]++;
    }

    if (r < i + a[i]) {
      r = i + a[i];
      p = i;
    }

    // console.log(`str: ${s}, i: ${i}, p: ${p}, r: ${r}, a: ${a}`);
  }
  return a;
}

(() => {
  const result = [
    {
      s: 'abcdcba',
      answer: 7,
    },
    {
      s: 'abacde',
      answer: 3,
    },
    {
      s: 'a',
      answer: 1,
    },
    {
      s: 'baabaa',
      answer: 5,
    },
    {
      s: 'aabbaa',
      answer: 6,
    },
    {
      s: 'abba',
      answer: 4,
    },
  ];

  for (let i = 0; i < result.length; i++) {
    const { s, answer } = result[i];
    console.log(solution(s) === answer ? '정답' : '실패');
  }
})();
