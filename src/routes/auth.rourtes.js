const express = require("express")
const userModel = require("../models/user.model")
const crytpo = require('crypto')
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

authRouter.post('/register', async(req,res)=>{
    const {email,username,password,bio,profileImage} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!isUserAlreadyExists){
        res.status(409).json({
            message:"User already Exists" + (isUserAlreadyExists.email == 
            email ? "Email already exists": "Username already exists")
            
        })
    }

    const hash = crytpo.createHash(sha256).update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash
    })
    const token = jwt.sign(
        {
        id:user._id
        },
        process.env.JWT_SECRET,
          {expiresIn:"1d"}
    )

    res.cookie.apply("token",token)

    res.status(201).json({
        message:"User Registerd Successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })


})

module.exports = authRouter
