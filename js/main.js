// Get the modal
var modal = document.getElementById("pcmyModal");

// Get the button that opens the modal
var btn = document.getElementById("pcmyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pcclose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var mobilmodal = document.getElementById("myModal");

// Get the button that opens the modal
var mobilbtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var mobilspan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
mobilbtn.onclick = function() {
  mobilmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
mobilspan.onclick = function() {
  mobilmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mobilmodal) {
    mobilmodal.style.display = "none";
  }
}


//Side Bar
let menu = document.querySelectorAll("#menu");
let bottommenu = document.querySelector('#bottommenu');
let sidebar = document.querySelector("#sidebar");
let sidebarclose = document.querySelector("#sidebarclose");

menu.forEach(element => {
  element.addEventListener('click' , () => {
    sidebar.style.visibility = "visible"
    sidebar.style.width = "100%"
  })
});

sidebarclose.addEventListener('click',()=>{
  sidebar.style.visibility = "hidden"
  sidebar.style.width = "0%"
})




//ALL CATAGORIES BUTTON
$(document).ready(function(){

  //Footer Nav Searh
  $('#searchicons').click(function(){
    $('.hcsearch').slideToggle();
  })

  //Header Catagories Bar
  $(".atext").click(function(){
    $(".categoriesbar").slideToggle();
  });

  //
  $(".sbatext").click(function(){
    $(".sbcategoriesbar").slideToggle();
  });

  $(".Fruitsmbdropbtn").click(function(){
    $(".Fruitsdropdownli").slideToggle();
  })

  $(".Beveragesmbdropbtn").click(function(){
    $(".Beveragesdropdownli").slideToggle();
  })

  $(".lchome").click(function(){
    $(".sbfhome").slideToggle();
  })

  $(".lcshop").click(function(){
    $(".sbfShop").slideToggle();
  })

  $(".lchange").click(function(){
    $(".languagechange").slideToggle();
  })

  $(".lmoneychange").click(function(){
    $(".moneychange").slideToggle();
  })

});

//Basket

let carts = document.querySelectorAll('.carts');

let addbtn = document.querySelectorAll('#addbtn');


addbtn.forEach(e => {
  e.addEventListener('click',()=>{

    if(localStorage.getItem('basket')===null) {
      localStorage.setItem('basket',JSON.stringify([]))
    }

    let basket = JSON.parse(localStorage.getItem('basket'));

    var maindiv = e.parentElement.parentElement.children[1];
    var productimg = maindiv.children[0].children[0].children[0].src;
    var productname = maindiv.children[1].children[1].innerHTML;
    var productprice = maindiv.children[1].children[4].children[1].innerHTML;
    var productid = maindiv.parentElement.getAttribute('id');
    var nproductname = document.querySelector('#nproductname');
    var nproductcount = document.querySelector('#nproductcount');
    var notification = document.querySelector('#notification');

    let exists = false;

    for(let product of basket){
      if(product.Id == productid){
        product.Count++;
        exists = true;

        notification.style.visibility = 'visible';
        notification.style.opacity = '1';
        nproductcount.innerHTML ='x' + product.Count;
        nproductname.innerHTML = product.Name + ' has been added to your cart';

        setTimeout(() => {
          notification.style.visibility = 'hidden';
          notification.style.opacity = '0';
        }, 500);
        
        

      }

      localStorage.setItem('basket',JSON.stringify(basket));

    }

    if(!exists){

        basket.push({
          Img:productimg,
          Name:productname,
          Price:productprice,
          Count : 1,
          Id : productid
        });

        nproductcount.innerHTML ='x' + 1;
        nproductname.innerHTML = productname + ' has been added to your cart';
        notification.style.visibility = 'visible';
        notification.style.opacity = '1';

        setTimeout(() => {
          notification.style.visibility = 'hidden';
          notification.style.opacity = '0';
        }, 500);



        localStorage.setItem('basket',JSON.stringify(basket));

        CountBasket();

    }

    CountBasket();
  });
  
});

//Basket Count
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

  document.querySelector('#basketprice').innerHTML = kesr(totalmainindex);

}

CountBasket();



