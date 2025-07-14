let s ="hello, world!,how are you, hi"
let val=s.slice(2) // gives all index from 2
console.log(val)
let val2=s.slice(2,5)
console.log(val2)
let val3=s.slice(0,-2)
console.log(val3)
let [hours, minutes, seconds] = s.split(" ");
console.log( [hours, minutes, seconds])
let val4=s.split(" ")
console.log(val4)
let s1="07:05:45PM"
console.log(s1.slice(0,8))
console.log(s1.slice(2,5))
console.log(s1.slice(0,8).split(":"))
