// setTimeout( ()=>{
//     console.log("Timer is done!")        //asynchronous code
// },3000)

// console.log("Hello!")
// console.log("Hi!")              //synchronous code


//promises
function waitForIt() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done waiting after 2 seconds!");
    }, 2000); // waits for 2 seconds
  });
}

waitForIt().then((message) => {
  console.log(message); 
});
