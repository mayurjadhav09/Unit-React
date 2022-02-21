import {
  add_todo,
  del_todo,
  change_status_completed,
  change_status_Notcompleted,
} from "./actiontype";


const startState={
    todo:{
        data:[],
        loading:false,
    }
}



export const reducer=(state=startState, {type,payload})=>{
    switch(type){
        case change_status_completed:
            return{
                ...state.todo,
                loading:false,
                data:state.todo.data.map((e)=>e.id==payload ? {...e,status:!e.status} : e)
            };


            case  del_todo:
                return{
                    ...state.todo,
                    loading:false,
                    data:state.todo.data.filter((el)=>el.id !==payload),
                }
                default:
                    return{state};
    };


       

}
