let frominput = document.querySelector("#frominput");
let toinput = document.querySelector("#toinput");

let fromselect = document.querySelector("#fromcountry");
let toselect = document.querySelector("#tocountry");

fromval = frominput.value;
toaval = toinput.value;
fromcun = fromselect.value;
tocun = toselect.value;

let currencyret = {
  usd: 1,
  inr: 83.12,
  pound: 0.79,
  euro: 0.92,
};

let finalval;
function calcourrency(key) {
  if (key == 1) {
    finalval = (fromval * currencyret[tocun]) / currencyret[fromcun];
    toinput.value = finalval;
  } else {
    finalval = (toval * currencyret[fromcun]) / currencyret[tocun];
    frominput.value = finalval;
  }
}
frominput.addEventListener("keyup", function (e) {
  fromval = e.target.value;
  calcourrency(1);
});

toinput.addEventListener("keyup", function (e) {
  toaval = e.target.value;
  calcourrency(2);
});

fromselect.addEventListener("change", function (e) {
  fromcun = e.target.value;
  calcourrency(1);
});

toselect.addEventListener("change", function (e) {
  tocun = e.target.value;
  calcourrency(1);
});
