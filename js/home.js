
//AOS

AOS.init();

//Timer

var countDownDate = new Date("May 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".boxdays").innerHTML = days;
  document.querySelector(".boxhourse").innerHTML = hours;
  document.querySelector(".boxminutes").innerHTML = minutes;
  document.querySelector(".boxseonde").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function CountBasket(){

  let basket = JSON.parse(localStorage.getItem('basket'));

  let count = basket.length;

  document.querySelector('#countproduct').innerHTML = count;

  let totalmainindex = 0;

  for(let product of basket){


    mainprice = Number(product.Price.slice(1));

    totalindex = product.Count * mainprice

    totalmainindex+=totalindex;

  }

  document.getElementById('basketprice').innerHTML = kesr(totalmainindex);  

}
function kesr(x) {
  return Number.parseFloat(x).toFixed(2);
}
CountBasket();

