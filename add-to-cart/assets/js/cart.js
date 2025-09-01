let cart=JSON.parse(localStorage.getItem("cart")) || []
const clearBtn=document.getElementById("clearBtn")
const empty=document.getElementById("empty")
let cartItemEle=document.getElementById("cartItems")
const mainTotalEle=document.getElementById("mainTotal")
const counter=document.getElementById("counter")
const checkOut=document.getElementById("checkOut")

if(cart.length > 0){
    clearBtn.classList.remove("d-none");
}

function clearCart(ele){
    // cart=[]
    empty.classList.remove("d-none")
    // localStorage.setItem("cart",JSON.stringify(cart))
    localStorage.removeItem("cart")
    displayCart()
    ele.classList.add("d-none")
    counter.innerHTML=0


}
function deleteitem(idx){
    cart.splice(idx,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displayCart()
}

function updateQuantity(idx,value){
    let newQuanity=cart[idx].quantity + value

    if(newQuanity <=0){
        deleteitem(idx)
    }
    else{
        cart[idx].quantity=newQuanity
    }
    displayCart()

    localStorage.setItem("cart",JSON.stringify(cart))
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
            <div class="row align-items-center">
                <div class="col-2">
                 <img class="img img-fluid" src="${item.image}"></img>
                </div>
                <div class="col-2">
                    <h3>${item.heading}</h3>
                   
                </div>
                <div class="col-2">
                    <h2>$${item.price}</h2>
                   
                </div>
                <div class="col-2">
                    <div class="d-flex">
                        <button class="btn btn-primary" onclick="updateQuantity(${idx},-1)">-</button>
                        <input type="text" class="form-control w-25 text-center" value="${item.quantity}" readonly>
                        <button class="btn btn-primary" onclick="updateQuantity(${idx},1)">+</button>
                    </div>
                </div>
               <div class="col-2">
               <h4 class="text-success">Total-->$${subTotal.toFixed(2)}</h4>
               </div>
               <div class="col-2">
               <button class="btn btn-danger" onclick="deleteitem(${idx})"> <i class="ri-delete-bin-line"></i></button>
               </div>
            </div>
            `
             })

    mainTotalEle.innerHTML=mainTotal.toFixed(2)
    counter.innerHTML=cart.length
}
displayCart()