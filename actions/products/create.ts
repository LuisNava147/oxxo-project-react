"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData){
    let products:any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        products[key] = formData.get(key); 
        
    }
    const response = await fetch(`${API_URL}/products`,{
        method: "POST",
        body: JSON.stringify(products),
        headers:{
            'content-type': 'application/json',
            ...authHeaders()
        },
    })
    if(response.status ==201) revalidateTag("dasboard:products")
}