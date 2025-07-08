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