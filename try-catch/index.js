let a = 10
let b = 0
let arr=[]

arr.push(a,b)

console.log(arr)

try{
    arr.push(a,b,c) 
    console.log(arr) 
    throw new Error("hello how are you")               // if this gives error ,it will run catch,this is true than error catch will not run
}catch(err){
    console.log(err.message) // cathch(err) gives an error which can be print as err.message
    arr.push(a,b)   // this will run if above gives an error
    console.log(arr)  
}finally{
    console.log("Process is Over") // thsi will run all the time
}


