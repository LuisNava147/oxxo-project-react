import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";

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
        <div className="90[vh] ">
            <div className="1/12">
            <FilteredCards products={products}/>
            </div>
           
        </div>
    )
    }
    
    export default ProductsPage;