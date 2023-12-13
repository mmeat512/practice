const oneLine = require('../common/oneLine');

/**
 *
 * 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
 * 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.
 *
 * 1
 * 6 -> 1 (2 ~ 7) 6 + 1
 * 12 -> 2 (8 ~ 19) 6 * (2 + 1) + 1
 * 18 -> 3 (20 ~ 37) 6 * (3 + 2 + 1) + 1
 * 24 -> 4 (38 ~ 61) 6 * (4 + 3 + 2 + 1) + 1
 * 30 -> 5 (62 ~ 91) 6 * (5 + 4 + 3 + 2 + 1) + 1
 *
 * 13 -> 3
 * 58 -> 5
 */

function solution(input) {
  let share = (input - 2) / 6;
  let line = 1;
  let count = 1;
  while (share > 0) {
    share -= line;
    line += 1;
    count += 1;
  }

  return line;
}

oneLine(solution);
