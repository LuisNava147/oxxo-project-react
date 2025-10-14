import axios from "axios";
import { Input } from "@heroui/react";
import {createLocation} from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

//el cliente sube data al servidor
export default async function FormNewLocation(){
    const token= cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return (
    <form action={createLocation}>
        <Input label ="Nombre" name="locationName" />
        <Input label ="Dirección" name="locationAddress" />
        <Input label ="Latitud" name="locationLat" />
        <Input label ="Longitud" name="locationLng" />
        <SelectManager managers={responseManagers.data} locations={responseLocation.data}/>
        <button type="submit"> Subir </button>
    </form>
    );
}