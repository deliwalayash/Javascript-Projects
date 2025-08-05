function migratoryBirds(arr) {
    let freq={}

for(let val of arr){
    if(freq[val]){
        freq[val]++
    }
    else{
        freq[val] = 1
    }
}

console.log(freq)
let max=0
let ans
for(let key in freq){
    if(freq[key] > max){
        max=freq[key]
        ans=key
    }
}
return ans
}