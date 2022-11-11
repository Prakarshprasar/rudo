const {Schema, model} = require("mongoose")

const CustomerSchema = new Schema({
    name:String,
    location:String,
    nor:Number,
    Rating:String
    
})

const Customer = model("Customer", CustomerSchema)

module.exports = Customer