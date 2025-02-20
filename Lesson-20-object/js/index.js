// const book = {
//     title: "Kulinarni Recepty",
//     author: "Mikel Jackson",
//     genre: "fantastic",
//     year: 2015,

//     replace: function(toChange, withWhat) {

//         this[toChange] = withWhat

//     }
// }

// book.replace("title", "Hello")
// console.log(book);

// 2

// const car = {
//     brand: "Porsche",
//     model: "911GT3Rs",
//     year: 2022,
//     color: "black",

//     log() {
//         console.log(`Бренд: "${this.brand}"\nМодель: "${this.model}"\nРік: "${this.year}"\nКолір: "${this.color}"\n`);
//     }
// }

// car.log()

// 3

// const students = [
//   { name: "Анна", age: 20, gender: "жінка", grade: 85 },
//   { name: "Ігор", age: 22, gender: "чоловік", grade: 90 },
//   { name: "Марія", age: 21, gender: "жінка", grade: 78 },
// ];

// const avarageGraduate = (arr) => {

//     let gradeSumma = 0;

//     for(const el of arr) {

//         gradeSumma += el.grade;

//     }

//     return gradeSumma / arr.length;
// }

// console.log(avarageGraduate(students));

// 4

const cart = {
  items: [
    { name: "🍎", price: 50, quantity: 1 },
    { name: "🍇", price: 70, quantity: 1 },
    { name: "🍋", price: 60, quantity: 1 },
    { name: "🍓", price: 110, quantity: 1 },
  ],
  getItems() {
    return this.items;
  },

  add(product, price = 0) {
    const existProduct = this.items.find((item) => item.name === product);

    if (existProduct) {
      existProduct.quantity += quantity;
    } else {
      this.items.push({ name: product, price: price, quantity: 1 });
    }
  },

  remove(productName) {
    const product = this.items.find(item => item.name === productName);

    if(product) {
        delete this.items.productName;
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    let totalPrice = 0;

    for (let el of this.items) {
      totalPrice += el.price;
    }

    return totalPrice;
  },

  increaseQuantity(productName) {
    const product = this.items.find((item) => item.name === productName);
    if (product) {
      product.quantity += 1;
    }
  },

  decreaseQuantity(productName) {
    const product = this.items.find((item) => item.name === productName);
    if (product) {
      product.quantity -= 1;
    }
  },
};

cart.add( "pepe", 2 );

cart.remove("🍎");
cart.increaseQuantity("pepe");
cart.decreaseQuantity("🍋");
console.log(cart.getItems());
console.log("Total Price:", cart.countTotalPrice());
