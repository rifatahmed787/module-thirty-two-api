

document.getElementById('load-data').addEventListener('click', function () {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))

})


document.getElementById('user-data').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
})