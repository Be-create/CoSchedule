import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { todosreducer } from "./reducer";



export const store = createStore(
    todosreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)