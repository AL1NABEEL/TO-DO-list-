let todos = [];

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const dueDateInput = document.getElementById("dueDateInput");

  const todo = {
    id: todos.length,
    task: todoInput.value,
    dueDate: dueDateInput.value,
  };
  if (todoInput.value === '') {
    alert("You must write something!");
    todoInput.focus();
  } else {
  todos.push(todo);
  displayTodos2();
  todoInput.value = "";
  dueDateInput.value = "";
}};

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  displayTodos2();
}

function editTodo(id) {
  const todoToEdit = todos.find((todo) => todo.id === id);
  const newTask = prompt("Enter the new task:", todoToEdit.task);
  const newDueDate = prompt("Enter the new due date:", todoToEdit.dueDate);
  todoToEdit.task = newTask;
  todoToEdit.dueDate = newDueDate;
  displayTodos2();
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);




function displayTodos2() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
  
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.innerText = `${todo.task} - Due Date: ${todo.dueDate}`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.onclick = () => deleteTodo(todo.id);
  
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.onclick = () => editTodo(todo.id);
      editBtn.classList.add('edit-button');

      const checkBox = document.createElement("input");
      checkBox.type='checkbox';
      checkBox.classList.add('checkBox');
  
      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      li.appendChild(checkBox);
      todoList.appendChild(li);
});
};
