const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const USER=mongoose.model("USER");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const JWT_secret=require('../keys.js')

router.post('/signup',(req,res)=>{
 
      const {name,username,email,password}=req.body;
      if(!name || !email || !username || !password){
        return res.status(422).json({error:"Please fill all feilds"})
      }
      USER.findOne({email:email}).then((detail)=>{
        if(detail){
            return res.json({error:"User Already Registered"});
        }
        else{
            bcrypt.hash(password,5).then((hashpassword)=>{
                const user=new USER({name,email,username,password:hashpassword})
                user.save().then((user)=>{
                    res.status(200).json({message:"User Registered Succesfully"})
               }).catch((err)=>{
                  res.status(404).json({error:"404 Error Occur"})
               })
            })
        }
      }) 
})


module.exports=router;