let sentence = "the sky is very blue today"

let str=sentence.split(" ")

let newstr=str.map((data) =>{
    return data.slice(0,data.length - 1) + data[data.length - 1].toUpperCase()
})

console.log(newstr.join(" "))