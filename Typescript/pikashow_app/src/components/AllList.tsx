import { useSelector } from 'react-redux'
import RenderList from './RenderList'
import type { RootState } from '../redux/store/store'

const AllList = () => {

  const todoList = useSelector((state:RootState) => state.todo.data)

  return (
    <div className="mt-5 space-y-3">
      {todoList.length === 0 && (
        <p className="text-gray-400 text-center">No active tasks!</p>
      )}

      {todoList.map(task => (
        <RenderList task={task} key={task.id}/>
      ))}
    </div>
  )
}

export default AllList