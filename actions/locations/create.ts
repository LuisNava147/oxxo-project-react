"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME, API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

//el cliente sube data al servidor
export async function createLocation(formData: FormData){
    
    let location: any = {}
    let locationLatLng = [0, 0];
    for (const key of formData.keys()){
        const value = formData.get(key)
        if(value){
            if(key == "locationLat"){
                locationLatLng[0] = +value;  
            }else if(key == "locationLng"){
                locationLatLng[1] = +value;  
            }else{
                location[key] = formData.get(key); 
            }  
            //location.locationName == location[key]
        }
        
    }
    location.locationLatLng = locationLatLng
    axios.post(`${API_URL}/locations/`,{
        ...location
    },{
        headers : {
            ...authHeaders()
        }
    })
}   