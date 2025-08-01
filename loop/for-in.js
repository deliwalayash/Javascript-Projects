let obj={"a" :1,"b" : 2,"c" : 3}

let maxcount=3
let str=""

for(let key in obj){
    if(obj[key]== maxcount){
        str=key
    }
}

console.log(str)