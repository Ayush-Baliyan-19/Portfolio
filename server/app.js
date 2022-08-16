const dotenv= require("dotenv")
const express= require ("express")
const mongoose= require("mongoose")
const cors= require('cors')
const app=express();

dotenv.config()

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Connection Succesfull")
}).catch((err)=>{
    console.log("Conncetion not succesfull")
})

app.use(cors())

app.use(express.json());



const PORT=process.env.PORT;

app.use(require('./router/auth'))
app.use(require('./router/signin'))
app.use(require('./router/mail'))



app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})