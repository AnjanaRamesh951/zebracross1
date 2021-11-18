const user= require('../models/users')

module.exports.listUsers=async(req,res)=>{
    try{
        var result=await user.find()
        res.send(result)
    }catch(err){
        res.json({message:err})
    }

}

module.exports.postUsers=async(req,res)=>{
    var users=new user({
        name:req.body.name,
        email:req.body.email,
        DOB:req.body.DOB
    })
    try{
    const savedUsers=await users.save()
    
    res.json(savedUsers)
    }catch(err){
        res.json({message:err})
        
    }
}

