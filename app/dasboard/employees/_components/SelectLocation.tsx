"use client";
import { Location } from "@/entities";
import { Select, SelectItem } from "@heroui/react";
import { number } from "framer-motion";
import { useState } from "react";


export default function SelectLocations({stores,defaultStore}:{stores:Location[], defaultStore?: number | undefined}){
const [selected,setSelected] = useState(defaultStore? String(defaultStore):"")
    return (
        <>
    <Select label="Tienda" selectedKeys={selected ? [selected] : []}
    onChange={(e) => setSelected(e.target.value)}>
    {
        stores.map((store:Location)=>(
            <SelectItem key={String(store.locationId)}>
                {store.locationName}
            </SelectItem>
        ))
    }
    </Select>
    <input type="hidden" name="location" value={selected} />
    </>
)
}