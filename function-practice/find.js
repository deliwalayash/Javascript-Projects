let arr =[10,2,3,4,5,6,7]

let arr2 =[1,3,5,9]

let arr3=[2,4,6,8]

let val=arr.find((val)=>{
    return val %2==0
})

console.log(val) // gives first value of array //find is call back function