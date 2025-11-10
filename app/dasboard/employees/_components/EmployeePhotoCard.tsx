import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider, Image, CardFooter, Button } from "@heroui/react";
import Link from "next/link";

export default function EmployeePhotoCard({employee}:{employee:Employee}){
    return (
        <Card className="max-h-72" isFooterBlurred>
            <CardHeader className="absolute top-0 bg-black bg-opacity-50 z-10">
                <h1 className="font-bold text-x1 text-white drop-shadow-sm">
                    {employee.employeeName + " " + employee.employeeLastname}</h1>
            </CardHeader>
            <Divider />
            <Image src={employee.employeePhoto} className="z-0 object-cover" classNames={{img: "size-72"}} />
            <CardFooter className="absolute bottom-0 py-2 h-14">
            <Link href={`/dasboard/employees/${employee.employeeId}`}>
                <Button variant="ghost">Actualizar datos</Button>
            </Link>
            </CardFooter>
        </Card>
    )
}