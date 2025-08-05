function getMoneySpent(keyboards, drives, b) {
let sum
let max=0

for(let i = 0;i < keyboards.length;i++){
    for(let j = 0; j < drives.length ;j++){
        
        sum=keyboards[i]+drives[j]
        if(sum > max && sum <=b){
            max=sum
        }
    }
}

if(max ==0){
    return -1
}
else{
    return max
}
 
}