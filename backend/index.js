const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const port=80;
app.use(cors())
app.use(express.json());
require('./model/user_detail.js')
app.use(require('./routes/signup.js'))
app.use(require('./routes/signin.js'))

mongoose.connect('mongodb://127.0.0.1:27017/intern').then(()=>{
    console.log('Connected to Database')
}).catch(()=>{
    console.log('Not connected to Database')
})

app.listen(port,()=>{
    console.log('server is running')
})