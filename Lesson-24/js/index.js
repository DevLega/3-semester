// const people = [
//     { name: 'John', age: 32, occupation: 'programmer' },
//     { name: 'Jane', age: 26, occupation: 'teacher' },
//     { name: 'Mike', age: 42, occupation: 'engineer' },
//     { name: 'Emily', age: 17, occupation: 'designer' }
// ];

// const peoplesAfterEighteen = people.map(people => people.age > 18 ? people : "hello world");

// console.log(peoplesAfterEighteen);

// //

// const peoplesAfterEighteen1 = people.filter(people => people.age > 18);
// console.log(peoplesAfterEighteen1);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

console.error("PLUS TEN PROCENTS");

const playersPlusTenProcentsToPoints = players.forEach(
  (player) => (player.points = player.points + player.points * 0.1)
);
console.log(players);

console.error("OFFLINE PLAYERS");

const offlinePlayers = players.map((player) => (player.online ? player : null));
console.log(offlinePlayers);

console.error("PLAYED TIME >= 200");

const isPlayedTimeOfAll = players.every((player) =>
  player.timePlayed >= 200 ? player : false
);
console.log(isPlayedTimeOfAll);

console.error("ADJUST PLAYED TIME");

const findPlayerWithId = (playerId) =>
  players.find((player) => player.id === playerId);
const adjustPlayedTimeForPlayer = (playerId, time) => {
  const player = findPlayerWithId(playerId);
  player.timePlayed += time;
};

console.log(
  "BEFORE ADJUST PLAYED TIME " +
    players.find((player) => player.id === "player-1").timePlayed
);
adjustPlayedTimeForPlayer("player-1", 2);
console.log(
  "AFTER ADJUST PLAYED TIME " +
    players.find((player) => player.id === "player-1").timePlayed
);

console.error("2 TASK");

const people = [
  { name: "John", surname: "Doe", age: 32, occupation: "programmer" },
  { name: "Jane", surname: "Lee", age: 26, occupation: "teacher" },
  { name: "Mike", surname: "Watson", age: 42, occupation: "engineer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
];

const peopleFullName = people.map(people => {
    const { name, surname, ...rest} = people;
    return {fullname: name + " " + surname, ...rest};
})

console.log(peopleFullName);