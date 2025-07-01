const text = document.querySelector("h3");
const btn = document.querySelector("button");
let temp = 0;
btn.addEventListener("click", function () {
  if (temp === 0) {
    text.innerHTML = "Friends";
    text.style.color = "green";
    btn.innerHTML="Remove Friend"
    btn.style.width="45%"
    btn.style.backgroundColor="lightgrey"
    temp = 1;
  } else {
    text.innerHTML = "stranger";
    text.style.color = "red";
    btn.innerHTML="Add Friend"
    btn.style.width="40%"
    btn.style.backgroundColor="lightslategray"
    temp = 0;
  }
});
