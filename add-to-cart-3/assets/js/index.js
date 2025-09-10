let productlist=[{
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
            heading:"Comfort Sofa",
            rating:"2.0",
            color:"Black Blue Grey",
            price:"200",

        },
        {
            id:4,
            image:"https://t3.ftcdn.net/jpg/07/87/91/12/360_F_787911262_MYp3F5AWAM1WsT21ZA4CfWOjuphNmmt0.jpg",
            heading:"Study Sofa",
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
    let counter=document.getElementById("counter")
    let card=document.getElementById("card")
    let submitbtn=document.getElementById("sbt")
    let mainsection=document.getElementById("main")
    let searchproducts=document.getElementById("searchproducts")
    let totalitems =0
   

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

function addToCart(id){

    let cartIndex=cart.findIndex((product)=>{
            return product.id == id
    })

    if (cartIndex == -1){
        let productToadd=productlist.find((product)=>{
            return product.id == id
        })
        cart.push(productToadd)
        productToadd.quantity=1
    }
    else{
        cart[cartIndex].quantity++
    }

    localStorage.setItem("cart",JSON.stringify(cart))
    updateCounter()
}

function updateCount(){
    totalitems++
    displayProducts()
    localStorage.setItem("totalitems",JSON.stringify(totalitems))

}

function displayProducts(){

        productlist.forEach((product,idx)=>{
            let deletedprice= product.delprice ? `<del>$${product.delprice} </del>` : ""
            card.innerHTML += `
            <div class="col-lg-4">
                        <img class="img-fluid" src="${product.image}">
                        <h3>${product.heading}</h3>
                        <h4 class="text-primary">$${product.price}
                        <span class="text-danger">${deletedprice}</span>
                        </h4>
                        <h4 class="text-warning">${getStars(product.rating)}
                        <span class="text-primary">${product.rating}</span>
                        </h4>
                        <button class="btn btn-warning" onclick="addToCart(${product.id});updateCount()">Shop Now</button>
            </div>
                        `
        })
        updateCounter()
}

function updateCounter(){
    counter.innerHTML = totalitems
}

displayProducts()


submitbtn.addEventListener("click",function(e){
    e.preventDefault()
     let search=document.getElementById("search").value.toLowerCase()
    mainsection.classList.add("d-none")
    findproducts.classList.remove("d-none")

    let newproducts=productlist.filter((product)=>{
        return product.heading.toLowerCase().includes(search)
    })

    if(newproducts.length ==0){
        searchproducts.innerHTML ="<h3 class='text-danger text-center'>No Products Found</h3>"
         mainsection.classList.remove("d-none")
        return
    }

    searchproducts.innerHTML=""
    newproducts.forEach((product)=>{
            let deletedprice= product.delprice ? `<del>$${product.delprice} </del>` : ""
            searchproducts.innerHTML += `
            <div class="col-lg-4">
                        <img class="img-fluid" src="${product.image}">
                        <h3>${product.heading}</h3>
                        <h4 class="text-primary">$${product.price}
                        <span class="text-danger">${deletedprice}</span>
                        </h4>
                        <h4 class="text-warning">${getStars(product.rating)}
                        <span class="text-primary">${product.rating}</span>
                        </h4>
                        <button class="btn btn-warning" onclick="addToCart(${product.id})">Shop Now</button>
                       </div> `
    })
})






