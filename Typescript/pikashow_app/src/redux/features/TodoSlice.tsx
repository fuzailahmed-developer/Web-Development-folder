import { createSlice } from "@reduxjs/toolkit"
import type { List } from "../../types/List"

interface Todo {
    data : List[]
}

const initialState:Todo = {
    data : []
}

const TodoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        addItem(state,action){
            const uid:string = self.crypto.randomUUID(); 
            state.data.push({
                id : uid,
                active : true,
                completed : false,
                text : action.payload
            })
        },
        deleteItem(state,action){
            state.data = state.data.filter((item) => item.id != action.payload)
        },
        completeItem(state,action){
            state.data = state.data.map((item) => item.id == action.payload ? {...item,completed:true,active:false} : item)
        },
        inCompleteItem(state,action){
            state.data = state.data.map((item) => item.id == action.payload ? {...item,completed:false,active :true} : item)
        }
    }
})


export default TodoSlice.reducer
export const {addItem,deleteItem,completeItem,inCompleteItem} = TodoSlice.actions