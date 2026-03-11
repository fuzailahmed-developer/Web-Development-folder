const inputEl = document.getElementById('input') as HTMLInputElement
const btnEl = document.querySelector('button') as HTMLButtonElement
const ulEl = document.querySelector('ul') as HTMLUListElement
const cancelBtn = document.querySelector('#cancel') as HTMLButtonElement
const taskList: string[] = []
let editId: string = ''

// render list functionality...!
const renderList = (list: string[]): void => {
    ulEl.innerHTML = list.map((task) => {

        const id: string = crypto.randomUUID();

        return (
            `
            <li id='${id}'>
                <span>${task}</span>
                &nbsp;
                <button onclick="editItem('${id}')">
                    Edit
                </button>
                <button onclick="deleteItem('${id}')">
                    Delete
                </button>
            </li>
            `
        )
    }).join('')
}

// add item functionality...!
const handleAddItem = (e: MouseEvent): void => {
    if (!inputEl.value) {
        alert('Please Add Task First...!')
        return
    }
    const inputVal = `${inputEl.value[0].toUpperCase()}${inputEl.value.slice(1)}`
    taskList.push(inputVal)
    renderList(taskList)
    clearInput()
}
btnEl.addEventListener('click', handleAddItem)

// delete item functionality...!
function deleteItem(id: string): void {
    if (editId) return
    const getEl = document.getElementById(id) as HTMLLIElement
    getEl.remove()
    inputEl.focus()
}

// edit item functionality...!
function editItem(id: string): void {
    editId = id
    btnEl.textContent = 'Update'
    btnEl.removeEventListener('click', handleAddItem)
    btnEl.addEventListener('click', updateItem)
    const getEl = document.getElementById(id) as HTMLLIElement
    inputEl.value = getEl.firstElementChild?.textContent || ''
    inputEl.focus()
    cancelBtn.style.display = 'unset'
    cancelBtn.addEventListener('click',cancelUpdate)
}

// update item functionality...!
function updateItem(): void {
    if (!inputEl.value) return
    const getEl = document.getElementById(editId) as HTMLLIElement
    if (getEl.firstElementChild) {
        getEl.firstElementChild.textContent = inputEl.value
    }
    btnEl.textContent = 'Add'
    btnEl.removeEventListener('click', updateItem)
    btnEl.addEventListener('click', handleAddItem)
    editId = ''
    cancelBtn.style.display = 'none'
    clearInput()
}

// cancel update item functionality...!
function cancelUpdate(): void {
    btnEl.textContent = 'Add'
    btnEl.removeEventListener('click', updateItem)
    btnEl.addEventListener('click', handleAddItem)
    editId = ''
    clearInput()
    cancelBtn.style.display = 'none'
}

// clear input functionality...!
function clearInput(): void {
    inputEl.focus()
    inputEl.value = ''
}