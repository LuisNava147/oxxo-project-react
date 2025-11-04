import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeesPage = async ()=>{
    const response = await fetch(`${API_URL}/employees`,{
        headers:{
            ...authHeaders()
        },
        next:{
            tags: ["dasboard:employees"]
        }
    })
    const employees:Employee[] = await response.json()

    return(
       <>
        {employees.map((employee: Employee)=>{
                return <EmployeeCard key={employee.employeeId} employee={employee }/>
            })}
        </> 
    )
    }
    
    export default EmployeesPage;