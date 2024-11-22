const express = require("express")
const router = express.Router()
const contact = require ("../Models/contactModel.js")


router.post("/addContact", async (req,res)=>{

try {const newContact = new Contact ({...req.body})
    await newContact.save()
    res.send({msg: "Contact created!", newContact})
    
} catch (error) {
    console.log(error)
}

})
router.get("/getIdContact/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const result = await Contact.find({_id:id})
    } catch (error) {
        console.log(error)
        
    }
})

module.exports = router
