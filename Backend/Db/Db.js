const mongoose=require("mongoose");

const mongooseconnection=async()=>{
    try {
        mongoose.connect("mongodb+srv://Rishabh:Rishabh@cluster0.blpsutk.mongodb.net/?appName=Cluster0",{
           useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("mongoose is successfully connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports=mongooseconnection