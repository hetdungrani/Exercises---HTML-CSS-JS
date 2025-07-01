// const box1 = document.querySelector("#box1");
// const img1 = document.querySelector("#img1");

// box1.addEventListener("mousemove", function (e) {
//   img1.style.left = e.x + "px";
//   img1.style.top = e.y + "px";
// });
// box1.addEventListener("mouseenter", function (e) {
//   img1.style.opacity = 1;
// });
// box1.addEventListener("mouseleave", function (e) {
//   img1.style.opacity = 0;
// });

const box = document.querySelectorAll(".box");

box.forEach(function (e) {
  // console.log(e.childNodes[3])

  e.addEventListener("mouseenter", function () {
    e.childNodes[3].style.opacity = 1;
  });
  e.addEventListener("mouseleave", function () {
    e.childNodes[3].style.opacity = 0;
  });
  e.addEventListener("mousemove", function (val) {
    e.childNodes[3].style.left = val.x + "px";
  });
});
