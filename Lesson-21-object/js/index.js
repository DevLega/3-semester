// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },

// ];

// function findFriendByName(arr, friendName) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i]['name'] === friendName) {
//       return arr[i];
//     }
//   }
// }

// function getAllNames(arr) {
//   let newArr = [];
//   const keys = Object.keys(arr);

//   for(const key of keys) {
//     newArr.push(arr[key]['name'])
//   }

//   return newArr;
// }

// function getOnlineFriends(arr) {
//   let newArr = [];
//   const keys = Object.keys(arr);

//   for(let key of keys) {
//     if(arr[key]['online'] === true) {
//       newArr.push(arr[key].name)
//     }
//   }

//   return newArr;
// }

// function getOfflineFriends(arr) {
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].online === false) {
//       newArr.push(arr[i]);
//     }
//   }
  
//   return newArr;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// console.log(getAllNames(friends));

// console.log(getOnlineFriends(friends));

// console.log(getOfflineFriends(friends));


const userInfo = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
};

const userPreferences = {
  theme: 'dark',
  language: 'en',
};

const userProfile = {
  ...userInfo,
  ...userPreferences,
  role: "admin",
  email: "admin@company.com"
}

console.log(userProfile);