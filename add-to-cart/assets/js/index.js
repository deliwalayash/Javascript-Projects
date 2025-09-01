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

    let card=document.getElementById("card")
    let counter=document.getElementById("counter")

    function updatecounter(){

        let counterlength=cart.length
        counter.innerHTML=counterlength
    }
    function getstar(number){

        let num=parseInt(number)
        let starString=""
        for(i = 0;i <num;i++){
            starString += `<i class="ri-star-s-fill"></i>`
        }

        if(number - parseInt(number) !=0){
            starString+=`<i class="ri-star-half-line"></i>`
        }
        

        return starString

    }

    let cart=JSON.parse(localStorage.getItem("cart")) || []

    function addToCart(productId){
        
        const proudcttoAdd=procuctlist.find((product)=>{
            return product.id == productId
        })

        let findProuctIdx=cart.findIndex((element) => {
                return element.id == productId
        });

        if(findProuctIdx == -1){
            cart.push(proudcttoAdd)
            proudcttoAdd.quantity=1
        }
        else{
            cart[findProuctIdx].quantity++
        }

        displayCart()
    }


       function updateQuantity(productId, value){  
           let idx = cart.findIndex(item => item.id == productId);
           if (idx === -1 && value > 0) {
            addToCart(productId);
            displayCart()
            return;
    }
          let currentQty = cart[idx].quantity || 0;
        if (idx > -1) {
        let newQuantity = currentQty + value;
        if (newQuantity <= 0) {
            cart.splice(idx, 1); // remove item if quantity goes 0
        } else {
            cart[idx].quantity = newQuantity;
        }
    }
    displayCart()
}

function displayCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updatecounter();
    renderProducts()
    
}
    
function renderProducts(){
    card.innerHTML=""

    procuctlist.forEach((data)=>{
        let deletedprice = data.delprice ? `<del>$${data.delprice}</del>` :""

        let cartItem = cart.find(item => item.id === data.id);
        let quantity = cartItem ? cartItem.quantity : 0;
        card.innerHTML += `<div class="col-lg-4 ">
            <img src="${data.image}" class="img-fluid">
            <h4>${data.heading}</h4>
            <h5 class="text-warning">${getstar(data.rating)}
            <span class="text-dark">(${data.rating})</span>
            </h5>
        
            <div class="d-flex justify-content-between">
            <h3 class="price">$${data.price}

            <del class="text-dark ms-4">${deletedprice}</del>
            </h3>
            <div>
            
            </div>
            
            
            
            </div>
            <div class="d-flex">
            <button class="btn btn-warning" onclick="updateQuantity(${data.id},-1)">-</button>
            <input class="form-control w-25 text-center" value=${quantity || 0} readonly>
            <button class="btn btn-warning" onclick="updateQuantity(${data.id},1)">+</button>
            </div>
        </div>`
    })

}

   const categoryToggle = document.getElementById("categoryToggle");
const categoryMenu = document.getElementById("categoryMenu");

if (categoryToggle && categoryMenu) {
    categoryToggle.addEventListener("click", function () {
        categoryMenu.classList.toggle("d-none");
    });

    document.addEventListener("click", function (event) {
        if (!categoryMenu.contains(event.target) && !categoryToggle.contains(event.target)) {
            categoryMenu.classList.add("d-none");
        }
    });
}
renderProducts()
updatecounter()

