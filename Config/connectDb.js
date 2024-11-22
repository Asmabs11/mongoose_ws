const mongoose = require("mongoose")
const connectDb = () =>{
    mongoose
    mongoose.connect("mongodb+srv://asmabs:lCPKrKdCjsuhwXTQ@cluster0.zuph7.mongodb.net/mongoose_contact?retryWrites=true&w=majority&appName=Cluster0")
    
}

module.exports = connectDb