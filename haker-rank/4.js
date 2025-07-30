let sentence = "javascript is awesome"

//har word ka first and last letter swap karna hai

let newstr=sentence.split(" ")

let newarr= newstr.map((data) =>{
    if(data.length ==1){
        return data
    }
    else{
        let fw=data[0]
        let lw=data[data.length - 1]
        let mw=data.slice(1,data.length-1)

        return lw +mw+ fw
    }
})

console.log(newarr.join(" "))