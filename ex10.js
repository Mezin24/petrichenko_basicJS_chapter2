'use strict';

const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs(obj) {
    const { age } = obj;
    const { languages } = obj.skills;

    const langUpperCase = languages.map((lang) => lang.toUpperCase());
    return `Мне ${age} и я владею языками: ${langUpperCase.join(' ')}`;
  },
};

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  const { programmingLangs } = plan.skills;
  let result = '';

  for (let [key, value] of Object.entries(programmingLangs)) {
    result += `Язык ${key} изучен на ${value}\n`;
  }

  return result;
}

// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
