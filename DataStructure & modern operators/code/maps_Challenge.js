"use strict";

// 1.

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

bookMap.set("pages", 464);
console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);
console.log(bookMap.size);

// 2-> Itr Throught Maps
if (bookMap.has("author")) console.log("The author of the book is known");
