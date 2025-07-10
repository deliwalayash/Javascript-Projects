let arr =[10,20,30,40,50]

arr.map((data,idx,orArr) => {
    console.log(data * 2,idx,orArr);
})

// map return all elemmnt of array,cumpolsory.

console.log(arr) // it does not change original array

let arr2 = [1,4,9,25,36,49]

arr2.map((data,idx,arr2) => {
    console.log(Math.sqrt(data),idx,arr2)
})

let str =[{fn :"yash",ln:"deliwala"},{fn:"foram",ln:"deliwala"},{fn:"vihaan",ln:"deliwala"},{fn:"malav",ln:"deliwala"}]

let newstr = str.map((data) => {
    return `${data.fn} ${data.ln}` // return is cumpolsory,otherwise return undefined
})

let newstr2 =str.map( data =>`${data.fn} ${data.ln}`) // this is one liner
console.log(newstr)
console.log(newstr2)

let arr3=[1,2,3,4,5,6,7,8]

let newarr3=arr3.map((data) =>{
    if(data %2 ==0){
        return data*2;
    }
    else{
        return data
    }
})
console.log(newarr3) // return i scumposory for all the elements,if you do not write return thean it returns undefined