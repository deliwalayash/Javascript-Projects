let input= "HeLLo WoRLD"

let str=[]


for(let val of input){
    if (val == val.toUpperCase()){
        str.push(val.toLowerCase())
    }
    else if (val == val.toLowerCase()){
        str.push(val.toUpperCase())
    }
    else{
        str.push(val)
    }
    
}

console.log(str.join(""))

