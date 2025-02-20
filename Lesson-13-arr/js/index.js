const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const summaArr = array1.concat(array2)
let summa = 0;

for(let i = 0; i < summaArr.length; i++) {
    summa += summaArr[i]
}

console.log(summa);