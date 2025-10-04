import { Button, Input, button } from "@heroui/react"
import Link from "next/link";

export default function LoginPage(){
    return (
      <div className="bg-orange-500 px-10 py-2 rounded-md ">
        <p className="text-2xl my-4 text-white">Iniciar sesión <span></span></p>
      <div className="flex flex-col gap-2 my-5 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm"/>   
        <Input label="Contraseña" type="password" isRequired={true} size="sm"/>   
      </div>
      <div className="flex flex-col items-center gap-2">
      <Button color="primary"variant="solid">Registrarse</Button>
      <p className="text-white">¿No tienes cuenta?<Link href="/signup" 
      className="text-orange-200 underline"> Registrate</Link></p>
      <p><span><a href=""></a></span></p>
      </div>
      </div>
  
    );
  }