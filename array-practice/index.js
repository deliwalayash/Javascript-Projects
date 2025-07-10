let arr=[10,20,30]

console.log(arr)
console.log(arr.length)
arr.push(40)
console.log(arr) //backside push thai
arr.push([1,2,3])
console.log(arr)


let val=arr.pop()

console.log(val)
console.log(arr)

arr.shift()

console.log(arr) //removes first element of the array

arr.unshift(10) //add elements to the first position in array
console.log(arr)

arr.splice(2)//including 2nd array all elements are removed including 2
console.log(arr)

arr.push(50)
console.log(arr)
arr.push(60)
console.log(arr)

arr.push(3,100,200,300)
console.log(arr)

let arr2=[11,2,3,4,5,6,7,8,9,10,11]

let newarr=arr2.slice(3,6) //gives new array arr.slice(start index,end index)
console.log(newarr)

let str="NAYAN"

console.log(str.length) //GIVES STRING LENGTH

    console.log(str.toLocaleLowerCase()) //gives lowerase dowst not change original string
    console.log(str)

    let str2="10,20,30,40"
    let newarr2=str2.split("")
    console.log(newarr2)
    console.log(str2.split("").reverse()) //split everything and reverse

    //programme for palinfrome using str operation
    let str3="hello"
    let newstr=str3.split("").reverse().join("")
    console.log(newstr)

    if(newstr ==str3){
        console.log(true)
    }
    else{
        console.log(false)
    }
    
