import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Card,CardBody, Divider, CardHeader } from "@heroui/react"
import ManagerCard from "./_components/ManagerCard"
import DeleteManagerButton from "./_components/DeleteManagerButton"
import FormUpdateManager from "./_components/FormUpdateManager"

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
   <div className="flex-col gap-10 flex flex-grow-0 items-center">
    <ManagerCard manager={data} />
    <div className="bg-white shadow-medium rounded-md px-10 py-2">
    <DeleteManagerButton managerId={data.managerId} />
    <FormUpdateManager manager={data} />
    </div>
   </div>
)
}