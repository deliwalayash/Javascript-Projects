function maths(){
    function add(x,y){
        return x+y;
    }

    function sub(x,y){
        return x-y;
    }

    console.log(add(5,10))
    console.log(sub(5,10))
}

maths()

function maths2(a,b,op){
    function add(x,y){
        return x+y;
    }

    function sub(x,y){
        return x-y;
    }

    switch(op){
        case "+" :
        {
            console.log(add(a,b))
            break;
        }
        case "-" :
        {
           console.log(sub(a,b))
            break;
        }
    }
  
}

maths2(10,15,"+") 
maths2(100,150,"-") 
maths2(10,150,"+") 
maths2(10,150,"-") ;


//Imediately Invoked Function

function iife(){
    console.log("hello world")
}

iife();

(function iife2(){
    console.log("hello world");  // isme call karana ki jarurat nahi hai,apne aap call ho jayega
})();