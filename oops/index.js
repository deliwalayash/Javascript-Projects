class Student{
    constructor (name,id,course){
        this.name=name;
        this.id=id;
        this.course=course;
    }
    getdetails(){
        console.log(this.name,this.id,this.course)
    }
}

let stu=new Student("yash",2,"fsd")
let stu2= new Student("demo",45,"ui ux")
Object.seal(Array(stu2))
stu.mark=[10,20,30]
stu2.mark=[50,60,70]
console.table(stu2)

