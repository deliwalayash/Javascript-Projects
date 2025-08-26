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

procuctlist.forEach((data,idx)=>{
    let deletedprice = data.delprice ? `<del>$${data.delprice}</del>` :""
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
        <button class="add-to-cart-btn me-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-plus "><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>
        </button>
        </div>
        </div>
      
       
    </div>`
})
