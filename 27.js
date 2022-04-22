function getMathResult(baseNum, count) {
  if (typeof count !== 'number' || count <= 0) {
    return baseNum;
  }
  let result = '';
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      result += `${baseNum * i}`;
    } else {
      result += `${baseNum * i}--`;
    }
  }
  return result;
}
console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));
