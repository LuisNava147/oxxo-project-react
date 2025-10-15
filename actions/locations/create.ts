"use server";
import { TOKEN_NAME, API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidatePath, revalidateTag } from "next/cache";

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
    const response = await fetch(`${API_URL}/locations/`, {
        method: "POST",
        body: JSON.stringify(location),
        headers : {
            ...authHeaders()
        }
    })
    if(response.status == 201) revalidateTag("dasboard:locations");
}   