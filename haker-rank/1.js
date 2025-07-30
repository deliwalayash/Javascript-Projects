// let c = [0, 0, 1, 0]; // clouds
// let k = 2; // jump step
// let i = 0; // starting index

// for (let step = 1; step <= 6; step++) {
//     i = (i + k) % c.length;
//     console.log(`Step ${step}: Jumped to index ${i}`);
// }


let str1 = "yash";
let str2 = "deliwala";
let newStr = "";
let i=0;
let j=0;
while(i<str1.length || j<str2.length){
    if(i<str1.length){
        newStr += str1[i++]
    }
    if(j<str2.length){
        newStr += str2[j++]
    }

}
console.log(newStr);


// let newStr = [];

// if(str1.length > str2.length){
//     length = str1.length
// } else{
//     length = str2.length
// }

// for(let i=0; i<length; i++){
//     newStr.push(str1[i]);
//     newStr.push(str2[i]);
// }

// newStr = newStr.join("");

// console.log(newStr);

