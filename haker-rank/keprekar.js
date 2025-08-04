let num=99

let numstr=num.toString().split("")

let numlength=numstr.length


let square=num*num

let squarestr=square.toString()

let squarestrlength=squarestr.length


let lr=squarestr.slice(0,numlength)
let rr=squarestr.slice(2,squarestrlength)

let sum2=parseInt(lr)+parseInt(rr)

console.log(sum2)


