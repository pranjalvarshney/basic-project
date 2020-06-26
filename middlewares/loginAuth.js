const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({message: {
            msg: "You must be logged in to proceed",
            err: true
        }})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWTSecret,(err,payload)=>{
        if(err){
            return res.status(401).json({message:{
                msg: "You must be logged in",
                err: true
            }})
        }

        const {_id} = payload
        User.findById(_id)
        .then(userdata => {
            req.user = userdata
            next()                           // calling next here since some time will be required to fetch the data
        })
        //next()                             // not over here        
    })

}