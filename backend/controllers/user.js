const mongoose = require('mongoose')
const User = require("../models/user");

exports.getUserById = ( req , res , next , id) => {
    User.findById(id).exec( ( err , user) =>{

        if(err || !user){
            return res.status(400).json({
                error :" No user was found in DB"
            });
        }
        req.profile = user;
        next();
    });

};

exports.getUser = ( req , res) => {
    
    //passwords or sensitive user info is hide 
     req.profile.salt=undefined;
     req.profile.encry_password=undefined;
     req.profile.updatedAt=undefined;
     return res.json( req.profile)
 };


//update user

exports.updateUser= ( req , res) => {
    var id=req.params.userId
   
    User.updateOne(
        {_id: id},
      
        { $set: { bio:req.body.bio ,     
                 qualification:req.body.qualification,
                 location:req.body.location,} },
                 {upsert: true},         
       
        (err , user) => {

            if(err){
                return res.status(400).json({
                    error:"error"
                });
            }else  {
                res.json({
                message:"user updated  successfully"
            });}
            
        }
    );
};



//middleware
exports.photo = ( req , res , next) =>{
    if( req.profile.photo.data){
        res.set("Content-Type" , req.profile.photo.contentType)
        return res.send(req.profile.photo.data)
    }
    next();
};