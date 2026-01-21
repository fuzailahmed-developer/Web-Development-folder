import React, { useRef, useState } from 'react'
import { useTodoStore } from './store/store'

const App = () => {

  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const data = useTodoStore(state => state.data)
  const addItem = useTodoStore(state => state.addItem)
  const deleteItem = useTodoStore(state => state.deleteItem)
  const startEdit = useTodoStore(state => state.startEdit)
  const updateItem = useTodoStore(state => state.updateItem)
  const editIndex = useTodoStore(state => state.editIndex)


  const handleSubmit = () => {
    if (input.trim() == "") {
      alert("Please Add Item...!")
      return
    }

    if (editIndex != null) {
      updateItem(input)
    } else {

      if (data.includes(input)) {
        alert("Item Already Exist..!")
        return
      }

      addItem(input)

    }
    setInput('')
    inputRef.current.focus()
  }

  const handleEdit = (idx) => {
    startEdit(idx)
    setInput(data[idx])
    inputRef.current.focus()
  }


  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />
      <button onClick={handleSubmit}>{editIndex != null ? 'Update' : 'Add'}</button>
      <br />
      <ul>
        {
          data.map((item, idx) => (
            <li
              key={idx}
            >
              {item}
              <button
                onClick={() => deleteItem(idx)}>
                delete
              </button>
              <button
                onClick={() => handleEdit(idx)}>
                Edit
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App