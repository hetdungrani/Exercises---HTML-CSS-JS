const main = document.querySelector(".main");
const crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (e) {
  crsr.style.left = e.x -5 + "px";
  crsr.style.top = e.y + "px";
});
