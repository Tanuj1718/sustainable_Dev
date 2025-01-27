const express = require("express");
const router = express.Router();
const zod = require("zod")
const userSchema = require("../models/User")
const jwt = require("jsonwebtoken")


const userChecker = zod.object({
    username : zod.string(),
    email : zod.string().email(),
})

router.post("/userSignup" , async(req,res)=>{
    const {success} = userChecker.safeParse(req.body)
    if(!success) return res.json({msg : "The data you entered do no follow our requirement"})
    let findUser = await userSchema.find({email:req.body.email})
    if(findUser) return res.json({msg : "User already exist please enter new email"})
    try{
      let {username , email} = req.body
      let userData = await userSchema.create({
        username : username,
        email : email,
      })

      let userEmailJWT = jwt.sign({userData} , JWT_SECRET)

      return res.json({
        token : userEmailJWT,
        msg : "Welcome to the site Sir!!"
      })

    }

    catch(error){
        return res.json({msg : "something went wrong in the signup area : " + error})
    }
})


router.post("/userSignin" , async(req,res)=>{
    const {success} = userChecker.safeParse(req.body)
    if(!success) return res.json({msg : "The data you entered do no follow our requirement"})
    let findUser = await userSchema.find({email:req.body.email})
    if(!findUser) return res.json({msg : "User do not exist please enter new email"})
    try{
        let userEmailJWT = jwt.sign({findUser} , JWT_SECRET)
        return res.json({
            token : userEmailJWT,
            msg : "Welcome back to the site sir"
        })
    }

    catch(error){
        return res.json({msg : "something went wrong in the signup area : " + error})
    }
})

module.exports = router