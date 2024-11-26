const mongoose = require ("mongoose")

const personSchema = new mongoose.Schema({
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
const person = mongoose.model("person" , personSchema)
   module.exports = person;
