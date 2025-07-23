let arr = [1,1,2,3,1,4,5,6,5,4,7,8,9,9,9,8,8,8,4,1,2,3,6]
let frequency = {}

for(let val of arr){
    if(frequency[val]){
        frequency[val]++
    }
    else{
        frequency[val]=1
    }
}

console.log(frequency)