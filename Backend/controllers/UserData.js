const express = require("express");
const router = express.Router();
const zod = require("zod")
const User = require("../models/User")
const jwt = require("jsonwebtoken")


const userChecker = zod.object({
    username : zod.string(),
    email : zod.string(),
})

router.post("/userSignup" , async(req,res)=>{
    const {success} = userChecker.safeParse(req.body)
    if(!success) return res.json({msg : "The data you entered do no follow our requirement"})
    let findUser = await User.findOne({email:req.body.email})
    console.log(req.body.email)
    console.log(findUser)
    if(findUser) return res.json({msg : "User already exist please enter new email"})
    try{
      let {username , email} = req.body
      let userData = await User.create({
        username : username,
        email : email,
      })

      let submitjwtemail = userData.email

      let userEmailJWT = jwt.sign({submitjwtemail} , "06062003")

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
    let findUser = await User.findOne({email:req.body.email})
    console.log(req.body.email)
    if(!findUser) return res.json({msg : "User do not exist please enter new email"})
    try{
        let jwtemail = findUser.email
        let userEmailJWT = jwt.sign({jwtemail} , "06062003")
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