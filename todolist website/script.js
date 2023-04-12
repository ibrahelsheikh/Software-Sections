const form = document.querySelector('form');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', addTodo);
todoList.addEventListener('click', removeTodo);

function addTodo(e) {
    e.preventDefault();

    const todoInput = document.querySelector('.todo-input');
    const todoInputText = todoInput.value;
    const task = document.createElement('p');
    task.className = 'task';
    task.appendChild(document.createTextNode(todoInputText));

    const li = document.createElement('li');
    li.className = 'todo';
    li.appendChild(task);

    todoInput.value = '';

    //add the done button
    const doneBtn = document.createElement('button');
    doneBtn.appendChild(document.createTextNode('✓'));
    doneBtn.className = 'done-btn'
    li.appendChild(doneBtn);

    //add the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.className = 'delete-btn'
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}


function removeTodo(e) {
    if(e.target.classList.contains('delete-btn')){
        const todo = e.target.parentElement;
        todo.remove();
    }
    else if (e.target.classList.contains('done-btn')){
        const todo = e.target.parentElement;
        const task = todo.querySelector('.task')
        task.classList.add('done-task');

        const doneBtn = e.target;
        doneBtn.disabled = "disabled ";
        doneBtn.style.backgroundColor = 'darkgrey';
    }
}