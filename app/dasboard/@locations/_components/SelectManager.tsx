"use client";
import { Select,SelectItem } from "@heroui/react";
import { Manager,Location } from "@/entities";

export default function SelectManager({ managers, locations }: {managers: Manager[], locations: Location[]}){
const disabledKeys =locations.map((location:Location)=>
     location.manager?.managerId
).filter((managerId): managerId is string => managerId != undefined)
    return(
    <Select label= "Manager" name = "manager" disabledKeys={disabledKeys}>
        {managers.map((manager:Manager)=>{
                return (
                <SelectItem key={manager.managerId}>
                    {manager.managerFullName}
                </SelectItem>
                );
            })}
    </Select>
);
}