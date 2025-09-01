let cart=JSON.parse(localStorage.getItem("cart")) || []
const clearBtn=document.getElementById("clearBtn")
const empty=document.getElementById("empty")
let cartItemEle=document.getElementById("cartItem")
const mainTotal=document.getElementById("mainTotal")
const counter=document.getElementById("counter")
const checkOut=document.getElementById("checkOut")

if(cart.length > 0){
    clearBtn.classList.remove("d-none");
}

function displayCart(){
    let mainTotal=0
    cartItemEle.innerHTML=""
    counter.innerHTML=cart.length

    if(cart.length <=0){
        empty.classList.remove("d-none")
        cartItemEle.innerHTML=""
        counter.innerHTML=cart.length
        checkOut.classList.add("d-none")
        return
    }

    checkOut.classList.remove("d-none")

    cart.forEach((item,idx)=>{
            let subTotal=item.quantity * item.price
            mainTotal +=subTotal

            cartItemEle.innerHTML+=`
            <div class="row">
                <div class="col-3">
                 <img class="img img-fluid" src="${item.image}"></img>
                </div>
                <div class="col-3">
                    <h3>${item.heading}</h3>
                    <h2>${item.price}</h2>
                </div>
                <div class="col-3">
                    <div class="d-flex">
                        <button class="btn btn-primary">-</button>
                        <input type="text" class="form-control" value="${item.price}" readonly>
                        <button class="btn btn-primary">+</button>
                    </div>
                </div>
               <div class="col-3">
               <h3>${subTotal}</h3>
               </div>
            </div>
            `
    })

    
}