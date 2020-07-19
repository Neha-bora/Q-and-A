import { API } from "../../backend";

export const addProfile= ( userId , token , myprofile)  =>{
    return fetch(`${API}/myprofile/${userId }` , {
        method:"POST",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`
        },
        body: myprofile
    }).then( response =>{
        return response.json()
    })
    .catch( err => console.log(err));
}