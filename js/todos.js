function todosData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodo(data));
}

function displayTodo(todos) {
    const todoContainer = document.getElementById('todo-container');
    for (let todo of todos) {
        console.log(todo);
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>title: ${todo.title}</h4>
        <p>User: ${todo.userId}</p>
        <p>isCompleted: ${todo.completed === true ? 'complete' : 'not complete'}</p>
        `;
        todoContainer.appendChild(div);
    }
}
todosData();

