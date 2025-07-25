let person={
    name:"yash",
    id:1,
    isDeveloper:true,
    marks:{
        science:87,
        maths:85,
        english:80,
    },
    showdetails:function(){
        console.log(this.id)
        console.log(this.name)
        console.log(this.isDeveloper)
        console.log(this.marks)
    },
        
}
person.showdetails()