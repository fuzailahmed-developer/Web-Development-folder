import { create } from "zustand";

const useMyStore = create((set,get) => ({
    count: 1,
    name: 'fuzail',
    increment() {
        set((state) => ({ count: state.count + 1 }))
    },
    capitalize() {
        const {name} = get()
        set({name : name[0].toUpperCase() + name.slice(1)})
    }
}))

export default useMyStore