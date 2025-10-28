const mongoose=require("mongoose");

const Users_Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const User_data=mongoose.model("User",Users_Schema);

module.exports=User_data;