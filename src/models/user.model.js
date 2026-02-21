const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username name already exists"],
        required:[true,"Username is required" ]
    },
    email:{
        type:String,
        unique:[true,"Email name already exists"],
        required:[true,"Email is required"]

    },
    password:{
        type:String,
        required:[true,"Password is required" ]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/fttlug5iu/default%20user.svg?updatedAt=1771495179460"
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel