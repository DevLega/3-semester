const isFresh = function (fruit) {
  return fruit.isFresh === true;
};

const filter = function (array, test) {
  const filterMas = [];
  for (let el of array) {
    const passed = test(el);

    if (passed) {
      filterMas.push(el);
    }
  }

  return filterMas;
};

const fruits = [
  { name: "apples", isFresh: true },
  { name: "grapes", isFresh: false },
  { name: "bananas", isFresh: true },
];

console.log(filter(fruits, isFresh));
