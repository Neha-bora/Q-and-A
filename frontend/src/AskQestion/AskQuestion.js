import React , { useState, useEffect } from "react";
import Base from "../core/Base";
import {createqestion } from "./helper/qestionapicall";
import { isAutheticated } from "../auth/helper";

const AskQestions= () =>{
 
  const{ user , token} = isAutheticated()
    const [values , setValues] = useState({
        title:"",
        askQestion:"",
        photo:"",   
        loading:false,
        error:"",  
        getaRedirect:false,
        success:"",
        formData:new FormData()

    });
     
    
    const{ title,askQestion, loading, error , success, getaRedirect, formData }  = values;
    
    
    const onSubmit = event =>{
        event.preventDefault(); 
       setValues({  ...values , error:"" , loading:true});
        createqestion(user._id, token,formData)
        
        .then( data =>{

          // console.log(data)
          if(data.error){
           setValues({ ...values , error:data.error});
          }else{
            setValues({
              ...values,
              title:"",
              askQestion:"",
              photo:"", 
              loading:false,
              success:data.title
            
             
            });
          }
        });
       
      };
      
  
      const handleChange = name => event =>{
        // console.log("name",name)
        const value = (name === "photo") ? event.target.files[0] :event.target.value  
        formData.set(name , value);
    
        setValues({...values , [name]:value,formData:formData});

        };
       
          const successMessage = () => (
          <div class="alert alert-info alert-dismissible fade show" role="alert" 
          style={{display :success ? "" : "none"} }>
          <h4>Added Successfully </h4>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
          );  


          const warningMessage = () =>{
          if(error ){
          return(
          <div class="alert alert-info alert-dismissible fade show" role="alert" >
          <h4 > Failed to Add</h4>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
          ) }}

          
   const AskQuestionForm = () =>(
       <form>
           
            <div className="container">
            <input
              className="form-control mb-4"
              onChange={handleChange("title")}
            
              value={title}
            
              placeholder="Title of your Qestion"
            
            />

           <textarea className="form-control"
           onChange={handleChange("askQestion")}
           value={askQestion}
        
     
           placeholder= "Ask your Qestion here" 
            rows="10" cols="25" ></textarea>
            

            </div>
           

            <div className="row  mt-4">
            <div className="col-6 mt-4">
            <label className="btn ">
              <input       
                type="file"
                name="photo"
                accept="image"
                onChange={handleChange("photo")}
                placeholder="choose a file"
              />
            </label>
            </div>
             

             <div className="col-6 mt-4"> 
             <button type="submit" onClick={onSubmit} className="btn btn-md btn-outline submit-button-col mb-4 ml-4">
            submit now
          </button>
          </div>

            </div>
       </form>
  )


    return(
    <Base>
          {successMessage()}
          {warningMessage ()}
          { AskQuestionForm()}
     </Base>
    )
    }

export default AskQestions;