"use strict";

const checkMiddleSeat = function (seat) {
  // B and E are the middle Seats
  const lastChar = seat.slice(-1);
  if (lastChar === "B" || lastChar === "E") return "You Got The middle Seat";
  else "You Are lucky not have middle seat";
};

// console.log(checkMiddleSeat("11B"));
checkMiddleSeat("11C");
const [firstName, lastName] = "Zeyad Albadawy".split(" ");
// Join Based Upon Certain
const fullName = ["Engineer.", firstName, lastName.toUpperCase()].join(" ");

const capitalizaName = function (name) {
  const newSplittedNames = name.split(" ");
  const finalRes = [];
  for (const elm of newSplittedNames)
    finalRes.push(elm[0].toUpperCase() + elm.slice(1));
  // console.log(finalRes.join(" "));
};

capitalizaName("zeyad albadawy mohamed ebrahim");

const maskCreditCard = function (cardNumber) {
  cardNumber += "";
  const last = cardNumber.slice(-4);

  return last.padStart(cardNumber.length, "*");
};

console.log(maskCreditCard(1234567890));
