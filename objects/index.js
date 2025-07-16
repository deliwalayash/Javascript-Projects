let person ={
    name : "yash",
    age:36,
    marks :[45,65,75,80],
    isDevloper:true,
    speak: ()=>{
        console.log("yash is eating")

    },
    eat:function(){
        console.log("yash is eating")
    },
}

let maxmark=person.marks[0]

person.marks.forEach((mark) =>{
    if(mark > maxmark){
        maxmark = mark
    }
    
})
// console.log(maxmark)

// let key =Object.keys(person) // gives only property and function
// console.log(key)

// let value=Object.values(person) //gives only values of property
// console.log(value)

// let entries=Object.entries(person) // gives total entries of object
// console.log(entries)

let a=Object.assign({},person)
// a.name="malav"
// a.speak="Malav is eating"

// console.log(a.name)
// console.log(a)
// console.log(a.speak)
// console.log(a.marks)

// let b =Object.create(person)
// console.log(b)

delete a.name;
delete a.speak
console.log(a)