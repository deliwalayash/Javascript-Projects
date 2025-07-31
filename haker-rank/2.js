let str="this is yash deliwala"

let newstr=str.split(" ")
console.log(newstr)

let newarr= newstr.map((data)=>{
    return data[0].toUpperCase() + data.slice(1)
})

console.log(newarr.join(" "))

let newarr2 = newstr.map((item)=>{
    return item.slice(0, item.length-1) + item[item.length-1].toUpperCase()

})

console.log(newarr2);
