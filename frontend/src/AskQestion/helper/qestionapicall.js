import { API } from "../../backend";

export const createqestion = ( userId , token , qestion)  =>{
    return fetch(`${API}/createQestions/${userId }` , {
        method:"POST",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`
        },
        body:qestion
    }).then( response =>{
        return response.json()
    })
    .catch( err => console.log(err));
}