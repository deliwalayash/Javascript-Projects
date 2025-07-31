let arr=[1,1,1,2,2,3,3,4,4,5,6,6,7,8]

let newarr=[]

let key=arr[0]

newarr.push(arr[0])

for(let i = 0;i < arr.length ; i++){
    if(key != arr[i]){
        newarr.push(arr[i])
        key = arr[i]
    }
}

console.log(newarr)