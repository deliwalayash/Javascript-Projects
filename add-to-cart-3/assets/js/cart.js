let counter = document.getElementById("counter")
let clearBtn = document.getElementById("clearBtn")
let empty = document.getElementById("empty")
let cartTable = document.getElementById("cartTable")
let cartItem = document.getElementById("cartItem")
let total = document.getElementById("mainTotal")
let totalitems = JSON.parse(localStorage.getItem("totalitems")) || 0
let totalitemcount = document.getElementById("totalitemcount")

let cart = JSON.parse(localStorage.getItem("cart")) || []

totalitemcount.innerHTML = totalitems;

function deleteitem(idx) {
    totalitems =totalitems - cart[idx].quantity  
    totalitemcount.innerHTML = totalitems
    localStorage.setItem("totalitems", JSON.stringify(totalitems))

    cart.splice(idx, 1)
    updateCart()
   

}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    displayCart()
}

function updateQuantity(idx, value) {

    let updatedQuantity = cart[idx].quantity + value
    

    if (updatedQuantity <= 0) {
        deleteitem(idx)
    }
    else {
        cart[idx].quantity = updatedQuantity
        updateTotalitems(value)
    }
    updateCart()
}

function updateTotalitems(value) {
    totalitems += value
    totalitemcount.innerHTML = totalitems
    localStorage.setItem("totalitems", JSON.stringify(totalitems))
}

function displayCart() {

    let mainTotal = 0
    if (cart.length <= 0) {
        empty.classList.remove("d-none")
        mainTotal = 0
        counter.innerHTML = 0
        total.innerHTML = mainTotal
        cartTable.classList.add("d-none")
        return
    }

    cartTable.classList.remove("d-none")
    cartItem.innerHTML = ""

    cart.forEach((product, idx) => {
        let subTotal = product.price * product.quantity
        mainTotal += subTotal
        cartItem.innerHTML += `
        <tr>
        <td><img class="img fluid" src="${product.image}"<td>
        <td><h4>${product.heading}</h4></td>
        <td><h4>$${product.price}</h4></td>
        <td><h4>${product.quantity}</h4></td>
        <td><h4>$${subTotal.toFixed(2)}</h4></td>
        <td>
        <button class="btn btn-warning" onclick="updateQuantity(${idx},-1)">-</button>
        <button class="btn btn-danger" onclick="deleteitem(${idx})">🗑</button>
        <button class="btn btn-warning" onclick="updateQuantity(${idx},1)">+</button>
        </td>

        </tr>
      `
    })
    total.innerHTML = `$ ${mainTotal.toFixed(2)}`
    counter.innerHTML = cart.length


}

clearBtn.addEventListener("click", function () {
    cart = []
    updateCart()
    totalitems = 0
    localStorage.setItem("totalitems", JSON.stringify(totalitems))
     totalitemcount.innerHTML = totalitems


})

displayCart()