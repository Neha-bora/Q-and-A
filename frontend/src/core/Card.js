import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import CardImage from "../user/helper/cardImageHelper";

const Card = ({
    question 
}) =>{
          
    const [ redirect , setRedirect] = useState(false);
    const [ count , setCount] = useState(question.count);

    const cardTitle = question ?question.title  : " Default"
    const cardQestion = question ?question.askQestion : "Default"
    

   
      
      return(
      <div class="card">
                  
        <div class="card-body">
      
        <h4 class="card-title">{cardTitle}</h4>
        <hr/>
       
        <p class="card-text">{cardQestion }</p>
        
      </div>
     
      <CardImage question={question}/> 
     
       </div>    
        
      )
}


export default Card;