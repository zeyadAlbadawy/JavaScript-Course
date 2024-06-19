"using strict";
const zeyad = {
  name: "zeyad",
  age: 20,
  birthyear: 2003,
  job: "Still Student ",
  friends: ["A", "B", "C"],
  // calcAge : (birthyear) => 2024 - birthyear
  calcAge: function () {
    return 2024 - this.birthyear;
  },
  driverLicence: false,

  getSummary: function () {
    return `${this.name} is a ${this.calcAge()}-year-old ${
      this.job
    } and he has ${this.driverLicence ? "a" : "no"} driver's license.`;
  },
};
console.log(zeyad.getSummary());
console.log(zeyad.calcAge());
console.log(zeyad["job"]);
console.log(
  zeyad["name"] +
    " has " +
    zeyad.friends.length +
    " friends ,and the best friend is called " +
    zeyad.friends[0]
);
console.log(
  `${zeyad.name} has ${zeyad.friends.length} friends ,and his best friend is called ${zeyad.friends[0]}`
);
