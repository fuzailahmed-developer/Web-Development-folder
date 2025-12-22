import { createContext, ReactNode, useState } from "react";

export const todoContext = createContext<{
    todos: newTodosType[];
    handleAddTodo: (task: string) => void;
} | null>(null);

type newTodosType = {
    id: string | number;
    task: string;
    complete: boolean;
    createdAt: Date;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<newTodosType[]>([]);

    const handleAddTodo = (task: string) => {
        const newTodo: newTodosType = {
            id: Math.random().toString(),
            task,
            complete: false,
            createdAt: new Date(),
        };

        setTodos((prev) => [newTodo, ...prev]);
    };

    return (
        <todoContext.Provider value={{ todos, handleAddTodo }}>
            {children}
        </todoContext.Provider>
    );
};
