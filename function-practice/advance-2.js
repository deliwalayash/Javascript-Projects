function outer(){
    let x = 10;

    function inner(){
        console.log(x)
    }

    inner()
}

outer()



const cube=function(n){
    return n **3;
}

function outer2(a,b,abc){
     let x =10;
     console.log(abc(x))
} 

outer2(10,5,cube)