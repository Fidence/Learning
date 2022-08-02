const form = document.querySelector(".form");

const list = document.querySelector("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementsByName("input")[0];
  const value = input.value;
  addingLi(value);
  value = "";
});

const addingLi = (value) => {
  const items = document.querySelector("li");
  items.className = "list-item";
  const span = document.querySelector("span");
  span.className = "list-txt";
  span.innerText = value;
  const icon = document.querySelector("i");
  icon.className = "fa-solid fa-trash-can";
  items.append(span);
  items.append(icon);
  list.appendChild(items);
};

// document.addEventListener("click", () => {
//   const items = document.querySelector("li");
//   items.forEach((li) => {
//     li.children[1].addEventListener("click", () => {
//       list.removeChild(li);
//     });
//   });
// });
