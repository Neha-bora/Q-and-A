import React from "react";
import "../styles.css";
import {Link , withRouter} from "react-router-dom";
import { signout } from "../auth/helper";

const currentTab = (history,path) => {
    if(history.location.pathname === path){
        return{ color: "#FFFFFF"};
    
}
   
};

const Menu = ({history}) =>(
      <div className="navbar-col ">
          
             <nav className="mb-4 navbar navbar-expand-lg navbar-dark cyan ">
                     <nav className="navbar navbar-light ">
                     <span className="navbar-brand mb-0 h1 brand-col">Q&A</span>
                     </nav>
            

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-nav ml-auto">
                       <li className="nav-item">
                       <Link style={currentTab(history ,"/Home")}
                         className="nav-link" to="/Home">Home </Link>
                         </li>
                        <li className="nav-item ">
                        <Link style={currentTab(history ,"/AskQestions")}
                         className="nav-link" to="/AskQestions"> Ask Qestions<i class="fas fa-question"></i></Link>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style={currentTab(history ,"/MyProfile")}><i className="fa fa-user"></i> Profile </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                            <Link
                             className="nav-link text-dark" to="/MyProfile">My account</Link>
                    
                             <a className="dropdown-item" href="#">
                                            <span className="nav-link text-warning" 
                                            onClick = { () =>{

                                            signout ( ()=>{

                                            })

                                            }} >
                                            Logout
                                            </span>
                                 </a>
                            </div>
                        </li>

                    </ul>
                    
                </div>
            </nav>
           

      </div>
  )



export default withRouter(Menu) ;
