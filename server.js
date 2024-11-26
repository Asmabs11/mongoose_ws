const express = require ("express")
const app = express ()
require("dotenv").config();
const connectDb = require ("./Config/connectDb");
app.use(express.json())
const contactRouter = require("./Routes/Person");
app.use("/contact" , contactRouter);



app.listen(5000 , (err=>err? console.log(err):console.log("server is runnig on port 5000")));


connectDb()