const oneLine = require('../common/oneLine');

/**
 * 
 * 
 * 브루트포스(완전탐색)
 * 
 종말의 수란 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수를 말한다. 
 제일 작은 종말의 수는 666이고, 그 다음으로 큰 수는 1666, 2666, 3666, .... 이다. 
 따라서, 숌은 첫 번째 영화의 제목은 "세상의 종말 666", 두 번째 영화의 제목은 "세상의 종말 1666"와 같이 이름을 지을 것이다. 일반화해서 생각하면, N번째 영화의 제목은 세상의 종말 (N번째로 작은 종말의 수) 와 같다.



 6 5666
 187 66666
 500 166699
 */

function solution(input) {
  const number = Number(input);
  const endNumber = '666';
  let count = 0;
  let i = 665;

  while (count < number) {
    i += 1;
    if (i.toString().includes(endNumber)) count += 1;
  }

  return i;
}

oneLine(solution);
