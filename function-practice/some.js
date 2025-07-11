let arr =[1,2,3,4,5,6,7]

let arr2 =[1,3,5,9]

let arr3=[2,4,6,8]

let ans=arr3.some((val) =>{
    return val % 2 !=0; // every function checks value of some element,like whether every element is odd or even
 })

console.log(ans)