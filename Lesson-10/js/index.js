// let employees = 10;
// let totalSolary = 0;
// const min = 500;
// const max = 5000;

// for (let i = 1; i < employees + 1; i++) {
//   let result = Math.floor(Math.random() * (max - min + 1) + min);

//   console.log(`Зарплата працівника ${i}: ${result}`);
//   totalSolary += result;
// }

// console.log(`Зарплата працівників ${totalSolary}`);

let min = 5;
let max = 20;
let result = 0;

for (let i = min; i < max; i++) {
  if (i%2 === 0) {
    result += i;
  }
}

console.log(result);
