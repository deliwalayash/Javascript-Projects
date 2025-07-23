let str="yash nareshkumar deliwala"
let str2=str.split("").sort()
let freq={}
for(let val of str2){
    if(freq[val]){
        freq[val]++
    }
    else if(val != " "){
        freq[val]=1
    }
}
console.log(freq)