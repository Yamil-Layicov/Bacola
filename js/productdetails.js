$('.productimgslider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear'
});

let minus = document.querySelector('#minus');
let number = document.querySelector('#count');
let plus = document.querySelector('#plus');

let count = 1;

minus.addEventListener('click',()=>{
    if(count > 1){
        count--;
        number.innerHTML = count;
    }
})

plus.addEventListener('click',()=>{
    count++;
    number.innerHTML = count;

})

