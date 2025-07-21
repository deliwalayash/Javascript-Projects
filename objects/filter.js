let student =[{
    name:"yash",
    id:1,
    isPassed:true,
    grade:"A",
    mark:75,
},
{
     name:"malav",
    id:2,
    isPassed:false,
    grade:"B",
    mark:70,

},
{
    name:"Ramsh",
    id:3,
    isPassed:true,
    grade:"A",
    mark:20,
}
]

let passStudent = student.filter((data) => {
    return (data.isPassed ==true)
})

let failstudent = student.filter((data) =>{
    return (data.isPassed == false)
})

console.log(failstudent)

console.log(passStudent)

let topStudent =student.filter((data) =>{
    return data.mark >70
})

console.log(topStudent)