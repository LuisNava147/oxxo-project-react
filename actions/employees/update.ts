"use server";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";


export default async function updateEmployee(employeeId: string, formData: FormData){
    formData.delete("$ACTION_REF_1")
    formData.delete("$ACTION_1:1")
    formData.delete("$ACTION_1:0")
const response = await fetch(`${API_URL}/employees/${employeeId}`,{
    method: "PATCH",
    headers:{
        ...authHeaders()
    },
    body: formData,
})

if(response.status == 200) revalidateTag("dasboard:employees")

    return;
}