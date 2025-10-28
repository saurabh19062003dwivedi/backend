const mongoose = require("mongoose");
const userSchema = new mongoose.Schema( {
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
        
    },
    accountTYpe:{
        type:String,
        enum:["Admin","Student","Instructed"],
        // required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Profile",
    },
    Courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",

    }],
    Image:{type:String,
        // required:true,
    },
    token: {
        type: String,
    },
   
    resetPasswordExpires: {
        type: Date,
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"courseProgres",
        }
    ],
},
{ timestamps: true });
module.exports =  mongoose.model("User", userSchema);