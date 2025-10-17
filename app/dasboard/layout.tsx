'use client';
import Image from "next/image";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function layoutDashboard({children,locations}: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
   }>){
    const path = usePathname()
return(
    <div className="w-screen h-screen bg-orange-50">
    <Header/>
    <div className="flex flex-row items-center">
    <Sidebar/>
         {children}
         {path == "/dasboard" ? locations:null}
    </div>
    </div>
);
}