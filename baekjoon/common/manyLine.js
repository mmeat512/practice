module.exports = function (callback) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input.push(line);
  }).on('close', function () {
    console.log(callback(input));
    process.exit();
  });
};
