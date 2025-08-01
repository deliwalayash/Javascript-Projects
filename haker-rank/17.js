let str= "aabbbaaaccc"
let str2= "a2b3a3c3"

let arr=str.split("")
let newarr=[]
let count=1

for(let i = 0;i < arr.length ;i++){

    if(arr[i]==arr[i+1]){
        count++
    }
    else{
        newarr.push(arr[i])
        newarr.push(count)
        count=1
    }
}

console.log(newarr.join(""))
