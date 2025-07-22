let arr=[1,2,3,4,5,6,10,13,17,18,19,22,14,5]


let newarr2 = arr.findLast((data) =>{
    return data % 2 ==0
})

console.log(newarr2)