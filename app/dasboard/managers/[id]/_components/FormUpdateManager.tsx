import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateManager({manager}:{manager:Manager}){
    const updateManagerWithId =updateManager.bind(null,manager.managerId)
return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
    <h1>Actualizar manager</h1>
        <Input defaultValue={manager.managerFullName} placeholder="Manager Name"
         name="managerFullName" />
        <Input defaultValue={manager.managerEmail} placeholder="mananger@oxxo.com"
         name="managerEmail" />
        <Input defaultValue={String(manager.managerSalary)} placeholder="salary"
         name="12000" />
        <Input defaultValue={manager.managerPhoneNumber} placeholder="442xxxxxxx"
         name="442xxxxxxx" />
        <Button color="primary" type="submit">
            Actualizar
        </Button>
    </form>
    
)
}