function sayhello(){
    console.log("hello world")
}

sayhello();

function sum(x,y){
    return x+y;
}

console.log(sum(5,10))

function fact(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * fact(n-1)
    }
}

console.log(fact(5))

function cube(n){
    return n * n * n;   //return n ** 3 
    return Math.pow(n,3);
}

console.log(cube(7))
