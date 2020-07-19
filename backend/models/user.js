const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid");

const userSchema = new mongoose.Schema(
    {
      name:{
          type:String,
          required:true,
          maxlength:20,
          trim:true
      },
      lastname:{
          type:String,
          required:true,
          maxlength:20,
          trim:true
      },
      email:{
          type:String,
          required:true,
          
      },
      bio:{
        type:String, 
         trim:true,
         
         maxlength:100
         
     },
     qualification:{
       type:String, 
       trim:true,
      
       maxlength:50
     },
     location:{
         type:String, 
         trim:true,  
         maxlength:20
       },
     photo:{
         data:Buffer,
         contentType:String
     },
      userinfo: {
        type: String,
        trim: true
      },
      encry_password: {
        type: String,
        required: true
      },
     salt: String,
     role: {
       type: Number,
       default: 0
       }
    },
    { timestamps: true }
)

userSchema.virtual("password")
            .set( function(password){
                this._password = password;
                this.salt = uuid.v1();
                this.encry_password = this.securePassword(password)
            })
            .get( function(){
                return this._password;
            });


userSchema.methods = {
    autheticate: function(plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password;
      },
    securePassword: function(plainpassword) {
        if(!plainpassword) return "";
        try {
            return crypto
              .createHmac("sha256", this.salt)
              .update(plainpassword)
              .digest("hex");
          } catch (err) {
            return "";
          }
        

    }

}
module.exports = mongoose.model("User" , userSchema);
