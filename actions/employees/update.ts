"use server";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";


export default async function updateEmployee(employeeId: string, formData: FormData){
    const cleanData = new FormData()
    for(const [key,value] of formData.entries()){
        if(!key.startsWith("$")){
            cleanData.append(key,value)
        }
    }
    
const response = await fetch(`${API_URL}/employees/${employeeId}`,{
    method: "PATCH",
    headers:{
        ...authHeaders()
    },
    body: cleanData,
})
//console.log(await response.json())
if(response.status == 200) revalidateTag("dasboard:employees")
if(response.status == 200) revalidateTag(`dasboard:employees:${employeeId}`)

    return;
}