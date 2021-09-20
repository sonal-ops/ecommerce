const mongoose = require("mongoose")
const Registor = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
       type:String,
       required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    cpassword:{
        type:String,
        unique:true
    }

})


const Regi =mongoose.model("Regis",Registor)
module.exports=Regi