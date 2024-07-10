"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk1, fieldPlayers1] = players1;
const [gk2, fieldPlayers2] = players2;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, team2, x: draw },
} = game;

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) console.log(players[i]);
};

const teamWinner = printGoals(...game.scored);

// team1 < team2 && console.log("Team One Wins !");

console.log(Object(game.odds.length));
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1} : ${game.scored[i]}`);
}

let finalRes = 0,
  itr = 0;
for (const elm of Object.values(game.odds)) {
  finalRes += elm;
  itr++;
}

finalRes /= itr;
console.log(finalRes);

for (const [keys, value] of Object.entries(game.odds)) {
  console.log(
    `Odds Of ${keys != "x" ? `victory ${game[keys]}` : "draw"} : ${value}`
  );
}

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);

// 3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()];
console.log(`${time[time.length - 1]}`);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "first" : "Second";
  console.log(`in ${half} half ->> value of ${key} is ${value}`);
}
