// check constain 10000 which is mentioned 

function kangaroo(x1, v1, x2, v2) {
    
    if(x2 > x1 && v2 > v1){
        return "NO"
    }
    
    let z1=x1+v1
    let z2=x2+v2
    let flag=1
    
    if(z1 ==z2){
        return "YES"
    }
    
    for(let i = 0;i <=10000;i++){
        z1 =z1+ v1
        z2 =z2+v2
        
        if(z1 === z2){
            flag=0;
            break;
        }   
    }
    if(flag ===1){
        return "NO"
    }else{
        return "YES"
    }
    


}