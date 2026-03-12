import { useSelector } from "react-redux"
import type { RootState } from "../redux/store/store"
import RenderList from "./RenderList"

const CompletedList = () => {

  const todoList = useSelector((state:RootState) => state.todo.data)

  // Filter completed tasks
  const activeTasks = todoList.filter(task => task.completed)
  
  return (
    <div className="mt-5 space-y-3">
      {activeTasks.length === 0 && (
        <p className="text-gray-400 text-center">No active tasks!</p>
      )}

      {activeTasks.map(task => (
        <RenderList task={task} key={task.id}/>
      ))}
    </div>
  )
}

export default CompletedList