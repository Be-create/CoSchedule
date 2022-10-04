import { UpdateTodos } from "./actiontype.js";




export const updatetodos= (payload)=>{
return {
    type : UpdateTodos,
    payload
}
}