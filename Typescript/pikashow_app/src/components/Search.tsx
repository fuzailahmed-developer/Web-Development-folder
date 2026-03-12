import { useDispatch} from "react-redux"
import { useRef, useState } from "react";
import { addItem } from "../redux/features/TodoSlice";


const Search = () => {

  
  const [input,setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  
  const handleAddItem = () => {
    if (!input.trim()) return
    dispatch(addItem(input))
    setInput("")
    inputRef.current?.focus()
  }

  return (
    <div className='flex gap-3 my-8'>
      <input
        type="text"
        placeholder='write your todo'
        className='grow shadow-sm focus:outline-primary-color px-2 rounded'
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        className='py-2 px-5 rounded-lg bg-primary-color text-white cursor-pointer '
        onClick={handleAddItem}
        >
        Add
      </button>
    </div>
  )
}

export default Search