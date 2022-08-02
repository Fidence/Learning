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

for (let i = 0; i <= students.length; i++) {
  if (students[i].age >= 18) {
    console.log(students[i].id, students[i].first_Name, students[i].age);
  }
}
// for (let i = 0; i <= students.length; i++) {
//   if (students[i].age < 18) {
//     console.log(students[i].id, students[i].first_Name, students[i].age);
//   }
// }
