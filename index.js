const express = require("express")
const app = express()


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


const port = process.env.PORT
app.listen(port,()=>{
  connection;
    console.log("server started ")
})

let myargs=process.argv.slice(2);


switch(myargs[0]){
    case "cruise" :{
        
        return ;
    }
    case "customer" :{
        
        return ;

    }
    case "manual":{
        console.log("cruise for cruise list , customer for customer list, manual for manual for help, exit for exit")
        return 
    }
    case "exit":{
        
        return 
    }
    
    
}

