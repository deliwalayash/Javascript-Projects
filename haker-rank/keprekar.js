let arr=[]
    
    for(let  i = p;i <= q ;i++){
        
        if(i ==1){
            arr.push(i)
        }
        let numlength=i.toString().length
        
        let mul=i*i
        
        let mullength=mul.toString().length
        
        let mulstr=mul.toString()
        
        let ls=mulstr.slice(0,mullength - numlength)
        
        let rs=mulstr.slice(mullength - numlength)
        
        let sum=parseInt(ls)+ parseInt(rs)
        
        if (sum == i){
            arr.push(i)
        }
    }
    
    if (arr.length == 0){
        console.log("INVALID RANGE")
        return 
    }
    console.log(arr.join(" "))
   