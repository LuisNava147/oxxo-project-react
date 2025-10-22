
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import updateProvider from "@/actions/providers/update";

export default function FormUpdateProvider({provider}:{provider:Provider}) {
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)
return(
    <>
    <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200
    rounded-md px-10 py-10 items-center mr-20 justify-center">
        <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre del Proveedor" placeholder="Proovedor" name="providerName" />
        <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Correo Electrónico" placeholder="proveedors@email.com" name="providerEmail" />
        <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Número" placeholder="442xxxxxxx" name="providerPhoneNumber" />
        <Button type="submit" color="primary">Actualizar</Button>
    </form>
    </>
)

}