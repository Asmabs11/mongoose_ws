const mongoose = require ("mongoose")

const contactSchema = new mongoose.Schema({
    Name:{
        type : String,
        required: true
    },
    Age:{
        type : Number,
        required: true
    },
    Favoritefoods:{
        type : [String] ,
        required: true

    }
})
const contact = mongoose.model("Contact" , contactSchema)
   module.exports = contact;
