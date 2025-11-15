"use client"
import registerManager from "@/actions/users/register-manager";
import {  Manager } from "@/entities";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserManager({manager}:{manager:Manager}){
const [password, setPassword] = useState<string>()  
const [visible, setVisible] = useState<boolean>(false)  
const {managerId} = manager    
const registerManagerById = registerManager.bind(null,managerId)
return (
    <form action={registerManagerById} className="py-10 flex flex-col gap-2">
        <h1 className="text-white text-center text-xl font-bold">Crear usuario</h1>
       <Input name="userEmail" label="Correo de cuenta" /> 
       <Input value={password} type={visible ? "text" : "password"} name="userPassword" label="Contraseña" 
       endContent={<button type="button" onMouseUp={()=>setVisible(false)} 
       onMouseDown={()=>setVisible(true)}><LuEye size="30" /></button>}/> 
       <Button color="danger" onPress={()=>{
         setPassword(generate({
            length:10
         }))
       }}>Generar contraseña</Button>
       <Button color= "primary" type="submit">Crear usuario</Button>
    </form>
)
}