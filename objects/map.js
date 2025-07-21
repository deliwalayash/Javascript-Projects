let student =[{
    name:"yash",
    id:1,
    isPassed:true,
    grade:"A"
},
{
     name:"malav",
    id:2,
    isPassed:false,
    grade:"B"

},
{
    name:"Ramsh",
    id:3,
    isPassed:true,
    grade:"A"
}
]

student.forEach((data,idx) =>{
    console.log(data.name ,data.id,idx)
})