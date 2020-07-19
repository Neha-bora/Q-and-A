import React, { useState , useEffect } from "react";

import UserImage from "./helper/UserImageHelper";
import Base from "../core/Base";

import { updateProfile, getUser} from "./helper/profileapicalls";

import { isAutheticated } from "../auth/helper";
import { Redirect } from "react-router-dom";

const {user:{name , email } } = isAutheticated(); 

    const Profile = () => {

      const { user , token} = isAutheticated()

      const[values , setValues] = useState({
        bio:"",
        qualification:"", 
        location:"",
        photo:"",   
        loading:false,
        error:"",  
        getaRedirect:false,
        success:"",
        formData:new FormData()
       });

      const{ bio , qualification,  location, loading, error , success, getaRedirect, formData }  = values;
  
      const preload = userId=>{

        getUser(userId).then(data =>{
           console.log( "prod",data)
            if(data.error){
                
                setValues({...values , error:data.error});
            }else{
                setValues({ 
                    ...values,
                    bio:data.bio,
                    qualification:data.qualification,
                    location:data.location,
                    formData: new FormData(),
                   
                   
                   });
                   
            }
        });
        }; 
   

        const onSubmit = event =>{
          event.preventDefault();
          setValues({  ...values , error:"" , loading:true});
          updateProfile( match.params.userId,  user._id, token, formData)
   
          .then( data =>{
            if(data.error){
             setValues({ ...values , error:data.error});
            }else{
              setValues({
                ...values,
            bio:"",
            qualification:"", 
            photo:"", 
            location:"",
            getaRedirect:true,
            loading:false,
            success:data 
               
              });
            }
          });
         
        };
         

    
// const performRedirect = ()=>{

//   if( getaRedirect){
   
//       return <Redirect to="/myProfile"  />
    
//   }

// }
     
    const handleChange = name => event =>{
      // console.log("name",name)
      const value = (name === "photo") ? event.target.files[0] :event.target.value  
      formData.set(name , value);
  
      setValues({...values , [name]:value,formData:formData});

      };


      const successMessage = () => (
        <div class="alert alert-info alert-dismissible fade show" role="alert" 
        style={{display :success ? "" : "none"} }>
        <h4>Add Profile Successfully </h4>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        );  


        const warningMessage = () =>{
        if(error ){
        return(
        <div class="alert alert-info alert-dismissible fade show" role="alert" >
        <h4 >  <strong>oops Try again!</strong>  Failed to Add Profile</h4>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        ) }}
     


        const addProfileFrom = () =>(
            <form> 

          <div className=" bodyProfile">
      
          <div className="card-addProfile  ">
          <div className="top-addProfile ">

          <div className="image mb-4">
          <UserImage/>
          <i class="fas fa-photo-video">
          <label className="btn ">
              <input       
                type="file"
                name="photo"
                accept="image"
                onChange={handleChange("photo")}
                placeholder="choose photo"
              />
            </label>
            </i>
          </div>
          </div>
         
          <div className="bottom ">
           {/* <h2 className="mt-4  name">{name}   </h2>
           <h5> {email}   </h5> */}
           <hr/>


           <div className="row"> 
             <div className="col-lg-12">
            
             <textarea 

             className="form-control mb-4  "
             onChange={handleChange("bio")}
             value={bio}
          
             placeholder="Enter your bio"/>
             
             </div>
           </div>
             <div className="row">  
           <div className="col">
           <input
           
             className="form-control mb-4"
             onChange={handleChange("qualification")}
             value={qualification}
               
              placeholder="🎓  Enter your Qualification"/>
              
              </div>

              </div>
              <input
             className="form-control mb-4"
             onChange={handleChange("location")}
             value={location}
           
              placeholder="🏠  Enter your location"/>
          
           <button type="submit" onClick={onSubmit} className="btn btn-info btn-sm ">
           <h5 className="icon-col">Add confirm</h5>
          </button>
           
           
           
           
           
          </div>
        </div>
        </div> 
        </form>
        )
       return(
         <Base>
         {successMessage()}
         {warningMessage ()}
           {addProfileFrom()}
           {/* {performRedirect ()} */}
         </Base>
       )
      
        
    }
        
    
export default Profile;

