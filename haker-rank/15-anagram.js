let str1="listen"
let str2="hello"

let newstr1=str1.split("").sort().join("")
let newstr2=str2.split("").sort().join("")

if(newstr1 == newstr2){
    console.log("anagram")
}
else{
    console.log("not anagram")
}