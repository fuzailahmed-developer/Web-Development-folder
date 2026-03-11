var inputEl = document.getElementById('input');
var btnEl = document.querySelector('button');
var ulEl = document.querySelector('ul');
var cancelBtn = document.querySelector('#cancel');
var taskList = [];
var editId = '';
// render list functionality...!
var renderList = function (list) {
    ulEl.innerHTML = list.map(function (task) {
        var id = crypto.randomUUID();
        return ("\n            <li id='".concat(id, "'>\n                <span>").concat(task, "</span>\n                &nbsp;\n                <button onclick=\"editItem('").concat(id, "')\">\n                    Edit\n                </button>\n                <button onclick=\"deleteItem('").concat(id, "')\">\n                    Delete\n                </button>\n            </li>\n            "));
    }).join('');
};
// add item functionality...!
var handleAddItem = function (e) {
    if (!inputEl.value) {
        alert('Please Add Task First...!');
        return;
    }
    var inputVal = "".concat(inputEl.value[0].toUpperCase()).concat(inputEl.value.slice(1));
    taskList.push(inputVal);
    renderList(taskList);
    clearInput();
};
btnEl.addEventListener('click', handleAddItem);
// delete item functionality...!
function deleteItem(id) {
    if (editId)
        return;
    var getEl = document.getElementById(id);
    getEl.remove();
    inputEl.focus();
}
// edit item functionality...!
function editItem(id) {
    var _a;
    editId = id;
    btnEl.textContent = 'Update';
    btnEl.removeEventListener('click', handleAddItem);
    btnEl.addEventListener('click', updateItem);
    var getEl = document.getElementById(id);
    inputEl.value = ((_a = getEl.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    inputEl.focus();
    cancelBtn.style.display = 'unset';
    cancelBtn.addEventListener('click', cancelUpdate);
}
// update item functionality...!
function updateItem() {
    if (!inputEl.value)
        return;
    var getEl = document.getElementById(editId);
    if (getEl.firstElementChild) {
        getEl.firstElementChild.textContent = inputEl.value;
    }
    btnEl.textContent = 'Add';
    btnEl.removeEventListener('click', updateItem);
    btnEl.addEventListener('click', handleAddItem);
    editId = '';
    cancelBtn.style.display = 'none';
    clearInput();
}
// cancel update item functionality...!
function cancelUpdate() {
    btnEl.textContent = 'Add';
    btnEl.removeEventListener('click', updateItem);
    btnEl.addEventListener('click', handleAddItem);
    editId = '';
    clearInput();
    cancelBtn.style.display = 'none';
}
// clear input functionality...!
function clearInput() {
    inputEl.focus();
    inputEl.value = '';
}
