// 'use strict';

// // const Person = function (firstName, birthYear) {
// //   this.birthYear = birthYear;
// //   this.firstName = firstName;
// // };

// // const zeyad = new Person('zeyad', 2003);
// // Person.prototype.calcAge = function () {
// //   console.log(2024 - this.birthYear);
// // };
// // zeyad.calcAge();

// // console.log(zeyad.__proto__ === Person.prototype);
// // console.log(zeyad.hasOwnProperty('calcAge'));
// // Person.sayHello = function () {
// //   console.log('Hello EveryOne !');
// // };

// // // Cooding Challenge _01

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   console.log(this.speed * 1.1);
// // };

// // Car.prototype.brake = function () {
// //   console.log(this.speed * 0.95);
// // };

// // const car1 = new Car('BMW', 120);

// // // console.log(car1.accelerate());

// // class PersonCl {
// //   constructor(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   }

// //   calcAge() {
// //     console.log(2024 - this.birthYear);
// //   }

// //   get ageCalc() {
// //     return 2024 - this.birthYear;
// //   }

// //   // Set The Existing properties
// //   set firstName(name) {
// //     if (name.includes(' ')) this._firstName = name;
// //     else alert('Not A valid Name');
// //   }

// //   get firstName() {
// //     return this._firstName;
// //   }

// //   set birthYear(yearnew) {
// //     this._birthYear = yearnew;
// //   }

// //   get birthYear() {
// //     return this._birthYear;
// //   }

// //   static sayHey() {
// //     console.log('hey');
// //   }
// // }

// // const jessica = new PersonCl('jessica old', 1996);
// // // const zeyadNew = new PersonCl('zeyadNEw', 2003);
// // PersonCl.sayHey();
// // // it is not allowed for the children to call static methods !
// // // jessica.sayHey();
// // jessica.firstName = 'jessica Ahmed';
// // jessica.birthYear = 2000;
// // // console.log(jessica);
// // // jessica.calcAge();
// // // console.log(jessica.ageCalc);
// // // zeyadNew.calcAge();

// // console.log('===============================================================');
// // console.log('===============================================================');

// // class CarCl {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }

// //   accelerate() {
// //     return (this.speed += 10);
// //   }

// //   brake() {
// //     return (this.speed -= 5);
// //   }

// //   get speedUS() {
// //     return this.speed / 1.6;
// //   }

// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }

// // const firstCar = new CarCl('Ford', 120);
// // firstCar.accelerate();
// // // firstCar.speedUS = 10;
// // firstCar.speedUS = 20;
// // // console.log(firstCar);

// const PersonV2 = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// PersonV2.prototype.calcAge = function () {
//   return 2024 - this.birthYear;
// };
// const Student = function (firstName, birthYear, course) {
//   PersonV2.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Link Student prototype with the personV2 prototype
// // Student.prototype.__proto__ = PersonV2.prototype;
// // OR
// Student.prototype = Object.create(PersonV2.prototype);
// Student.prototype.constructor = Student;
// const zeyadV2 = new Student('Zeyad', 2003, 'ECE Dept');
// Student.prototype.introduce = function () {
//   console.log(`Hey EveryOne!, I'm ${this.firstName} and study ${this.course}`);
// };

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// // Car.prototype.accelerate = function () {
// //   console.log(this.speed * 1.1);
// // };
// // const EV = function () {};

// // Constructor func
// const Person_01 = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person_01.prototype.calcAge_01 = function () {
//   return 2024 - this.birthYear;
// };
// // I wanna every Person inherted from Person class to has the calcAge Func Instead of Making it in the class i will put it in the prototype which is meant that it is only one and all the persons can access the prototype of PErson class
// const Student_01 = function (firstName, birthYear) {
//   Person_01.call(this, firstName, birthYear);
// };

// // Student.prototype = Object.create(Person_01.prototype);
// // Student.prototype.__proto__ = Person_01.prototype;

// Student.prototype.introduce = function () {
//   console.log(`Hey, I'm ${this.firstName}`);
// };

// const zeyad_01 = new Student_01('zeyad', 2003);
// console.log(zeyad_01.calcAge_01());
// If i wanna make every instance access a method i declare it in the prototype
// This Way exits in ES6 Classes by declaring it inside the class it seld

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2024 - this.birthYear;
//   }
// }

// // Student.prototype.__proto__ = Person.prototype;
// class Student extends Person {
//   constructor(firstName, birthYear) {
//     super(firstName, birthYear);
//   }
//   introduce() {
//     console.log(`Hey I'm ${this.firstName}`);
//   }

//   // This Calc Age Overrides the parent  Calc Age
//   calcAge() {
//     return 2023 - this.birthYear;
//   }
// }

// const zeyad = new Student('zeyad', 2003);
// console.log(zeyad.calcAge());

// Object.create inheritance between classes

// Inheritance between classes using object.create

/// Challenge No_04
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} Km/h With charge of ${
        this.#charge
      }`
    );
    return this;
  }

  static test() {
    console.log('Test Done!');
  }
}

const rivian = new EVCL('Rivian', 120, 23);
// Static can be accessed from the prototype only!
EVCL.test();
// console.log(rivian.test());
