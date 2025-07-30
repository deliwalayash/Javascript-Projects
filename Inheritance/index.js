class Animal{
    #breed  // this is used to create private data type in js
    constructor(name,bark,age,breed){
            this.name=name
            this.bark=bark
            this.age=age
            this.#breed=breed
    }

    getinfo(){
        console.log(`Name : ${this.name} Bark : ${this.bark} Age: ${this.age} Breed :${this.#breed}`) 
        // this keyword is compusory
    }
}

const a1= new Animal("Dog","Bow Bow" ,10,"Pitbull")

a1.getinfo() // when we do this it will show breed

console.log(a1) // when we do this it will not show breed