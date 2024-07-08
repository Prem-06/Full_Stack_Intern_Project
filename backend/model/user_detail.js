const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String
    },
    about:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }
})

mongoose.model("USER",userschema);