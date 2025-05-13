const hobbies = ['Sports','Cooking','programming']
//spread operator: spreads the array into individual elements
const hobbies2 = ['Reading',...hobbies]  
console.log(hobbies2)


const person = {
    name : "Alice",
    age : 25,
}
const copiedPerson = {
    ...person,
}
console.log(copiedPerson)

//rest operator: collects all remaining arguments into an array
const toArray = (a,...args) => {
    return args
}
console.log(toArray(1,2,3,4,5))  