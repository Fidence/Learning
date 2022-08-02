const { users } = require("./data");

// const user = { users };

// console.log(users);

// forEach
// users.forEach((user) => console.log(`${user.firstName} ${user.lastName} `));
// // filter
// const children = users.filter((user) => user.age <= 18);
// console.log(children);
// // find
// const adult = users.filter((user) => user.age >= 18);
// console.log(adult);

// const findById = users.find((user) => user.id === 18);
// console.log(findById);
// sort
// const sorting = users.sort(a, b) =>
const sorting = users.sort((a, b) => (a.lastName > b.lastName) * 2 - 1);

console.log(sorting);
