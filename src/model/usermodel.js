const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        trim:true,
        length:[5,"min 5 Carakter"],
        required:true

    },
    password:{
        type:String,
        required:true,
        validate:{
            function(pass) {
                  return pass.length > 3 
            },
            message:"pass 3 Caracter lengt"
        }
    },
    email:{
        type:String,
        required:[true,"biite Email schreiben"],
        validate:[
            (email)=>email.includes("@") && email.includes("."),
            "email kein @ ."
        ]
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },  
    isStaff: {
        type: Boolean,
        default: false,
    }

},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)