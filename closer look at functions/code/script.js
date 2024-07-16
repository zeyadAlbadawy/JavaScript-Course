"use strict";

const bookings = [];
const createBooking = function (flightNum, numOfPass = 1, price = 199) {
  numOfPass = numOfPass || 1;
  flightNum = flightNum || 1;

  const booking = {
    flightNum,
    numOfPass,
    price,
  };
};

// Ref Vs Val
const flight = "LH234";
const zeyad = {
  name: "Zeyad Albadawy",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "L2H235";
  passenger.name = "MR. " + passenger.name;

  // if (passenger.passport === 123456789) // alert("Checked IN");
  //else alert("Wrong Passport");
};

checkIn(flight, zeyad);
// console.log(flight);
// console.log(zeyad);

// Functions Accepting CallBack Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Hight Order Functions
const transformer = function (str, fn) {
  //   console.log(`The Original String : ${str}`);
  //   console.log(`The Transformed String is ${fn(str)}`);
  //   console.log(`It Is Transformed By ${fn.name}`);
};

transformer("Java Script Is The Best!", upperFirstWord);
transformer("Java Script Is The Best!", oneWord);

// Function Returning Function
const greet = function (greeting) {
  return function (name) {
    // console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("Hey");
greeter("zeyad");

// Function Returning Another Function =>

// const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeter2 = greet("HeLLO");
greeter2("zeyad");

// The Call And Apply Methods ->

const lufthensa = {
  airline: "lufthensa",
  iateCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iateCode}${flightNum}`
    );

    // Array Of Objects ->>
    this.bookings.push({
      flight: `${this.airline} flight ${this.iateCode}${flightNum}`,
      name,
    });
  },
};

lufthensa.book(239, "Zeyad_01");
lufthensa.book(259, "Zeyad_02");

// const [first, second] = lufthensa.bookings;
// const { flight: flightName, name: passengerName } = first;
// console.log(flightName, passengerName);

const eurowings = {
  airline: "eurowings",
  iateCode: "EW",
  bookings: [],
};

const eurowingsBook = lufthensa.book;
eurowingsBook.call(eurowings, 123, "Zeyad_03");

// Book function to eurwings only
const bookEW = eurowingsBook.bind(eurowings);
bookEW(23, "Zeyad_04");

lufthensa.planes = 300;
lufthensa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthensa.buyPlane.bind(lufthensa));

// Partial Applications
const addTAX = (rate, value) => value + value * rate;

// IF the VAT is Const All The Time Instead of passing it every time we can use the bind method

// The First Argument is where this will point to
const addVAT = addTAX.bind(null, 0.23);
// console.log(addVAT(100));

// Challenge

const addTAX2 = function (TAX = 0.23) {
  return function (value) {
    console.log(value + value * TAX);
  };
};

const newFunc = addTAX2();
// newFunc(100);

// Closure Examples
// Example -> 01
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};

// Example -> 02

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

// After The g call stack has gone away
// The f func can access the a variable from
// The parent func and this is called closure
g();
f();
console.dir(f);

h();
f();

// // Example -> 03

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are Boarding all ${n} passengers`);
    console.log(`we are boarding in ${perGroup} passenger`);
  }, wait * 1000);
  console.log(`boarding opens in ${wait} seconds`);
};
boardPassengers(180, 3);
