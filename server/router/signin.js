const express=require("express")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");

const router=express.Router()

require('../db/conn');

const User= require('../model/userSchema')

router.post("/signin", async (req,res)=>{
    const {email,pass}=req.body;
    console.log(req.body)
    if(!email || !pass)
    {
        res.status(404).send("Fill the fields properly");
    }
    const userlogin= await User.findOne({email:email});
        if(userlogin)
        {
            const isMatch= await bcrypt.compare(pass, userlogin.pass);
            const token= await userlogin.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+2589200000),
                httpOnly:true   
            });
            if(isMatch)
            {
                console.log("Password Matched")
                res.status(200).json({message:"User Logged in succesfully"});
            }
            else
            {
                res.status(400).json({Error:"Password Does Not Match"});
            }
        }
        else
        {
            res.status(500).json({Error:"User does not exist"});
        }
    }
    )
module.exports = router;