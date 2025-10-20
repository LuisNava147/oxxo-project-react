import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";


const ProviderPage = async () =>{
const response = await fetch(`${API_URL}/providers`, {
    headers:{
        ...authHeaders()
    }
}) 
const providers:Provider[] = await response.json()
return(
    <div className="w-full flex-row flex-grow-0 flex-wrap px-10">
        {providers.map((provider: Provider)=>(
       <Link href={{pathname: `/dasboard/providers/${provider.providerId}`}}>   
        <ProviderCard provider={provider} key={provider.providerId}/>
        </Link>
        ))}
       
    </div>
)
}

export default ProviderPage;