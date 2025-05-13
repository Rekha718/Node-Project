const arr = [1,2,3,4,5]
const [a,b,c,d,e] = arr
console.log(a,b,c,d,e)  //1 2 3 4 5
const [x,y,...rest] = arr
console.log(x,y,rest)  //1 2 [3,4,5]

const person = {
    name : "Alice",
    age : 25,
}
const {name, age} = person
console.log(name, age)  //Alice 25