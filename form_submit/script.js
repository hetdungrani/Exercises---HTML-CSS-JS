let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let age = document.querySelector("#age");
let submit = document.querySelector("#submit");
let formselector = document.querySelector("#formselctor");
let userdata;

formselector.addEventListener("submit", function (e) {
  e.preventDefault();
  userdata = {
    Full_name: name.value,
    Email: email.value,
    Number: number.value,
    Age: age.value,
  };
  console.log(userdata);
});
