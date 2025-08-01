let str= "aaabbbccdaa"

str=str.split("").sort().join("")

let key = str[0]

let arr=[]

arr.push(key)

for(let i = 0;i < str.length;i++){
    if(key != str[i]){
        arr.push(str[i])
        key = str[i]
    }
}

console.log(arr.join(""))