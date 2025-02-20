// let logins = ['admin', 'user1', 'moderator', 'guest'];
// let targetLogin = 'use';
// let found = false;

// for(let login of logins) {
//     if(login === targetLogin) {
//         found = true;
//         break;
//     }
// }

// for(let i = 0; i < logins.length; i++) {
//     if(logins[i] === targetLogin) {
//         found = true;
//         break;
//     }
// }



// if(found) {
//     console.log(`Користувач [${targetLogin}] знайдено.`);
// } else {
//     console.log(`Користувач [${targetLogin}] не знайдено.`);
// }

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for(let count of numbers) {
    if(count < smallestNumber) {
        smallestNumber = count
    }
}

console.log(smallestNumber);