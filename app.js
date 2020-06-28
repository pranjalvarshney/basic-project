const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const User = require('./models/user')
const Post = require('./models/post')

const userRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const cors = require('cors')

//// mongoDB Atlas connection
const uri = `mongodb+srv://${process.env.MUser}:${process.env.MPassword}@cluster0-on2ha.mongodb.net/<dbname>?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Mongo Connected")
    })
    .catch(err => {
        console.log(err)
    })

app.use(cors())

app.use(express.json())

//routes
app.use('/',userRouter)
app.use('/',postRouter)

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`)
})