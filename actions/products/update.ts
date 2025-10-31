"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateProducts(productId:string,formData: FormData){
    let product:any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        product[key] = formData.get(key); 
        
    }
    const response = await fetch(`${API_URL}/products/${productId}`,{
        method: "PATCH",
        body: JSON.stringify(product),
        headers:{
            ...authHeaders()
        },
    })
    if(response.status ==200) {
        revalidateTag("dasboard:products")
        revalidateTag(`dasboard:products:${productId}`)
    }
}