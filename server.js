const express = require("express")
const app = express()
const port = process.env.PORT||8000
const ejs = require("ejs")
require('./models/db')
app.use(express.static("public"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
 res.render("index",{
     title:"my home page"
 })
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.listen(port,(req,res)=>{
    console.log(`our server is running at the ${port}`)

})
