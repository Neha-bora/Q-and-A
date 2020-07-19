import React ,{useState}from 'react';

import {Link , Redirect} from "react-router-dom"
import { signin , authenticate, isAutheticated} from "../auth/helper"


const Signin = () =>{
  
  
const [ values , setValues] = useState({
 
    email:"nehabora@gmail.com",
    password:"neha",
    error:"",
    loading:false,
    didRedirect:false

    })

//destructuring
const { email , password , error , loading , didRedirect} = values;
const{ user} = isAutheticated;

const handleChange = name => event =>{
setValues({...values, error:false , [name]:event.target.value });
};

const onSubmit = event=>{
event.preventDefault();
setValues({ ...values , error:false , loading:true});
signin({email, password})

.then( data =>{
  console.log(data)
  

  if(data.errors){
    
    setValues({ ...values , error:data.errors , loading:false});
  }else{
    authenticate(data ,()=>{
      setValues({
        ...values,
        didRedirect:true
      });

    });
  }
})
.catch(console.log("signin  process failed"));

};

const performRedirect = ()=>{

if(didRedirect){
 
    return <Redirect to="/Home"/>
  
}

// if(isAutheticated()){
//  return <Redirect to ="/"/> 

// }

};

const loadingMessage = ()=>{
  return(
 loading && (
  <div className="alert alert-info">
    <h2>loading...</h2>    
  </div>
 )

  );

  };

const errorMessage = ()=>{
  return(

  <div className="row">
  <div className ="col-md-6 offset-sm-3 text-left"> 
  <div className="alert alert-danger" style={{display: error? "" :"none"}}>
  {error}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
  </div> 
  </div>
  </div>);

  };


    
const SignInForm =  () =>{
    return(
        <div className="row">
        <div className ="col-md-6 offset-sm-3 ">
          
        <form className="form1  main">
        <p class="sign" align="center">Sign In</p>
            

            <div className="form-group">
           
            <input  className="form-control un" onChange={handleChange("email")} value={email}  placeholder="Email"  type="email"/>
            </div>

            <div className="form-group">
           
            <input className="form-control pass" onChange={handleChange("password")} value={password}  type="Password" align="center" placeholder="Password"/>
            </div>
            <button  className ="submit"onClick={onSubmit} align="center" > Signin </button>
            <p className ="link mb-4 mt-2" align="center ">Create new account<Link to="/signup"> Signup </Link></p>
            </form>

        </div>

        </div>


    )
}


    return(
    <div>
    {loadingMessage()}
    {errorMessage()} 
    {SignInForm()}
    {performRedirect()}
         
     
       </div>  
    )
}



export default  Signin;