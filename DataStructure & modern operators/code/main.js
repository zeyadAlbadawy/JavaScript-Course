"use strict";

// Destructuring Array
const arr = [1, 2, 3];
const [x, y, z] = arr;
// console.log(x, y, z);

// Data needed for a later exercise
// a
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (firstIdx, secondIdx) {
    return [this.categories[firstIdx], this.categories[secondIdx]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pizza of ${ing1},  ${ing2}, ${ing3}`);
  },
};

// maps
const rest = new Map();
rest.set("zeyad", 1);
console.log(rest);
// Loop Throught Object

const entries = Object.entries(restaurant.openingHours);
for (const [day, { open: op, close: cl }] of entries)
  console.log(`At ${day} we open at ${op} and close at ${cl}`);

console.log(restaurant.ofrder?.(0, 1) ?? "Method Doesn't exist");
const days = ["sat", "sun", "mon", "tues", "wed", "thu", "fri"];
for (const day of days) {
  // ?? Means it will proceed if the first part if not a null or undefied otherwise it will return the first
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`The Restuarant Opens on ${day} at ${open}`);
}

// Rest Pattern And Parameters -

const add = function (...Elmnts) {
  let sum = 0;
  for (let i = 0; i < Elmnts.length; i++) sum += Elmnts[i];
  console.log(sum);
};

add(3, 4);
add(...[3, 4, 5]);

// // Spread Operator Lecture
// const ingredients = [
//   prompt("Let's make pizza, First Enter ingregient1"),
//   prompt("Second Ingredient"),
//   prompt("third ingredient"),
// ];

console.log(ingredients);
restaurant.orderPasta(...ingredients);
// Destructuring Object ->>>>>>>>
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Change The Names
const {
  name: nameNew,
  openingHours: openingHoursNew,
  categories: categoriesNew,
} = restaurant;
// console.log(nameNew, openingHoursNew, categoriesNew);

let a = 20;
let b = 30;
const obj = { a: 2, b: 3, c: 4 };
({ a, b } = obj);
// console.log(a, b);

// Get Friday Open And Close Time
const {
  fri: { open: o, close: c },
} = openingHoursNew;
console.log(o, c);

// Destructuring Arrays ->>>>>

// Switch Through Destructuring
let [main, secondary] = restaurant.starterMenu;
[secondary, main] = [main, secondary];
// console.log(main, secondary);

// Recive Two Elements in Once
let [firstElm, secondElm] = restaurant.order(2, 0);
[secondElm, firstElm] = [firstElm, secondElm];
// console.log(firstElm, secondElm);
