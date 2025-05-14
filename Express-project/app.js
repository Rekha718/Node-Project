// const express = require('express');

// const app = express();

// app.use((req,res,next)=>{
//     console.log('always runs first');
//     //next();    //allows the request to continue to the next middleware
// })

// app.use('/add-user',(req,res,next)=>{
//     console.log('Middleware 1');
//     res.send('<h1>This is the first user!</h1>');
//     //next();    //allows the request to continue to the next middleware
// })

// app.use('/',(req,res,next)=>{   
//     console.log('Middleware 2');
//     res.send('<h1>Hello from Express!</h1>'); //sends a response to the client and content type is html
// })

// // const server = http.createServer(app)
// // server.listen(3000)
// app.listen(3000)

const express = require('express');
const path = require('path')

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}))


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)










