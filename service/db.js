const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/ecommerce',
{useNewUrlparser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connection sucessful")
}).catch((err)=>{
    console.log("error",err)
})
require("./registration")