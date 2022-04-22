const lines = 5;
let result = '';

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j <= i; j++) {
    for (let k = lines; k < 0; k--) {
      result += ' ';
    }
    result += '*';
  }
  result += '\n';
}

console.log(result);
