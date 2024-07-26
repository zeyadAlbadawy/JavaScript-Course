'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, flag = false) {
  containerMovements.innerHTML = '';
  let movmnts = flag ? movements.slice().sort((a, b) => a - b) : movements;

  movmnts.forEach(function (movement, idx) {
    const mov = movement > 0 ? 'deposit' : 'withdrawal';
    const htmlDisplay = `<div class="movements__row">
          <div class="movements__type movements__type--${mov}"> ${
      idx + 1
    } ${mov}</div>
          <div class="movements__value">${movement}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', htmlDisplay);
  });
};

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr);

  labelBalance.textContent =
    account.balance < 0 ? '0 EUR' : `${account.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => curr + acc, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((elm) => (elm * acc.interestRate) / 100)
    .filter((itr) => itr >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const accounts = [account1, account2, account3, account4];
const createUserNames = function (accounts) {
  accounts.forEach((account) => {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map((acc) => acc[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  // Check Credintials
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  // Validate Pin Entered
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // The user can login successfully
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginPin.blur();
    inputLoginPin.value = inputLoginUsername.value = '';
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const currReciver = accounts.find(
    (acc) => inputTransferTo.value === acc.userName
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    currReciver &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    currReciver?.userName !== currentAccount.userName
  ) {
    currReciver.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    let delIdx = accounts.findIndex(
      (curr) => curr.userName === currentAccount.userName
    );
    console.log(delIdx);
    accounts.splice(delIdx, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

let isSorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});
// displayMovements(account1.movements);
// calcPrintBalance(account1.movements);
// calcDisplaySummary(account1.movements);

// ############### TASKS ######################

// Get The Max value
// const maxVal = movements.reduce((acc, curr) => {
//   if (curr > acc) return curr;
//   else return acc;
// }, movements[0]);
// console.log(maxVal);
// console.log(account2.userName);

const balanceFinal = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => curr + acc, 0);
console.log(balanceFinal);

const balanceFinal_01 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => curr + acc, 0);

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let [i, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`At The Movement ${i + 1}, You deposit ${movement}`)
//     : console.log(`At The Movement ${i + 1}, You WithDraw ${-movement}`);
// }

// // The forEach Loop
// console.log("->->->-> FOREACH <-<-<-<-");
// movements.forEach((movement, i) => {
//   movement > 0
//     ? console.log(`At The Movement ${i + 1}, You deposit ${movement}`)
//     : console.log(`At The Movement ${i + 1}, You WithDraw ${-movement}`);
// });

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`value at key ${key} equal to ${value}`);
// });

// const newSet = new Set(["USD", "USD", "EGP"]);
// newSet.forEach((value, key, map) => {
//   console.log(`value at key ${key} equal to ${value}`);
// });

// Array Methods

const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (elm) => Number(elm.textContent.replace('€', ''))
  );
  // console.log(movementsUI);
});

// Array Methods Practice
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((dep) => dep > 0)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(bankDepositSum);

// 2. Ex No.02
const cntDeposits = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? ++acc : acc), 0);
// console.log(cntDeposits);

// Ex.No_03
// Use Reduce on arrays to create objects
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, curr) => {
      // curr > 0 ? (acc.deposits += curr) : (acc.withdrawls += curr);
      acc[curr > 0 ? 'deposits' : 'withdrawls'] += curr;
      return acc;
    },
    { deposits: 0, withdrawls: 0 }
  );
// console.log(sums);

// Ex.No_04

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const finalRes = title
    .toLowerCase()
    .split(' ')
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return finalRes;
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('This is LONG title but it is not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Challenge 01
const checkDogs = function (JuliaDogs, kateDogs) {
  const JuliaDogsMod = JuliaDogs.slice(1, JuliaDogs.length - 2);
  const totalDogs = JuliaDogsMod.concat(kateDogs);
  totalDogs.forEach((dog, idx) => {
    dog >= 3
      ? console.log(
          `Dog number ${idx + 1} is an adult, and is ${dog} years old`
        )
      : console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
  });
  console.log(totalDogs);
};

const calcAverageHumanAge = (ages) => {
  const dogsAgeByHuman = ages.map((age, idx) => {
    return age > 2 ? 2 * age : 16 + age * 4;
  });

  const filteredDogs = dogsAgeByHuman.filter((dog) => dog >= 18);
  const totalAges = filteredDogs.reduce((acc, curr) => acc + curr, 0);
  console.log(totalAges / filteredDogs.length);
};

// Challenge No 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dog) {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28 * 100) / 100;
});

const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's Dog is Eating Too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'Much' : 'Little'
  }`
);

// 3->
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .map((dog) => dog.owners);

// console.log(`${ownersEatTooMuch.join(' and ')} Eat Too Much`);
// console.log(`${ownersEatTooLittle.join(' and ')} Eat too little`);

// 5->

console.log(`${dogs.some((dog) => dog.curFood === dog.recommendedFood)}`);

// 6->
console.log(
  `${dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )}`
);

const suitableDogs = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(suitableDogs);

const sortedDogs = dogs.sort((a, b) => a.curFood - b.curFood);
console.log(sortedDogs);
