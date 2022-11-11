const Customer=require("../Models/customers")

const {Router}=require("express");
const customRouter=Router();


customRouter.post("/main", (req,res)=>{
    const feed = new Customer(req.body)
    feed.save((err,success)=>{
        try{
        return res.status(201).send({message: "Product Added", feed : success["_doc"]})
        }
        catch(err){
            return res.status(500).send({message: "Error Occurred"})
        }   
    })
})

customRouter.get("/main", async(req,res)=>{
    const feed = await  Customer.find({})
    res.send(feed)
    
})

customRouter.put("/main/:id",async(req,res)=>{
    const { customerId } = req.params;
    const updatedData = req.body;
    const feed = await Customer.updateOne(
        {
        _id: customerId,
        },
        updatedData
    );
    const updatedCusomer = await Customer.findById(customerId);
    if (feed.modifiedCount) {
        res.status(201).send({ message: 'Customer updated', updatedCusomer });
    } else {
        res.status(202).send('No changes to update');
    }
})


customRouter.delete("/main/:id", async (req, res) => {
    let Noteid = req.params.id;
    const { user_id } = req.body

    const note = await Customer.findOne({ _id: Noteid })
    if (note.user_id === user_id) {
        await Feed.deleteOne({ _id: Noteid });
        return res.send({ "message": "successfully deleted" })
    } else {
        return res.send("you are not authorised to do it")
    }

});

module.exports = customRouter;