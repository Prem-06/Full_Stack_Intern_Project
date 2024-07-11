const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const USER=mongoose.model("USER");


router.post('/sociallink',(req,res)=>{
    const {platform,link,id}=req.body;
    USER.findById(id).then((detail)=>{
        if(platform=="facebook"){
            detail.social_link.facebook=link;
        }
        else if(platform=="twitter"){
            detail.social_link.twitter=link;
        }
        else if(platform=="instagram"){
            detail.social_link.twitter=link;
        }
        else{
            detail.social_link.linkedin=link;
        }
       
        detail.save().then(()=>{
            return res.status(200).json({message:"Link Added",detail:detail})
        }).catch(()=>{
            return res.status(422).json({error:"Internal Server Error"})
        })
    }).catch(()=>{
        return res.status(422).json({error:"Internal Server Error"})
    })
})

module.exports=router