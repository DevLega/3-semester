let answersArr = [];
let userAnswer = prompt();

while (userAnswer !== null && typeof Number) {
  answersArr.push(Number(userAnswer));
  userAnswer = prompt();
}

let result = 0;

for(let num of answersArr) {
    result += num;    
}

console.log(result);
