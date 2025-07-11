let arr = [10,20,30,40,50,60]

let arr2 =[1,3,5,7,9,11]

let val=arr.findIndex((val) =>{
    return val % 2 ==0;  // if true than returns index if false returns -1
})

console.log(val)// but we can not write if val % 2 ===0,we have to directly write conditon in return function

let age=[1,2,3,18,20]



let val2=age.findIndex(myfunction)

function myfunction(value){
    return value > 18
}

console.log(age.findIndex(myfunction))