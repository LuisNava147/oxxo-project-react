import { Product } from "@/entities";
import { Card,CardHeader, CardBody, Divider } from "@heroui/react";
import Link from "next/link";


export default function ProductCard({product}:{product:Product}){
    return (
        <Card className=" max-w-[350px] mb-8" >
            <CardHeader>{product.productName}</CardHeader>
            <Divider />
            <CardBody>
                <p>Nombre del Producto: <b>{product.productName}</b></p>
                <p>Precio del Producto: <b>{product.price}</b></p>
                <p>Proveedor: <Link className="font-bold underline" href={`/dasboard/providers/${product.provider.providerId}`}/>
                <b>{product.provider.providerName}</b></p>
            </CardBody>
        </Card>
    )
}