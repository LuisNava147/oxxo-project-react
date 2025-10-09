import axios from "axios";
import { Employee, Location} from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card,CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";



export default async function LocationCard({store}:{store:string | string[] | undefined}){
    if(!store)return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return(
        <Card>
            <CardHeader>
            <b>{data.locationName}</b>
            </CardHeader>
            <Divider/>
            <CardBody>
            <p className="w-8/12">Manager: <Link href={{pathname:`/dasboard/managers`}}><b>{data.manager?.managerFullName}</b></Link></p>
            </CardBody>
        </Card>
    )
}