import React ,{useState}from 'react';
import {Link} from "react-router-dom"
import { signup } from '../auth/helper';


const Signup = () =>{
  
    
  const [values , setValues]= useState({
    name:"",
    lastname:"",
    email:"",
    password:"",
   
     error:"",
    success: false

  });

  const { name ,lastname, email, password , error , success}  = values;

  const handleChange = name => event =>{
    setValues({...values, error:false , [name]:event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values , error:false})
    signup({name ,lastname, email , password})
    .then( data =>{
      console.log(data) 
    if(data.errors){
    setValues({...values , error:data.errors , success:false})
    }else{
    setValues({
      ...values,
      name:"",
      lastname:"",
      email:"",
      password:"",
      error:"",
      success:true

    });
    }
    })
    .catch( console.log("Error in SignUp"));  
       

}





    
const SignUpForm =  () =>{
    return(
        <div className="row">
        <div className ="col-md-6 offset-sm-3 ">
          
        <form className="form1  main">
        <p class="sign" align="center">Sign up</p>
            <div className="form-group">
           
            <input  className="form-control un" onChange={handleChange("name")} value={name} type="text"  placeholder="Username" align="center"  />
            </div>

            <div className="form-group">
           
            <input  className="form-control un" onChange={handleChange("lastname")} value={lastname}   placeholder="lastname" align="center"  />
            </div>

            <div className="form-group">
           
            <input  className="form-control un" onChange={handleChange("email")} value={email}  placeholder="Email"  type="email"/>
            </div>

            <div className="form-group">
           
            <input className="form-control pass" onChange={handleChange("password")} value={password}  type="Password" align="center" placeholder="Password"/>
            </div>
            <button  className ="submit"onClick={onSubmit} align="center" > Signup </button>
            <p className ="link mb-4 mt-2" align="center ">Already have an account<Link to="/"> SignIn </Link></p>
            </form>

        </div>

        </div>


    )
}


const successMessage = ()=>{
  return(
    <div className="row">
    <div className ="col-md-6 offset-sm-3 mt-4 text-left"> 
  <div className="alert alert-primary" style={{display: success? "" :"none"}}>
  New Account was created successfully!.Please<Link to ="/">Login Here </Link>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
  </div>
  </div>
  </div>
  );

  };

const errorMessage = ()=>{
  return(

    <div className="row ">
    <div className ="col-md-6 offset-sm-3 mt-4 text-left"> 
  <div className="alert alert-danger" style={{display: error? "" :"none"}}>
  {error}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
  </div> 
  </div>
  </div>);

  };


    return(
    <div>
    {successMessage()}
    {errorMessage()}
      {SignUpForm ()}
       {/* <p className ="text-dark text-center">{JSON.stringify(values)} </p> */}
       </div>  
    )
}



export default Signup;