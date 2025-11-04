import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";


export default function EmployeeCard({employee}:{employee:Employee}){
    return (
        <Card>
            <CardHeader>
                <h1 className="font-bold text-x1">{employee.employeeName + " " + employee.employeeLastname}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo : { employee.employeeEmail }  </p>
                <p> Numero de telefono:  {employee.employeePhoneNumber}</p>
            </CardBody>
        </Card>
    )
}