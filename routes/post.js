const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')
const loginAuth = require('../middlewares/loginAuth')
const { response } = require('express')

postRouter.post('/createpost',loginAuth,(req,res)=>{
    const {title,body} = req.body
    if(!title || !body){
        return res.status(422).json({message:{
            msg: "Add all the details",
            err: true
        }})
    }
    console.log(req.user)
    req.user.password = undefined
    const newpost = new Post({title,body,postedby: req.user})
    newpost.save()
    .then(response => {
        res.status(200).json({message:{
            data: response,
            err: false
        }})
    })
    .catch(err=>{
        console.log(err)
        throw err
    })
})

postRouter.get('/myposts',loginAuth,(req,res)=>{
    Post.find({postedby: req.user._id})
    .populate("postedby","_id name")
    .then(mypost => {
        res.status(200).json({message:{
            data: mypost,
            err: false
        }})
    })
    .catch(err => {
        console.log(err)
        throw err
    })
})

postRouter.get('/allposts',loginAuth,(req,res)=>{
    Post.find()
    .populate("postedby","_id name")   //populate = expanding the details.... second parameter takes the required field to get
    .then(response => {
        res.status(200).json({message:{
            data: response,
            err: false
        }})
    })
    .catch(err=>{
        console.log(err)
        throw err
    })
})

module.exports = postRouter