import RenderList from "./RenderList"
import type { RootState } from "../redux/store/store"
import { useSelector } from "react-redux"

const ActiveList = () => {

  // Filter active tasks
  const todoList = useSelector((state:RootState) => state.todo.data)
  const activeTasks = todoList.filter(task => task.active)

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

export default ActiveList