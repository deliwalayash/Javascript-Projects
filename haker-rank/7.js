let input = "aaabbbbccdaa"
let arr = input.split("")
console.log(arr)
let obj = {}
let n  = input.length;
let str = ""

for(let val of input){
    if(obj[val]){
        obj[val]++;
        
    }else{
        obj[val] = 1;
    }
    
}
let duplicateVal = arr.filter((item, idx)=>{
    return arr.indexOf(item) == idx;
})

arr.sort((a,b)=>{
    return obj[a] - obj[b];
})
console.log(obj);

console.log(duplicateVal);






