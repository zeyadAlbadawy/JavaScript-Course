"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    this.temp = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")} \n(Write Option Number)`
      )
    );

    // if (
    //   typeof this.temp === "number" &&
    //   poll.temp >= 0 &&
    //   poll.temp < this.answers.length
    // ) {
    //   poll.answers[poll.temp]++;
    // } else {
    //   alert(`Enter A Valid Number Between 0 and  ${this.answers.length}`);
    // }

    // Use The Short Circuit Approach
    typeof this.temp === "number" &&
      this.temp >= 0 &&
      this.temp < this.answers.length &&
      this.answers[this.temp]++;

    this.displayResults(this.answers);
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(type);
    } else if (type === "string") {
      console.log(`Poll Results Are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// If I wanna Display An Outer array using display method, so i need to redirect the this key word
poll.displayResults.call({ answers: [1, 2, 3, 4] }, "string");
