function fib(num) {
  let fibStr = '';
  if (typeof num !== 'number' || num === 0) {
    return fibStr;
  }

  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      fibStr += '0';
    } else if (i === 2) {
      fibStr += '1';
    } else {
      fibStr += i - 2 + (i - 1);
    }
    if (i !== num) {
      fibStr += ' ';
    }
  }
  return fibStr;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(0));
