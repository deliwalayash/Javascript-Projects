let sentence = "i love javascript"

let str=sentence.split(" ")

let newarr=str.map((data)=>{
    return data.split("").reverse().join("")
})

console.log(newarr.join(" "))

