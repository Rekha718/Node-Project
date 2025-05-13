//Objects in JavaScript
const person = {
    name : "Alice",
    age : 25,
    greet(){
        console.log("Hello, I am " + this.name)
    }
}

person.greet()
console.log(person)
