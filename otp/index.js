function getOtp(otp){

    let generateOtp=""
    for(let i = 0;i < otp;i++){
        generateOtp+=parseInt(Math.random()*10)
    }

    return(generateOtp)
}

let otp=getOtp(4)

console.log(otp)