
$(document).ready(function(){

  let a=0;
  $(".bplus").click(function(){
    a++;
    
    if(a%2==0){
      this.style.transform = "rotate(0deg)"
    }else{
      this.style.transform = "rotate(45deg)"
    }
    $("#beverages").slideToggle();
  })

  $(".brplus").click(function(){

    a++;
    
    if(a%2==0){
      this.style.transform = "rotate(0deg)"
    }else{
      this.style.transform = "rotate(45deg)"
    }
    $("#breads").slideToggle();
  })

  $(".breplus").click(function(){
    a++;
    
    if(a%2==0){
      this.style.transform = "rotate(0deg)"
    }else{
      this.style.transform = "rotate(45deg)"
    }
    $("#breakfast").slideToggle();
  })

  $(".vgplus").click(function(){
    a++;
    
    if(a%2==0){
      this.style.transform = "rotate(0deg)"
    }else{
      this.style.transform = "rotate(45deg)"
    }
    $("#Vegetables").slideToggle();
  })

  $(".mplus").click(function(){
    a++;
    
    if(a%2==0){
      this.style.transform = "rotate(0deg)"
    }else{
      this.style.transform = "rotate(45deg)"
    }
    $("#Meats").slideToggle();
  })
})


let carts = document.querySelectorAll("#list");

let icons4 = document.querySelector('.fourcarts');

let icons5 = document.querySelector('.fivecarts');

let icons3 = document.querySelector('.threecarts');

icons3.addEventListener('click',function () {
    carts.forEach(cart => {
      cart.style.width = '33%';
    });
  })

icons4.addEventListener('click',()=>{
  carts.forEach(cart => {
    cart.style.width = '25%';
  });
})

icons5.addEventListener('click',()=>{
  carts.forEach(cart => {
    cart.style.width = '20%';
  });
})