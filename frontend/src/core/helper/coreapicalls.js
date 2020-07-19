import { API } from "../../backend";


export const getAllQuestions  = () =>{
    return fetch (`${API}/questions` , {
        method:"GET"
    })
    .then( response =>{
        return response.json();
    })
    .catch( err => console.log(err))

};
