import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateManager({manager}:{manager:Manager}){
    const updateManagerWithId =updateManager.bind(null,manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`,{
        headers:{
            ...authHeaders()
        },
        })
    const stores = await responseStores.json()
return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col gap-6">
    <h1 className="text-3xl text-white text-center">Actualizar manager</h1>
        <Input required={true} defaultValue={manager.managerFullName} 
        label="Nombre del Manager" placeholder="Manager Name"
         name="managerFullName" />
        <Input required={true} defaultValue={manager.managerEmail} 
        label="Correo Electrónico" placeholder="mananger@oxxo.com"
         name="managerEmail" />
        <Input required={true} defaultValue={String(manager.managerSalary)} 
        label="Salario" placeholder="salary" name="12000" />
        <Input required={true} defaultValue={manager.managerPhoneNumber} 
        label="Número"placeholder="442xxxxxxx" name="442xxxxxxx" />
        <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
        <Button color="primary" type="submit">
            Actualizar
        </Button>
    </form>
    
)
}