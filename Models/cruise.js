const {Schema, model} = require("mongoose")

const CruiseSchema = new Schema({
    name:String,
    location:String,
    nor:Number,
    Rating:String
    
})

const Cruise = model("Cruise", CruiseSchema)

module.exports = Cruise