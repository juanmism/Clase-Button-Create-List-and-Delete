//Event
const todoList = [];
const button = document.querySelector("#button");

const handelClick =(event) => {
    event.preventDefault();
    const name = document.querySelector("#name");
    const todo = document.querySelector("#todo");
    const todoData= {
        name: name.value,
        todo: todo.value
    }
    todoList.push(todoData)
    printTodoList();
    todo.value = "";
    name.value = "";
}

button.addEventListener( "click", handelClick);   //Ver eventos javascript onclick, etc..(google).

const printTodoList = () => {
    const todoListHtml = document.querySelector("#todoList");
    let listStr = "";
    todoList.map((todo, index) => listStr = listStr + `<li>${todo.todo} <button onclick="deleteTodo(${index})"> Delete </button></li>`);  //Esto no lo entiendo: por que todo.todo.
    const html = `<ul>${listStr}</ul>`;
    todoListHtml.innerHTML = html;
}

const deleteTodo = (index) => {
    delete todoList[index];
    printTodoList();
}

