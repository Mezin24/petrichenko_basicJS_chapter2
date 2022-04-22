function calculateVolumeAndArea(cubeSide) {
  if (
    typeof cubeSide !== 'number' ||
    !Number.isInteger(cubeSide) ||
    cubeSide <= 0
  ) {
    return 'При вычислении произошла ошибка';
  }
  const vCube = cubeSide ** 3;
  const sCube = 6 * cubeSide ** 2;

  return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(place) {
  if (place < 0 || !Number.isInteger(place) || isNaN(place)) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
  if (place === 0 || place > 36) {
    return 'Таких мест в вагоне не существует';
  }
  return parseInt(place / 4 + 1);
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));
