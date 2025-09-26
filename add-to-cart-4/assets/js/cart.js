let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalquantity = JSON.parse(localStorage.getItem("totalquantity")) || 0;

let cartItemElement = document.getElementById("cartItems");
let counter = document.getElementById("counter");
let clearBtn = document.getElementById("clearBtn");
let emptyCartImg = document.getElementById("empty");
let total = document.getElementById("mainTotal");
let cartTable = document.getElementById("cartTable");
let totalitemsnumber = document.getElementById("totalitemsnumber");

// Show empty cart if needed
if (cart.length <= 0) {
    emptyCartImg.classList.remove("d-none");
    clearBtn.classList.add("d-none");
}

// Update quantity
function updateQuantity(idx, value) {
    let currentQuantity = cart[idx].quantity;
    let updatedQuantity = currentQuantity + value;

    if (updatedQuantity <= 0) {
        deleteItem(idx);
    } else {
        cart[idx].quantity = updatedQuantity;
        totalquantity += value;
        totalitemsnumber.innerHTML = totalquantity;
        localStorage.setItem("totalquantity", JSON.stringify(totalquantity));
    }
    updateCart();
}

// Delete item
function deleteItem(id) {
    totalquantity -= cart[id].quantity;
    totalitemsnumber.innerHTML = totalquantity;
    localStorage.setItem("totalquantity", JSON.stringify(totalquantity));

    cart.splice(id, 1);
    updateCart();
    counter.innerHTML = cart.length;
}

// Display cart
function displayCart() {
    let mainTotal = 0;
    cartItemElement.innerHTML = "";

    if (cart.length <= 0) {
        total.innerHTML = "$0";
        cartTable.classList.add("d-none");
        emptyCartImg.classList.remove("d-none");
        return;
    }

    cartTable.classList.remove("d-none");
    cart.forEach((product, idx) => {
        let subTotal = product.quantity * product.price;
        mainTotal += subTotal;

        cartItemElement.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td><img class="img-fluid" style="width:80px; height:auto;" src="${product.image}"></td>
            <td>${product.heading}</td>
            <td>$${product.price}</td>
            <td>
                <div class="d-flex align-items-center justify-content-center">  
                    <button class="btn btn-warning" onclick="updateQuantity(${idx},-1)">-</button>
                    <span class="px-3">${product.quantity}</span>
                    <button class="btn btn-warning" onclick="updateQuantity(${idx},1)">+</button>
                </div>
            </td>
            <td>$${subTotal.toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="deleteItem(${idx})">🗑</button></td>
        </tr>
        `;
    });

    total.innerHTML = `$${mainTotal.toFixed(2)}`;
    counter.innerHTML = cart.length;
}

// Update cart
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Clear cart
clearBtn.addEventListener("click", () => {
    cart = [];
    counter.innerHTML = cart.length;
    totalquantity = 0;
    totalitemsnumber.innerHTML = totalquantity;
    localStorage.setItem("totalquantity", JSON.stringify(totalquantity));
    updateCart();
});

displayCart();
document.addEventListener("DOMContentLoaded", () => {
    totalitemsnumber.innerHTML = totalquantity;
});

// Apply promo
function applyPromo() {
    let promoCode = document.getElementById("promoInput").value.trim();
    let cartTotal = parseFloat(total.innerText.replace("$", ""));

    if (promoCode === "BONIK10") {
        let discount = cartTotal * 0.10;
        let finalTotal = cartTotal - discount;

        document.getElementById("discount").innerText = "₹" + discount.toFixed(2);
        document.getElementById("finalTotal").innerText = "₹" + finalTotal.toFixed(2);
        document.getElementById("discountSection").classList.remove("d-none");

        alert("🎉 Promo applied! You saved ₹" + discount.toFixed(2));
        bootstrap.Modal.getInstance(document.getElementById("promoModal")).hide();
    } else {
        alert("❌ Invalid promo code");
    }
}
