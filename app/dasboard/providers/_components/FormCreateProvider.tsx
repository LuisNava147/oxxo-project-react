import createProvider from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";


export default function FormCreateProvider(){
return( 
    <form action={createProvider} className="bg-orange-400 rounded-md flex flex-col gap-6">
         <h1 className="text-3xl text-white text-center">Crear Proveedor</h1>
    <Input label="Nombre del Proveedor" placeholder="Proovedor" name="providerName" />
    <Input label="Correo Electrónico" placeholder="proveedors@email.com" name="providerEmail" />
    <Input label="Número" placeholder="442xxxxxxx" name="providerPhoneNumber" />
    <Button type="submit" color="primary">Crear Proveedor</Button>
    </form>
)
}