let str= "this is yash and yash loves code and yash codes daily"

let arr=str.split(" ")

console.log(arr)

let arrobj={}

for(let val of arr){
    if(arrobj[val]){
        arrobj[val]++
    }
    else{
        arrobj[val]=1
    }
}

console.log(arrobj)