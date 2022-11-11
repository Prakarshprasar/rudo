const express = require("express")
const app = express()

const Customer=require("./Models/customers")

const connection =require("./db/db")
const cors = require("cors")

const customRouter = require("./Routes/customRoute")
const cruiseRouter = require("./Routes/cruiseRoute")

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(cors({
  origin:"*"
}))
app.get("/", async(req,res) => {
    res.send("users here")
})

app.use("/customer",customRouter)
app.use("/cruise",cruiseRouter)




let myargs=process.argv.slice(2);


switch(myargs[0]){
    case "customer" :{
        
        
        return

       
        
        
    }
    case "cruiser" :{
        
        return ;

    }
    case "manual":{
        console.log("customer for list of customer, Manual for Manual about search, exit for exit ")
    }
    case "exit":{
        
        return 
    }
    default:{
        return
    }
}





const PORT = process.env.PORT || 8080 
app.listen(PORT,()=>{
  connection;
    console.log("server started on  http://localhost:8080")
})