let input = "hello world this is yash"

let str=input.split(" ")

let newarr=str.map((data,idx)=>{
    if (idx ==0){
        return data
    }
    else{
    return (data[0].toUpperCase() + data.slice(1))
    }
    
})

console.log(newarr.join(""))