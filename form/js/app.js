const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const small = document.querySelector("#small");
const success = document.querySelector(".success");
const error = document.querySelector(".error");

const errorBorder = document.querySelector(".error");
const errorBorder2 = form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
const checkInput = () => {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;
  // small.innerText = "Cannot be Blank";

  if (usernameValue === "") {
    setErrorFor(username);
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setErrorFor(email);
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setErrorFor(password);
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setErrorFor(password2);
  } else {
    setSuccess(password2);
  }

  username.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";
  console.log(usernameValue);
  console.log(emailValue);
  console.log(passwordValue);
  console.log(password2Value);
};
const setErrorFor = (input) => {
  const Wrap = input.parentElement;
  const small = Wrap.querySelector("#small");
  small.innerText = "Cannot be Blank";
  small.style.visibility = "visible";
  error.style.border = "2px solid #e74c3c";
  error.style.color = " #e74c3c";
};
const setSuccess = () => {
  small.style.display = "none";
  error.style.border = "2px solid  green";
};
