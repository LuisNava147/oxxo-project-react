import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuPlus } from "react-icons/lu"
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";



const ProviderPage = async () =>{
const response = await fetch(`${API_URL}/providers`, {
    headers:{
        ...authHeaders()
    }
}) 
const providers:Provider[] = await response.json()

return(
    <div className="flex flex-grow-0 flex-col items-end w-full px-10 pt-10 h-[90vh]">
        <CreateProvider>
            <FormCreateProvider />
        </CreateProvider>
       
    <div className="flex  py-20 flex-wrap w-full gap-14">
        {providers.map((provider: Provider)=>(
       <Link className="hover:scale-110 transition-transform" href={{pathname: `/dasboard/providers/${provider.providerId}`}}>   
        <ProviderCard provider={provider} key={provider.providerId}/>
        </Link>
        ))}
       
    </div>
    </div>
)
}

export default ProviderPage;