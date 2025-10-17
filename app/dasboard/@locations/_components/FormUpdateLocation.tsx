import { Input } from "@heroui/react";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager } from "@/entities";
import { Location } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

//el cliente sube data al servidor
export default async function FormUpdateLocation({store}:{store?: string | string[] | undefined}){
    if(!store || store==undefined || typeof store == "object") return null;
    const updateWithStoreId = updateLocation.bind(null,store);
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

    let foundLocation = dataLocations.find((location)=>location.locationId == +store)
    let foundManager = dataManager.find((managers)=>managers.managerId == foundLocation?.manager?.managerId)

    return (
    <form action={updateWithStoreId} className="bg-orange-400 py-2 px-10 flex flex-col gap-6 w-full rounder-lg">
        <h1 className="text-3x1 text-white text-center">Crear Tienda</h1>
        <Input defaultValue={foundLocation?.locationName} label ="Nombre" placeholder="Oxxo Juriquilla" name="locationName" />
        <Input defaultValue={foundLocation?.locationAddress} label ="Dirección" placeholder="Av de La Luz S/N" name="locationAddress" />
        <Input defaultValue={foundLocation?.locationLatLng[0].toString()} label ="Latitud" placeholder="-120" name="locationLat" />
        <Input defaultValue={foundLocation?.locationLatLng[1].toString()}label ="Longitud" placeholder="20" name="locationLng" />
        <SelectManager defaultManager={foundManager?.managerId} managers={dataManager} locations={dataLocations}/>
       
        <button type="submit" color="primary"> Subir </button>
    </form>
    );
}