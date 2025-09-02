let cart=JSON.parse(localStorage.getItem("cart")) || []

let cartItemElement=document.getElementById("cartItems")

let counter=document.getElementById("counter")

let clearBtn=document.getElementById("clearBtn")
let emptyCartImg=document.getElementById("empty")
let total=document.getElementById("mainTotal")
let cartTable =document.getElementById("cartTable")

if (cart.length <=0){
    emptyCartImg.classList.remove("d-none")
    clearBtn.classList.add("d-none")
}

function updateQuantity(idx,value){
    let currentQuantity=cart[idx].quantity

    let updatedQuantity=currentQuantity + value

    if(updatedQuantity ==0){
        deleteItem(idx)
    }
    else{
        cart[idx].quantity=updatedQuantity
    }
    updateCart()

}

function deleteItem(id){
    cart.splice(id,1)
    updateCart()

}

function displayCart(){
    let mainTotal=0
    
    cartItemElement.innerHTML=""
    if(cart.length <=0){
        mainTotal=0
        total.innerHTML=mainTotal
         cartTable.classList.add("d-none")
          emptyCartImg.classList.remove("d-none")
        return
        
    }
    cartTable.classList.remove("d-none")
    cart.forEach((product,idx)=>{
        let subTotal =product.quantity * product.price
        mainTotal += subTotal

        cartItemElement.innerHTML +=`
        <tr>
        <td><img class="img-fluid" style="width:80px; height:auto;"src="${product.image}"></td>
        <td>${product.heading}</td>
        <td>${product.price}</td>
        <td>
        <button class="btn btn-warning" onclick="updateQuantity(${idx},-1)">-</button>
        <span class="px-3">${product.quantity}</span>
         <button class="btn btn-warning" onclick="updateQuantity(${idx},1)">+</button>
        </td>
        <td>${subTotal.toFixed(2)}</td>
        <td><button class="btn btn-danger" onclick="deleteItem(${idx})">🗑</button></td>
        </tr>
        `
    })
    console.log(mainTotal)
    total.innerHTML=mainTotal.toFixed(2)
}
function updateCart(){

    localStorage.setItem("cart",JSON.stringify(cart))
    displayCart()
}

displayCart()