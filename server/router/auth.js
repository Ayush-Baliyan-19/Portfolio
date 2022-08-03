const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const app=express();
/* app.use(cors({
    origin:"http://localhost:5000"
})); */

require('../db/conn');

const User= require('../model/userSchema');

router.get("/",(req,res)=>{
    res.send("Hello World From The router");
});
router.post("/register", async(req,res)=>{
    const {name,email,phone,work,pass,cpass}=req.body;
    console.log(req.body);
    if( !name || !email || !phone || !work || !pass || !cpass )
    {
        return res.status(500).json({error:"Please fill all the feilds properly"});
    }
    try{
        const userExist= await User.findOne({ email:email });

        if(userExist){
            return res.status(422).send("User already exist")
        }

        const user=new User({name,email,phone,work,pass,cpass});

        const savedata = await user.save();

        if(savedata)
        {
            res.status(201).json({message:"Succesfully Save"})
        }
        else
        {
            res.status(500).json({error:"Not registered"})
        }
    }catch(err){
        console.log("Not Registered")
    }
});
module.exports = router;