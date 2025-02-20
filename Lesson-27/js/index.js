class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const mango = new User("Манго", "mango@mail.com");
console.log(mango);


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person("John", "Doe");
console.log(person1.getFullName());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(10, 10);
console.log(rectangle1.getArea());