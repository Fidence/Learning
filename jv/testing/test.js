// // STRING METHODES
// const hii = "Odukwu Confidence chidieberr";
// let data = hii.split(" ")[(1, 0)];
// // data = hii.replace("d", "k");

// // data = "X".repeat(hii.length - 10);
// // data = hii.trim();

// console.log(data);

// let data = "555-4444-3332";
// result = data.split("-")[1];
// result = `${"X".repeat(data.length - 4)} ${data.split("-")[2]}`;
// result = `XXX-XXX-${data.split("-")[2]}`;
// result = data.slice(5, 10);
// result = data.includes("333");
// result = "*".repeat(data.length);
// result = data.charAt(6);
// console.log(result);

const students = [
  {
    id: 1,
    first_Name: "Peace",
    last_Name: "Odukwu",
    age: 17,
    gender: "female",
  },
  {
    id: 2,
    first_Name: "Joy",
    last_Name: "Ordu",
    age: 20,
    gender: "female",
  },
  {
    id: 3,
    first_Name: "Galey",
    last_Name: "Mandason",
    age: 31,
    gender: "male",
  },
  {
    id: 4,
    first_Name: "mary",
    last_Name: "marvis",
    age: 18,
    gender: "female",
  },
  {
    id: 5,
    first_Name: "Luke",
    last_Name: "Peters",
    age: 16,
    gender: "male",
  },
  {
    id: 6,
    first_Name: "gray",
    last_Name: "Styles",
    age: 13,
    gender: "female",
  },
  {
    id: 7,
    first_Name: "Bright",
    last_Name: "Donald",
    age: 40,
    gender: "male",
  },
];

const mapping = students.map((student, id) => {
  console.log(`${student.first_Name} won the match`);
});

const filter = students.filter((student, id) => {
  if (student.gender >= 18) {
    console.log(`${student.first_Name} ${student.last_Name} `, student.age);
  } else if (student.gender === "female") {
    console.log(`${student.first_Name} ${student.last_Name}`, student.age);
  } else if (student.gender === "male") {
    console.log(`${student.first_Name} ${student.last_Name}`, student.age);
  }
});

// const reducers = [10, 10, 10, 10, 50];
const reducers = ["mary", "xiaoli", "yumi", "zhaoxi"];
const reduce = reducers.reduce((total, num) => {
  return total - num;
});

console.log(reduce);
