

import { add_todo,del_todo,change_status_completed,change_status_Notcompleted } from "./actiontype";

export const addTodo=(payload)=>{
    return{
        type:add_todo,
        payload,
    }
}
export const delTodo=(payload)=>{
    return{
        type:del_todo,
        payload,
    }
}

export const statusCompleted=(payload)=>{
    return{
        type:change_status_completed,
        payload,
    }
}

// export const change_status_Notcompleted=(payload)=>{
//     return{
//         type:change_status_Notcompleted,
//         payload,
//     }
// }

