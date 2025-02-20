class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Анимал");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Гав");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

const animal = new Animal();
animal.makeSound();

const dog = new Dog();
dog.makeSound();

const cat = new Cat();
cat.makeSound();