import { useState } from "react"
import { GrocyList } from "./grocerylist";
import { Grocyinput } from "./grocyinput";
import { v4 as uuid } from "uuid";

export const Grocy=()=>{
    const[grocy,setGrocy]=useState([]);

    const handleClick=(text)=>{
        const payload={
            title:text,
            id:uuid(),
            status:false,

        }
        setGrocy([...grocy,payload]);

    }
    const delGrocy=(id)=>{
        const delarr=grocy.filter((e,id)=>{
            return id!==id
        })
        setGrocy(delarr)
    }

    return(
        <div>
            <Grocyinput handleClick={handleClick}/>
            {grocy.map((e)=>{
                return <GrocyList delGrocy={delGrocy} key={e.id} title={e.title}/>
            })}
        </div>
    )
}
