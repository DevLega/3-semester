// const numbers = [1,2,3,4,5,6,7,8,9]

// const sortedNum = numbers.reduce((acc, num) => {
//   if(num % 2 == 0) {
//     acc['even'].push(num);
//   } else {
//     acc['odd'].push(num)
//   }
//   return acc;
// }, {even: [], odd: []})
// console.log(sortedNum);

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const voterResults = function (voters) {
  return voters.reduce(
    (acc, { age, voted }) => {
      if (age >= 18 && age <= 25) {
        acc.numYoungPeople++;
        if (voted) acc.numYoungVotes++;
      } else if (age >= 26 && age <= 35) {
        acc.numMidsPeople++;
        if (voted) acc.numMidVotesPeople++;
      } else if (age >= 36) {
        acc.numOldsPeople++;
        if (voted) acc.numOldVotesPeople++;
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
};

console.log(voterResults(voters));
