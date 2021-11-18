const express =require('express')
const router=express.Router();
const Users=require('../models/users')
const userController=require('../controllers/user')





router.get('/users',userController.listUsers)



router.post('/users',userController.postUsers)

module.exports=router;