const mongoose=require('mongoose')

const UsersSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',UsersSchema)