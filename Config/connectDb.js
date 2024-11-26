const mongoose = require("mongoose")
const connectDb = () =>{
    mongoose
    mongoose.connect("mongodb+srv://asmabs:pItoXKR9RfjT6zMs@cluster0.zuph7.mongodb.net/mongoose_contact?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("mongoose connected"))
    .then((err)=>console.log(err))
    
}

module.exports = connectDb