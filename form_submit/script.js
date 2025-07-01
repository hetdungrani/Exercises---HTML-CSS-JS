let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let genderselector = document.getElementsByName("gender");
let age = document.querySelector("#age");
let submit = document.querySelector("#submit");
let formselector = document.querySelector("#formselctor");
let genderval;
let userdata;

formselector.addEventListener("submit", function (e) {
  e.preventDefault();
  for (const gender of genderselector) {
    if (gender.checked) {
      genderval = gender.value;
    }
  }
  userdata = {
    Full_name: name.value,
    Email: email.value,
    Number: number.value,
    Gender: genderval,
    Age: age.value,
  };
  console.log(userdata);
});
