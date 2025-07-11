let arr =[1,2,3,4,5,6,7]

let arr2 =[1,3,5,9]

let ans=arr2.every((val) =>{
    return val % 2 !=0; // every function checks value of every element,like whether every element is odd or even
 })

console.log(ans)