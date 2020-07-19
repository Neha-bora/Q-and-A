import React from "react";
import "../styles.css";
import {Link , withRouter} from "react-router-dom";


const Footer= () =>
{
    return(
      
            <footer className=" navbar-col mt-4 footer">
                 
                  <div className="container text-center text-md-left">

                 
    <div class="row">

       <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
        <h5 class="font-weight-bold text-uppercase mb-4"> Q&A</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
          esse
          quasi, veritatis totam voluptas nostrum.</p>

         </div>

                 
      {/* <hr class="clearfix w-100 d-md-none"> */}


<div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

 
  <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

  <ul class="list-unstyled">
   
    <li>
      <p>
        <a href="#!">ABOUT US</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#!">BLOG</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#!">Ask Question</a>
      </p>
    </li>
  </ul>

</div>

   
{/* <hr class="clearfix w-100 d-md-none"> */}


<div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

  
  <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

  <ul class="list-unstyled">
    <li>
      <p>
        <i class="fas fa-home mr-3"></i> Badarpur , Delhi</p>
    </li>
    <li>
      <p>
        <i class="fas fa-envelope mr-3"></i> info@example.com</p>
    </li>
    <li>
      <p>
        <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
    </li>
    <li>
      <p>
        <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
    </li>
  </ul>

</div>




{/* <hr class="clearfix w-100 d-md-none"> */}


<div class=" text-center mx-auto my-4 ">

 
  <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

  <a type="button" class="btn-floating btn-large btn-email footer-icon facebook-col ">  <i class="fab fa-facebook fa-2x "></i></a>

  <a type="button" class="btn-floating btn-large btn-li footer-icon likdin-col"><i class="fab fa-linkedin-in fa-2x "></i></a>
  <a type="button" class="btn-floating btn-large btn-git footer-icon github-col"><i class="fab fa-github fa-2x "></i></a>

  <a type="button" class="btn-floating btn-tw footer-icon twitter-col">
  <i class="fab fa-twitter fa-2x"></i>
  </a>
  

</div>
    
         </div> 

                  </div>

                  <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a >Q&A</a>
                </div>
            </footer>
        
    )
}



export default withRouter(Footer) ;

