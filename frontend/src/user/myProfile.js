import React  from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import UserImage from "./helper/UserImageHelper";

const {user:{name , lastname,  email } } = isAutheticated();
const userProfile = ({profile}) => {
  
      const bio = profile ?profile.bio  : " Default"
      const qualification = profile ?profile.qualification : " Default"
      const location = profile ?profile.location  : " Default"

  const profileSection= () => (
         


      <div className=" bodyProfile">
      
        <div className="card">
        <div className="top ">
        <div className="image col-sm-6"><UserImage/> </div>
        <div className="col-sm-6">
       
        </div>
          
        </div>
       
        <div className="bottom ">
         <h2> {name} </h2>
         <h2>{lastname}</h2>
         <h4>{email}</h4>
         <hr/>
         <p> <i class="fas fa-quote-left"></i>  <i class="fas fa-quote-right"></i> {bio} </p>
        
         <div className="col "> <p><i class="fas fa-user-graduate "></i> {qualification}  </p></div>
         <div className="row">
         <div className="col-sm-6 "> <p><i class="fas fa-home"></i>  {location}  </p></div>
         <div className="col-sm-6 mb-4 "><Link className="btn add-Button btn-lg " to="addProfile"><i class="fas fa-plus icon-col"></i></Link> </div>
         
         </div>
         
         
        </div>
      </div>
      </div>
        )
          return (
              <Base> 
              {profileSection()}
              </Base>
            )

    }
export default userProfile;