import React from "react";
import { API } from "../../backend";


const UserImage = ({profile}) =>{
  
    const imgeurl = profile ?`${API}/profile/photo/${profile._id}`  : `https://s3.amazonaws.com/37assets/svn/765-default-avatar.png `
    return(
        
        <div>
        <img
          src={ imgeurl}
          alt="photo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="circle-img ml-4"
        />
      </div>


    )
}

export default UserImage;