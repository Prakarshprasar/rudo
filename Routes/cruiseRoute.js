const Cruise=require("../Models/cruise")

const {Router}=require("express");
const cruiseRouter=Router();


cruiseRouter.post("/cruise", (req,res)=>{
    const feed = new Cruise(req.body)
    feed.save((err,success)=>{
        try{
        return res.status(201).send({message: "Product Added", feed : success["_doc"]})
        }
        catch(err){
            return res.status(500).send({message: "Error Occurred"})
        }   
    })
})

cruiseRouter.get("/cruise", async(req,res)=>{
    const feed = await  Cruise.find({})
    res.send(feed)
    
})
cruiseRouter.delete("/cruise/:id", async (req, res) => {
    let Noteid = req.params.id;
    const { user_id } = req.body

    const note = await Cruise.findOne({ _id: Noteid })
    if (note.user_id === user_id) {
        await Feed.deleteOne({ _id: Noteid });
        return res.send({ "message": "successfully deleted" })
    } else {
        return res.send("you are not authorised to do it")
    }

});

module.exports = cruiseRouter;