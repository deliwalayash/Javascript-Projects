let arr=[1,2,3,4,5,6,7,8]

let newArr=arr.filter( data => {
    return (data % 2==0)  // here we can write only boolen in condtion
})

//in filte we have to write condition only in return type

console.log(newArr)

let age=[5,10,18,25,30,2,4,6]
console.log(age)

let newage=age.filter( data => {
    return data >=18
})

console.log(newage)