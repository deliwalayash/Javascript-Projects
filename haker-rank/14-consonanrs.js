let str="My name is yash deliwala ,i am a boy,I love javascript"
let vovel=0
let consonats=0

for(let char of str){
    if(("aeiouAEIOU").includes(char)){
        vovel++
    }
    else{
        consonats++
    }
}

console.log(consonats)
console.log(str.length)