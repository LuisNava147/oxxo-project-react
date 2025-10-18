import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Card,CardBody, Divider, CardHeader } from "@heroui/react"
import ManagerCard from "./components/ManagerCard"

export default async function ManagerPage({params}:{params :{id:string}}){
    const response = await fetch(`${API_URL}/managers/${params.id}`,{
        headers:{
            ...authHeaders(),
        },
        next:{
            tags: [`dasboard:managers:${params.id}`,`dasboard:managers`]
        }
    })
    const data: Manager = await response.json()
return (
   <div>
    <ManagerCard manager={data} />
   </div>
)
}