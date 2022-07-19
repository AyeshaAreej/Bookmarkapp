const express= require("express")
const cors= require('cors')
const bodyParser = require('body-parser')
const db=require('./config/mongoose')
const bookmarkRouter = require('./routes/bookmark')


const app=express()

//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

//routes
app.use('/bookmarks',bookmarkRouter )


module.exports= app
app.listen(8000,()=>{
    console.log("Server is listening on port 8000")
})