const express = require('express');
const path = require('path')
const router = express.Router();

//admin/add-product  - GET
router.get('/add-product',(req,res,next)=>{    //here we can use get as well 
    console.log('Middleware 1');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

//admin/add-product - POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;