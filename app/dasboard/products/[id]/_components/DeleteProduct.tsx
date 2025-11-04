import deleteProduct from "@/actions/products/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";


export default function DeleteProduct({productId}:{productId: string}){
    const deleteproductById = deleteProduct.bind(null, productId)
    return(
        <form action={deleteproductById}>
            <Button type="submit" color="danger">
                <LuTrash size="20"/>
            </Button>
        </form>
    )
}