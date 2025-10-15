"use server";
import { TOKEN_NAME, API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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
            'content-type': 'application/json',
            ...authHeaders()
        }
    })
    const {locationId}:Location = await response.json()
    if(response.status == 201) {
        revalidateTag("dasboard:locations");
        redirect(`/dasboard?store=${locationId}`)
    }
}   