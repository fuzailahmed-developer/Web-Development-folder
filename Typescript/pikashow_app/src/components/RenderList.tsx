import { useDispatch } from "react-redux"
import type { List } from "../types/List"
import { completeItem, deleteItem, inCompleteItem } from "../redux/features/TodoSlice"

interface RenderListProps {
    task: List
}

const RenderList = ({ task }: RenderListProps) => {

    const dispatch = useDispatch()

    const handleCompleteState = () => {
        if (task.completed) {
            dispatch(inCompleteItem(task.id))
        } else {
            dispatch(completeItem(task.id))
        }
    }

    return (
        <div
            key={task.id}
            className="flex justify-between items-center p-4 border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow b500:flex-row flex-col space-y-5"
        >
            <div>
                <p className="text-gray-800 font-medium">{task.text}</p>
                <span className="text-sm text-gray-400">
                    Status: {task.completed ? "Completed" : "Active"}
                </span>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={handleCompleteState}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    {task.completed ? 'In Complete' : 'Complete'}
                </button>
                <button
                    onClick={() => dispatch(deleteItem(task.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default RenderList