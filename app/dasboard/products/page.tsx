import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";

const ProductsPage = async ()=>{
    const response = await fetch(`${API_URL}/products`, {
        headers:{
            ...authHeaders()
        },
        next: {
            tags: ["dasboard:products"]
        }
    })
    const products:Product[] = await response.json()
    return (
        <div>
            {products.map((product) => {
                return (
                    <ProductCard product={product} />
                )
            })}
        </div>
    )
    }
    
    export default ProductsPage;