// 'var' is outdated, so use either of 'let' or 'const'

// const is used when the variable will stay fairly constant through its lifetime
const nameX = "Taimoor Javed";
console.log(nameX);

// let is used when the variable may change value in the future.
let age = 10;
age += 1;
console.log(age);

var attribute = "hungry";
const t = `The dog is ${attribute}`;
console.log(t);

const team = {
  members: ["Jane", "Jill"],
  teamName: "Super Squad",
  output: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

console.log(team.output());
