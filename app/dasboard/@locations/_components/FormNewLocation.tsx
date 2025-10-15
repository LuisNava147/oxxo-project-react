import { Input } from "@heroui/react";
import {createLocation} from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager } from "@/entities";
import { Location } from "@/entities";

//el cliente sube data al servidor
export default async function FormNewLocation({store}:{store:string | string[] | undefined}){
    if(store) return null;

    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dasboard:managers"]
        }
    })
    const dataManager: Manager[] = await responseManagers.json()
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dasboard:locations"]
        }
    })
    const dataLocations: Location[] = await responseLocation.json()
    return (
    <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounder-lg">
        <h1 className="text-3x1 text-white text-center">Crear Tienda</h1>
        <Input label ="Nombre" placeholder="Oxxo Juriquilla" name="locationName" />
        <Input label ="Dirección" placeholder="Av de La Luz S/N" name="locationAddress" />
        <Input label ="Latitud" placeholder="-120" name="locationLat" />
        <Input label ="Longitud" placeholder="20" name="locationLng" />
        <SelectManager managers={dataManager} locations={dataLocations}/>
        <button type="submit" color="primary"> Subir </button>
    </form>
    );
}