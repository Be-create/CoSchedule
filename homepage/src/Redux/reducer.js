import { UpdateTodos } from "./actiontype"

const initstate = {
    todos : []
}

export const todosreducer = (state = initstate ,{type,payload})=>{
    switch(type){
        case UpdateTodos:
            return {
                  todos:[...payload]
            }
        

     default : return state
    }
}