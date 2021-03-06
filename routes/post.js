const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')
const loginAuth = require('../middlewares/loginAuth')
const { response } = require('express')
const user = require('../models/user')

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

postRouter.get('/allposts',loginAuth ,(req,res)=>{
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

postRouter.put('/like',loginAuth,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push: { likes: req.user._id},   
    },{
        new: true
    })
    .exec((err, result)=>{
        if(err){
            res.status(422).json({message: {
                msg: "Error",
                err: true
            }})
        }else{
            res.status(200).json({message:{
                data: result
            }})
        }
    })
})

postRouter.put('/unlike',loginAuth,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull: { likes: req.user._id},   
    },{
        new: true
    })
    .exec((err, result)=>{
        if(err){
            res.status(422).json({message: {
                msg: "Error",
                err: true
            }})
        }else{
            res.status(200).json({message:{
                data: result
            }})
        }
    })
})

postRouter.put('/comment',loginAuth,(req,res) => {
    const comment = {
        text: req.body.text,
        postedby: req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push: {comments: comment}
    },{
        new: true
    }).exec((err,result)=>{
        if(err){
            res.status(422).json({message:{
                errormsg: err,
            }})
        }else{
            res.status(200).json({message:{
                data: result
            }})
        }
    })
})

module.exports = postRouter