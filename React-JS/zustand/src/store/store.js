import { create } from "zustand";

export const useTodoStore = create((set,get) => ({
    data : [],
    editIndex : null,
    addItem (item){
        set((state) => ({
            data : [...state.data,item]
        }))
    },
    deleteItem(index){
        set((state) => ({
            data : state.data.filter((_,idx) => idx != index)
        }))
    }, 
    startEdit(idx){
        set({editIndex : idx})
    },
    updateItem(value){
        set((state) => ({
            data : state.map((item,idx) => 
                idx == state.editIndex ? value : item
            ),
            editIndex : null
        }))
    }
})) 