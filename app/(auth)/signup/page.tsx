import { Button, Input, button } from "@heroui/react"
import Link from "next/link";
//8:45

export default function SignupPage(){
    return (
      <div className="bg-orange-500 px-10 py-2 rounded-md ">
        <p className="text-2xl my-4 text-white">Registrate</p>
      <div className="flex flex-col gap-2 my-5 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm"/>   
        <Input label="Contraseña" type="password" isRequired={true} size="sm"/>  
        <Input label="Repetir contraseña" type="password" isRequired={true} size="sm"/>  
      </div>
      <div className="flex flex-col items-center gap-2">
      <Button color="primary" variant="solid">Registrarse</Button>
      <p className="text-white">¿Ya tienes una cuenta?<Link href="/login" 
      className="text-orange-200 underline"> Inicia sesión</Link></p>
      <p><span><a href=""></a></span></p>
      </div>
      </div>
  
    );
    
  }