const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const app=express();
const bcrypt= require("bcryptjs")
/* app.use(cors({
    origin:"http://localhost:5000"
})); */


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

        const hashedPass= await bcrypt.hash(pass,10)
        const user=new User({name,email,phone,work,pass:hashedPass,cpass:hashedPass});

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

router.post('/login', async (req,res)=>{
    try {
        const {email,pass}=req.body
        if( !email || !pass)
        {
            return res.status(400).send("Invalid Credentials in password")
        }
        const userLogin=  await User.findOne({email:email})
        console.log(userLogin)
        if(!userLogin)
        {
            return res.status(400).send("Invalid Credentialls for Userlogin")
        }
        // console.log(password)
        console.log(userLogin.pass)
        const isMatch= await bcrypt.compare(pass,userLogin.pass);
        console.log(isMatch)


        const token = jwt.sign({_id:userLogin._id},"AyushIsAGoodBoy")
        console.log(token)

        if(!isMatch)
        {
            return res.status(400).send("Invalid Credentialls for bcrypt")
        }
        res.status(200).json({token:token})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
module.exports = router;