const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  const arrWorkers = Object.entries(employees);
  const taskWorker = Object.values(employees);
  const niceWorker = Math.max(...taskWorker);
  let result = "";
  for (let i = 0; i < arrWorkers.length; i += 1) {
    if (taskWorker[i] == niceWorker) {
      result += Object.keys(employees)[i];
      return result;
    }
  }

  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
