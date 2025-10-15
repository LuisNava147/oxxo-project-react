import axios from "axios";
import { Employee, Location} from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card,CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";


export default async function LocationCard({store}:{store:string | string[] | undefined}){
    if(!store)return null;
    
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`,{
        headers:{
            ...authHeaders()
        }
    })
    return(
        <Card>
            <CardHeader>
            <b className="w-full text-2xl">{data.locationName}</b>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col w-full items-center">
            <p className="w-full">Manager: <Link href={{pathname:`/dasboard/managers`}}><b>{data.manager?.managerFullName}</b></Link></p>
            <p className="w-full">Dirección: <b>{data.locationAddress}</b></p>
            </CardBody>
        </Card>
    )
}