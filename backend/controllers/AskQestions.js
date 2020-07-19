
const formidable = require('formidable');
const _ = require("lodash");
const fs = require("fs");
const Qestions= require('../models/AskQestions');

//Qestion Id
exports.getQestionById = (req , res , next, id) => {
    Qestions.findById(id).exec( (err,qestion) =>{
       if(err){
           return res.status(400).json({
               error:"Qestion is not found in DB"
           });
       };
   
       req.qestion = qestion;
       next();
   
    });
     
   };
   

// create qestions
exports.createQestion = ( req , res) =>{
    // console.log('qestion',req.body)
    let form = new formidable.IncomingForm();
    form.keepExtensions=true;
  
    form.parse(req , (err,fields,file ) =>{
       
        if(err){
            return res.status(400).json({
                error:"Some issue with image"
            });
        }
  
     
      //destructure the fields
      const {   title  , askQestion} = fields;
  
      if(  !title || !askQestion  ){
          return res.status(400).json({
              error:"Please included all fields"
          });
      }
  
        let qestion = new Qestions(fields)
  
        //handle file here
        if(file.photo){
            if(file.photo.size > 4000000){
                return res.status(400).json({
                    error:"File size is too big!"
                })
            }
          
            qestion.photo.data = fs.readFileSync(file.photo.path)
            qestion.photo.contentType = file.photo.type
        }
       
  
        //save to the DB
        qestion.save( (err ,qestion)=> {
          //   console.log(product)
            if(err){
                 res.status(400).json({
                    error:"Adding qestion is failed",
                    err
                });
            }
  
            res.json(qestion)
        }) ;
  
    });
    
}

//get a questions
exports.getQestion = ( req , res) =>{ 
        req.qestion.photo = undefined
        return res.json(req.qestion)   

}

//middleware
exports.photo = ( req , res , next) =>{
    if( req.qestion.photo.data){
        res.set("Content-Type" , req.qestion.photo.contentType)
        return res.send(req.qestion.photo.data)
    }
    next();
};


//get all questions
exports.getAllQuestions =(req , res) =>{  
    const sortBy = req.query.sort ? req.query.sort:"_id";
    
    Qestions.find() 
       .select("-photo")   
       .sort( [ [sortBy,"desc"] ])
      
       .exec((err ,qestions) =>{
           if(err){
              return res.status(400).json({
                  error:"questions is not found"
              })
           }
           res.json(qestions)
       })
    };



    //update question
// exports.updateQestion = (req , res)=>{

//     let form = new formidable.IncomingForm();
//     form.keepExtensions=true;
  
//     form.parse(req , (err,fields,file ) =>{
//         console.log(fields)
//         if(err){
//             return res.status(400).json({
//                 error:"Some issue with image"
//             });
//         }
  
     
//         //updation code
//         let  qestion = req.qestion;
//         qestion = _.extend( qestion , fields)
  
//         //handle file here
//         if(file.photo){
//             if(file.photo.size > 3000000){
//                 return res.status(400).json({
//                     error:"File size is too big!"
//                 })
//             }
          
//             qestion.photo.data = fs.readFileSync(file.photo.path)
//             qestion.photo.contentType = file.photo.type
//         }
        
  
//         //save to the DB
//         qestion.save( (err ,  qestion)=> {
//             console.log( qestion)
//             if(err){
//                  res.status(400).json({
//                     error:"Updation of product is failed",
//                     err
//                 });
//             }
  
//             res.json(qestion)
//         }) ;
  
//     });
  
// };



//delete Product
exports.deleteQestion = ( req , res) =>{

    Qestions.deleteOne( ( err , qestion) =>{
        if( err){
            return res.status(400).json({
                error:"Deletion of qestion is failed"
            });
        }
        res.json({
            message:"Deletion is successfully"
        });
    });
    
    };