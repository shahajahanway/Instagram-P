const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    unique:[true,"User name already exists"],
    required:[true, "User name is required "]
  },
  email:{
    type:String,
    unique:[true,"Email already exists"],
    required:[true,"Email is required"],
  },
  password:{
    type:String,
    required:[true,"Passward is required"]
  },
  bio:String,
  profileImage:{
    type:String,
    default:"https://cdn.pixabay.com/photo/2016/03/31/18/27/coding-1294373_1280.png"
  }
})

const userModel = mongoose.model("users",userSchema)


module.exports = userModel