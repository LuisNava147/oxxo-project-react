import { Product } from "@/entities";
import updateProducts from "@/actions/products/update";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import { Provider } from "@/entities";


export default function UpdateProduct({product, providers}:{product:Product, providers:Provider[]}){
    const {productId} = product
    const updateProductById = updateProducts.bind(null, productId )
    return(
        <form action={updateProductById} className="flex flex-col gap-4 p-10">
            <Input name="productName" label="Nombre" defaultValue={product.productName} />
            <Input name="countSeal" label="No. de Sellos" defaultValue={String(product.countSeal)} />
            <Input name="price" label="Precio" defaultValue={String(product.price)}/>
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId}/>
            <Button type="submit" color="primary">Guardar Cambios</Button>
        </form>
    )
}