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
        },
        tokens: [
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    }
)


userSchema.pre("save", async function (next){
    console.log("Hii from inside")
    if(this.isModified('pass')){
        this.pass= await bcryptjs.hash(this.pass,12);
        this.cpass= await bcryptjs.hash(this.cpass,12);
    }
})

userSchema.methods.generateAuthToken= async function()
{
    try
    {
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
}
const User = mongoose.model('USER', userSchema)

module.exports = User;