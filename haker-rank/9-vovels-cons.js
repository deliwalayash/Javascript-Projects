let str="I am learning javascript"

let newstr=str.split(" ")

let vovels=0
let consonant=0

for(let i = 0 ;i < newstr.length;i++){

    newstr[i].split("").forEach(element => {
        if("aeiouAEIOU".includes(element) ){
            vovels++
        }
        else{
            consonant++
        }
    });
}

console.log(vovels)
console.log(consonant)