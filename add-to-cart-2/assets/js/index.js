let procuctlist=[{
            id:1,
            image:"https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(1).png&w=828&q=75",
            heading:"Grey Sofa",
            rating:"3.5",
            color:"Black Blue Grey",
            price:"138.70",
            delprice:"150"
            
        },
        {
            id:2,
            image:"https://bonik-react.vercel.app/assets/images/Furniture%20Shop/Furniture%20(2).png",
            heading:"Black Sofa",
            rating:"4.0",
            color:"Black Blue Grey",
            price:"200",
            delprice:"250"

        },
        {
            id:3,
            image:"https://bonik-react.vercel.app/assets/images/Furniture%20Shop/Furniture%20(3).png",
            heading:"Comfortable Sofa",
            rating:"2.0",
            color:"Black Blue Grey",
            price:"200",

        },
        {
            id:4,
            image:"https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FFurniture%20Shop%2FFurniture%20(4).png&w=640&q=75",
            heading:"Study Chair",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"200",

        },
    ]

let cart=JSON.parse(localStorage.getItem("cart")) || []
let card=document.getElementById("card")
let counter=document.getElementById("counter")

function getStars(rating){

    let star=""

    for(i = 0;i < parseInt(rating);i++){
        star += `<i class="ri-star-s-fill"></i>`
    }

    if(rating - parseInt(rating) != 0){
        star+=`<i class="ri-star-half-line"></i>`
    }
    return star
}
// function addToCart(idx){

//     let cartIndex=cart.findIndex((product) =>{
//             return product.id == idx
//     })
//     console.log(cartIndex)

//     let procutToAdd=[]
//     if(cartIndex == -1){
//         procutToAdd = procuctlist.find((product)=>{
//             return product.id == idx
//         })
//         cart.push(procutToAdd)
//         procutToAdd.quantity=1
//     }
//     else{
//         cart[cartIndex].quantity++
//     }

//     localStorage.setItem("cart",JSON.stringify(cart))
//     updateCounter()
//     displayCart();


//   // Manually show the offcanvas using Bootstrap's JS API
//   let offcanvasEl = document.getElementById('cartOffcanvas');
//   let bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
//   bsOffcanvas.show();


// }

// function addToCart(idx) {
//     let cartIndex = cart.findIndex((product) => product.id == idx);

//     if (cartIndex == -1) {
//         let productToAdd = procuctlist.find((product) => product.id == idx);
//         if (productToAdd) { // Check if the product was found
//             productToAdd.quantity = 1;
//             cart.push(productToAdd);
//         }
//     } else {
//         cart[cartIndex].quantity++;
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCounter();

//     // Ensure displayCart is called and offcanvas is shown only if the function exists
//     if (typeof displayCart === 'function') {
//         displayCart();

//         // Manually show the offcanvas using Bootstrap's JS API
//         let offcanvasEl = document.getElementById('cartOffcanvas');
//         let bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
//         bsOffcanvas.show();
//     }
// }

function addToCart(idx) {
    let cartIndex = cart.findIndex((product) => product.id == idx);

    if (cartIndex == -1) {
        let productToAdd = procuctlist.find((product) => product.id == idx);
        if (productToAdd) { // Check if the product was found
            productToAdd.quantity = 1;
            cart.push(productToAdd);
        }
    } else {
        cart[cartIndex].quantity++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounter();

    // Call displayCart if the function exists
    if (typeof displayCart === 'function') {
        displayCart();
    }
    
    // Manually show the offcanvas using Bootstrap's JS API
    let offcanvasEl = document.getElementById('cartOffcanvas');
    let bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
    bsOffcanvas.show();
}
function displayProducts(){
    card.innerHTML=""
    procuctlist.forEach((product)=>{
        let deletedprice= product.delprice ? `<del>$${product.delprice}<del>` : ""
        card.innerHTML +=`
        <div class="col-lg-4">
                 <img class="img-fluid" src="${product.image}">
                <div class="d-flex align-items-center justify-content-between">
                <div>
                    <h3>${product.heading}</h3>
                    <h4 class="text-primary">$${product.price} <span class="text-danger ms-2">${deletedprice}</span></h4>
                    <h5 class="text-warning">${getStars(product.rating)}
                    <span class="text-success ms-2">${product.rating}</span>
                    </h5>
                </div>
                <div>
                    <button class="btn btn-warning me-4" onclick="addToCart(${product.id})">ShopNow</button>  
                </div>
                </div>   
        </div>                
        `
    })
}

function updateCounter(){
    counter.innerHTML=cart.length
}

displayProducts()
updateCounter()


