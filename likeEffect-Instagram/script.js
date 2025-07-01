const img = document.querySelector("#imgs");
const like = document.querySelector("i");

img.addEventListener("dblclick", function () {
  like.style.transform = "translate(-50%,-50%) scale(1)";
  like.style.opacity = 0.8;

  setTimeout(function() {
    like.style.opacity=0;
  }, 1000);

  setTimeout(function() {
    like.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});
