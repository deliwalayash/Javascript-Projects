let input = "aaabbbbccdaa"

let freq={}

for(let val of input){
    if(freq[val]){
        freq[val]++
    }
    else{
        freq[val]=1
    }
}

console.log(freq)