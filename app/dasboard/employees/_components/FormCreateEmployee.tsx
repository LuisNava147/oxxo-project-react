
import { Button, Input } from "@heroui/react";
import createEmployee from "@/actions/employees/create";

export default function FormCreateEmployee(){
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit ">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Luis" />
            <Input isRequired={true} label="Apellidos" name="employeeLastname" placeholder="Navas" />
            <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="lnavas@lnavas.com"  />
            <Input isRequired={true} label="Número"  name="employeePhoneNumber"placeholder="442XXXXXXX"  />
            <Input label="Foto" type="file" name="employeePhoto"  />
            <Button type="submit" color="primary">Crear empleado</Button>
        </form>
    )
}