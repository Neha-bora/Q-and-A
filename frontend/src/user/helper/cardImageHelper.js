import React from "react";
import { API } from "../../backend";


const CardImage = ({question}) =>{
  
    const imgeurl = question ?`${API}/question/photo/${question._id}`  : ""
    return(
        
        <div>
        <img
          src={ imgeurl}
          alt="photo"
          className="card-image ml-4"
        />
      </div>


    )
}

export default CardImage ;