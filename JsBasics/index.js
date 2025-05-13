//Basic Syntax and Arrow Function


const name = "John"    //name will not change
let age = 30           //age can change
const hasHObbies = true

const summarizeUser = (userName, userAge, userHobbies) =>{
    return (
        "Name is " +
        userName +
        ", age is " +
        userAge +
        ", and the user has hobbies: " +
        userHobbies
    )
}

//const add = (a,b) => a + b;   //we can skip return 
//const add = a => a+2;   //we can the parenthissis if we have only one parameter
const addRand = () => 2 + 3;  //empty parenthisis if we have no parameters;



//console.log(add(2,3))
//console.log(add(2))
console.log(addRand())


console.log(summarizeUser(name, age, hasHObbies))