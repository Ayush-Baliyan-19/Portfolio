const mongoose =require("mongoose")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken");


const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        work:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        pass:{
            type:String,
            required:true
        },
        cpass:{
            type:String,
            required:true
        }
    }
)

const User = mongoose.model('USER', userSchema)

module.exports = User;