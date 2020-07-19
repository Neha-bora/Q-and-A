import { API } from "../../backend";


export const updateProfile = ( userId , token , profile)  => {
    return fetch(`${API}/user/${userId }` , {
        method:"PUT",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`
        },
        body:profile
    }).then( response =>{
        return response.json()
    })
    .catch( err => console.log(err));
}


//get a single user
export const getUser = ( userId ) =>{
    return fetch(`${API}/user/${userId}` , {
        method:"GET",
    
    }).then( response =>{
        return response.json()
    })
    .catch( err => console.log( err));
}