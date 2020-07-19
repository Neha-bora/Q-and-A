import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import { getAllQuestions } from "./helper/coreapicalls";
import Card from "./Card";

const Home = () => {
  const [questions, setquestions] = useState([]);
  const [error, setError] = useState(false);
 
  const loadAllQuestion = () => {
    getAllQuestions().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setquestions(data);
      }
    });
  };

  useEffect(() => {
    loadAllQuestion ();
  }, []);


 return(
   <Base>
       <div className="row">
      
         { questions.map (( question  , index ) =>{
          return (
              <div key={index} className="col-lg-12 mb-4">
             
                <Card question={question} />
              </div>
            );
         })}
       </div>

   </Base>
  
 )
}


export default Home;