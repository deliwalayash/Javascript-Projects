class Animal{

    getinfo(){
        console.log("Animal Sound.....")
    }
    getDetails(){
        console.log("Animals Details")
    }
}

class Dog extends Animal{
    getinfo(){
        console.log("Bow Bow")
    }
}

const d1=new Dog()

d1.getinfo() // when we call get info it will call Dogs Get info function and when we do comment in getinfo() in animal,it will call the Animals function

// console.log(d1)

d1.getDetails() // this is example of inherutance