const mongoose  = require("mongoose");

const userSchema  = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    phone:{
        type:Number,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    donor:{ //the role can only be the strings specified in enum[]
        type:Boolean,
        default:false,
    }


}, {timestamps:true} );

module.exports = mongoose.model("user",userSchema);