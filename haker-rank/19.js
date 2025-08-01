let str = "code is love and yash loves code because code is fun"

let arr=str.split(" ")



let arrobj={}
let count = 0
let maxarr=[]

for(let val of arr){
    if(arrobj[val]){
        arrobj[val]++
        if(arrobj[val] > count){
            count=arrobj[val]
        }
    }
    else{
        arrobj[val]=1
    }
}

let frequentword=""
for(let word in arrobj){
    if(arrobj[word] == count)
        frequentword= word
}

console.log(frequentword)