const express=require("express")
const app=new express()
app.use(express.urlencoded({extended:true}))
const UserRouter=require('./routes/routes')
app.use(UserRouter)

app.use((req,res,next)=>{
    res.status(404).json({message:"Resourse not found"})
})

const port=3096
app.listen(port,async()=>{
    console.log("Server run success on port number "+ port)
})
