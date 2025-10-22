"use server";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateProvider(providerId: string, formData: FormData){
    const provider = {
        providerName: formData.get("providerName"),
        providerEmail: formData.get("providerEmail"),
        providerPhoneNumber: formData.get("providerPhoneNumber")
    };
    const response = await fetch(`${API_URL}/providers/${providerId}`,{
        method: "PATCH",
        body: JSON.stringify(provider),
        headers:{
            ...authHeaders(),
            'content-type': 'application/json',
        },
       
    })
    console.log(await response.json())
    if(response.status ==200) revalidateTag("dasboard:providers")
    
}