//let array1 = ['Sports','cooking',1,true]
let hobbies = ['Sports','Cooking','watching cricket']
for(let hobby of hobbies){
    console.log(hobby)
}
console.log(hobbies.map(hobby => " " + hobby))  //added space in front of each hobby
console.log(hobbies)
console.log(hobbies.length)
console.log(hobbies.push('Reading'))  //adds to the end of the array
console.log(hobbies)
console.log(hobbies.pop())  //removes the last element of the array
console.log(hobbies)