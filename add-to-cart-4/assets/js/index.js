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
         {
            id:5,
            image:"https://preview.redd.it/sharing-my-workflow-for-how-to-remove-background-in-a1111-v0-ik008g1kyyua1.png?width=800&format=png&auto=webp&s=e3cd20bdcbdfd1967808b5d6f4be34db029aaead",
            heading:"Study Chair",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"300",

        },
        {
            id:6,
            image:"https://img.freepik.com/free-vector/modern-beige-sofa-realistic-icon-white-background-vector-illustration_1284-67384.jpg",
            heading:"Sofa",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"300",

        },
        {
            id:7,
            image:"https://www.ulcdn.net/images/products/921639/original/Werner_Study_Chair_Nylon_Base_LP.jpg?1722319626",
            heading:"Dining Table",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:8,
            image:"https://i.pinimg.com/736x/91/a2/b8/91a2b8d0d2cf734b86240d10f58a9c41.jpg",
            heading:"Dining Table",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:9,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpM81K9-ZUQGlYvg7_elqdRMQtddp-FhbNg&s",
            heading:"Office Chair",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:10,
            image:"https://www.wfhtable.com/cdn/shop/files/2K2A6407-removebg-PhotoRoom.png?v=1691414530&width=1946",
             heading:"Office Chair",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:11,
            image:"https://decorativefair.com/wp-content/uploads/2024/06/Z50_1413_Mirror_Fronted_cabinet-removebg.png",
             heading:"Cup Board",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:12,
            image:"https://thumbs.dreamstime.com/b/wooden-wardrobe-isolated-white-transparent-background-closed-brown-close-up-front-view-graphic-design-element-theme-312240807.jpg",
             heading:"Cup Board",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",

        },
        {
            id:13,
            image:"https://img.freepik.com/premium-photo/table-computer_692498-1924.jpg?semt=ais_hybrid&w=740&q=80",
            heading:"Computer Table",
            rating:"4.3",
            color:"Black Blue Grey",
            price:"250",
            
        },
    ]

let cart=JSON.parse(localStorage.getItem("cart")) || []
let card=document.getElementById("card")
let counter=document.getElementById("counter")
let totalquantity = JSON.parse(localStorage.getItem("totalquantity")) || 0
let totalitemsnumber=document.getElementById("totalitemsnumber")
let submit=document.getElementById("sbt")
let mainbanner=document.getElementById("mainbanner")
let searchproducts=document.getElementById("searchproducts")
let searchcart=document.getElementById("searchcart")

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

function gettotalitems(){

    totalquantity++
    localStorage.setItem("totalquantity",JSON.stringify(totalquantity))
    totalitemsnumber.innerHTML=totalquantity
}
function addToCart(idx) {
    let cartIndex = cart.findIndex((product) => product.id == idx);

    if (cartIndex == -1) {
        let productToAdd = procuctlist.find((product) => product.id == idx);
         // Check if the product was found
            productToAdd.quantity = 1;
            cart.push(productToAdd);
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product is Added to Cart",
            showConfirmButton: false,
            timer: 1500
        });
      
    } else {
        cart[cartIndex].quantity++;
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Total Product Quantity is ${cart[cartIndex].quantity}` ,
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    localStorage.setItem("cart", JSON.stringify(cart));
   
    updateCounter();

}
function displayProducts(){
    card.innerHTML=""
    procuctlist.forEach((product)=>{
        let deletedprice= product.delprice ? `<del>$${product.delprice}<del>` : ""
        card.innerHTML +=`
        <div class="col-lg-4 col-md-6">
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
addEventListener("DOMContentLoaded",function(){
    totalitemsnumber.innerHTML=totalquantity
})

submit.addEventListener("click",function(e){

    e.preventDefault()

    let search=document.getElementById("search").value
    mainbanner.classList.add("d-none")
    searchproducts.classList.remove("d-none")

    let foundproducts=procuctlist.filter((product)=>{
        return product.heading.toLowerCase().includes(search)
    })
    if(foundproducts.length == 0){
         searchcart.innerHTML=`<h1 class="text-center text-danger">No Products Found</h1>`
          mainbanner.classList.remove("d-none")
         return
    }
    searchcart.innerHTML=""
    foundproducts.forEach((product)=>{
        let deletedprice= product.delprice ? `<del>$${product.delprice}<del>` : ""
        searchcart.innerHTML += `
        
        <div class="col-lg-4 col-md-6">
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

    
})

function copyPromo() {
  let promo = document.getElementById("promoCode");
  navigator.clipboard.writeText(promo.value);
  alert("Promo code copied: " + promo.value);
}

setTimeout(()=>{
    var promoModal = new bootstrap.Modal(document.getElementById('promoModal'));
    promoModal.show();
},1000);



