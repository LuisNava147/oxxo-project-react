import Image from "next/image";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
   }>){
  return (
    <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
    <div className="place-content-center place-self-center place-items-center text-center">
      <Image src="/oxxo-logo.svg" alt="Logo de Oxxo" className="my-6 bottom-10"width={200} height={0}/>
      
      {children}</div>
    
    </div>
  );
  

  }