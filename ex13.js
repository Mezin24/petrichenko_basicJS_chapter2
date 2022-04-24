'use strict';

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  const { shops } = data;

  // let totalArea = 0;
  // shops.forEach((shop) => (totalArea += shop.width * shop.length));
  const totalArea = shops.reduce((acc, cur) => cur.width * cur.length + acc, 0);
  const totalVolume = totalArea * data.height;
  const neccessaryBudget = totalVolume * data.moneyPer1m3;

  const isMoneyEnough = data.budget >= neccessaryBudget;
  return isMoneyEnough ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));
