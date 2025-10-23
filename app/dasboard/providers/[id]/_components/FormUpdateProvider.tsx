
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import updateProvider from "@/actions/providers/update";
import DeleteProviderButton from "./DeleteButton";
import deleteProvider from "@/actions/providers/delete";
import DelateProvider from "./DeleteProvider";

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
        <DelateProvider>
            <h1 className="text-white text 4xl text-center">¿Estas seguro de eliminar al proveedor <b>{provider.providerName}</b>?</h1>
            <DeleteProviderButton providerId={providerId}/>
        </DelateProvider>
    </form>
    </>
)

}