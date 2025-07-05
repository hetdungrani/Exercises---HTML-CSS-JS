const box = document.querySelectorAll(".box");
box.forEach(function (e) {
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
