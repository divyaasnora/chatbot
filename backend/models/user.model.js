import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    sender:{
        type:String,
        required:true,
        enum:["user"]
    },
    text:{
        type:String,
        requires:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model("User",userSchema)
export default User;