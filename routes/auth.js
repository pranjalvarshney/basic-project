const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const loginAuth = require('../middlewares/loginAuth')

// userRouter.get('/pro',loginAuth,(req,res)=>{
//     res.send('hello home')
// })

userRouter.post('/signup',(req,res)=>{
    // console.log(req.body)
    const {name, email, password} = req.body
    if(!email || !name || !password){
        return res.status(422).json({message:{
            msg: "One or more fields are empty. Fill all the details",
            err: true
        }})
    }else{
        User.findOne({email})
            .then(user =>{
                if(user){
                    return res.status(422).json({message:{
                        msg: "User already exits",
                        err: true
                    }})             
                }else{
                    bcrypt.hash(password,12)
                    .then(hashedPassword => {
                        const newUser = new User({name,email,password: hashedPassword})
                        newUser.save()
                        .then(user => {
                            res.status(200).json({message:{
                                msg: "User Successfuly created",
                                err: false
                            }})                     
                        })
                        .catch(err => {
                            console.log(err)
                            throw err
                        })
                    })
                }
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }
})

userRouter.post('/signin',(req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({message: {
            msg: "One or more fields are empty",
            err: true
        }})
    }else{
        User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(422).json({message:{
                    msg: "Invalid email or password",
                    err: true
                }})
            }else{
                bcrypt.compare(password,user.password)
                .then(ifmatch => {
                    if(ifmatch){

                        const token = jwt.sign({_id: user._id},process.env.JWTSecret )
                        const {_id, name , email} = user
                        res.status(200).json({message: {
                            msg: "Success",
                            token: token,
                            user: {_id,name,email},
                            err: false
                        }})
                    }else{
                        return res.status(422).json({message: {
                            msg: "Invalid email or password",
                            err: true
                        }})
                    }
                })
                .catch(err => {
                    console.log(err)
                    throw err
                })
            }
        })
    }
})

module.exports = userRouter