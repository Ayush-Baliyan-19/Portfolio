const mongoose=require("mongoose")

const DB =process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection Succesfull")
}).catch((err)=>{
    console.log("Conncetion not succesfull")
})