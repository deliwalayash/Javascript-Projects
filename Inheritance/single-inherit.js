class School{
    constructor(name,id,div){
        this.name=name
        this.id=id
        this.div=div
    }

}

class Student extends School{
    constructor(name,id,div,mark){
        super(name,id,div)
        this.mark= mark
    }
}

const s1=new Student("yash",10,"3A",89)

console.log(s1)