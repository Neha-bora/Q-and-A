import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/helper/PrivateRoutes";

import AskQestions from "./AskQestion/AskQuestion";
import userProfile from "./user/myProfile";
import Card from "./core/Card";
import Profile from "./user/updateUserInfo";

const Routes =  () => {

    return(
  
     <BrowserRouter>
       <Switch>
      
         <Route  path="/"  exact component={Signin}/>  
         <Route  path="/signup"  exact component={Signup}/> 
         <PrivateRoute   path="/home"  exact component={Home}  />
         <PrivateRoute   path="/MyProfile"  exact component={ userProfile}  />
         <PrivateRoute   path="/addProfile"  exact component={Profile}  />
         <PrivateRoute   path="/AskQestions"  exact component={AskQestions}  />
         <PrivateRoute   path="/Card"  exact component={Card}  />


  
      </Switch>
  
    </BrowserRouter>
    );
  
  }
  export default Routes;