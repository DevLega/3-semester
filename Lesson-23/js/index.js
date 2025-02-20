// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// forEach Перебирає масив і виконує функцію для кожного елемента масиву

// players.forEach(el => console.log(el.name));

// map перебирає і повертає новий масив

// const playersMap = players.map(el => el.name);
// console.log(playersMap);

// filter перебирає і повертає новий масив який відповідає умові

// const onlinePlayers = players.filter(el => el.online);
// console.log(onlinePlayers); // повертає обєкти які мають online: true

// find повертає перший елемент який відповідає умові

// const player = players.find(el => el.name === 'Poly');
// console.log(player);

// every повертає true якщо всі елементи відповідають умові

// const isEveryPlayerOnline = players.every(el => el.online);
// console.log(isEveryPlayerOnline);

// some повертає true якщо хоча б один елемент відповідає умові

// const isSomePlayerOnline = players.some(el => el.online);