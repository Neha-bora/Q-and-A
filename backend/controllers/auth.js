
const User = require("../models/user");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signup = ( req , res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty() ){
        return res.status(422).json({
            errors:errors.array()[0].msg
         
        })
 
    }
   const user = new User(req.body);
   user.save( (err , user) =>{
    //    console.log("error", err)
    //    console.log("USER", user)


       if(err){
           return res.status(400).json({
               err:"no user save in DB"
           })
       }
       res.json({
           name: user.name,
           lastname:user.lastname,
           email: user.email,
           id: user._id
       });
   });
};

exports.signin =( req , res)=>{
    const errors = validationResult(req)
    const { email , password} = req.body;

    if(!errors.isEmpty() ){
        return res.status(422).json({
            errors:errors.array()[0].msg
         
        })
 
    }
    User.findOne({email} , ( err , user) =>{
        if(err || !user){
            return res.status(400).json({
                errors:"user doses not exist"
            })
        }
        if(!user.autheticate(password)){
            return res.status(401).json({
                errors:"password is incorrect"
            })

        }
      
        //create token
        const token = jwt.sign({_id:user._id}, process.env.SECRET);

        //put token in brower
        res.cookie("token" , token ,{ expire :new Date() +99} );
        
        //send response to frontend
        const { _id , name , email } = user;
        return res.json({ token, user: {_id ,name,  email}});

    })

}

exports.signout = ( req , res) => {
    res.clearCookie("token");
    res.json({
        message:"user signout successfully"
    });
}

//protected route
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty:"auth"
})


//custom middlewere
exports.isAuthenticated = (req , res , next) => {
    
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error:"Acces denied"

        });
    }
    next();
};
