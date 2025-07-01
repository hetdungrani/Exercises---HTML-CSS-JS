const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const rendomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;
const startChange = function () {
  intervalID = setInterval(function () {
    document.body.style.backgroundColor = rendomColor();
  }, 1000);
};

const stopChange = function () {
  clearInterval(intervalID);
  intervalID = null;
  //  document.body.style.backgroundColor = rendomColor();
};

start.addEventListener("click", startChange);
stop.addEventListener("click", stopChange);
stop.addEventListener('dblclick',function(){
    document.body.style.backgroundColor = "white";
})
