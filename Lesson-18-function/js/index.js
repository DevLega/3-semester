// const numbers = [1,4,3,2,5]

// const multiple = function(value, n) {
//   return value * n;
// }

// const repeat = function(n, action, arr) {
//   const newArr = []
//   for(let i = 0; i < arr.length; i++) {
//     newArr.push(action(arr[i], n))
//   }

//   return newArr;
// }

// console.log(repeat(5, multiple, numbers))


const hello1 = () => {
  console.log("Привіт JavaScript");
}

hello1()



const hello2 = (name1) => {
  return name1
}

console.log(`Привіт, ${hello2('Василь')}`);

const add = (...args) => console.log(args);

add(1, 2, 3, "hello")