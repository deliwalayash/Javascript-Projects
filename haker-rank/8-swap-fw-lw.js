let str="yash deliwala how are you ?"

let newstr=str.split(" ")

console.log(newstr)

let newarr=newstr.map((data)=>{
    if(data.length ==1){
        return data
    }
    else{
        let fw=data[0]
        let mw=data.slice(1,data.length-1)    
        let lw=data[data.length-1]

        return lw + mw + fw

    }
    
})

console.log(newarr.join(" "))