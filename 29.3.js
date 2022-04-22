function fib(num) {
  let a = 0;
  let b = 1;
  let c;
  let result = '';

  if (!Number.isInteger(num) || isNaN(num) || num === 0) {
    return '';
  }

  if (num === 1) {
    result = '0';
    return result;
  }
  if (num === 2) {
    result = '0 1';
    return result;
  }

  if (num > 2) {
    for (let i = 0; i < num; i++) {
      c = a;
      result += `${c}${i + 1 !== num ? ' ' : ''}`;
      a += b;
      b = c;
    }
    return result;
  }
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(0));
