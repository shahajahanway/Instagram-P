const mongoose = require("mongoose");

const userSchena = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists"],
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    unique: [true, "Email  already exists"],
    required: [true, "Email is  exists"],
  },
  password:{
    type:String,
    required:[true,"Password is required"]
  },
 bio: String,
 profileImage:{
    type:String,
    default:"https://ik.imagekit.io/a7kssw5mo/default-image.jpg?updatedAt=1770741653576"
 }
});


const userModel = mongoose.model("users",userSchena)

module.exports = userModel