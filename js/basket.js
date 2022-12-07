
function  BasketDiv() {

    let basket = JSON.parse(localStorage.getItem('basket'))

    if(basket.length == 0){
        document.querySelector('.emptybasket').classList.remove('d-none');

        document.querySelector('.cartproduct').classList.add('d-none');

        document.querySelector('.contentbasketbox').classList.add('d-none');
    }else{
        document.querySelector('.emptybasket').classList.add('d-none');

        document.querySelector('.cartproduct').classList.remove('d-none');
       
        document.querySelector('.contentbasketbox').classList.remove('d-none');


        var totalprice = 0;

        for(let product of basket){

            let price = product.Price;
            price = price.slice(1);
            price = Number(price);
            let count = Number(product.Count);
            total = 0;
            total = price*count;
            totalprice+=total;
        }

        document.querySelector('#msubtotal').innerHTML = kesr(totalprice);

        var  myproduct = "";

        for(let product of basket){
            
            myproduct+= `

                    <div class="basketbox col-12 mt-3">
                        <div id="${product.Id}" class="row align-items-center">
                        
                            <div class="col-lg-2">
                                <div class="productimg">
                                    <img src="${product.Img}" alt="">
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="productname">
                                    <h3>${product.Name}</h3>
                                </div>
                            </div>    
                            

                            <div class="col-lg-2">
                                <div class="productprice">
                                    <h3 id="price">${product.Price}</h3>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="quality">
                                    <span id="minus"><i class="fa-solid fa-minus"></i></span>
                                    <span id="count">${product.Count}</span>
                                    <span id="plus"><i class="fa-solid fa-plus"></i></span>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="subtotalproduct">
                                    <h3 id="subtotal">${kesr( (Number(product.Count) * Number(product.Price.slice(1))) )}</h3>
                                </div>
                            </div>

                            <div class="col-lg-1">
                                <div class="removesicons">
                                    <i id="reomovesicon" class="fa-solid fa-x"></i>
                                </div>
                            </div>

                        </div>   
                    </div>
            
            `

            document.getElementById('list').innerHTML = myproduct;            

        }


        let minus = document.querySelectorAll('#minus');
        let plus = document.querySelectorAll('#plus');
        let number =  1;
        
        plus.forEach(element => {
            element.addEventListener('click',()=>{
                basket.forEach(e=>{
                    if(element.parentElement.parentElement.parentElement.getAttribute('id') == e.Id){

                        e.Count++;
                        element.parentElement.children[1].innerHTML = e.Count;
                        localStorage.setItem('basket',JSON.stringify(basket));
                            BasketDiv();
                    }
                })

            })
        });


        minus.forEach(element => {
            element.addEventListener('click',()=>{
                basket.forEach(e=>{
                    if(element.parentElement.parentElement.parentElement.getAttribute('id') == e.Id){

                        if(e.Count>0){
                            e.Count--;
                            element.parentElement.children[1].innerHTML = e.Count;
                            localStorage.setItem('basket',JSON.stringify(basket));
                            BasketDiv();
                        }
                    }
                })

            })
        });


        document.querySelector('#basketreset').addEventListener('click',()=>{
            basket=[];
            localStorage.setItem('basket',JSON.stringify(basket));
            BasketDiv();
            CountBasket();
        })

        let reomovesicon = document.querySelectorAll('#reomovesicon');

        reomovesicon.forEach(element => {
            element.addEventListener('click',()=>{

                let removeelement = element.parentElement.parentElement.parentElement.getAttribute('id');
                let carts = document.querySelectorAll('.basketbox');
                
                for(let i=0; i<basket.length; i++){
                    if(basket[i].Id == removeelement){
                        let undoitem = basket[i];
                        let unprice = basket[i].Price;
                        unprice = unprice.slice(1);
                        console.log(unprice);
                        unprice = Number(unprice);
                        let undototal   = totalprice - (Number(basket[i].Count) * unprice);
                        totalprice = undototal
                        document.querySelector('#msubtotal').innerHTML = kesr(undototal)
                        document.querySelector('#basketprice').innerHTML=kesr(undototal)
                        basket.splice(i,i);
                        document.querySelector('#undo').style.visibility = 'visible';
                        document.querySelector('#undo').style.opacity = '1';
                        


                        setTimeout(() => {
                            
                            document.querySelector('#undo').style.visibility = 'hidden';
                            document.querySelector('#undo').style.opacity = '0';
                            if(basket.length == 1){
                                basket = [];
                                localStorage.setItem('basket',JSON.stringify(basket));
                                location.reload();
                            }
                        }, 500);
                            

                        

                        document.querySelector('#undo').addEventListener('click',()=>{
                            basket.push(undoitem);
                            let unpricep = undoitem.Price;
                            unpricep = unpricep.slice(1);
                            console.log(unpricep);
                            unpricep = Number(unpricep);
                            let undototalp   = totalprice + (Number(basket[i].Count) * unprice);
                            totalprice = undototalp;
                            document.querySelector('#msubtotal').innerHTML = kesr(undototalp)

                            document.getElementById('list').innerHTML = myproduct;
                            document.querySelector('#basketprice').innerHTML = kesr(undototalp)
                            
                            CountBasket();
                            
                        })

                    }

                }

                carts.forEach(element => {
                    if(element.children[0].getAttribute('id') == removeelement){
                        element.remove();
                    }
                });

                

                //basket.find(element => element.Id === removeelement);
                localStorage.setItem('basket',JSON.stringify(basket));    
            })
        });


    }

}




BasketDiv();

function kesr(x) {
    return Number.parseFloat(x).toFixed(2);
}