// let name = "Oleg";
// let age = 14;

// const es6Object = {
//   name,
//   age,
//   plusAge: (age) => {
//     this.age += age;
//     console.log(this.age);
//   },
// };

// es6Object.plusAge(6);

// console.log("Output 1: ", es6Object);

const person = {
  name: "Oleg",
  age: 14,
  gender: "Male",
  output: function () {
    console.log("Person: ", this.name, this.age, this.gender);
  },

  output2: function () {
    let newPerson = [];

    for (let key in this) {
      if (typeof this[key] !== "function") {
        newPerson.push(this[key]);
      }
    }

    console.log("Person2: ", newPerson);
  },
};

person.output();

person.output2();
